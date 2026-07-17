import type { ReactNode } from "react";
import Image from "next/image";

interface CardProps {
  children?: ReactNode;
  className?: string;
  image?: string;
  imageAlt?: string;
}

export function Card({ children, className = "", image, imageAlt }: CardProps) {
  return (
    <article
      className={`group border-border bg-background/80 overflow-hidden rounded-3xl border shadow-sm ${className}`}
    >
      {image && (
        <div className="bg-accent relative aspect-video w-full overflow-hidden">
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
