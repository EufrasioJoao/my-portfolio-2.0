# Eufrásio Jaime — Portfolio 2.0

Personal portfolio website built with Next.js 16, Tailwind CSS, and Framer Motion. Bilingual (EN/PT), dark mode ready, and fully responsive.

**Live:** [eufrasiojaime.saphirat.co.mz](https://eufrasiojaime.saphirat.co.mz)

---

## Features

- **Bilingual** — full EN/PT translation system with language persistence via `localStorage` and automatic browser language detection
- **Project pages** — individual detail pages for every project (Flock, Fluxime, SIGAE, RRAH, Aprender Inglês)
- **AI Engineering section** — dedicated section showcasing AI/automation work
- **Dynamic experience durations** — work period labels calculated at runtime, no hardcoded dates
- **Resume pages** — print-ready `/resume` (EN) and `/resume-pt` (PT) with dynamic dates
- **Contact form** — sends email via Nodemailer / Hostinger SMTP through a Next.js API route
- **Flag language switcher** — header toggle with real flag images from flagcdn.com
- **Skills grid** — compact categorized tech stack
- **Framer Motion animations** — scroll-triggered throughout

## Stack

![Next.js](https://img.shields.io/badge/Next.js_16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-black?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-black?style=flat-square&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=flat-square&logo=framer)
![Nodemailer](https://img.shields.io/badge/Nodemailer-black?style=flat-square&logo=gmail)

## Project Structure

```
app/
├── page.tsx                  # Main portfolio page
├── layout.tsx                # Root layout with LanguageProvider
├── api/contact/route.ts      # Contact form email API
├── resume/                   # EN print resume
├── resume-pt/                # PT print resume
└── projects/
    ├── flock/
    ├── fluxime/
    ├── sigae/
    ├── rrah/
    └── aprender-ingles/

components/
└── portfolio/
    ├── Header.tsx            # Nav + language switcher
    ├── Hero.tsx              # Hero with portrait image
    ├── About.tsx             # About + stats + resume link
    ├── Experience.tsx        # Work history with dynamic durations
    ├── Skills.tsx            # Tech stack grid
    ├── AIEngineering.tsx     # AI/automation section
    ├── Projects.tsx          # Project cards
    ├── Contact.tsx           # Contact form
    └── Footer.tsx

lib/
├── translations.ts           # All EN/PT strings
├── language-context.tsx      # Language context + provider
├── duration.ts               # Shared job duration calculator
└── email.ts                  # Nodemailer transporter
```

## Getting Started

```bash
# Install dependencies
npm install

# Copy environment variables
cp env.example .env

# Run development server
npm run dev
```

## Environment Variables

```env
SMT_EMAIL=your-smtp-email@domain.com
SMT_PASSWORD=your-smtp-password
```

Both variables are required for the contact form. The project uses Hostinger SMTP (`smtp.hostinger.com:587`).

## Resumes

The resume pages are accessible at:

- `/resume` — English, print-optimized
- `/resume-pt` — Portuguese, print-optimized

Use `Ctrl+P` / `Cmd+P` in the browser to print or save as PDF.

## Internationalization

Language is stored in `localStorage` and auto-detected from `navigator.language` on first visit. All translatable strings live in `lib/translations.ts` under a single typed object — no external i18n library needed.

---

Built by [Eufrásio Jaime](https://eufrasiojaime.saphirat.co.mz) · Nampula, Mozambique
