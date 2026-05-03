# Portfolio Setup Guide for Dhruvil Shah

## ✅ What Has Been Updated

Your portfolio has been fully customized with your information:

### 1. Personal Information
- **Name:** Dhruvil Shah
- **Title:** Java Developer
- **Email:** shahdhruvil2336@gmail.com
- **Location:** Shirpur
- **Institution:** R. C. Patel Institute of Technology, Shirpur
- **Degree:** B.Tech in Computer Engineering (Class of 2028)

### 2. Social Links
- **GitHub:** https://github.com/Dhruvil135
- **LinkedIn:** https://www.linkedin.com/in/dhruvilshah92/

### 3. About/Bio
Your bio has been updated with:
- Your background as a Computer Engineering undergraduate
- Experience with Core Java, OOP, C, and Data Structures
- Desktop Java GUI applications using NetBeans (Swing)
- Current focus on backend development (SQL, Spring Boot, REST APIs)
- Career goals and internship aspirations

### 4. Skills
Updated with your technical skills:
- **Programming Languages:** C, Java
- **Frameworks & Libraries:** Java Swing, JDBC
- **Tools & Technologies:** NetBeans, Git, GitHub, MySQL

### 5. Work Experience
- **Java Developer Intern** at Infosys Springboard (November 2025 – January 2026)

### 6. Projects
- **SkillForge LMS Platform** - Your MERN stack Learning Management System
  - GitHub: https://github.com/Dhruvil135/learnflow-dashboard-main
  - Live Demo: https://skillforge-platform.vercel.app/

### 7. Profile Photo Support
Added support for displaying your professional headshot in the About section.

---

## 📋 Next Steps - What You Need to Do

### Step 1: Add Your Profile Photo
1. Prepare a professional headshot (recommended: 400x400 pixels, square format)
2. Save it as `profile-photo.jpg` (or `.png`)
3. Place it in the `public/` folder
4. If you use a different filename, update `photoUrl` in `src/data/portfolioData.ts`

### Step 2: Replace the Resume
1. Export your latest resume as a PDF
2. Replace `public/resume.pdf` with your file
3. Keep the filename as `resume.pdf`

### Step 3: Test the Portfolio
Run the development server to see your portfolio:
```bash
npm run dev
```

Then open your browser to the URL shown (usually http://localhost:5173)

### Step 4: Review and Customize
- Check all sections (Hero, About, Experience, Projects, Skills, Contact)
- Verify all links work correctly
- Test the contact form
- Ensure your photo displays properly

---

## 🎨 Optional Customizations

### Add More Projects
Edit `src/data/portfolioData.ts` and add more projects to the `projects` array:

```typescript
{
  name: 'Your Project Name',
  description: 'Brief description of what it does',
  tech: ['Java', 'MySQL', 'JDBC'],
  category: 'Java', // or 'MERN', 'JavaScript'
  github: 'https://github.com/Dhruvil135/your-repo',
  demo: 'https://your-demo-link.com', // or null if no demo
}
```

### Update Stats
The stats in the Hero and About sections are automatically calculated from your data, but you can manually adjust them in `portfolioData.ts`:

```typescript
stats: {
  cgpa: '7.5',
  projects: 1,
  internships: 1,
  skills: 8,
}
```

### Change Colors/Theme
The accent color (gold) is defined in `tailwind.config.js`. You can customize it there.

---

## 🚀 Deployment

Once you're happy with your portfolio, you can deploy it:

### Option 1: Vercel (Recommended)
1. Push your code to GitHub
2. Go to https://vercel.com
3. Import your repository
4. Vercel will auto-detect Vite and deploy

### Option 2: Netlify
1. Push your code to GitHub
2. Go to https://netlify.com
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `dist`

### Option 3: GitHub Pages
```bash
npm run build
# Then deploy the 'dist' folder to GitHub Pages
```

---

## 📁 File Structure

Key files you might want to edit:

```
src/
├── data/
│   └── portfolioData.ts          # All your personal data (main file to edit)
├── components/
│   ├── Hero.tsx                  # Landing section
│   ├── About.tsx                 # About section with bio
│   ├── Experience.tsx            # Work experience
│   ├── Projects.tsx              # Project showcase
│   ├── Skills.tsx                # Skills section
│   └── Contact.tsx               # Contact form
public/
├── resume.pdf                    # Your resume (replace this)
├── profile-photo.jpg             # Your photo (add this)
└── README.md                     # Instructions for assets
```

---

## 🆘 Need Help?

If you need to make changes:
1. All personal data is in `src/data/portfolioData.ts`
2. Component styling uses Tailwind CSS
3. Animations use Framer Motion
4. The project uses React + TypeScript + Vite

---

## ✨ Features Included

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth scroll navigation
- ✅ Animated sections with Framer Motion
- ✅ Project filtering by category
- ✅ Contact form with validation
- ✅ Social media links
- ✅ Downloadable resume
- ✅ Professional profile photo display
- ✅ Dark theme with gold accents

---

**Your portfolio is ready! Just add your photo and resume, then deploy it.** 🎉
