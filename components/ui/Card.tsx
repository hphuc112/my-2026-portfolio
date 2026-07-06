import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <article
      className={`border-taupe rounded-3xl border bg-white/80 p-6 shadow-sm ${className}`}
    >
      {children}
    </article>
  );
}
