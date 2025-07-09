from flask import Blueprint, request, jsonify, make_response
from ..models.user import User, TokenBlocklist
from ..models.rate_limit import RateLimitViolation
from ..extensions import db, limiter
from ..utils.validators import validate_required_fields
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token, jwt_required, get_jwt
from flask_limiter.util import get_remote_address
from datetime import datetime

bp = Blueprint('auth', __name__)

def user_specific_key():
    try:
        return request.json.get('email', get_remote_address())
    except:
        return get_remote_address()

@bp.route('/register', methods=['POST'])
@limiter.limit("5 per minute", key_func=user_specific_key)
def register():
    data = request.get_json()
    required_fields = ['email', 'password', 'role', 'name']
    validation_error = validate_required_fields(data, required_fields)
    if validation_error:
        return validation_error

    email = data['email']
    password = data['password']
    role = data['role']
    name = data['name']
    phone = data.get('phone')
    language = data.get('language', 'en')

    if role not in ['customer', 'owner', 'agent', 'marketer', 'admin']:
        return jsonify({'error': 'Invalid role'}), 400

    if User.query.filter_by(email=email).first():
        return jsonify({'error': 'Email already exists'}), 409

    password_hash = generate_password_hash(password)
    user = User(email=email, password_hash=password_hash, role=role, name=name, phone=phone, language=language)
    db.session.add(user)
    db.session.commit()

    return jsonify({'message': 'User registered successfully', 'user_id': user.id}), 201

@bp.route('/login', methods=['POST'])
@limiter.limit("10 per minute", key_func=user_specific_key, deduct_when=lambda response: response.status_code != 200)
def login():
    data = request.get_json()
    required_fields = ['email', 'password']
    validation_error = validate_required_fields(data, required_fields)
    if validation_error:
        return validation_error

    email = data['email']
    password = data['password']

    user = User.query.filter_by(email=email).first()
    if not user or not check_password_hash(user.password_hash, password):
        return jsonify({'error': 'Invalid credentials'}), 401

    access_token = create_access_token(identity=user.id)
    return jsonify({'access_token': access_token, 'role': user.role, 'language': user.language}), 200

@bp.route('/logout', methods=['POST'])
@jwt_required()
def logout():
    jti = get_jwt()['jti']
    token = TokenBlocklist(jti=jti)
    db.session.add(token)
    db.session.commit()
    return jsonify({'message': 'Successfully logged out'}), 200

@bp.errorhandler(429)
def ratelimit_handler(e):
    # Log rate limit violation
    client_ip = get_remote_address()
    violation = RateLimitViolation(client_ip=client_ip, violation_time=datetime.utcnow())
    db.session.add(violation)
    db.session.commit()
    return make_response(jsonify(error=f"Rate limit exceeded: {e.description}"), 429)