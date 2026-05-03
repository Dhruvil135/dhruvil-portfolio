# 🚀 Quick Setup Guide

## ✅ Project Setup Complete!

All files have been created and dependencies installed. Your portfolio is ready to run!

## 📁 Project Structure

```
dhruvil-portfolio/
├── public/
│   ├── favicon.svg          # Site favicon (DS logo)
│   └── resume.pdf           # Resume file (replace with your actual resume)
├── src/
│   ├── components/
│   │   ├── About.tsx        # About section
│   │   ├── Contact.tsx      # Contact form
│   │   ├── Experience.tsx   # Work experience timeline
│   │   ├── Footer.tsx       # Footer with page views
│   │   ├── Hero.tsx         # Hero section with stats
│   │   ├── Navbar.tsx       # Sticky navigation
│   │   ├── Projects.tsx     # Filterable projects
│   │   └── Skills.tsx       # MERN stack skills
│   ├── data/
│   │   └── portfolioData.ts # All personal data (EDIT THIS!)
│   ├── App.tsx              # Main app component
│   ├── index.css            # Global styles
│   └── main.tsx             # App entry point
├── index.html               # HTML template
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite configuration
```

## 🎯 Next Steps

### 1. **Replace the Resume PDF**
   - Replace `public/resume.pdf` with your actual resume
   - Keep the filename as `resume.pdf` or update the path in `portfolioData.ts`

### 2. **Customize Your Data**
   - Open `src/data/portfolioData.ts`
   - Update all personal information:
     - Name, title, tagline
     - Email, social links
     - Bio paragraphs
     - Work experience
     - Skills
     - Projects
     - Stats (CGPA, projects count, etc.)

### 3. **Update Project Links**
   - Update GitHub repository URLs
   - Add live demo links if available
   - Update project descriptions

### 4. **Customize Colors (Optional)**
   - Edit `tailwind.config.js` to change accent color
   - Current accent: `#c9a84c` (gold)
   - Dark background: `#0a0a0a`

## 🏃 Running the Project

### Development Mode
```bash
npm run dev
```
Opens at [http://localhost:3000](http://localhost:3000)

### Build for Production
```bash
npm run build
```
Output in `dist/` folder

### Preview Production Build
```bash
npm run preview
```

## 🎨 Key Features Implemented

✅ Sticky navbar with active section highlighting  
✅ Hero section with animated stats (CGPA: 7.7, Projects: 1)  
✅ About section with bio and profile cards (GitHub, CodeChef)  
✅ Experience timeline (2 internships)  
✅ Skills section with MERN stack (MongoDB, Express.js, React, Node.js)  
✅ Projects section with filter (1 project: SkillForge LMS - MERN)  
✅ Contact form with validation  
✅ Footer with page view counter (2039 views)  
✅ Smooth scroll animations (Framer Motion)  
✅ Fully responsive design  
✅ Dark theme with gold accents  

## 📊 Current Data Summary

- **Name**: Dhruvil Shah
- **Institution**: R. C. Patel Institute of Technology, Shirpur
- **CGPA**: 7.7
- **Projects**: 1 (SkillForge LMS Platform - MERN Stack)
- **Internships**: 2 (Infosys Springboard, Wide Softech)
- **Skills**: 4 (MongoDB, Express.js, React, Node.js)
- **Social Links**: GitHub, CodeChef, LinkedIn

## 🔧 Troubleshooting

### Port Already in Use
If port 3000 is busy, edit `vite.config.ts` and change the port number.

### Build Errors
Run `npm install` again to ensure all dependencies are installed.

### Styling Issues
Make sure Tailwind CSS is properly configured in `tailwind.config.js`.

## 📝 Important Notes

1. **Resume File**: Replace `public/resume.pdf` with your actual resume
2. **Social Links**: Update all URLs in `portfolioData.ts` with your actual profiles
3. **Project Demo**: Add live demo URL for SkillForge or set to `null` if unavailable
4. **Email**: Update email address in `portfolioData.ts`
5. **Page Views**: Currently hardcoded (2039). Integrate analytics API for real tracking

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Push the 'dist' folder to gh-pages branch
```

## 📞 Support

If you encounter any issues:
1. Check the console for errors
2. Verify all dependencies are installed (`npm install`)
3. Ensure Node.js version is 18+ (`node --version`)
4. Clear cache and rebuild (`rm -rf node_modules dist && npm install && npm run build`)

---

**Happy Coding! 🎉**
