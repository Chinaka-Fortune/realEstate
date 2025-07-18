from flask_jwt_extended import get_jwt_identity
from ..models.user import User
from functools import wraps
from flask import jsonify

def role_required(*roles):
    def decorator(f):
        @wraps(f)
        def decorated_function(*args, **kwargs):
            user_id = get_jwt_identity()
            user = User.query.get(user_id)
            if not user or user.role not in roles:
                return jsonify({'error': 'Unauthorized access'}), 403
            return f(*args, **kwargs)
        return decorated_function
    return decorator