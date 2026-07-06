export function Overview() {
  return (
    <section id="overview" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
      <div className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold tracking-[0.3em] text-sky-600 uppercase">
            Overview
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
            Design-led, development-ready, and easy to work with.
          </h2>
        </div>
        <div className="space-y-4 text-slate-600">
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
