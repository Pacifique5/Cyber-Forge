# 🛡️ CyberForge - Cybersecurity Education Platform

CyberForge is a comprehensive cybersecurity education platform that enables users to participate in vulnerability assessment challenges, learn security testing methodologies, and develop practical cybersecurity skills through hands-on experience.

## 🌐 **Live Demo**

- **🌍 Frontend (Vercel):** [https://your-frontend-url.vercel.app](https://your-frontend-url.vercel.app)
- **⚡ Backend API (Render):** [https://your-backend-url.onrender.com](https://your-backend-url.onrender.com)
- **🔍 API Health Check:** [https://your-backend-url.onrender.com/api/health](https://your-backend-url.onrender.com/api/health)

> **📝 Note:** Replace the URLs above with your actual deployment URLs after following the [deployment guide](./DEPLOYMENT.md)

## ✨ **Key Features**

### 🎯 **For Security Learners**
- **Vulnerability Assessment Challenges:** Real-world security testing scenarios
- **OWASP-Based Learning:** Industry-standard vulnerability categories and methodologies
- **Progress Tracking:** Monitor your learning journey and skill development
- **Professional Reporting:** Learn to write comprehensive security reports
- **Portfolio Building:** Showcase your cybersecurity expertise

### 🏫 **For Educators**
- **Challenge Creation:** Design custom security assessment scenarios
- **Student Management:** Track learner progress and submissions
- **Flexible Targets:** Configure any web application as a testing target
- **Assessment Tools:** Review and grade vulnerability reports

### 🔐 **Security & Authentication**
- JWT-based secure authentication system
- Password hashing with bcrypt
- Protected API routes with middleware
- Input validation and sanitization
- CORS configuration for secure cross-origin requests

## 🚀 **Technology Stack**

### **Frontend** (`umurava-client/`)
- **Framework:** Next.js 15 with TypeScript
- **Styling:** Tailwind CSS with dark mode support
- **State Management:** Redux Toolkit
- **Icons:** Lucide React
- **Deployment:** Vercel

### **Backend** (`Umurava_api/`)
- **Runtime:** Node.js with Express.js
- **Database:** PostgreSQL with Prisma ORM
- **Authentication:** JWT with bcryptjs
- **Validation:** Express Validator
- **Deployment:** Render with automatic migrations

## 🛠️ **Local Development Setup**

### **Prerequisites**
- Node.js 18+
- PostgreSQL database
- Git

### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/cyberforge.git
cd cyberforge
```

### **2. Backend Setup**
```bash
cd Umurava_api
npm install
cp .env.example .env
# Update .env with your database credentials
npx prisma migrate dev
npx prisma generate
npm run dev
```

### **3. Frontend Setup**
```bash
cd umurava-client
npm install
cp .env.example .env.local
# Update .env.local with your backend URL
npm run dev
```

### **4. Access the Application**
- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:5000](http://localhost:5000)
- API Health: [http://localhost:5000/api/health](http://localhost:5000/api/health)

## 📊 **Project Structure**

```
cyberforge/
├── umurava-client/          # Frontend Next.js application
│   ├── src/
│   │   ├── app/            # Next.js app directory
│   │   ├── components/     # Reusable UI components
│   │   ├── services/       # API service functions
│   │   ├── store/          # Redux store configuration
│   │   └── types/          # TypeScript type definitions
│   ├── public/             # Static assets
│   └── package.json
├── Umurava_api/            # Backend Express.js API
│   ├── config/             # Configuration files
│   ├── controllers/        # Route controllers
│   ├── middleware/         # Express middleware
│   ├── routes/             # API routes
│   ├── prisma/             # Database schema and migrations
│   └── package.json
└── README.md               # This file
```

## 🎯 **Usage Guide**

### **For Students/Participants:**
1. **🔐 Register/Login** - Create your account to get started
2. **🔍 Browse Challenges** - Explore available security assessment tasks
3. **🎯 Join Challenges** - Access target applications for testing
4. **🛡️ Conduct Security Testing** - Use provided guidelines and methodologies
5. **📝 Submit Reports** - Document your findings with detailed vulnerability reports
6. **📈 Track Progress** - Monitor your submissions and skill development

### **For Educators/Challenge Creators:**
1. **➕ Create Challenges** - Design security scenarios with target URLs
2. **⚙️ Configure Parameters** - Set difficulty levels and duration
3. **👥 Monitor Participation** - Track student engagement and progress
4. **📋 Review Submissions** - Evaluate vulnerability reports and provide feedback

## 🔧 **Environment Configuration**

### **Frontend Environment Variables**
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### **Backend Environment Variables**
```env
DATABASE_URL=postgresql://username:password@localhost:5432/cyberforge_db
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
PORT=5000
NODE_ENV=development
```

## 🚀 **Deployment**

### **Frontend Deployment (Vercel)**
1. Connect your GitHub repository to Vercel
2. Set environment variable: `NEXT_PUBLIC_API_URL=https://your-backend-url.onrender.com`
3. Deploy automatically on push to main branch

### **Backend Deployment (Render)**
1. Connect your GitHub repository to Render
2. Use the provided `render.yaml` configuration
3. Set up PostgreSQL database
4. Configure environment variables
5. Deploy with automatic migrations

## 📚 **API Documentation**

### **Core Endpoints**
- **Authentication:** `/api/auth/register`, `/api/auth/login`
- **Challenges:** `/api/challenges` (GET, POST), `/api/challenges/:id`
- **Vulnerability Reports:** `/api/vulnerabilities/submit`, `/api/vulnerabilities/user`
- **User Management:** `/api/user/profile`, `/api/user/change-password`
- **Health Check:** `/api/health`

### **Authentication**
Most endpoints require JWT token in Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

## 🛡️ **Security Features**

- **🔐 JWT Authentication:** Secure token-based user authentication
- **🔒 Password Security:** bcrypt hashing with salt rounds
- **🛡️ Input Validation:** Comprehensive request validation
- **🚫 SQL Injection Prevention:** Prisma ORM protection
- **🌐 CORS Configuration:** Secure cross-origin resource sharing
- **🔍 Error Handling:** Comprehensive error handling middleware

## 🎨 **User Experience**

- **🌙 Dark Mode Support:** Full dark/light theme switching
- **📱 Responsive Design:** Mobile-friendly interface
- **⚡ Real-time Updates:** Live progress tracking and notifications
- **🎯 Intuitive Navigation:** User-friendly dashboard and workflows
- **🔄 Smooth Animations:** Professional transitions and interactions

## 🤝 **Contributing**

We welcome contributions from the cybersecurity community!

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### **Development Guidelines**
- Follow existing code style and conventions
- Add tests for new functionality
- Update documentation as needed
- Ensure security best practices

## 📝 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 **Acknowledgments**

- **OWASP** for security testing methodologies and standards
- **The cybersecurity community** for best practices and guidance
- **Open source contributors** for the amazing tools and libraries used

## 📞 **Support & Contact**

- **📧 Email:** support@cyberforge.dev
- **🐛 Issues:** Create an issue in this repository
- **💬 Discussions:** Use GitHub Discussions for questions and ideas

## ⚠️ **Ethical Use Disclaimer**

CyberForge is designed for **educational purposes and ethical security testing only**. Users must:

- ✅ Only test applications they own or have explicit permission to test
- ✅ Follow responsible disclosure principles for any vulnerabilities found
- ✅ Respect all applicable laws and regulations
- ✅ Use knowledge gained for defensive and educational purposes only
- ❌ Never use this platform for malicious activities or unauthorized testing

---

**🛡️ Built with ❤️ by the CyberForge Team - Empowering the next generation of cybersecurity professionals**