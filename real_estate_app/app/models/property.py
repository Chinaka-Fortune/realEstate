from ..extensions import db
from datetime import datetime
from geoalchemy2 import Geography
import uuid

class Property(db.Model):
    __tablename__ = 'properties'
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    owner_id = db.Column(db.String(36), db.ForeignKey('users.id'), nullable=False)
    title = db.Column(db.String(200), nullable=False)
    description = db.Column(db.Text)
    price = db.Column(db.Float, nullable=False)
    location = db.Column(db.String(100), nullable=False)
    latitude = db.Column(db.Float)  # For geospatial search
    longitude = db.Column(db.Float)
    location_point = db.Column(Geography('POINT', srid=4326), nullable=True)  # PostGIS column
    size = db.Column(db.Float)
    bedrooms = db.Column(db.Integer)
    bathrooms = db.Column(db.Integer)
    amenities = db.Column(db.JSON)
    images = db.Column(db.JSON)  # Store image URLs
    virtual_tour_url = db.Column(db.String(500))
    verification_status = db.Column(db.String(20), default='pending')  # pending, verified, rejected
    verification_documents = db.Column(db.JSON)  # Store document metadata
    status = db.Column(db.String(20), default='available')  # available, sold, rented
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relationships
    owner = db.relationship('User', back_populates='owned_properties', lazy=True)
    reviews = db.relationship('Review', foreign_keys='Review.property_id', back_populates='property', lazy=True)
    transactions = db.relationship('Transaction', foreign_keys='Transaction.property_id', back_populates='property', lazy=True)
    favorites = db.relationship('Favorite', foreign_keys='Favorite.property_id', back_populates='property', lazy=True)

    def __repr__(self):
        return f'<Property {self.title}>'