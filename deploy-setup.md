# 🚀 Quick Deployment Setup

## Before You Start
Make sure you have:
- [x] GitHub account
- [x] Code pushed to GitHub repository
- [x] 15 minutes of free time

## 📝 Information You'll Need

### For Backend (Render)
- **Service Name:** `cyberforge-api`
- **Database Name:** `cyberforge-db`
- **JWT Secret:** Generate a random string (e.g., `your-super-secret-jwt-key-2024`)

### For Frontend (Vercel)
- **Project Name:** `cyberforge-client`
- **Backend URL:** (You'll get this after deploying backend)

## 🔗 Quick Links

### Deployment Platforms
- **Render:** [https://render.com](https://render.com)
- **Vercel:** [https://vercel.com](https://vercel.com)

### Your Repository
- **GitHub Repo:** `https://github.com/YOUR-USERNAME/YOUR-REPO-NAME`

## ⚡ Super Quick Steps

1. **Deploy Backend First** (Render)
   - Create database → Get URL
   - Create web service → Set environment variables
   - Wait for deployment → Get backend URL

2. **Deploy Frontend Second** (Vercel)
   - Import project → Set backend URL
   - Deploy → Get frontend URL

3. **Update Repository**
   - Add live URLs to README.md
   - Push changes

## 🎯 Expected Results

After deployment, you should have:
- **Frontend:** `https://cyberforge-client-xyz.vercel.app`
- **Backend:** `https://cyberforge-api-xyz.onrender.com`
- **Health Check:** `https://cyberforge-api-xyz.onrender.com/api/health`

---

**📖 For detailed instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)**