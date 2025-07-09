from flask import Blueprint, request, jsonify
from ..models.favorite import Favorite
from ..models.property import Property
from ..extensions import db
from ..utils.auth import role_required
from flask_jwt_extended import get_jwt_identity, jwt_required

bp = Blueprint('favorites', __name__)

@bp.route('', methods=['POST'])
@jwt_required()
@role_required('customer')
def add_favorite():
    data = request.get_json()
    property_id = data.get('property_id')
    user_id = get_jwt_identity()

    property = Property.query.get_or_404(property_id)
    if Favorite.query.filter_by(user_id=user_id, property_id=property_id).first():
        return jsonify({'error': 'Property already in favorites'}), 400

    favorite = Favorite(user_id=user_id, property_id=property_id)
    db.session.add(favorite)
    db.session.commit()

    return jsonify({'message': 'Property added to favorites'}), 201

@bp.route('', methods=['GET'])
@jwt_required()
@role_required('customer')
def get_favorites():
    user_id = get_jwt_identity()
    favorites = Favorite.query.filter_by(user_id=user_id).all()
    return jsonify([{
        'property_id': f.property_id,
        'title': f.property.title,
        'price': f.property.price,
        'location': f.property.location
    } for f in favorites]), 200

@bp.route('/<property_id>', methods=['DELETE'])
@jwt_required()
@role_required('customer')
def remove_favorite(property_id):
    user_id = get_jwt_identity()
    favorite = Favorite.query.filter_by(user_id=user_id, property_id=property_id).first_or_404()
    db.session.delete(favorite)
    db.session.commit()
    return jsonify({'message': 'Property removed from favorites'}), 200