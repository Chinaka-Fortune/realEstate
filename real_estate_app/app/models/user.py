from ..extensions import db
from datetime import datetime
import uuid

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(256), nullable=False)
    role = db.Column(db.String(20), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    phone = db.Column(db.String(20))
    language = db.Column(db.String(10), default='en')
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relationships
    written_reviews = db.relationship('Review', foreign_keys='Review.reviewer_id', back_populates='reviewer', lazy=True)
    received_reviews = db.relationship('Review', foreign_keys='Review.reviewee_id', back_populates='reviewee', lazy=True)
    owned_properties = db.relationship('Property', foreign_keys='Property.owner_id', back_populates='owner', lazy=True)
    purchased_transactions = db.relationship('Transaction', foreign_keys='Transaction.buyer_id', back_populates='buyer', lazy=True)
    sold_transactions = db.relationship('Transaction', foreign_keys='Transaction.seller_id', back_populates='seller', lazy=True)
    favorites = db.relationship('Favorite', foreign_keys='Favorite.user_id', back_populates='user', lazy=True)

    def __repr__(self):
        return f'<User {self.email}>'

class TokenBlocklist(db.Model):
    __tablename__ = 'token_blocklist'
    id = db.Column(db.Integer, primary_key=True)
    jti = db.Column(db.String(36), nullable=False, index=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)