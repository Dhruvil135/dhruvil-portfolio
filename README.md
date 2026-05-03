# Dhruvil Shah - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Sticky Navigation** with active section highlighting
- **Hero Section** with animated stats and social links
- **About Section** with bio and profile cards
- **Experience Timeline** with professional work history
- **Skills Section** with interactive MERN stack badges
- **Projects Showcase** with filterable categories
- **Contact Form** with EmailJS integration (working email delivery)
- **Real-time Page View Counter** using CountAPI
- **Smooth Scroll** animations using Framer Motion
- **Fully Responsive** design for all devices
- **Dark Theme** with gold accent colors

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Scroll** - Smooth navigation
- **React Icons** - Icon library
- **EmailJS** - Contact form email delivery
- **CountAPI** - Real-time page view tracking

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/dhruvilshah/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. **Configure EmailJS** (for contact form):
   - Follow the detailed guide in `EMAILJS_SETUP.md`
   - Get your credentials from [EmailJS](https://www.emailjs.com/)
   - Update `src/components/Contact.tsx` with your Service ID, Template ID, and Public Key

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Build for Production

```bash
npm run build
```

The optimized build will be in the `dist` folder.

## 📝 Customization

All personal data is centralized in `src/data/portfolioData.ts`. Update this file to customize:

- Personal information
- Social links
- Work experience
- Skills
- Projects
- Contact details

## 📄 License

© 2026 Dhruvil Shah. All rights reserved.

## 🤝 Contact

- **Email**: dhruvil.shah@rcpit.ac.in
- **LinkedIn**: [linkedin.com/in/dhruvilshah](https://linkedin.com/in/dhruvilshah)
- **GitHub**: [github.com/dhruvilshah](https://github.com/dhruvilshah)
