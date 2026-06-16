# Setup Instructions

## Prerequisites

- Node.js 16+ or Python 3.8+
- PostgreSQL 12+ (or MongoDB)
- Git

## Backend Setup

```bash
cd backend
npm install
# or
pip install -r requirements.txt

# Configure environment variables
cp .env.example .env
# Edit .env with your database credentials

# Run migrations
npm run migrate
# or
python manage.py migrate

# Start the server
npm start
# or
python app.py
```

## Frontend Setup

```bash
cd frontend
npm install
npm start
```

The application will be available at `http://localhost:3000`

## Database Setup

1. Create a new PostgreSQL database:
```sql
CREATE DATABASE marsi_db;
```

2. Run migrations from the backend directory to create tables.

## Configuration

Update `.env` files in both frontend and backend with:
- Database connection strings
- API endpoints
- JWT secrets
- Email service credentials (optional)
