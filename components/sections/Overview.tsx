import { Reveal } from "@/components/motion/Reveal";
import { LiveClock } from "@/components/ui/LiveClock";

export function Overview() {
  return (
    <section
      id="overview"
      className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8 lg:py-20"
    >
      <Reveal>
        <div className="border-border bg-background/80 grid gap-8 rounded-4xl border p-8 shadow-sm lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div className="flex flex-col gap-3">
            <p className="text-success text-sm font-semibold tracking-[0.3em] uppercase">
              Overview
            </p>
            <h2 className="text-foreground text-3xl font-semibold tracking-tight sm:text-3xl">
              A Front-End Developer
            </h2>{" "}
            <h2 className="text-foreground text-3xl font-semibold tracking-tight sm:text-3xl">
              in Ho Chi Minh City.
            </h2>
            <LiveClock />
          </div>
          <div className="text-foreground/70 flex flex-col gap-4 text-base leading-7">
            <p>
              Computer Science graduate specializing in front-end development. I
              build responsive, accessible web interfaces using React, Next.js,
              and Tailwind CSS including this portfolio itself, built with
              performance and accessibility as priorities throughout.
            </p>
            <p>
              I&apos;m looking for my first role as a junior developer, where I
              can contribute from early on while continuing to learn from
              experienced engineers. I enjoy the problem-solving side of front-end
              work as much as the design side turning a Figma file into
              pixel-accurate, functional UI is what I find most satisfying.
              I&apos;m also comfortable reading and writing technical English, and
              currently exploring component design systems in more depth.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
