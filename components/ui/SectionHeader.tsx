interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
  inverted?: boolean;
}

export function SectionHeader({
  label,
  title,
  description,
  className = "",
  inverted = false,
}: SectionHeaderProps) {
  const labelClass = inverted
    ? "text-background/70"
    : "text-success";
  const titleClass = inverted ? "text-background" : "text-foreground";
  const descriptionClass = inverted
    ? "text-background/70"
    : "text-foreground/70";

  return (
    <div className={`max-w-2xl ${className}`}>
      <p
        className={`${labelClass} text-sm font-semibold tracking-[0.3em] uppercase`}
      >
        {label}
      </p>
      <h2
        className={`${titleClass} mt-3 text-3xl font-semibold tracking-tight`}
      >
        {title}
      </h2>
      {description && (
        <p className={`${descriptionClass} mt-4 text-base leading-7`}>
          {description}
        </p>
      )}
    </div>
  );
}
