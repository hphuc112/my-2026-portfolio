import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28"
    >
      <div className="space-y-6">
        <p className="text-camel text-sm font-semibold tracking-[0.3em] uppercase">
          Product designer • Frontend engineer
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-stone-800 sm:text-5xl">
          I craft polished digital experiences that feel simple and memorable.
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-stone-600">
          I help startups turn ideas into thoughtful interfaces, fast-moving
          product journeys, and clean code.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button href="#projects">See projects</Button>
          <Button href="/resume.pdf" variant="secondary">
            Download resume
          </Button>
        </div>
      </div>
      <div className="border-taupe text-cream rounded-3xl border bg-stone-800 p-8 shadow-xl">
        <p className="text-sand text-sm tracking-[0.3em] uppercase">
          Current focus
        </p>
        <ul className="text-sand mt-6 space-y-4 text-sm">
          <li>• Design systems and UI libraries</li>
          <li>• SaaS product storytelling</li>
          <li>• Performance-focused frontend builds</li>
        </ul>
      </div>
    </section>
  );
}
