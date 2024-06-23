from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask_uploads import UploadSet, configure_uploads, IMAGES
from dotenv import load_dotenv
import os

load_dotenv()  # Load environment variables from .env file
photos = UploadSet('photos', IMAGES)

def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY')  # Load the JWT secret key from environment variables
    jwt = JWTManager(app)

    app.config['UPLOADED_PHOTOS_DEST'] = 'uploads'
    configure_uploads(app, photos)

    from .routes import main
    from .auth import auth
    app.register_blueprint(main)
    app.register_blueprint(auth)

    return app