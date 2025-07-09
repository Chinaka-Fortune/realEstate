from flask import Blueprint, request, jsonify
from ..extensions import db
from ..models.review import Review
from ..models.property import Property
from ..models.user import User
from ..utils.auth import role_required
from ..utils.validators import validate_required_fields
from flask_jwt_extended import jwt_required, get_jwt_identity
import uuid

bp = Blueprint('reviews', __name__)

@bp.route('', methods=['POST'])
@jwt_required()
@role_required('customer')
def create_review():
    data = request.get_json()
    required_fields = ['rating', 'comment']
    validation_error = validate_required_fields(data, required_fields)
    if validation_error:
        return validation_error

    reviewer_id = get_jwt_identity()
    property_id = data.get('property_id')
    agent_id = data.get('agent_id')
    rating = data['rating']
    comment = data['comment'].strip()

    if not property_id and not agent_id:
        return jsonify({'error': 'Either property_id or agent_id is required'}), 400

    if not (1 <= rating <= 5):
        return jsonify({'error': 'Rating must be between 1 and 5'}), 400

    try:
        review_data = {
            'id': str(uuid.uuid4()),
            'reviewer_id': reviewer_id,
            'rating': int(rating),
            'comment': comment
        }

        if property_id:
            property = Property.query.get_or_404(property_id)
            review_data['property_id'] = property_id
            review_data['reviewee_id'] = property.owner_id
        if agent_id:
            agent = User.query.get_or_404(agent_id)
            if agent.role != 'agent':
                return jsonify({'error': 'User is not an agent'}), 400
            review_data['reviewee_id'] = agent_id

        # Prevent duplicate reviews for the same property/agent by the same user
        existing_review = Review.query.filter_by(
            reviewer_id=reviewer_id,
            property_id=property_id,
            reviewee_id=review_data['reviewee_id']
        ).first()
        if existing_review:
            return jsonify({'error': 'You have already reviewed this property or agent'}), 400

        review = Review(**review_data)
        db.session.add(review)
        db.session.commit()
        return jsonify({'message': 'Review created successfully', 'review_id': review.id}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@bp.route('/<review_id>', methods=['PUT'])
@jwt_required()
@role_required('customer')
def update_review(review_id):
    review = Review.query.get_or_404(review_id)
    user_id = get_jwt_identity()
    if review.reviewer_id != user_id:
        return jsonify({'error': 'Unauthorized'}), 403

    data = request.get_json()
    required_fields = ['rating', 'comment']
    validation_error = validate_required_fields(data, required_fields)
    if validation_error:
        return validation_error

    rating = data['rating']
    comment = data['comment'].strip()

    if not (1 <= rating <= 5):
        return jsonify({'error': 'Rating must be between 1 and 5'}), 400

    try:
        review.rating = int(rating)
        review.comment = comment
        db.session.commit()
        return jsonify({'message': 'Review updated successfully'}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@bp.route('/<review_id>', methods=['DELETE'])
@jwt_required()
@role_required('customer')
def delete_review(review_id):
    review = Review.query.get_or_404(review_id)
    user_id = get_jwt_identity()
    if review.reviewer_id != user_id:
        return jsonify({'error': 'Unauthorized'}), 403

    try:
        db.session.delete(review)
        db.session.commit()
        return jsonify({'message': 'Review deleted successfully'}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@bp.route('/property/<property_id>', methods=['GET'])
def get_property_reviews(property_id):
    Property.query.get_or_404(property_id)
    reviews = Review.query.filter_by(property_id=property_id).all()
    return jsonify([{
        'id': r.id,
        'reviewer_id': r.reviewer_id,
        'reviewer_name': User.query.get(r.reviewer_id).name if User.query.get(r.reviewer_id) else 'Unknown',
        'rating': r.rating,
        'comment': r.comment,
        'created_at': r.created_at.isoformat()
    } for r in reviews]), 200