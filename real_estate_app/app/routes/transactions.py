from flask import Blueprint, request, jsonify
from ..models.transaction import Transaction
from ..models.property import Property
from ..extensions import db
from ..utils.auth import role_required
from ..utils.validators import validate_required_fields
from flask_jwt_extended import jwt_required, get_jwt_identity

bp = Blueprint('transactions', __name__)

@bp.route('', methods=['POST'])
@jwt_required()
@role_required('customer')
def create_transaction():
    data = request.get_json()
    required_fields = ['property_id', 'amount']
    validation_error = validate_required_fields(data, required_fields)
    if validation_error:
        return validation_error

    user_id = get_jwt_identity()
    property_id = data['property_id']
    amount = data['amount']
    agent_id = data.get('agent_id')
    marketer_id = data.get('marketer_id')

    property = Property.query.get_or_404(property_id)
    if property.status != 'available':
        return jsonify({'error': 'Property not available'}), 400

    # Commission calculation (example: 5% total, split among roles)
    commission_owner = amount * 0.02
    commission_agent = amount * 0.02 if agent_id else 0.0
    commission_marketer = amount * 0.01 if marketer_id else 0.0

    transaction = Transaction(
        property_id=property_id,
        buyer_id=user_id,
        seller_id=property.owner_id,
        agent_id=agent_id,
        marketer_id=marketer_id,
        amount=amount,
        commission_owner=commission_owner,
        commission_agent=commission_agent,
        commission_marketer=commission_marketer
    )
    db.session.add(transaction)
    db.session.commit()

    return jsonify({'message': 'Transaction processed successfully', 'transaction_id': transaction.id}), 201

@bp.route('/<transaction_id>/status', methods=['PUT'])
@jwt_required()
@role_required('admin')
def update_transaction_status(transaction_id):
    data = request.get_json()
    required_fields = ['status']
    validation_error = validate_required_fields(data, required_fields)
    if validation_error:
        return validation_error

    transaction = Transaction.query.get_or_404(transaction_id)
    status = data['status']

    if status not in ['pending', 'escrow', 'completed', 'cancelled']:
        return jsonify({'error': 'Invalid status'}), 400

    transaction.status = status
    if status == 'completed':
        property = Property.query.get(transaction.property_id)
        property.status = 'sold'

    db.session.commit()
    return jsonify({'message': 'Transaction status updated'}), 200