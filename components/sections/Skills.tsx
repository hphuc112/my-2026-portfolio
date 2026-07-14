import { skills } from "@/lib/data";

export function Skills() {
  const track = [...skills, ...skills, ...skills, ...skills];

  return (
    <section className="mx-auto max-w-6xl px-6 py-2 lg:px-8">
      {/* <div className="mb-10 max-w-2xl">
        <p className="text-success text-sm font-semibold tracking-[0.3em] uppercase">
          Skills
        </p>
        <h2 className="text-foreground mt-3 text-3xl font-semibold tracking-tight">
          The stack I reach for most.
        </h2>
      </div> */}

      <div className="group/track relative mx-auto w-full overflow-x-hidden pt-16">
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r to-transparent" />
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l to-transparent" />

        <div className="animate-marquee flex w-max gap-6 group-hover/track:[animation-play-state:paused]">
          {track.map(({ name, Icon, description }, i) => (
            <div
              key={`${name}-${i}`}
              className="group/item border-border bg-secondary/20 hover:border-success relative flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border transition-colors"
            >
              <Icon
                className="text-foreground/80 h-8 w-8"
                aria-hidden={i >= skills.length}
              />
              <span className="sr-only">{name}</span>

              <div className="bg-foreground text-background pointer-events-none absolute -top-12 left-1/2 w-max max-w-40 -translate-x-1/2 rounded-lg px-3 py-1.5 text-center text-xs opacity-0 transition-opacity duration-200 group-hover/item:opacity-100">
                {description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
