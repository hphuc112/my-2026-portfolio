import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section id="top" className="grid min-h-screen w-full lg:grid-cols-2">
      <div className="bg-cream flex min-h-screen flex-col justify-between p-8 pt-24 lg:p-12 lg:pt-28">
        <div>
          <span className="border-taupe bg-sand/80 inline-flex items-center rounded-full border px-4 py-2 text-sm text-stone-700">
            Available for new projects.
          </span>
        </div>

        <div className="flex max-w-xl flex-col gap-6">
          <p className="text-camel text-sm font-semibold tracking-[0.3em] uppercase">
            Hello, I&apos;m Phuc Tran
          </p>
          <h1 className="text-5xl leading-tight font-light text-stone-800 lg:text-7xl">
            A Front-End Developer in Ho Chi Minh City.
          </h1>
          <p className="max-w-md text-lg text-stone-600">
            Find me at{" "}
            <a
              href="https://github.com/hphuc112"
              target="_blank"
              rel="noreferrer"
              className="decoration-camel font-medium text-stone-800 underline underline-offset-4"
            >
              GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://www.linkedin.com/in/tranhoangphucttb/"
              target="_blank"
              rel="noreferrer"
              className="decoration-camel font-medium text-stone-800 underline underline-offset-4"
            >
              LinkedIn
            </a>
            .
          </p>

          <div className="flex flex-wrap gap-3">
            <Button href="#projects">See projects</Button>
            <Button href="/resume.pdf" variant="secondary">
              Download my resume
            </Button>
          </div>
        </div>

        <div>
          <p className="text-sm text-stone-500">
            Frontend-focused • Curious about modern web technologies.
          </p>
        </div>
      </div>

      <div className="bg-sand relative min-h-[320px] overflow-hidden lg:h-full">
        <img
          src="/images/portrait.webp"
          alt="Portrait of Phuc Tran"
          className="h-full min-h-[320px] w-full object-cover object-center"
        />
      </div>
    </section>
  );
}
