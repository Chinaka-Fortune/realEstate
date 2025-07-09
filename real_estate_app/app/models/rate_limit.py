from ..extensions import db
from datetime import datetime

class RateLimitViolation(db.Model):
    __tablename__ = 'rate_limit_violations'
    id = db.Column(db.Integer, primary_key=True)
    client_ip = db.Column(db.String(45), nullable=False)
    violation_time = db.Column(db.DateTime, default=datetime.utcnow)

    @classmethod
    def count_violations(cls, client_ip, period):
        from datetime import timedelta
        time_threshold = datetime.utcnow() - period
        return cls.query.filter(
            cls.client_ip == client_ip,
            cls.violation_time >= time_threshold
        ).count()

    def __repr__(self):
        return f'<RateLimitViolation {self.id} for IP {self.client_ip}>'