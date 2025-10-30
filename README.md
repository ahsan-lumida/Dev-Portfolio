# Ahsan Iftikhar - Portfolio Website

A modern, production-quality portfolio website showcasing professional experience, skills, and projects. Built with React, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Dark-themed, glassmorphic UI with smooth animations
- **Interactive 3D Background**: React Three Fiber powered hero section
- **Smooth Transitions**: Framer Motion page transitions and micro-interactions
- **Fully Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Fast loading with code-splitting
- **SEO Ready**: Open Graph and Twitter Card meta tags

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
  styles/          # Global styles
  App.jsx          # Main app component with routing
  main.jsx         # Entry point
```

## 🎨 Customization

- Update color scheme in `tailwind.config.js`
- Modify content in respective page components
- Add/remove projects in `src/pages/Projects.jsx`
- Update experience entries in `src/pages/Resume.jsx`

## 📄 License

Private - All rights reserved
