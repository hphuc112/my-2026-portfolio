import { Button } from "@/components/ui/Button";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
      <div className="border-taupe text-cream rounded-3xl border bg-stone-800 p-10 shadow-xl">
        <p className="text-sand text-sm font-semibold tracking-[0.3em] uppercase">
          Contact
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">
          Let&apos;s build something thoughtful together.
        </h2>
        <p className="text-sand mt-4 max-w-2xl">
          If you&apos;re launching a product, refreshing an interface, or need a
          reliable frontend partner, I&apos;d love to hear about it.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="mailto:hello@tranhoangphucttb.dev"
            className="text-success decoration-camel text-2xl font-medium"
          >
            hello@tranhoangphucttb.dev
          </a>
          <CopyEmailButton email="hello@tranhoangphucttb.dev" />
        </div>
      </div>
    </section>
  );
}
