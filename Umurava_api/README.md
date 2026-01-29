# CyberForge API

## 📌 Overview
The **CyberForge API** is a comprehensive RESTful API built with Node.js and Express for managing cybersecurity challenges, vulnerability assessments, and security education features. It provides a complete backend solution for the CyberForge platform.

## 🚀 Features
- ✅ User authentication and authorization (JWT-based)
- ✅ Security challenge management (CRUD operations)
- ✅ Vulnerability reporting system
- ✅ User profile management
- ✅ Dashboard analytics for security assessments
- ✅ Community features for security professionals
- ✅ Input validation using `express-validator`
- ✅ Middleware-based request validation
- ✅ PostgreSQL database integration with Prisma ORM
- ✅ Modular architecture for scalability

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL with Prisma ORM
- **Authentication:** JWT (JSON Web Tokens)
- **Validation:** `express-validator`
- **Middleware:** Custom validation and authentication middleware

## 📂 Folder Structure
```
CyberForge_API/
┣ 📂 controllers/
┃ ┣ 📜 authController.js
┃ ┣ 📜 challengeController.js
┃ ┣ 📜 userController.js
┃ ┣ 📜 dashboardController.js
┃ ┗ 📜 communityController.js
┣ 📂 middleware/
┃ ┣ 📜 authMiddleware.js
┃ ┣ 📜 validateMiddleware.js
┃ ┗ 📜 errorMiddleware.js
┣ 📂 models/
┃ ┣ 📜 userModel.js
┃ ┗ 📜 ChallengeModel.js
┣ 📂 routes/
┃ ┣ 📜 authRoutes.js
┃ ┣ 📜 challengeRoutes.js
┃ ┣ 📜 userRoutes.js
┃ ┗ 📜 dashboardRoutes.js
┣ 📂 validations/
┃ ┣ 📜 challengeValidation.js
┃ ┗ 📜 user.validation.ts
┣ 📂 prisma/
┃ ┣ 📜 schema.prisma
┃ ┗ 📂 migrations/
┣ 📂 config/
┃ ┣ 📜 database.js
┃ ┣ 📜 env.js
┃ ┗ 📜 logger.js
┣ 📜 app.js
┣ 📜 server.js
┗ 📜 README.md
```

## 🔧 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-repo/cyberforge-api.git
cd cyberforge-api
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file and configure your PostgreSQL database:
```env
DATABASE_URL=postgresql://username:password@localhost:5432/cyberforge_db
JWT_SECRET=your_super_secret_jwt_key
PORT=5000
```

### 4️⃣ Set Up Database
```bash
npx prisma migrate dev
npx prisma generate
```

### 5️⃣ Run the Server
```bash
npm run dev  # Runs with nodemon
```

## 📌 API Endpoints

### 🔐 Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |
| POST | `/api/auth/logout` | Logout user |

### 🚀 Security Challenges
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/challenges` | Get all security challenges |
| GET | `/api/challenges/:id` | Get a single challenge |
| POST | `/api/challenges` | Create a new security challenge |
| PUT | `/api/challenges/:id` | Update an existing challenge |
| DELETE | `/api/challenges/:id` | Delete a challenge |

### 👤 Users
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users/profile` | Get user profile |
| PUT | `/api/users/profile` | Update user profile |
| GET | `/api/users/dashboard` | Get security dashboard data |

### 🏘️ Community
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/community/stats` | Get cybersecurity community statistics |
| GET | `/api/community/members` | Get community members |

## 🛠️ Validation Rules

### Security Challenge Validation
- **Title**: Required, string (3-200 chars)
- **Description**: Required, string (10-2000 chars)
- **Difficulty**: Must be one of `easy`, `medium`, `hard`
- **Duration**: Required, positive integer (1-365 days)
- **Target URL**: Optional, valid URL format

### User Validation
- **Email**: Required, valid email format
- **Password**: Required, minimum 6 characters
- **First Name**: Required, string (2-50 chars)
- **Last Name**: Required, string (2-50 chars)

## 🔒 Authentication
The API uses JWT (JSON Web Tokens) for authentication. Include the token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

## 🔐 Security Features
- **Vulnerability Assessment**: Support for security challenge workflows
- **Target Management**: Dynamic target URL configuration
- **Report Generation**: Vulnerability reporting system
- **Progress Tracking**: Security assessment progress monitoring

## ⚠️ Ethical Use
This API is designed for educational cybersecurity purposes only. Users must:
- Only test applications they own or have explicit permission to test
- Follow responsible disclosure principles
- Respect all applicable laws and regulations

## 📌 License
This project is licensed under the MIT License.

## 🤝 Contributing
We welcome contributions from the cybersecurity community! Please feel free to submit a Pull Request.
