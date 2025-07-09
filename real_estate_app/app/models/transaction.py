from ..extensions import db
from datetime import datetime
import uuid

class Transaction(db.Model):
    __tablename__ = 'transactions'
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    property_id = db.Column(db.String(36), db.ForeignKey('properties.id'), nullable=False)
    buyer_id = db.Column(db.String(36), db.ForeignKey('users.id'), nullable=False)
    seller_id = db.Column(db.String(36), db.ForeignKey('users.id'), nullable=False)
    agent_id = db.Column(db.String(36), db.ForeignKey('users.id'), nullable=True)
    marketer_id = db.Column(db.String(36), db.ForeignKey('users.id'), nullable=True)
    amount = db.Column(db.Float, nullable=False)
    status = db.Column(db.String(20), default='pending')  # pending, completed, cancelled
    commission_owner = db.Column(db.Float, nullable=True, default=0.0)
    commission_agent = db.Column(db.Float, nullable=True, default=0.0)
    commission_marketer = db.Column(db.Float, nullable=True, default=0.0)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    # Relationships
    property = db.relationship('Property', foreign_keys=[property_id], back_populates='transactions', lazy=True)
    buyer = db.relationship('User', foreign_keys=[buyer_id], back_populates='purchased_transactions', lazy=True)
    seller = db.relationship('User', foreign_keys=[seller_id], back_populates='sold_transactions', lazy=True)
    agent = db.relationship('User', foreign_keys=[agent_id], lazy=True)
    marketer = db.relationship('User', foreign_keys=[marketer_id], lazy=True)

    def __repr__(self):
        return f'<Transaction {self.id} for Property {self.property_id}>'