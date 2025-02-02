# BigConnect-Backend_Nodejs
API Development with Node.js, Express.js, PostgreSQL, and Firebase
Here’s an updated version of your `README.md` with the API details you provided:

---

# BigConnect Backend (Node.js API)

## Description

This project is a backend API developed using **Node.js**, **Express.js**, **PostgreSQL**, and **Firebase**. It provides endpoints for user authentication, as well as CRUD operations for managing user data. The API uses **Firebase Authentication** for secure login and JWT for token-based authorization. PostgreSQL serves as the relational database for storing user data.

## Technologies Used

- **Node.js** - JavaScript runtime for the backend server
- **Express.js** - Framework to simplify API development
- **PostgreSQL** - Relational database for data storage
- **Firebase** - Authentication and real-time data sync
- **dotenv** - Environment variable management
- **jsonwebtoken (JWT)** - Token-based authentication

## Features

- Firebase Admin SDK for user authentication and management
- PostgreSQL integration for user data storage
- RESTful API with JWT authentication for secure access
- Environment variable configuration for secure development

## Project Setup

### Prerequisites

Before you can run the backend server, ensure the following are installed:

- **Node.js** (version 14 or higher)
- **PostgreSQL** - Set up a PostgreSQL database instance
- **Firebase Project** - Set up Firebase and download the service account credentials JSON

### Steps to Get Started

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd bigconnect-backend_nodejs
   ```

2. **Install dependencies:**

   Install the required Node.js packages by running:

   ```bash
   npm install
   ```

3. **Create and configure `.env` file:**

   Copy the `.env.example` (or create your own) and add the following environment variables:

   ```bash
   FIREBASE_PROJECT_ID=your-firebase-project-id
   FIREBASE_PRIVATE_KEY=your-firebase-private-key
   FIREBASE_CLIENT_EMAIL=your-firebase-client-email
   DB_USER=your-postgresql-username
   DB_HOST=your-postgresql-host
   DB_DATABASE=your-database-name
   DB_PASSWORD=your-database-password
   DB_PORT=your-database-port
   ```

   Replace the placeholders with your actual values.

4. **Set up PostgreSQL Database:**

   Set up your PostgreSQL database and update the `.env` file with the correct connection details.

5. **Run the application:**

   - **For Development:**

     ```bash
     npm run dev
     ```

     This starts the server using **nodemon** for automatic restarts when files are modified.

   - **For Production:**

     ```bash
     npm start
     ```

     This starts the server without automatic file watching.

### Firebase Configuration

Ensure that your Firebase project is correctly configured and that your Firebase Admin SDK is initialized with the service account credentials. If you haven't done so, download the credentials JSON file from the Firebase Console.

---

## API Endpoints

### 1. **User Authentication**

#### POST `/auth/signin`

Authenticate a user using Firebase Authentication and generate a JWT token.

- **URL:**
  ```http
  POST https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDN2xdZwQEJ9B08fsLMG8f-1wxtl-FPWng
```

- **Headers:**
  ```http
  Authorization: <Web API Key>
  ```

- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "userpassword"
  }
  ```

- **Response:**
  ```json
  {
    "idToken": "<jwt-token>"
  }
  ```

---

### 2. **User CRUD Operations**

#### POST `/api/users`

Create a new user in the PostgreSQL database.

- **URL:**
  ```http
  POST http://localhost:5000/api/users
  ```

- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "johndoe@example.com"
  }
  ```

- **Response:**
  ```json
  {
    "message": "User created successfully",
    "userId": "user-id"
  }
  ```

#### GET `/api/users/:id`

Fetch a user's profile by their ID from the PostgreSQL database.

- **URL:**
  ```http
  GET http://localhost:5000/api/users/3
  ```

- **Headers:**
  ```http
  Authorization: Bearer <jwt-token>
  ```

- **Response:**
  ```json
  {
    "id": "3",
    "name": "John Doe",
    "email": "johndoe@example.com",
    "role": "user"
  }
  ```

#### PUT `/api/users/:id`

Update an existing user's profile.

- **URL:**
  ```http
  PUT http://localhost:5000/api/users/1
  ```

- **Headers:**
  ```http
  Authorization: Bearer <jwt-token>
  ```

- **Request Body:**
  ```json
  {
    "name": "John Smith",
    "email": "johnsmith@example.com"
  }
  ```

- **Response:**
  ```json
  {
    "message": "User updated successfully"
  }
  ```

#### DELETE `/api/users/:id`

Delete a user by their ID.

- **URL:**
  ```http
  DELETE http://localhost:5000/api/users/1
  ```

- **Headers:**
  ```http
  Authorization: Bearer <jwt-token>
  ```

- **Response:**
  ```json
  {
    "message": "User deleted successfully"
  }
  ```

---

## Environment Variables

This project uses the `dotenv` package to load environment variables from a `.env` file. Ensure the following variables are defined:

| Variable               | Description                                                |
|------------------------|------------------------------------------------------------|
| `FIREBASE_PROJECT_ID`   | Your Firebase Project ID                                    |
| `FIREBASE_PRIVATE_KEY`  | Your Firebase Private Key (ensure no `\n` escapes)         |
| `FIREBASE_CLIENT_EMAIL` | Your Firebase Service Account Client Email                 |
| `DB_USER`               | PostgreSQL username                                         |
| `DB_HOST`               | PostgreSQL host (localhost or IP address)                  |
| `DB_DATABASE`           | PostgreSQL database name                                    |
| `DB_PASSWORD`           | PostgreSQL password                                         |
| `DB_PORT`               | PostgreSQL port (default is 5432)                           |

---

## Scripts

### `npm run dev`

Starts the backend server in development mode with **nodemon** for automatic restarts.

### `npm start`


Let me know if you need any further adjustments!