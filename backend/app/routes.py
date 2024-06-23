from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required

from flask import request
from flask_jwt_extended import jwt_required
from . import photos
from .compression import compress_image

main = Blueprint('main', __name__)


@main.route('/')
def index():
    return "Hello, this is the Efficient Image Storage API."

@main.route('/protected', methods=['GET'])
@jwt_required()
def protected():
    return jsonify(message="This is a protected route"), 200


@main.route('/upload', methods=['POST'])
@jwt_required()
def upload_image():
    if 'photo' in request.files:
        filename = photos.save(request.files['photo'])
        input_path = os.path.join(app.config['UPLOADED_PHOTOS_DEST'], filename)
        output_path = os.path.join(app.config['UPLOADED_PHOTOS_DEST'], f"compressed_{filename}")
        compress_image(input_path, output_path)
        return jsonify({"msg": "File uploaded and compressed"}), 200
    return jsonify({"msg": "No file uploaded"}), 400