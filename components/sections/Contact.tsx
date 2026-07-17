import { Reveal } from "@/components/motion/Reveal";
import { CopyButton } from "@/components/ui/CopyButton";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
      <Reveal>
        <div className="border-border bg-foreground text-background rounded-3xl border p-10 shadow-xl">
          <SectionHeader
            inverted
            label="Contact"
            title="Let's talk about an opportunity."
            description="I'm actively looking for junior/entry-level frontend roles. If you're hiring, or just want to chat about frontend development, feel free to reach out."
          />

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="mailto:hello@tranhoangphucttb.dev"
              className="text-success decoration-camel min-w-0 text-lg font-medium break-all underline underline-offset-4 sm:text-xl lg:text-2xl"
            >
              hello@tranhoangphucttb.dev
            </a>
            <CopyButton value="hello@tranhoangphucttb.dev" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
