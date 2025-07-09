from ..extensions import db
from datetime import datetime
import uuid

class Review(db.Model):
    __tablename__ = 'reviews'
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    reviewer_id = db.Column(db.String(36), db.ForeignKey('users.id'), nullable=False)
    reviewee_id = db.Column(db.String(36), db.ForeignKey('users.id'), nullable=False)
    property_id = db.Column(db.String(36), db.ForeignKey('properties.id'), nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    comment = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    # Relationships
    reviewer = db.relationship('User', foreign_keys=[reviewer_id], back_populates='written_reviews', lazy=True)
    reviewee = db.relationship('User', foreign_keys=[reviewee_id], back_populates='received_reviews', lazy=True)
    property = db.relationship('Property', foreign_keys=[property_id], back_populates='reviews', lazy=True)

    def __repr__(self):
        return f'<Review {self.id} by {self.reviewer_id} for {self.reviewee_id}>'