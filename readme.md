# League Consultancy | AI, Robotics, IoT & Automation

LEAGUE Consultancy is a premium engineering consultancy platform specializing in High-Precision AI, Advanced Robotics, Industrial IoT, and Automation. This platform is built for industrial leaders who require cutting-edge technological integration and strategic consultancy.

## 🚀 Features

- **Premium UI/UX**: Crafted with React 18, Vite, Tailwind CSS, and Framer Motion for a sophisticated, high-performance visual experience.
- **Architectural Animations**: Smooth, industry-grade transitions and micro-interactions that emphasize precision and quality.
- **Dark Mode Native**: A curated dark aesthetic designed for high-focus engineering environments, with seamless theme toggle.
- **Contact Integration**: Fully integrated with a **Custom Node.js Backend** for production-ready inquiry handling via Gmail SMTP.
- **Case Studies & Services**: Detailed showcases of technical capabilities and past industrial breakthroughs.
- **Responsive Engineering**: Pixel-perfect responsiveness across all devices, from mobile diagnostics to desktop control centers.
- **SEO Optimized**: Advanced meta structure with Open Graph support for professional social sharing.

## 🛠️ Tech Stack

- **React 18** — Architecture & Component Logic
- **Vite** — High-speed Build Tooling
- **Tailwind CSS** — Modern Utility-First Styling
- **Framer Motion** — Professional Orchestrated Animations
- **React Router** — High-Precision Routing
- **Lucide React** — Technical Icon Set
- **Node.js / Nodemailer** — Secure Email Communication Layer

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
├── public/              # Production assets (Logos, Technical Visuals)
├── src/
│   ├── components/      # Global components (Navigation, Layout, UI Library)
│   ├── data/            # Structured content for Services, Projects, and FAQs
│   ├── hooks/           # System-level React hooks (Theme management)
│   ├── pages/           # Core Views (Home, About, Services, Projects, Contact)
│   ├── services/        # API & Communication layers (EmailJS Integration)
│   ├── App.jsx          # Route orchestration & animation wrappers
│   ├── main.jsx         # Application entry point
│   └── index.css        # Design tokens & Global Tailwind configurations
├── tailwind.config.js   # Custom design system configuration
└── vite.config.js       # Build optimization settings
```

## 🌐 Deployment & Configuration

### Environment Setup
Before deployment, ensure the following keys are configured in your `backend/.env` file:
- `PORT`: Server port (default: 5000)
- `GMAIL_USER`: Your Gmail address
- `GMAIL_PASS`: Your 16-character Gmail App Password
- `RECEIVER_EMAIL`: Where you want to receive inquiries

### Vercel / Netlify
This platform is optimized for static deployment on Vercel or Netlify. 
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

### GitHub Pages
Deploy the contents of the `dist/` folder to your `gh-pages` branch after running the build script.

---

*Precision defined. Future engineered.*
