# Ahsan Iftikhar - Portfolio Website

A modern, production-quality portfolio website showcasing professional experience, skills, and projects. Built with React, Vite, Tailwind CSS, and Framer Motion.

## 🔗 Live

- Live Demo: [`https://portfoliobyahsan.netlify.app/`](https://portfoliobyahsan.netlify.app/)

## 🚀 Features

- **Modern Design**: Dark-themed, glassmorphic UI with smooth animations
- **Interactive 3D Background**: React Three Fiber powered hero section
- **Smooth Transitions**: Framer Motion page transitions and micro-interactions
- **Fully Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Fast loading with code-splitting
- **SEO Ready**: Open Graph and Twitter Card meta tags
 - **Light/Dark Mode**: Persistent theme toggle with smooth transitions

## 🛠️ Tech Stack

- **Framework**: React 19 with Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: React Three Fiber + Drei
- **Routing**: React Router v6
- **Icons**: Lucide React + React Icons
- **Fonts**: Inter & Space Grotesk (Google Fonts)

## 📦 Installation

```bash
npm install
```

## 🏃 Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## 🏗️ Build

```bash
npm run build
```

Build output will be in the `dist/` directory, ready for deployment to Netlify, Vercel, or any static hosting service.

## 🌐 Deploy (Netlify)

1. Create a new site on Netlify and connect this repo, or drag-and-drop the `dist/` folder after build.
2. Build command: `npm run build`
3. Publish directory: `dist`

Vite is auto-detected by Netlify and requires no extra configuration.

## 📁 Project Structure

```
src/
  components/       # Reusable UI components
    Navbar.jsx
    Footer.jsx
    HeroSection.jsx
    ProjectCard.jsx
    ExperienceTimeline.jsx
    SkillBadge.jsx
  pages/           # Page components
    Home.jsx
    About.jsx
    Resume.jsx
    Projects.jsx
  assets/          # Static assets
    profile.jpeg   # Profile image used in Hero
  styles/          # Global styles
  App.jsx          # Main app component with routing
  main.jsx         # Entry point
```

## 🎨 Customization

- Update color scheme in `tailwind.config.js`
- Modify content in respective page components
- Add/remove projects in `src/pages/Projects.jsx`
- Update experience entries in `src/pages/Resume.jsx`
 - Update contact details in `src/components/Footer.jsx` and `src/pages/Contact.jsx`

## 🧪 Notes

- 3D background is lazily rendered when in view to keep the app responsive.
- Animations are optimized and respect `prefers-reduced-motion`.
- Intersection-based animations are tuned to render above-the-fold content reliably on route changes.

## 📄 License

Private - All rights reserved
