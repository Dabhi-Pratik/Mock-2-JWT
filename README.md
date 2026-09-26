🔐 Mock 2 JWT Authentication API

A RESTful backend API built with Node.js, Express.js, MongoDB, Mongoose, JWT, and bcrypt to practice and demonstrate user authentication and authorization.

The project implements user registration, login, JWT-based protected routes, authentication checks, single-device logout, logout from all devices, user update, and user deletion.

<p align="center">
  <a href="https://mock-2-jwt.onrender.com">
    <img src="https://img.shields.io/badge/Live%20API-Render-success?style=for-the-badge&logo=render" alt="Live API">
  </a>
  <a href="https://github.com/Dabhi-Pratik/Mock-2-JWT">
    <img src="https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github" alt="GitHub Repository">
  </a>
</p>

🚀 Live Demo

Base URL:
https://mock-2-jwt.onrender.com

GitHub Repository:
https://github.com/Dabhi-Pratik/Mock-2-JWT

The deployed root endpoint returns:

"Hello from Server"

📸 API Testing Gallery

<img width="1919" height="957" alt="Screenshot 2026-09-26 135340" src="https://github.com/user-attachments/assets/e24dd0d1-2319-408f-b9fb-3c2e6289fb7c" />

<img width="1919" height="1002" alt="Screenshot 2026-09-26 135502" src="https://github.com/user-attachments/assets/5b7fa370-ad4d-449e-a9eb-e133b8a2a4a4" />

<img width="1919" height="1026" alt="Screenshot 2026-09-26 135527" src="https://github.com/user-attachments/assets/3f301c73-ffee-4903-8a6a-1612b6cb8792" />

<img width="1919" height="1034" alt="Screenshot 2026-09-26 135559" src="https://github.com/user-attachments/assets/38440b1f-daa9-4646-8375-00e361e0176d" />

<img width="1919" height="1030" alt="Screenshot 2026-09-26 135705" src="https://github.com/user-attachments/assets/14e0748a-6fdd-4f2d-b0aa-588b72e9045d" />

<img width="1919" height="1030" alt="Screenshot 2026-09-26 135705" src="https://github.com/user-attachments/assets/431dcc45-2b88-4653-a0b2-8e18cfc7a4e7" />

<img width="1919" height="1030" alt="Screenshot 2026-09-26 135744" src="https://github.com/user-attachments/assets/81e1b45e-a2bb-4422-a327-d750c2d0c083" />

<img width="1919" height="1029" alt="Screenshot 2026-09-26 135955" src="https://github.com/user-attachments/assets/5f33f045-e754-4761-804e-d8640698bd39" />

<img width="1919" height="1033" alt="Screenshot 2026-09-26 141900" src="https://github.com/user-attachments/assets/ef8259e6-90ef-4418-a763-1426ee80f637" />


✨ Features

👤 Create a new user

🔑 Login using email and password

🔐 JWT-based authentication

🛡️ Protected routes using Bearer tokens

🔒 Password hashing with bcrypt

👥 Get all users

✅ Verify authenticated user

🚪 Logout from the current device/session

📱 Logout from all devices/sessions

✏️ Update authenticated user data

🗑️ Delete authenticated user

🗄️ MongoDB database integration

🌐 REST API architecture

☁️ Deployment on Render

🛠️ Tech Stack

Technology

Purpose

Node.js

JavaScript runtime

Express.js

REST API and routing

MongoDB

Database

Mongoose

MongoDB ODM

JSON Web Token (JWT)

Authentication and authorization

bcrypt

Password hashing

dotenv

Environment variable management

Nodemon

Development server auto-restart

Render

Cloud deployment

Postman

API testing

🏗️ Project Structure

Mock-2-JWT/
│
├── config/
│   └── db.js
│
├── controller/
│   └── userController.js
│
├── middleware/
│   ├── auth.js
│   └── HttpError.js
│
├── model/
│   └── userModel.js
│
├── router/
│   └── userRouter.js
│
├── .gitignore
├── app.js
├── package.json
├── package-lock.json
└── README.md

🔐 Authentication Flow

Client
  │
  │  Login: email + password
  ▼
Express API
  │
  ▼
MongoDB User
  │
  │ bcrypt.compare()
  ▼
Generate JWT
  │
  ▼
Client receives token
  │
  │ Authorization: Bearer <token>
  ▼
JWT Middleware
  │
  ├── Verify JWT
  ├── Find user
  └── Check stored token
  │
  ▼
Protected Controller

The authentication middleware checks the Authorization header, verifies the JWT using JWT_SECRET, and confirms that the token is stored for the authenticated user.

📌 API Endpoints

1. Server Health Check

GET /

GET https://mock-2-jwt.onrender.com/

