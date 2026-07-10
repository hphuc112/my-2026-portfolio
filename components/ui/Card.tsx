import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <article
      className={`border-border bg-background/80 rounded-3xl border p-6 shadow-sm ${className}`}
    >
      {children}
    </article>
  );
}
