# League Consultancy | AI, Robotics, IoT & Automation

LEAGUE Consultancy is a premium engineering consultancy platform specializing in AI, Robotics, IoT, and Industrial Automation. This is a **static frontend website** built with React, Tailwind CSS, and Framer Motion — ready for deployment on Vercel, Netlify, or GitHub Pages.

## 🚀 Features

- **Premium UI/UX**: Built with React 18, Vite, Tailwind CSS, and Framer Motion for a state-of-the-art visual experience.
- **Static Frontend**: Fully self-contained — no backend or database required.
- **Dark Mode**: Native dark mode support for engineering environments.
- **Contact Form**: Simulated submission with success confirmation (ready to connect to Formspree/EmailJS).
- **Responsive Design**: Optimized for all screen sizes.
- **SEO Optimized**: Proper meta tags, Open Graph, and Twitter Card support.

## 🛠️ Tech Stack

- **React 18** — Component-based UI
- **Vite** — Lightning-fast dev server & build tool
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Smooth animations
- **React Router** — Client-side routing
- **Lucide React** — Clean icon library

## 📦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
cd frontend
npm install
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```text
frontend/
├── public/              # Static assets (logo, images)
├── src/
│   ├── components/      # Reusable UI components (Layout, UI)
│   ├── data/            # Static data (company info, projects)
│   ├── hooks/           # Custom React hooks (theme)
│   ├── pages/           # Page views (Home, About, Services, Projects, Contact)
│   ├── services/        # Simulated API layer (no backend needed)
│   ├── App.jsx          # Main routes & page wrapper
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles & Tailwind config
├── index.html           # HTML entry with SEO meta tags
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies & scripts
```

## 🌐 Deployment

This site is ready for static deployment:

### Vercel
```bash
npm run build
# Deploy the `dist/` folder via Vercel CLI or dashboard
```

### Netlify
```bash
npm run build
# Deploy the `dist/` folder — set publish directory to `dist`
# Add `_redirects` file in `public/` for SPA routing:
# /*    /index.html   200
```

### GitHub Pages
```bash
npm run build
# Push the `dist/` folder to a `gh-pages` branch
```

> **Note**: For SPA routing on static hosts, add a redirect rule so all routes serve `index.html`.

## 📝 Connecting a Real Contact Form

The contact form currently simulates submission. To connect it to a real service:

1. **Formspree**: Replace the `submitForm` function in `src/services/api.js` with a `fetch` call to your Formspree endpoint.
2. **EmailJS**: Install the EmailJS SDK and update the service layer.
3. **Serverless Function**: Use Vercel/Netlify serverless functions for custom handling.

---

*Precision defined. Future engineered.*
