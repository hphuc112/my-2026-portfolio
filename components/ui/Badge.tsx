import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="border-border bg-accent text-foreground/80 rounded-full border px-3 py-1 text-sm font-medium">
      {children}
    </span>
  );
}
