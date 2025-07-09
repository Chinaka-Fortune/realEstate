from flask import jsonify

def validate_required_fields(data, required_fields):
    missing = [field for field in required_fields if field not in data or data[field] is None]
    if missing:
        return jsonify({'error': f'Missing required fields: {", ".join(missing)}'}), 400
    return None