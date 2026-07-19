import type { ReactNode } from "react";
import Image from "next/image";

interface CardProps {
  children?: ReactNode;
  className?: string;
  image?: string;
  imageAlt?: string;
  accent?: boolean;
}

const ACCENT_CARDS = ["Habit Tracker", "UI Challenge Interface"];

export function Card({
  children,
  className = "",
  image,
  imageAlt,
  accent,
}: CardProps) {
  const isAccentByTitle = imageAlt
    ? ACCENT_CARDS.some((t) => imageAlt.toLowerCase().includes(t.toLowerCase()))
    : false;

  const isAccent = accent || isAccentByTitle;

  return (
    <article
      className={`group border-border overflow-hidden rounded-3xl border shadow-sm ${
        isAccent ? "bg-accent border-border/60" : "bg-background/80"
      } ${className}`}
    >
      {image && (
        <div
          className={`relative aspect-video w-full overflow-hidden ${
            isAccent ? "bg-background" : "bg-accent"
          }`}
        >
          <Image
            src={image}
            alt={imageAlt ?? ""}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      )}
      <div className="p-6">{children}</div>
    </article>
  );
}
