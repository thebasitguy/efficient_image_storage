# Efficient Image Storage

## Overview
Efficient Image Storage is a web application designed to allow users to upload, compress, store, and retrieve images efficiently. The platform aims to provide an intuitive user interface, robust image compression, and reliable storage solutions.

## Features
- User Authentication and Authorization
- Image Upload and Storage
- Advanced Image Compression
- Email and SMS Notifications
- User Feedback Mechanism
- Web Client for Image Viewing and Management

## Technologies
- **Backend**: Python, Flask
- **Frontend**: React
- **Database**: PostgreSQL
- **Cloud Storage**: AWS S3
- **Authentication**: Auth0
- **Notifications**: SendGrid (Email), Twilio (SMS)

## Setup and Installation

### Prerequisites
- Python 3.x
- Node.js
- Docker
- Git

### Development Environment Setup
1. Clone the repository:
    ```bash
    git clone <repository-URL>
    cd efficient-image-storage
    ```

2. Set up a virtual environment for Python:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```

3. Install backend dependencies:
    ```bash
    pip install -r requirements.txt
    ```

4. Install frontend dependencies:
    ```bash
    cd frontend
    npm install
    cd ..
    ```

### Running the Application
1. Start the backend server:
    ```bash
    flask run
    ```

2. Start the frontend development server:
    ```bash
    cd frontend
    npm start
    ```

## Project Structure
efficient-image-storage/
├── backend/
│   ├── app/
│   ├── config.py
│   ├── requirements.txt
│   └── run.py
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── README.md
├── .gitignore
├── README.md
└── venv/


## Contributing
1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-name
    ```
3. Make your changes.
4. Commit your changes:
    ```bash
    git commit -m "Added some feature"
    ```
5. Push to the branch:
    ```bash
    git push origin feature-name
    ```
6. Open a pull request.
