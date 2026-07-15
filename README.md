# Phuc Tran — Portfolio

My personal portfolio site, built to showcase my frontend work as I look for junior/entry-level developer roles.

🔗 **Live:** [tranhoangphucttb.dev](https://tranhoangphucttb.dev)

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (CSS-first `@theme` config, no `tailwind.config.ts`)
- **Animation:** [Motion](https://motion.dev) (formerly Framer Motion) — entrance animations, staggered text reveals, animated accordion
- **Smooth scroll:** [Lenis](https://lenis.darkroom.engineering)
- **Icons:** react-icons (Simple Icons + Font Awesome 6)
- **Deployment:** Vercel

## Features

- Fully responsive, mobile-first layout
- Custom warm color palette and typography via Tailwind v4 design tokens
- Dark/light theme toggle (persisted via `localStorage`)
- Staggered entrance animations
- Infinite auto-scrolling skills marquee with hover-to-pause and tooltips
- Animated accordion-style FAQ section
- Open Graph / Twitter meta tags for clean link previews when shared

## Getting Started

Clone the repo and install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

## Project Structure

```text
my-portfolio/
├── app/                    # Next.js App Router: root layout, global styles, page entry
├── components/
│   ├── layout/             # Header and Footer
│   ├── providers/          # App-wide providers (e.g. smooth scroll)
│   ├── sections/           # Page sections (Hero, Skills, Projects, FAQ, Contact, etc.)
│   └── ui/                 # Reusable UI primitives (Button, Card, Accordion, etc.)
├── lib/                    # Content data (data.ts) and shared helpers (utils.ts)
├── public/
│   ├── images/             # Site images, icons, and project screenshots
│   └── resume.pdf          # Downloadable resume
├── types/                  # Shared TypeScript type definitions
└── ...config files         # ESLint, Prettier, TypeScript, Next.js config
```

## Deployment

Deployed on [Vercel](https://vercel.com), connected to this repository — every push to `main` triggers a production deploy.

## Contact

- Email: [hello@tranhoangphucttb.dev](mailto:hello@tranhoangphucttb.dev)
- GitHub: [@hphuc112](https://github.com/hphuc112)
- LinkedIn: [tranhoangphucttb](https://www.linkedin.com/in/tranhoangphucttb/)
