# 🛡️ CyberForge API - Backend Server

The backend API server for CyberForge, a comprehensive cybersecurity education platform that enables vulnerability assessment challenges and security learning.

## 🌐 **Live API**

- **Production API:** [https://cyberforge-api.onrender.com](https://cyberforge-api.onrender.com)
- **Health Check:** [https://cyberforge-api.onrender.com/api/health](https://cyberforge-api.onrender.com/api/health)

## 🚀 **Technology Stack**

- **Runtime:** Node.js with Express.js
- **Database:** PostgreSQL with Prisma ORM
- **Authentication:** JWT with bcryptjs
- **Validation:** Express Validator
- **Deployment:** Render with automatic migrations

## 📊 **API Endpoints**

### **Health Check**
- `GET /api/health` - Server health status

### **Authentication**
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### **Challenges**
- `GET /api/challenges` - List all challenges
- `POST /api/challenges` - Create new challenge (Auth required)
- `GET /api/challenges/:id` - Get challenge details

### **Vulnerability Reports**
- `POST /api/vulnerabilities/submit` - Submit vulnerability reports (Auth required)
- `GET /api/vulnerabilities/challenge/:id` - Get reports for challenge (Auth required)
- `GET /api/vulnerabilities/user` - Get user's reports (Auth required)

### **User Management**
- `GET /api/user/profile` - Get user profile (Auth required)
- `PUT /api/user/profile` - Update profile (Auth required)
- `PUT /api/user/change-password` - Change password (Auth required)
- `PUT /api/user/update-email` - Update email (Auth required)
- `GET /api/user/dashboard-stats` - Get dashboard statistics (Auth required)

### **Dashboard**
- `GET /api/dashboard/stats` - Get dashboard overview (Auth required)

### **Community**
- `GET /api/community` - Get community data

### **Contact**
- `POST /api/contact` - Submit contact form

## 🛠️ **Local Development Setup**

### **Prerequisites**
- Node.js 18+
- PostgreSQL database
- Git

### **Installation**
```bash
cd Umurava_api
npm install
cp .env.example .env
# Update .env with your database credentials
npx prisma migrate dev
npx prisma generate
npm run dev
```

### **Database Setup**
```bash
# Create database
createdb cyberforge_db

# Run migrations
npx prisma migrate dev

# Generate Prisma client
npx prisma generate

# (Optional) Seed database
npx prisma db seed
```

## 🔧 **Environment Variables**

```env
# Database Configuration
DATABASE_URL=postgresql://username:password@localhost:5432/cyberforge_db

# JWT Secret (Generate a secure random string for production)
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Server Configuration
PORT=5000
NODE_ENV=development
```

## 📁 **Project Structure**

```
Umurava_api/
├── config/                 # Configuration files
│   ├── database.js        # Database connection
│   ├── env.js            # Environment variables
│   └── logger.js         # Logging configuration
├── controllers/           # Route controllers
│   ├── authController.js
│   ├── challengeController.js
│   ├── vulnerabilityController.js
│   └── userController.js
├── middleware/           # Express middleware
│   ├── authMiddleware.js
│   ├── errorMiddleware.js
│   └── validateMiddleware.js
├── models/              # Database models (Prisma)
├── routes/              # API routes
├── services/            # Business logic services
├── validations/         # Input validation schemas
├── prisma/             # Database schema and migrations
│   ├── schema.prisma
│   └── migrations/
├── app.js              # Express app configuration
└── server.js           # Server entry point
```

## 🔐 **Security Features**

- **JWT Authentication:** Secure token-based authentication
- **Password Hashing:** bcrypt with salt rounds for password security
- **Input Validation:** Express Validator for request validation
- **CORS Configuration:** Proper cross-origin resource sharing setup
- **Error Handling:** Comprehensive error handling middleware
- **SQL Injection Prevention:** Prisma ORM prevents SQL injection attacks

## 🗄️ **Database Schema**

### **User Model**
```prisma
model User {
  id                    String                 @id @default(uuid())
  email                 String                 @unique
  password              String
  firstName             String
  lastName              String
  createdAt             DateTime               @default(now())
  updatedAt             DateTime               @updatedAt
  challenges            Challenge[]
  vulnerabilityReports  VulnerabilityReport[]
}
```

### **Challenge Model**
```prisma
model Challenge {
  id                    String                 @id @default(uuid())
  title                 String
  description           String
  difficulty            String
  duration              Int
  targetUrl             String?
  createdAt             DateTime               @default(now())
  createdBy             String?
  creator               User?                  @relation(fields: [createdBy], references: [id])
  vulnerabilityReports  VulnerabilityReport[]
}
```

### **VulnerabilityReport Model**
```prisma
model VulnerabilityReport {
  id                String   @id @default(uuid())
  challengeId       String
  userId            String
  title             String
  severity          String
  category          String?
  description       String
  stepsToReproduce  String?
  impact            String?
  recommendation    String?
  evidence          String?
  status            String   @default("submitted")
  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt
  
  challenge         Challenge @relation(fields: [challengeId], references: [id], onDelete: Cascade)
  user              User      @relation(fields: [userId], references: [id], onDelete: Cascade)
}
```

## 🚀 **Deployment**

### **Render Deployment**
1. Connect your GitHub repository to Render
2. Use the provided `render.yaml` configuration
3. Set up PostgreSQL database
4. Configure environment variables
5. Deploy with automatic migrations

### **Environment Variables for Production**
- `DATABASE_URL` - Automatically provided by Render PostgreSQL
- `JWT_SECRET` - Auto-generated secure random string
- `NODE_ENV` - Set to "production"
- `PORT` - Set to 10000 (Render default)

## 🧪 **Testing**

```bash
# Run tests (when implemented)
npm test

# Run with coverage
npm run test:coverage
```

## 📝 **API Documentation**

### **Authentication Required**
Most endpoints require a valid JWT token in the Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

### **Error Responses**
All endpoints return consistent error responses:
```json
{
  "message": "Error description",
  "error": "Detailed error information"
}
```

### **Success Responses**
Successful responses include relevant data and status messages:
```json
{
  "message": "Operation successful",
  "data": { ... }
}
```

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## 📝 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ by the CyberForge Team**