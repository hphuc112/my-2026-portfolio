import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section id="top" className="grid min-h-screen w-full lg:grid-cols-2">
      <div className="bg-background flex min-h-screen flex-col justify-between p-8 pt-24 lg:p-12 lg:pt-28">
        <div>
          <span className="border-border bg-accent/80 text-foreground/80 inline-flex items-center rounded-full border px-4 py-1 text-sm">
            <span className="bg-success mr-2 block size-2 rounded-full"></span>
            Available for new projects
          </span>
        </div>

        <div className="flex max-w-xl flex-col gap-6">
          <p className="text-camel text-sm font-semibold tracking-[0.3em] uppercase">
            Hello, I&apos;m Phuc Tran
          </p>
          <h1 className="text-foreground text-4xl leading-tight font-light lg:text-5xl">
            Turning ideas into clean, working interfaces.
          </h1>
          <div className="mb-6 flex flex-wrap gap-3">
            <Button href="#projects">See projects</Button>
          </div>
          <p className="text-foreground/70 max-w-md text-sm">
            Find me on{" "}
            <a
              href="https://github.com/hphuc112"
              target="_blank"
              rel="noreferrer"
              className={
                "text-success decoration-camel font-medium underline underline-offset-4"
              }
            >
              GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://www.linkedin.com/in/tranhoangphucttb/"
              target="_blank"
              rel="noreferrer"
              className={
                "text-success decoration-camel font-medium underline underline-offset-4"
              }
            >
              LinkedIn
            </a>
            .
          </p>

          <p className="text-foreground/70 max-w-md text-sm">
            Download my{" "}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className={
                "text-success decoration-camel font-medium underline underline-offset-4"
              }
            >
              resume
            </a>
            .
          </p>
        </div>

        <div>
          <p className="text-foreground/60 text-sm"></p>
        </div>
      </div>

      <div className="bg-accent relative min-h-80 overflow-hidden lg:h-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/portrait.webp"
          alt="Portrait of Phuc Tran"
          className="h-full w-full object-cover object-center lg:absolute lg:inset-0"
        />
      </div>
    </section>
  );
}
