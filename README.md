# ServiceLink

A full-stack **Service Request Board** application that connects users who need services with those who can provide them. Users can post job requests, browse listings, filter by category or status, and manage requests through a clean, modern interface.

---

## Table of Contents

- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Environment Variables](#environment-variables)
- [Setup Instructions](#setup-instructions)
- [Running the Application](#running-the-application)
- [API Reference](#api-reference)
- [Features](#features)

---

## Project Structure

```
ServiceLink/
├── backend/              # Node.js + Express REST API
│   ├── controller/       # Route handler logic
│   ├── middleware/       # JWT auth middleware
│   ├── model/            # Mongoose data models
│   ├── routes/           # Express route definitions
│   ├── .env              # Backend environment variables (not committed)
│   └── index.js          # Server entry point
│
└── frontend/             # Next.js frontend application
    ├── app/              # Next.js App Router pages
    │   ├── page.tsx      # Home / job listings page
    │   ├── jobs/         # Job detail & new job pages
    │   ├── login/        # Login page
    │   └── register/     # Registration page
    ├── components/       # Reusable UI components
    ├── services/         # API service layer (axios)
    ├── types/            # TypeScript type definitions
    └── .env.local        # Frontend environment variables (not committed)
```

---

## Tech Stack

| Layer     | Technology                              |
|-----------|-----------------------------------------|
| Frontend  | Next.js 16, React 19, TypeScript, Tailwind CSS |
| Backend   | Node.js, Express 5, CommonJS            |
| Database  | MongoDB (via Mongoose)                  |
| Auth      | JWT (jsonwebtoken) + bcryptjs           |
| HTTP      | Axios (frontend), CORS (backend)        |

---

## Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** v18 or higher — [Download](https://nodejs.org/)
- **npm** v9 or higher (comes with Node.js)
- A **MongoDB** database (e.g., [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) — free tier available)

---

## Environment Variables

### Backend — `backend/.env`

Create a file named `.env` inside the `backend/` directory:

```env
# MongoDB connection string (from MongoDB Atlas or local instance)
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>?appName=<appName>

# Secret key used to sign and verify JWT tokens (use a long, random string)
JWT_SECRET=your_super_secret_jwt_key_here

# (Optional) Port the backend server listens on — defaults to 5000
PORT=5000
```

| Variable     | Required | Description                                                    |
|--------------|----------|----------------------------------------------------------------|
| `MONGO_URI`  | ✅ Yes   | Full MongoDB connection URI                                    |
| `JWT_SECRET` | ✅ Yes   | Secret used to sign JWT tokens — keep this private and strong  |
| `PORT`       | ❌ No    | Server port (defaults to `5000` if not set)                    |

---

### Frontend — `frontend/.env.local`

Create a file named `.env.local` inside the `frontend/` directory:

```env
# Base URL of the backend API
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

| Variable               | Required | Description                                      |
|------------------------|----------|--------------------------------------------------|
| `NEXT_PUBLIC_API_URL`  | ✅ Yes   | Backend API base URL used by the frontend        |

> **Note:** For production, replace `http://localhost:5000/api` with your deployed backend URL (e.g., `https://your-api.railway.app/api`).

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ServiceLink.git
cd ServiceLink
```

### 2. Set Up the Backend

```bash
cd backend
npm install
```

Create the `.env` file as described in the [Environment Variables](#environment-variables) section above.

### 3. Set Up the Frontend

```bash
cd ../frontend
npm install
```

Create the `.env.local` file as described in the [Environment Variables](#environment-variables) section above.

---

## Running the Application

Both servers must be running simultaneously. Open **two separate terminals**.

### Terminal 1 — Start the Backend

```bash
cd backend
npm run dev
```

The backend API will start at: **`http://localhost:5000`**

You should see:
```
Database Connected Successfully
Server is running on port 5000
```

### Terminal 2 — Start the Frontend

```bash
cd frontend
npm run dev
```

The frontend will start at: **`http://localhost:3000`**

### Production

```bash
# Backend
cd backend
npm start

# Frontend
cd frontend
npm run build
npm start
```

---

## API Reference

All API routes are prefixed with `/api`.

### Auth Routes — `/api/auth`

| Method | Endpoint              | Auth Required | Description              |
|--------|-----------------------|---------------|--------------------------|
| POST   | `/api/auth/register`  | ❌ No         | Register a new user      |
| POST   | `/api/auth/login`     | ❌ No         | Login and receive a JWT  |

### Job Request Routes — `/api/jobs`

| Method | Endpoint         | Auth Required | Description                   |
|--------|------------------|---------------|-------------------------------|
| GET    | `/api/jobs`      | ❌ No         | Get all job requests           |
| GET    | `/api/jobs/:id`  | ❌ No         | Get a single job request       |
| POST   | `/api/jobs`      | ✅ Yes (JWT)  | Create a new job request       |
| PATCH  | `/api/jobs/:id`  | ❌ No         | Update job status              |
| DELETE | `/api/jobs/:id`  | ✅ Yes (JWT)  | Delete a job request           |

> **Authenticated routes** require a `Authorization: Bearer <token>` header. The token is obtained from the login endpoint.

---

## Features

- 📋 **Browse job requests** — View all service requests with filtering by category and status
- 🔍 **Job detail page** — View full details of any job request
- ➕ **Post a job** — Authenticated users can submit new service requests
- 🔄 **Update status** — Change job status (Open, In Progress, Closed)
- 🗑️ **Delete jobs** — Authenticated users can remove their job requests
- 🔐 **Authentication** — JWT-based register/login flow with protected routes
- 🌐 **CORS configured** — Backend allows requests from `localhost:3000` and the production frontend URL