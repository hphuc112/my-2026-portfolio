import { CopyButton } from "@/components/ui/CopyButton";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
      <div className="border-taupe text-cream rounded-3xl border bg-stone-800 p-10 shadow-xl">
        <p className="text-sand text-sm font-semibold tracking-[0.3em] uppercase">
          Contact
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">
          Let&apos;s talk about an opportunity.
        </h2>
        <p className="text-sand max-w-auto mt-4">
          I&apos;m actively looking for junior/entry-level frontend roles. If
          you&apos;re hiring, or just want to chat about frontend development,
          feel free to reach out.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="mailto:hello@tranhoangphucttb.dev"
            className="text-success decoration-camel min-w-0 text-lg font-medium break-all sm:text-xl lg:text-2xl"
          >
            hello@tranhoangphucttb.dev
          </a>
          <CopyButton value="hello@tranhoangphucttb.dev" />
        </div>

        {/* <div className="border-border/40 text-sand/90 mt-6 flex flex-wrap items-center gap-5 border-t pt-6 text-sm">
          <a
            href="https://github.com/hphuc112"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cream flex items-center gap-2 transition-colors"
          >
            <SiGithub className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/tranhoangphucttb/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cream flex items-center gap-2 transition-colors"
          >
            <FaLinkedin className="h-4 w-4" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cream transition-colors"
          >
            Download Resume
          </a>
        </div> */}
      </div>
    </section>
  );
}
