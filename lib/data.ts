export type ProjectStatus = "live" | "in-progress" | "coming-soon";

export interface Project {
  title: string;
  description: string;
  stack: string;
  tags: string[];
  status: ProjectStatus;
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Habit Tracker",
    description:
      "A full-stack habit tracker with flexible scheduling and streak analytics beyond simple daily checkboxes, it surfaces correlations between habits and visualizes progress with a GitHub-style heatmap.",
    stack: "Next.js · TypeScript · Supabase · Recharts",
    tags: ["Full-stack", "Auth", "Database", "Data viz"],
    status: "in-progress",
    liveUrl: undefined,
    githubUrl: undefined,
    image: "/images/projects/habit-tracker.png",
  },
  {
    title: "UI Challenge Interface",
    description:
      "A pixel-perfect, design-heavy interface build focused on interaction polish custom animations, responsive edge cases, and accessibility details that don't show up in a static mockup.",
    stack: "Next.js · TypeScript · Tailwind CSS · Framer Motion",
    tags: ["Frontend", "Animation", "Responsive design"],
    status: "in-progress",
    liveUrl: undefined,
    githubUrl: undefined,
    image: "/images/projects/ui-challenge.png",
  },
];
export const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "UI Systems",
  "Accessibility",
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
      "Next.js, TypeScript, and Tailwind CSS on the frontend, with Supabase/Postgres when a project needs a backend and database.",
  },
  {
    question: "Are you open to remote or relocation?",
    answer:
      "Yes, I'm comfortable working async across time zones, and open to remote or on-site depending on the role.",
  },
];
