from flask import Flask, abort, request
from .config import Config
from .extensions import db, jwt, migrate, limiter
from .routes import auth, properties, transactions, favorites, reviews, admin
from .models.user import TokenBlocklist
from .models.rate_limit import RateLimitViolation
from flask_limiter.util import get_remote_address
from datetime import timedelta
import logging

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Configure logging
    logging.basicConfig(
        filename='/Users/apple/Desktop/real_estate_app/app.log',
        level=logging.INFO,
        format='%(asctime)s %(levelname)s: %(message)s'
    )
    logger = logging.getLogger(__name__)
    logger.info("Application started")

    # Initialize extensions
    db.init_app(app)
    jwt.init_app(app)
    migrate.init_app(app, db)
    limiter.init_app(app)

    # JWT token revocation check
    @jwt.token_in_blocklist_loader
    def check_if_token_revoked(jwt_header, jwt_payload):
        jti = jwt_payload['jti']
        token = TokenBlocklist.query.filter_by(jti=jti).first()
        return token is not None

    # Meta-limit middleware
    @app.before_request
    def check_meta_limits():
        if request.path == '/api/auth/login':
            client_ip = get_remote_address()
            # Check violations in the last hour
            hourly_violations = RateLimitViolation.count_violations(client_ip, timedelta(hours=1))
            if hourly_violations >= 2:
                abort(429, description="Meta-limit exceeded: 2 violations per hour")
            # Check violations in the last day
            daily_violations = RateLimitViolation.count_violations(client_ip, timedelta(days=1))
            if daily_violations >= 4:
                abort(429, description="Meta-limit exceeded: 4 violations per day")

    # Log rate limit violations
    @app.after_request
    def log_rate_limit_violation(response):
        if request.path == '/api/auth/login' and response.status_code == 429:
            try:
                response_data = response.get_json()
                # Log only primary rate limit violations, not meta-limit errors
                if response_data and response_data.get("description", "").startswith("Rate limit exceeded"):
                    client_ip = get_remote_address()
                    violation = RateLimitViolation(client_ip=client_ip)
                    db.session.add(violation)
                    db.session.commit()
            except Exception as e:
                logging.error(f"Failed to log rate limit violation: {e}")
        return response

    # Configure rate limits
    limiter.limit("10 per minute")(auth.bp)

    # Register blueprints
    app.register_blueprint(auth.bp, url_prefix='/api/auth')
    app.register_blueprint(properties.bp, url_prefix='/api/properties')
    app.register_blueprint(transactions.bp, url_prefix='/api/transactions')
    app.register_blueprint(favorites.bp, url_prefix='/api/favorites')
    app.register_blueprint(reviews.bp, url_prefix='/api/reviews')
    app.register_blueprint(admin.bp, url_prefix='/api/admin')

    # Create database tables
    with app.app_context():
        db.create_all()

    return app