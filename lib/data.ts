import type { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiFigma,
  SiVercel,
  SiSupabase,
  SiFramer,
} from "react-icons/si";
import type { Project } from "@/types";

interface Skill {
  name: string;
  description: string;
  Icon: IconType;
}

export const skills: Skill[] = [
  {
    name: "Next.js",
    description: "App Router, routing, server components",
    Icon: SiNextdotjs,
  },
  {
    name: "React",
    description: "Component-driven UI development",
    Icon: SiReact,
  },
  {
    name: "TypeScript",
    description: "Type-safe components and data models",
    Icon: SiTypescript,
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first styling and design tokens",
    Icon: SiTailwindcss,
  },
  {
    name: "Git",
    description: "Version control and collaboration",
    Icon: SiGit,
  },
  {
    name: "Figma",
    description: "Turning designs into working UI",
    Icon: SiFigma,
  },
  { name: "Vercel", description: "Deployment and hosting", Icon: SiVercel },
];

export const projects: Project[] = [
  {
    title: "Habit Tracker",
    description:
      "A full-stack habit tracker with flexible scheduling and streak analytics beyond simple daily checkboxes, it surfaces correlations between habits and visualizes progress with a GitHub-style heatmap.",
    stack: [
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Supabase", Icon: SiSupabase },
    ],
    tags: ["Full-stack", "Auth", "Database", "Data viz"],
    status: "live",
    liveUrl: "https://habit-tracker.tranhoangphucttb.dev/",
    githubUrl: "https://github.com/hphuc112/habit-tracker",
    // image: "/images/projects/habit-tracker.png",
  },
  {
    title: "UI Challenge Interface",
    description:
      "A pixel-perfect, design-heavy interface build focused on interaction polish, custom animations, responsive edge cases, and accessibility details that don't show up in a static mockup.",
    stack: [
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Framer Motion", Icon: SiFramer },
    ],
    tags: ["Frontend", "Animation", "Responsive design"],
    status: "live",
    liveUrl: "https://journey.tranhoangphucttb.dev/",
    githubUrl: "https://github.com/hphuc112/scroll-journey",
    // image: "/images/projects/ui-challenge.png",
  },
];

export const testimonials = [
  {
    quote: "",
    author: "",
    role: "",
  },
];

export const faqs = [
  {
    question: "What are you looking for right now?",
    answer:
      "A junior or entry-level frontend role where I can keep learning fast, ship real product features, and work closely with a team.",
  },
  {
    question: "What's your current stack?",
    answer:
      "Next.js, TypeScript, and Tailwind CSS on the frontend. I'm comfortable picking up a backend and database layer like Supabase when a project calls for one.",
  },
  {
    question: "Are you open to remote or relocation?",
    answer:
      "Yes, I'm comfortable working async across time zones, and open to remote or on-site depending on the role.",
  },
  {
    question: "When can you start?",
    answer:
      "I'm available immediately and can start as soon as a good fit comes up.",
  },
  {
    question: "What's this portfolio built with?",
    answer:
      "Next.js, TypeScript, and Tailwind CSS, deployed on Vercel - the same stack I'd bring to a team. Feel free to poke around the code on GitHub.",
  },
];
