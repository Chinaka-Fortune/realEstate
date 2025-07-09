from flask import Blueprint, request, jsonify
from ..extensions import db
from ..models.property import Property
from ..models.review import Review
from ..models.user import User
from ..utils.auth import role_required
from ..utils.validators import validate_required_fields
from flask_jwt_extended import jwt_required, get_jwt_identity
from sqlalchemy import func, desc
import uuid

bp = Blueprint('properties', __name__)

@bp.route('', methods=['POST'])
@jwt_required()
@role_required('owner', 'agent')
def create_property():
    data = request.get_json()
    required_fields = ['title', 'price', 'location']
    validation_error = validate_required_fields(data, required_fields)
    if validation_error:
        return validation_error

    user_id = get_jwt_identity()
    try:
        property_id = data.get('id', str(uuid.uuid4())).strip()  # Use provided ID or generate new
        # Validate UUID format
        try:
            uuid.UUID(property_id)
        except ValueError:
            return jsonify({'error': 'Invalid property ID format'}), 400
        # Check if ID exists
        if Property.query.get(property_id):
            return jsonify({'error': 'Property ID already exists'}), 400

        latitude = float(data.get('latitude')) if data.get('latitude') is not None else None
        longitude = float(data.get('longitude')) if data.get('longitude') is not None else None
        property_data = {
            'id': property_id,
            'owner_id': user_id,
            'title': data['title'].strip(),
            'description': data.get('description', '').strip(),
            'price': float(data['price']),
            'location': data['location'].strip(),
            'latitude': latitude,
            'longitude': longitude,
            'location_point': func.ST_SetSRID(func.ST_MakePoint(longitude, latitude), 4326) if latitude and longitude else None,
            'size': float(data.get('size')) if data.get('size') is not None else None,
            'bedrooms': int(data.get('bedrooms')) if data.get('bedrooms') is not None else None,
            'bathrooms': int(data.get('bathrooms')) if data.get('bathrooms') is not None else None,
            'amenities': data.get('amenities', []),
            'images': data.get('images', []),
            'virtual_tour_url': data.get('virtual_tour_url', '').strip(),
            'verification_documents': data.get('verification_documents', []),
            'verification_status': 'pending',
            'status': 'available'
        }
        property = Property(**property_data)
        db.session.add(property)
        db.session.commit()
        return jsonify({'message': 'Property listed successfully', 'property_id': property.id}), 201
    except (ValueError, TypeError) as e:
        db.session.rollback()
        return jsonify({'error': f'Invalid input: {str(e)}'}), 400
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@bp.route('', methods=['GET'])
def get_properties():
    query = Property.query.filter_by(verification_status='verified', status='available')

    # Advanced filtering
    location = request.args.get('location')
    min_price = request.args.get('min_price', type=float)
    max_price = request.args.get('max_price', type=float)
    bedrooms = request.args.get('bedrooms', type=int)
    bathrooms = request.args.get('bathrooms', type=int)
    # Geospatial search
    lat = request.args.get('latitude', type=float)
    lon = request.args.get('longitude', type=float)
    radius = request.args.get('radius', type=float, default=10.0)  # km

    if location:
        query = query.filter(Property.location.ilike(f'%{location}%'))
    if min_price is not None:
        query = query.filter(Property.price >= min_price)
    if max_price is not None:
        query = query.filter(Property.price <= max_price)
    if bedrooms is not None:
        query = query.filter(Property.bedrooms == bedrooms)
    if bathrooms is not None:
        query = query.filter(Property.bathrooms == bathrooms)
    if lat is not None and lon is not None and radius is not None:
        try:
            query = query.filter(
                func.ST_DWithin(
                    Property.location_point,
                    func.ST_SetSRID(func.ST_MakePoint(lon, lat), 4326),
                    radius * 1000  # Convert km to meters
                )
            )
        except Exception as e:
            return jsonify({'error': f'Geospatial query failed: {str(e)}'}), 400

    # Sorting
    sort_by = request.args.get('sort_by', 'created_at')
    sort_order = request.args.get('sort_order', 'desc')
    if sort_by == 'price':
        query = query.order_by(desc(Property.price) if sort_order == 'desc' else Property.price)
    elif sort_by == 'rating':
        query = query.outerjoin(Review, Property.reviews).group_by(Property.id).order_by(
            desc(func.avg(Review.rating)) if sort_order == 'desc' else func.avg(Review.rating)
        )
    else:
        query = query.order_by(desc(Property.created_at) if sort_order == 'desc' else Property.created_at)

    # Pagination
    page = request.args.get('page', 1, type=int)
    per_page = request.args.get('per_page', 10, type=int)
    paginated = query.paginate(page=page, per_page=per_page, error_out=False)

    return jsonify({
        'properties': [{
            'id': p.id,
            'title': p.title,
            'description': p.description,
            'price': p.price,
            'location': p.location,
            'latitude': p.latitude,
            'longitude': p.longitude,
            'size': p.size,
            'bedrooms': p.bedrooms,
            'bathrooms': p.bathrooms,
            'amenities': p.amenities,
            'images': p.images,
            'virtual_tour_url': p.virtual_tour_url,
            'average_rating': sum(r.rating for r in p.reviews) / len(p.reviews) if p.reviews else None
        } for p in paginated.items],
        'total': paginated.total,
        'pages': paginated.pages,
        'current_page': page
    }), 200

