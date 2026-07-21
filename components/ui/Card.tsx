import type { ReactNode } from "react";
import Image from "next/image";

interface CardProps {
  children?: ReactNode;
  className?: string;
  image?: string;
  imageAlt?: string;
  accent?: boolean;
  priority?: boolean;
}

const ACCENT_CARDS = ["Habit Tracker", "Scroll Journey"];

export function Card({
  children,
  className = "",
  image,
  imageAlt,
  accent,
  priority = false,
}: CardProps) {
  const isAccentByTitle = imageAlt
    ? ACCENT_CARDS.some((t) => imageAlt.toLowerCase().includes(t.toLowerCase()))
    : false;

  const isAccent = accent || isAccentByTitle;

  return (
    <article
      className={`group border-border flex h-full flex-col overflow-hidden rounded-3xl border shadow-sm ${
        isAccent ? "bg-accent border-border/60" : "bg-background/80"
      } ${className}`}
    >
      {image && (
        <div
          className={`relative aspect-video w-full shrink-0 overflow-hidden ${
            isAccent ? "bg-background" : "bg-accent"
          }`}
        >
          <Image
            src={image}
            alt={imageAlt ?? ""}
            fill
            priority={priority}
            sizes="(min-width: 1024px) min(576px, 50vw), calc(100vw - 3rem)"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">{children}</div>
    </article>
  );
}
