import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28"
    >
      <div className="space-y-6">
        <p className="text-sm font-semibold tracking-[0.3em] text-sky-600 uppercase">
          Product designer • Frontend engineer
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          I craft polished digital experiences that feel simple and memorable.
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-slate-600">
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
      <div className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-xl">
        <p className="text-sm tracking-[0.3em] text-slate-400 uppercase">
          Current focus
        </p>
        <ul className="mt-6 space-y-4 text-sm text-slate-300">
          <li>• Design systems and UI libraries</li>
          <li>• SaaS product storytelling</li>
          <li>• Performance-focused frontend builds</li>
        </ul>
      </div>
    </section>
  );
}
