import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="border-taupe bg-sand rounded-full border px-3 py-1 text-sm font-medium text-stone-700">
      {children}
    </span>
  );
}
