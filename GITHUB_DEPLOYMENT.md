# 🚀 GitHub Deployment Guide

Your code is ready to push to GitHub! Follow these steps:

---

## ✅ What's Already Done

- ✅ Git repository initialized
- ✅ All files committed (38 files)
- ✅ `.env` file protected (not tracked by Git)
- ✅ Ready to push to GitHub

---

## 📋 Step-by-Step GitHub Deployment

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com/)
2. Click the **"+"** icon (top right) → **"New repository"**
3. Fill in the details:
   - **Repository name:** `dhruvil-portfolio` (or any name you like)
   - **Description:** "My personal portfolio website"
   - **Visibility:** Public (recommended for portfolio)
   - ⚠️ **DO NOT** check "Initialize with README" (we already have files)
   - ⚠️ **DO NOT** add .gitignore or license (we already have them)
4. Click **"Create repository"**

---

### Step 2: Copy Your Repository URL

After creating the repository, GitHub will show you a URL like:
```
https://github.com/Dhruvil135/dhruvil-portfolio.git
```

Copy this URL!

---

### Step 3: Add GitHub Remote

Open your terminal in the project folder and run:

```bash
git remote add origin https://github.com/YOUR_USERNAME/dhruvil-portfolio.git
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

Example:
```bash
git remote add origin https://github.com/Dhruvil135/dhruvil-portfolio.git
```

---

### Step 4: Rename Branch to Main (Optional but Recommended)

```bash
git branch -M main
```

---

### Step 5: Push to GitHub

```bash
git push -u origin main
```

If prompted for credentials:
- **Username:** Your GitHub username
- **Password:** Use a **Personal Access Token** (not your password)

**How to create a Personal Access Token:**
1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name: "Portfolio Deployment"
4. Select scopes: Check **"repo"**
5. Click "Generate token"
6. Copy the token and use it as your password

---

### Step 6: Verify on GitHub

1. Go to your GitHub repository URL
2. Refresh the page
3. You should see all your files! 🎉

---

## 🔒 Security Check

Before pushing, verify your `.env` file is NOT included:

```bash
git status --ignored
```

You should see `.env` in the ignored files list. ✅

---

## 📊 What Gets Pushed to GitHub

✅ **Included:**
- All source code
- Documentation files
- `.env.example` (template without real credentials)
- `.gitignore` (protection rules)
- Public assets (images, resume)

❌ **NOT Included (Protected):**
- `.env` (your EmailJS credentials)
- `node_modules/` (dependencies)
- `dist/` (build files)

---

## 🎯 After Pushing to GitHub

Your repository will be live at:
```
https://github.com/YOUR_USERNAME/dhruvil-portfolio
```

---

## 🚀 Next Step: Deploy to Vercel

Once your code is on GitHub, you can deploy to Vercel:

1. Go to [Vercel](https://vercel.com/)
2. Sign in with GitHub
3. Click "New Project"
4. Import your `dhruvil-portfolio` repository
5. **Add Environment Variables:**
   - `VITE_EMAILJS_SERVICE_ID` = `service_5t5r1ml`
   - `VITE_EMAILJS_TEMPLATE_ID` = `template_4npee63`
   - `VITE_EMAILJS_PUBLIC_KEY` = `3eWOJ-Q2-X0F3FkD0`
6. Click "Deploy"
7. Wait 2-3 minutes
8. Your portfolio is live! 🎉

---

## 🆘 Troubleshooting

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin YOUR_GITHUB_URL
```

### Error: "failed to push"
```bash
git pull origin main --rebase
git push -u origin main
```

### Error: "Authentication failed"
- Use a Personal Access Token instead of password
- See Step 5 above for how to create one

---

## 📝 Quick Command Reference

```bash
# Check Git status
git status

# Add new changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push

# Pull latest changes
git pull
```

---

## ✅ Checklist

- [ ] Created GitHub repository
- [ ] Copied repository URL
- [ ] Added remote origin
- [ ] Renamed branch to main
- [ ] Pushed to GitHub
- [ ] Verified files on GitHub
- [ ] Ready for Vercel deployment

---

**Need help?** Check GitHub's [official documentation](https://docs.github.com/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-locally-hosted-code-to-github)
