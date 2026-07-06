import { testimonials } from "@/lib/data";
import { Card } from "@/components/ui/Card";

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
      <div className="mb-8 max-w-2xl">
        <p className="text-camel text-sm font-semibold tracking-[0.3em] uppercase">
          Testimonials
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-800">
          Trusted by founders and teams building in public.
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <Card key={item.author} className="space-y-4">
            <p className="text-stone-600">“{item.quote}”</p>
            <div>
              <p className="font-semibold text-stone-800">{item.author}</p>
              <p className="text-sm text-stone-500">{item.role}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
