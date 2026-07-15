import type { IconType } from "react-icons";

export interface Project {
  title: string;
  description: string;
  stack: { name: string; Icon?: IconType }[];
  tags: string[];
  status: "live" | "in-progress" | "coming-soon";
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