Response

"Hello from Server"

2. Add User

POST /user/add

POST https://mock-2-jwt.onrender.com/user/add
Content-Type: application/json

Request Body

{
  "name": "test",
  "email": "test@gmail.com",
  "password": "1234567890"
}

Response

{
  "message": "User Added Successfully!",
  "user": {
    "name": "test",
    "email": "test@gmail.com"
  }
}

Passwords are hashed with bcrypt before being stored in MongoDB.

3. Login

GET /user/login

GET https://mock-2-jwt.onrender.com/user/login
Content-Type: application/json

Request Body

{
  "email": "test@gmail.com",
  "password": "1234567890"
}

Response

The API returns the authenticated user information and a JWT token.

{
  "success": true,
  "user": {},
  "token": "JWT_TOKEN"
}

Note: This project currently implements login as GET /user/login to match the existing code. For a production API, login credentials are normally sent using a POST request.

4. Get All Users

GET /user/all

GET https://mock-2-jwt.onrender.com/user/all

Returns the users stored in the database.

5. Authenticated User

GET /user/authLogin

GET https://mock-2-jwt.onrender.com/user/authLogin
Authorization: Bearer <JWT_TOKEN>

This protected endpoint verifies the JWT and returns the authenticated user.

6. Logout

POST /user/logOut

POST https://mock-2-jwt.onrender.com/user/logOut
Authorization: Bearer <JWT_TOKEN>

Removes the current token from the user's stored token list.

7. Logout From All Devices

POST /user/logOutAll

POST https://mock-2-jwt.onrender.com/user/logOutAll
Authorization: Bearer <JWT_TOKEN>

Clears all stored authentication tokens for the user.

8. Update User

PATCH /user/update

PATCH https://mock-2-jwt.onrender.com/user/update
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json

Allowed fields:

{
  "name": "Updated Name",
  "password": "newPassword"
}

9. Delete User

DELETE /user/delete

DELETE https://mock-2-jwt.onrender.com/user/delete
Authorization: Bearer <JWT_TOKEN>

Deletes the authenticated user's account.

🔑 Authorization Header

Protected endpoints require:

Authorization: Bearer YOUR_JWT_TOKEN

Example:

Authorization: Bearer eyJhbGciOiJIUzI1NiIs...

⚙️ Environment Variables

Create a .env file in the project root:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_strong_jwt_secret
PORT=5000

Important

Never commit your .env file or expose your real MongoDB connection string or JWT secret.

💻 Installation & Setup

1. Clone the repository

git clone https://github.com/Dabhi-Pratik/Mock-2-JWT.git

2. Open the project

cd Mock-2-JWT

3. Install dependencies

npm install

4. Configure environment variables

Create .env:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_strong_jwt_secret
PORT=5000

5. Start the development server

npm run dev

6. Start the production server

npm start

🧪 API Testing

The API was tested using Postman.

Server Start



Add User



Login & JWT Token



Get All Users



JWT Authentication



Logout



Logout From All Devices


🔒 Security Concepts Demonstrated

Password Hashing

Passwords are hashed with bcrypt before saving them to the database.

user.password = await bcrypt.hash(user.password, 8);

JWT Generation

After successful login, the server generates a JWT:

const token = jwt.sign(
  { _id: user._id.toString() },
  process.env.JWT_SECRET
);

Token Verification

Protected routes verify the Bearer token and check that the token belongs to the user.

Authorization: Bearer <token>

Token-Based Logout

The project stores issued tokens with the user and removes:

the current token during normal logout

all tokens during logout-all

📚 What I Learned

This project helped me practice:

REST API development

Express routing

MVC-style project structure

MongoDB and Mongoose

Password hashing with bcrypt

JWT authentication

Middleware

Protected routes

Bearer token authorization

Login and logout flows

Multiple-session token handling

API testing with Postman

Deployment with Render

Environment variables

🔮 Future Improvements

Change login from GET to POST

Add request validation

Add refresh-token support

Add access-token expiration strategy

Add rate limiting

Add centralized production-grade error handling

Add API documentation with Swagger/OpenAPI

Add automated tests

Add role-based authorization

Add password reset functionality

Add email verification

Add CORS configuration for frontend integration

👨‍💻 Author

Pratik Dabhi

IT Engineering Student & Full-Stack Developer

GitHub: https://github.com/Dabhi-Pratik

Project: https://github.com/Dabhi-Pratik/Mock-2-JWT

Live API: https://mock-2-jwt.onrender.com

⭐ Support

If you found this project useful for learning Node.js, Express.js, MongoDB, and JWT authentication, consider giving the repository a ⭐ on GitHub.

📄 License

This project is intended for educational and practice purposes.
