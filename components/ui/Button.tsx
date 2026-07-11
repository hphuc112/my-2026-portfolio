import type { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const baseClasses =
    "relative inline-flex items-center justify-center overflow-hidden rounded-full px-9 py-3 text-xl font-medium shadow-2xl transition-all before:absolute before:top-1/2 before:left-1/2 before:h-0 before:w-0 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-success before:duration-400 before:ease-out hover:shadow-success/40 hover:before:h-56 hover:before:w-56 before:opacity-30";
  const variants = {
    primary:
      "bg-foreground text-background hover:bg-foreground/90 hover:shadow-foreground/30",
    secondary:
      "border border-border bg-background/80 text-foreground hover:bg-accent hover:shadow-border/30",
  };

  return (
    <Link href={href} className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </Link>
  );
}
