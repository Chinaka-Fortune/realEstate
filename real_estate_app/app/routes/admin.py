from flask import Blueprint, request, jsonify
from ..models.property import Property
from ..models.transaction import Transaction
from ..models.user import User
from ..extensions import db
from ..utils.auth import role_required
from flask_jwt_extended import jwt_required

bp = Blueprint('admin', __name__)

@bp.route('/properties/<property_id>/verify', methods=['PUT'])
@jwt_required()
@role_required('admin')
def verify_property(property_id):
    property = Property.query.get_or_404(property_id)
    data = request.get_json()
    status = data.get('verification_status')

    if status not in ['pending', 'verified', 'rejected']:
        return jsonify({'error': 'Invalid verification status'}), 400

    property.verification_status = status
    db.session.commit()
    return jsonify({'message': f'Property verification status updated to {status}'}), 200

@bp.route('/analytics', methods=['GET'])
@jwt_required()
@role_required('admin')
def get_analytics():
    total_users = User.query.count()
    total_properties = Property.query.count()
    total_transactions = Transaction.query.count()
    total_commissions = db.session.query(db.func.sum(Transaction.commission_owner + Transaction.commission_agent + Transaction.commission_marketer)).scalar() or 0.0

    return jsonify({
        'total_users': total_users,
        'total_properties': total_properties,
        'total_transactions': total_transactions,
        'total_commissions': total_commissions
    }), 200