# 🛡️ CyberForge - Cybersecurity Education Platform

CyberForge is a comprehensive cybersecurity education platform that enables users to participate in vulnerability assessment challenges, learn security testing methodologies, and develop practical cybersecurity skills.

## 🌐 **Live Demo**

- **Frontend (Vercel):** [https://cyberforge-client.vercel.app](https://cyberforge-client.vercel.app)
- **Backend API (Render):** [https://cyberforge-api.onrender.com](https://cyberforge-api.onrender.com)

## ✨ **Features**

### 🎯 **Core Functionality**
- **Vulnerability Assessment Challenges:** Create and participate in security testing challenges
- **Real-time Reporting:** Submit detailed vulnerability reports with OWASP categorization
- **Progress Tracking:** Monitor challenge progress and submission history
- **User Management:** Complete profile management with authentication
- **Dark Mode Support:** Full dark/light theme switching

### 🔐 **Security Features**
- JWT-based authentication system
- Password hashing with bcrypt
- Protected API routes with middleware
- Input validation and sanitization
- CORS configuration for secure cross-origin requests

### 🎨 **User Experience**
- Modern, responsive design with Tailwind CSS
- Intuitive dashboard with real-time updates
- Professional vulnerability reporting interface
- Smooth animations and transitions
- Mobile-friendly responsive layout

## 🚀 **Technology Stack**

### **Frontend**
- **Framework:** Next.js 15 with TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Redux Toolkit
- **Icons:** Lucide React
- **Deployment:** Vercel

### **Backend**
- **Runtime:** Node.js with Express.js
- **Database:** PostgreSQL with Prisma ORM
- **Authentication:** JWT with bcryptjs
- **Validation:** Express Validator
- **Deployment:** Render

## 🛠️ **Local Development Setup**

### **Prerequisites**
- Node.js 18+ 
- PostgreSQL database
- Git

### **Frontend Setup**
```bash
cd umurava-client
npm install
cp .env.example .env.local
# Update .env.local with your backend URL
npm run dev
```

### **Backend Setup**
```bash
cd Umurava_api
npm install
cp .env.example .env
# Update .env with your database credentials
npx prisma migrate dev
npx prisma generate
npm run dev
```

## 🔧 **Environment Variables**

### **Frontend (.env.local)**
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### **Backend (.env)**
```env
DATABASE_URL=postgresql://username:password@localhost:5432/cyberforge_db
JWT_SECRET=your-super-secret-jwt-key
PORT=5000
NODE_ENV=development
```

## 🚀 **Deployment**

### **Frontend (Vercel)**
1. Connect your GitHub repository to Vercel
2. Set environment variable: `NEXT_PUBLIC_API_URL`
3. Deploy automatically on push to main branch

### **Backend (Render)**
1. Connect your GitHub repository to Render
2. Use the provided `render.yaml` configuration
3. Set up PostgreSQL database
4. Deploy with automatic migrations

## 🎯 **Usage Guide**

### **For Students/Participants:**
1. **Register/Login** to create your account
2. **Browse Challenges** to find security assessment tasks
3. **Join Challenges** and access target applications
4. **Conduct Security Testing** using provided guidelines
5. **Submit Reports** with detailed vulnerability findings
6. **Track Progress** and view submission history

### **For Educators/Challenge Creators:**
1. **Create Challenges** with target URLs and descriptions
2. **Set Difficulty Levels** and duration parameters
3. **Monitor Participation** and review submissions
4. **Provide Feedback** on vulnerability reports

## 📊 **API Endpoints**

### **Authentication**
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### **Challenges**
- `GET /api/challenges` - List all challenges
- `POST /api/challenges` - Create new challenge
- `GET /api/challenges/:id` - Get challenge details

### **Vulnerability Reports**
- `POST /api/vulnerabilities/submit` - Submit vulnerability reports
- `GET /api/vulnerabilities/challenge/:id` - Get reports for challenge
- `GET /api/vulnerabilities/user` - Get user's reports

### **User Management**
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update profile
- `PUT /api/user/change-password` - Change password
- `PUT /api/user/update-email` - Update email

## 🛡️ **Security Considerations**

- All API endpoints are protected with JWT authentication
- Passwords are hashed using bcrypt with salt rounds
- Input validation prevents injection attacks
- CORS is properly configured for production
- Environment variables secure sensitive data

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 **Acknowledgments**

- OWASP for security testing methodologies
- The cybersecurity community for best practices
- Open source contributors for the amazing tools used

## 📞 **Support**

For support, email support@cyberforge.dev or create an issue in this repository.

---

**Built with ❤️ by the CyberForge Team**