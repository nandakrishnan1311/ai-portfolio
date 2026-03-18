# AI Portfolio ⚡

A dark, cinematic, AI-themed developer portfolio built with **React + Three.js + Framer Motion**.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:5173`

## ✏️ Personalize It

Edit these files to make it yours:

| File | What to change |
|------|---------------|
| `src/data/profile.js` | Your name, bio, links, availability |
| `src/data/projects.js` | Your projects, descriptions, links |
| `src/data/skills.js` | Your tech skills & levels |
| `src/components/achievements/Achievements.jsx` | Timeline & certifications |
| `public/assets/images/profile/` | Your profile photos |

## 🎨 Theme

Colors live in `src/styles/theme.css`. The main accent is `--accent-green: #00FFB2`.

## 📡 Contact Form

The form in `Contact.jsx` logs to console by default.  
Connect it to [Formspree](https://formspree.io) or [EmailJS](https://emailjs.com):

```js
// Replace handleSubmit in Contact.jsx with:
await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
```

## 🌐 Deploy to Vercel

```bash
npm run build
vercel deploy --prod
```

`vercel.json` is pre-configured for SPA routing.

## 📦 Stack

- React 18
- Three.js (custom WebGL hero sphere)
- Framer Motion (scroll animations)
- Canvas API (particle network)
- Google Fonts: Syne + Space Mono + Inter
