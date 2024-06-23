from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
import requests
import os

auth = Blueprint('auth', __name__)

AUTH0_DOMAIN = os.getenv('AUTH0_DOMAIN')
CLIENT_ID = os.getenv('AUTH0_CLIENT_ID')
CLIENT_SECRET = os.getenv('AUTH0_CLIENT_SECRET')

@auth.route('/login', methods=['POST'])
def login():
    username = request.json.get('username')
    password = request.json.get('password')
    payload = {
        'client_id': CLIENT_ID,
        'client_secret': CLIENT_SECRET,
        'audience': f'https://{AUTH0_DOMAIN}/api/v2/',
        'grant_type': 'password',
        'username': username,
        'password': password,
        'scope': 'openid'
    }
    response = requests.post(f'https://{AUTH0_DOMAIN}/oauth/token', json=payload)
    if response.status_code == 200:
        access_token = create_access_token(identity=username)
        return jsonify(access_token=access_token), 200
    else:
        return jsonify({"msg": "Bad credentials"}), 401