@bp.route('/<property_id>', methods=['PUT'])
@jwt_required()
@role_required('owner', 'agent')
def update_property(property_id):
    property = Property.query.get_or_404(property_id)
    user_id = get_jwt_identity()
    if property.owner_id != user_id:
        return jsonify({'error': 'Unauthorized'}), 403

    data = request.get_json()
    try:
        for field in ['title', 'description', 'price', 'location', 'latitude', 'longitude', 'size', 'bedrooms', 'bathrooms', 'amenities', 'images', 'virtual_tour_url', 'status']:
            if field in data:
                if field in ['price', 'latitude', 'longitude', 'size']:
                    setattr(property, field, float(data[field]) if data[field] is not None else None)
                elif field in ['bedrooms', 'bathrooms']:
                    setattr(property, field, int(data[field]) if data[field] is not None else None)
                else:
                    setattr(property, field, data[field].strip() if isinstance(data[field], str) else data[field])
        if 'latitude' in data and 'longitude' in data:
            latitude = float(data['latitude']) if data['latitude'] is not None else None
            longitude = float(data['longitude']) if data['longitude'] is not None else None
            property.location_point = func.ST_SetSRID(func.ST_MakePoint(longitude, latitude), 4326) if latitude and longitude else None
        db.session.commit()
        return jsonify({'message': 'Property updated successfully'}), 200
    except (ValueError, TypeError) as e:
        db.session.rollback()
        return jsonify({'error': f'Invalid input: {str(e)}'}), 400
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@bp.route('/<property_id>', methods=['DELETE'])
@jwt_required()
@role_required('owner', 'agent')
def delete_property(property_id):
    property = Property.query.get_or_404(property_id)
    user_id = get_jwt_identity()
    if property.owner_id != user_id:
        return jsonify({'error': 'Unauthorized'}), 403

    try:
        db.session.delete(property)
        db.session.commit()
        return jsonify({'message': 'Property deleted successfully'}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@bp.route('/<property_id>/verify', methods=['PUT'])
@jwt_required()
@role_required('admin')
def verify_property(property_id):
    property = Property.query.get_or_404(property_id)
    data = request.get_json()
    status = data.get('verification_status')
    if status not in ['pending', 'verified', 'rejected']:
        return jsonify({'error': 'Invalid verification status'}), 400

    try:
        property.verification_status = status
        db.session.commit()
        return jsonify({'message': f'Property verification status updated to {status}'}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500