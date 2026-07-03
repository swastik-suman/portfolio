# Swastik Suman Nayak — Portfolio

Modern, production-ready portfolio. Next.js 16 · TypeScript · Tailwind CSS v4 · Framer Motion.

---

## 📸 PHOTO REQUIREMENTS

Place your photo at: `public/profile.jpg`

**Specs for best result:**
- **Format:** JPG or PNG
- **Size:** minimum 400×400px, ideally 600×600px or higher
- **Shape:** square (it gets cropped to a circle)
- **What to use:** a clean headshot — face centered, neutral or light background, good lighting
- **Avoid:** group photos, full-body shots, dark backgrounds with dark clothing (hard to see), very small or blurry images

Once you drop the file into `public/` folder as `profile.jpg`, it will appear automatically in the hero section. If no photo is found, it gracefully shows your initials "SS" as a fallback.

---

## 🗂 WHERE TO EDIT YOUR CONTENT

**Everything is in one file: `data/profile.ts`**

| What you want to change | Where it is in `data/profile.ts` |
|---|---|
| Name, email, phone, GitHub, LinkedIn | `export const profile = { ... }` |
| Hero tagline | `profile.tagline` |
| About me paragraph | `about.summary` |
| Stat numbers (agents, CGPA etc.) | `about.highlights` |
| Tech stack logos | `export const techStack = [...]` |
| Featured projects (SENTINEL, AEGIS, FRIDAY, Sentiment) | `export const projects = [...]` — first 4 entries |
| Power BI dashboards (compact cards) | `export const projects = [...]` — last 2 entries |
| Other technical work | `export const otherWork = [...]` |
| Hackathons timeline | `export const hackathons = [...]` |
| Education | `export const education = [...]` |

**You never need to touch any component file** unless you want to change layout or design.

---

## 🔧 REPLACING PLACEHOLDER MOCKUPS WITH REAL SCREENSHOTS

To use real screenshots instead of the SVG placeholders:

1. Put your screenshot in `public/screenshots/` — e.g. `public/screenshots/aegis.png`
2. Open `components/ProjectMockups.tsx`
3. Find the mockup for your project (e.g. `NetworkMockup` for AEGIS)
4. Replace the SVG content with:
```tsx
import Image from "next/image";
// Inside the component:
<Image src="/screenshots/aegis.png" alt="AEGIS dashboard" fill className="object-cover" />
```

---

## 🚀 QUICK START

```bash
unzip portfolio-swastik.zip
cd portfolio
npm install
npm run dev          # → http://localhost:3000
```

---

## ☁️ DEPLOY TO VERCEL

**Option A — Website (easiest):**
1. Push to GitHub
2. Go to vercel.com → Import project → select repo → Deploy

**Option B — CLI:**
```bash
npm i -g vercel
vercel --prod
```

After deploy, update `siteUrl` in `app/layout.tsx` to your actual Vercel URL, then push again.

---

## 📁 PROJECT STRUCTURE

```
portfolio/
├── public/
│   └── profile.jpg          ← DROP YOUR PHOTO HERE
│   └── resume.pdf           ← DROP YOUR RESUME HERE
├── data/
│   └── profile.ts           ← EDIT ALL CONTENT HERE
├── components/
│   ├── AgentTraceGraph.tsx  Animated SVG agent pipeline (hero)
│   ├── Header.tsx
│   ├── Hero.tsx             Photo + typewriter + word-reveal heading
│   ├── About.tsx
│   ├── Skills.tsx           Tech stack with logos
│   ├── Projects.tsx         4 featured + 2 compact layout
│   ├── ProjectMockups.tsx   SVG placeholder visuals
│   ├── Experience.tsx       Hackathons timeline + other work
│   ├── Education.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── SectionLabel.tsx
├── app/
│   ├── globals.css          Design tokens + keyframes
│   ├── layout.tsx           Fonts + SEO metadata
│   └── page.tsx             Page assembly
└── lib/
    └── utils.ts             cn() utility
```
