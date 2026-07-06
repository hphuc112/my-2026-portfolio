import type { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition";
  const variants = {
    primary: "bg-stone-800 text-cream hover:bg-stone-700",
    secondary: "border border-taupe bg-white/80 text-stone-700 hover:bg-sand",
  };

  return (
    <Link href={href} className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </Link>
  );
}
