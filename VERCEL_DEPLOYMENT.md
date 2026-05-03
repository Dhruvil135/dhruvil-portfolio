# 🚀 Vercel Deployment Guide

Deploy your portfolio to Vercel in minutes!

---

## 📋 Prerequisites

- ✅ Code pushed to GitHub
- ✅ GitHub account
- ✅ EmailJS credentials ready

---

## 🎯 Step-by-Step Deployment

### Step 1: Sign Up / Sign In to Vercel

1. Go to [https://vercel.com/](https://vercel.com/)
2. Click **"Sign Up"** or **"Log In"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub account

---

### Step 2: Import Your Repository

1. On Vercel dashboard, click **"Add New..."** → **"Project"**
2. You'll see a list of your GitHub repositories
3. Find **"dhruvil-portfolio"** (or your repo name)
4. Click **"Import"**

---

### Step 3: Configure Project Settings

Vercel will auto-detect your project settings:

**Framework Preset:** Vite ✅ (auto-detected)  
**Root Directory:** `./` ✅  
**Build Command:** `npm run build` ✅  
**Output Directory:** `dist` ✅  

**Don't change these!** They're correct.

---

### Step 4: Add Environment Variables ⚠️ IMPORTANT

Before deploying, click **"Environment Variables"** and add these:

| Name | Value |
|------|-------|
| `VITE_EMAILJS_SERVICE_ID` | `service_5t5r1ml` |
| `VITE_EMAILJS_TEMPLATE_ID` | `template_4npee63` |
| `VITE_EMAILJS_PUBLIC_KEY` | `3eWOJ-Q2-X0F3FkD0` |

**How to add:**
1. Click **"Environment Variables"** section
2. Enter **Name:** `VITE_EMAILJS_SERVICE_ID`
3. Enter **Value:** `service_5t5r1ml`
4. Click **"Add"**
5. Repeat for the other 2 variables

**Environment:** Select **"Production"** (default)

---

### Step 5: Deploy!

1. Click **"Deploy"** button
2. Wait 2-3 minutes while Vercel:
   - ✅ Clones your repository
   - ✅ Installs dependencies
   - ✅ Builds your project
   - ✅ Deploys to global CDN
3. You'll see a success screen with confetti! 🎉

---

### Step 6: Get Your Live URL

After deployment, you'll get a URL like:
```
https://dhruvil-portfolio-abc123.vercel.app
```

**This is your live portfolio!** 🌐

---

## 🎨 Custom Domain (Optional)

Want a custom domain like `dhruvilshah.com`?

1. Buy a domain from [Namecheap](https://www.namecheap.com/) or [GoDaddy](https://www.godaddy.com/)
2. In Vercel dashboard, go to your project
3. Click **"Settings"** → **"Domains"**
4. Add your custom domain
5. Follow Vercel's DNS configuration instructions
6. Wait 24-48 hours for DNS propagation

---

## 🔄 Automatic Deployments

**Good news!** Every time you push to GitHub, Vercel automatically:
- ✅ Detects the changes
- ✅ Rebuilds your site
- ✅ Deploys the new version

**No manual deployment needed!**

---

## 🧪 Test Your Deployed Site

### 1. Test Page Counter
- Visit your Vercel URL
- Scroll to footer
- You should see the view count
- Refresh page → count increases ✅

### 2. Test Contact Form
- Scroll to Contact section
- Fill out the form
- Click "Send Message"
- Check your email inbox ✅

---

## 🔍 Troubleshooting

### ❌ Build Failed

**Check these:**
1. Environment variables are added correctly
2. All 3 variables are present
3. No typos in variable names (must start with `VITE_`)

**Fix:**
- Go to **Settings** → **Environment Variables**
- Verify all 3 variables
- Click **"Deployments"** → **"Redeploy"**

---

### ❌ Contact Form Not Working

**Possible causes:**
1. Environment variables not added
2. EmailJS service not connected
3. Template not configured

**Fix:**
1. Check Vercel environment variables
2. Verify EmailJS dashboard (service connected?)
3. Check browser console for errors (F12)

---

### ❌ Page Counter Not Working

**This is rare, but check:**
1. CountAPI might be temporarily down
2. Check browser console for errors
3. Try in incognito mode

**Fix:**
- Usually resolves itself
- CountAPI is free and reliable

---

## 📊 Vercel Dashboard Features

### Analytics
- View visitor stats
- See page performance
- Monitor bandwidth usage

### Deployments
- View deployment history
- Rollback to previous versions
- See build logs

### Settings
- Manage environment variables
- Configure custom domains
- Set up redirects

---

## 🎯 Performance Tips

Your site is already optimized, but here are some stats:

- ✅ **Build Time:** ~30 seconds
- ✅ **Bundle Size:** ~320 KB (gzipped: ~100 KB)
- ✅ **Load Time:** < 2 seconds
- ✅ **Lighthouse Score:** 90+ (expected)

---

## 🔒 Security

Vercel automatically provides:
- ✅ **HTTPS/SSL** (free)
- ✅ **DDoS protection**
- ✅ **Global CDN**
- ✅ **Edge caching**

---

## 💰 Pricing

**Free Tier Includes:**
- ✅ Unlimited deployments
- ✅ 100 GB bandwidth/month
- ✅ Automatic HTTPS
- ✅ Custom domains
- ✅ Analytics

**Perfect for portfolios!** You won't need to pay anything.

---

## 📱 Share Your Portfolio

Once deployed, share your portfolio:

```
🌐 Live Site: https://your-portfolio.vercel.app
💻 GitHub: https://github.com/YOUR_USERNAME/dhruvil-portfolio
```

Add these links to:
- LinkedIn profile
- Resume
- Email signature
- GitHub profile README

---

## 🔄 Making Updates

To update your portfolio:

1. Make changes locally
2. Test with `npm run dev`
3. Commit changes:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```
4. Vercel automatically deploys! ✅

---

## ✅ Deployment Checklist

- [ ] Signed up for Vercel
- [ ] Connected GitHub account
- [ ] Imported repository
- [ ] Added 3 environment variables
- [ ] Deployed successfully
- [ ] Tested page counter
- [ ] Tested contact form
- [ ] Shared portfolio URL

---

## 🎉 Congratulations!

Your portfolio is now live on the internet! 🌐

**Next Steps:**
1. Share your portfolio URL
2. Add it to your resume
3. Update LinkedIn profile
4. Apply for jobs/internships

---

**Need help?** Check [Vercel Documentation](https://vercel.com/docs)
