# 🚀 CyberForge Deployment Guide

**Complete step-by-step guide to deploy CyberForge to production**

## 📋 **What You'll Need**
- GitHub account (free)
- Vercel account (free) - for frontend
- Render account (free) - for backend
- 10-15 minutes of your time

---

## 🎯 **STEP 1: Prepare Your Repository**

### 1.1 Push to GitHub
```bash
# If you haven't already, initialize git and push to GitHub
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 1.2 Your Repository Structure Should Look Like:
```
cyberforge/
├── umurava-client/          # Frontend (Next.js)
├── Umurava_api/            # Backend (Node.js)
├── README.md
├── DEPLOYMENT.md           # This file
└── LICENSE
```

---

## 🌐 **STEP 2: Deploy Backend to Render**

### 2.1 Create Render Account
1. Go to [render.com](https://render.com)
2. Sign up with GitHub (recommended)
3. Connect your GitHub account

### 2.2 Create PostgreSQL Database
1. Click **"New +"** → **"PostgreSQL"**
2. **Settings:**
   - **Name:** `cyberforge-db`
   - **Database:** `cyberforge`
   - **User:** `cyberforge`
   - **Region:** Choose closest to your users
   - **Plan:** Free
3. Click **"Create Database"**
4. **⚠️ IMPORTANT:** Copy the **Internal Database URL** (starts with `postgresql://`)

### 2.3 Create Web Service
1. Click **"New +"** → **"Web Service"**
2. **Connect Repository:**
   - Select your GitHub repository
   - Click **"Connect"**
3. **Configuration:**
   - **Name:** `cyberforge-api`
   - **Root Directory:** `Umurava_api`
   - **Environment:** `Node`
   - **Region:** Same as your database
   - **Branch:** `main`
   - **Build Command:** `npm install && npx prisma generate && npx prisma migrate deploy`
   - **Start Command:** `npm start`
   - **Plan:** Free

### 2.4 Set Environment Variables
In the **Environment** section, add:
```
NODE_ENV=production
DATABASE_URL=[Paste your Internal Database URL from step 2.2]
JWT_SECRET=your-super-secret-jwt-key-change-this-to-something-random
PORT=10000
```

### 2.5 Deploy Backend
1. Click **"Create Web Service"**
2. Wait for deployment (5-10 minutes)
3. **✅ Your backend URL:** `https://cyberforge-api-[random].onrender.com`
4. **Test it:** Visit `https://your-backend-url.onrender.com/api/health`

---

## 🎨 **STEP 3: Deploy Frontend to Vercel**

### 3.1 Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Connect your GitHub account

### 3.2 Import Project
1. Click **"New Project"**
2. **Import Git Repository:**
   - Select your GitHub repository
   - Click **"Import"**
3. **Configure Project:**
   - **Project Name:** `cyberforge-client`
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `umurava-client`
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** `.next` (default)
   - **Install Command:** `npm install` (default)

### 3.3 Set Environment Variables
In **Environment Variables** section, add:
```
NEXT_PUBLIC_API_URL=https://your-backend-url-from-step-2.5.onrender.com
```
**⚠️ Replace with your actual backend URL from Step 2.5**

### 3.4 Deploy Frontend
1. Click **"Deploy"**
2. Wait for deployment (3-5 minutes)
3. **✅ Your frontend URL:** `https://cyberforge-client-[random].vercel.app`

---

## 🔧 **STEP 4: Update Repository URLs**

### 4.1 Update Main README.md
Replace the demo URLs in your main `README.md`:
```markdown
## 🌐 **Live Demo**

- **🌍 Frontend (Vercel):** [https://your-actual-frontend-url.vercel.app](https://your-actual-frontend-url.vercel.app)
- **⚡ Backend API (Render):** [https://your-actual-backend-url.onrender.com](https://your-actual-backend-url.onrender.com)
- **🔍 API Health Check:** [https://your-actual-backend-url.onrender.com/api/health](https://your-actual-backend-url.onrender.com/api/health)
```

### 4.2 Commit and Push Updates
```bash
git add README.md
git commit -m "Update deployment URLs"
git push origin main
```

---

## 🧪 **STEP 5: Test Your Deployment**

### 5.1 Test Backend
Visit: `https://your-backend-url.onrender.com/api/health`
**Expected Response:**
```json
{
  "status": "OK",
  "message": "CyberForge API is running",
  "timestamp": "2024-01-29T...",
  "environment": "production"
}
```

### 5.2 Test Frontend
1. Visit your frontend URL
2. **Test Registration:**
   - Click "Join the Program" → "Sign Up"
   - Create a test account
3. **Test Login:**
   - Login with your test account
4. **Test Dashboard:**
   - Navigate to dashboard
   - Try creating a challenge
5. **Test Dark Mode:**
   - Click the moon/sun icon
   - Verify everything switches themes instantly

---

## 🎉 **STEP 6: You're Live!**

### ✅ **Congratulations! Your CyberForge platform is now live:**
- **Frontend:** Your Vercel URL
- **Backend:** Your Render URL
- **Database:** PostgreSQL on Render
- **SSL:** Automatic HTTPS on both platforms
- **CDN:** Global distribution via Vercel
- **Monitoring:** Built-in monitoring on both platforms

### 📊 **What's Working:**
- ✅ User registration and authentication
- ✅ Challenge creation and management
- ✅ Vulnerability reporting system
- ✅ Dark/light mode switching
- ✅ Profile management
- ✅ Real-time progress tracking
- ✅ Mobile-responsive design

---

## 🔄 **Automatic Deployments**

### Frontend (Vercel)
- **Auto-deploys** when you push to `main` branch
- **Preview deployments** for pull requests
- **Rollback** available in Vercel dashboard

### Backend (Render)
- **Auto-deploys** when you push to `main` branch
- **Zero-downtime** deployments
- **Build logs** available in Render dashboard

---

## 🛠️ **Troubleshooting**

### Backend Issues
**Problem:** Database connection errors
**Solution:** Check DATABASE_URL in Render environment variables

**Problem:** Build failures
**Solution:** Check build logs in Render dashboard

### Frontend Issues
**Problem:** API connection errors
**Solution:** Verify NEXT_PUBLIC_API_URL in Vercel environment variables

**Problem:** Build failures
**Solution:** Check build logs in Vercel dashboard

---

## 📞 **Support**

If you encounter issues:
1. Check the build logs in respective dashboards
2. Verify environment variables are set correctly
3. Test API endpoints directly
4. Check GitHub repository for updates

---

## 🎯 **Next Steps**

### Optional Enhancements:
1. **Custom Domain:** Add your own domain in Vercel/Render
2. **Analytics:** Add Google Analytics or similar
3. **Monitoring:** Set up uptime monitoring
4. **Backups:** Configure database backups
5. **Email:** Add email service for notifications

---

**🚀 Your CyberForge cybersecurity education platform is now live and ready for users worldwide!**

---

## 📝 **Deployment Checklist**

- [ ] Backend deployed to Render
- [ ] Database created and connected
- [ ] Environment variables set
- [ ] Backend health check working
- [ ] Frontend deployed to Vercel
- [ ] Frontend environment variables set
- [ ] Frontend connecting to backend
- [ ] User registration working
- [ ] Challenge creation working
- [ ] Dark mode working
- [ ] Repository URLs updated
- [ ] Everything tested and working

**🎉 Deployment Complete!**