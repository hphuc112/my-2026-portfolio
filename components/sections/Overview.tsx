export function Overview() {
  return (
    <section id="overview" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
      <div className="border-taupe grid gap-8 rounded-3xl border bg-white/80 p-8 shadow-sm lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-camel text-sm font-semibold tracking-[0.3em] uppercase">
            Overview
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-800">
            Design-led, development-ready, and easy to work with.
          </h2>
        </div>
        <div className="space-y-4 text-stone-600">
          <p>
            I blend interface design, product thinking, and frontend development
            to build experiences that feel polished from first click to final
            handoff.
          </p>
          <p>
            My workflow is collaborative and lightweight, which makes it easier
            to move from concept to launch without friction.
          </p>
        </div>
      </div>
    </section>
  );
}
