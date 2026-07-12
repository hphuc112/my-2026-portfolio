// import { testimonials } from "@/lib/data";
// import { Card } from "@/components/ui/Card";

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
      {/* <div className="mb-8 max-w-2xl">
        <p className="text-success text-sm font-semibold tracking-[0.3em] uppercase">
          Testimonials
        </p>
        <h2 className="text-foreground mt-3 text-3xl font-semibold tracking-tight">
          Trusted by teams building in public.
        </h2>
      </div> */}
      {/* <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <Card key={item.author} className="space-y-4">
            <p className="text-foreground/70">“{item.quote}”</p>
            <div>
              <p className="text-foreground font-semibold">{item.author}</p>
              <p className="text-foreground/60 text-sm">{item.role}</p>
            </div>
          </Card>
        ))}
      </div> */}
    </section>
  );
}
