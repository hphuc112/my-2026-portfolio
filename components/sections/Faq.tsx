import { Accordion } from "@/components/ui/Accordion";
import { faqs } from "@/lib/data";

export function Faq() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
      <div className="mb-8 max-w-2xl">
        <p className="text-camel text-sm font-semibold tracking-[0.3em] uppercase">
          FAQ
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-800">
          Quick answers before we start.
        </h2>
      </div>
      <div className="max-w-3xl space-y-3">
        {faqs.map((item) => (
          <Accordion key={item.question} item={item} />
        ))}
      </div>
    </section>
  );
}
