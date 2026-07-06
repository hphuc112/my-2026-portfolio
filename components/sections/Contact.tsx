import { Button } from "@/components/ui/Button";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-slate-900 p-10 text-white shadow-xl">
        <p className="text-sm font-semibold tracking-[0.3em] text-slate-400 uppercase">
          Contact
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">
          Let&apos;s build something thoughtful together.
        </h2>
        <p className="mt-4 max-w-2xl text-slate-300">
          If you&apos;re launching a product, refreshing an interface, or need a
          reliable frontend partner, I&apos;d love to hear about it.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="mailto:Phuc Tran@example.com">Email me</Button>
          <Button href="https://www.linkedin.com" variant="secondary">
            LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
}
