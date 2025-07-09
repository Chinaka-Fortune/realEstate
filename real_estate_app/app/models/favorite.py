from ..extensions import db
from datetime import datetime
import uuid

class Favorite(db.Model):
    __tablename__ = 'favorites'
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    user_id = db.Column(db.String(36), db.ForeignKey('users.id'), nullable=False)
    property_id = db.Column(db.String(36), db.ForeignKey('properties.id'), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    # Relationships
    user = db.relationship('User', foreign_keys=[user_id], back_populates='favorites', lazy=True)
    property = db.relationship('Property', foreign_keys=[property_id], back_populates='favorites', lazy=True)

    def __repr__(self):
        return f'<Favorite {self.id} by User {self.user_id} for Property {self.property_id}>'