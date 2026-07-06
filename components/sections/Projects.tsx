import { projects } from "@/lib/data";
import { Card } from "@/components/ui/Card";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
      <div className="mb-8 max-w-2xl">
        <p className="text-sm font-semibold tracking-[0.3em] text-sky-600 uppercase">
          Selected projects
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
          A few launches I&apos;ve helped shape.
        </h2>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
              {project.description}
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-slate-900">
                {project.title}
              </h3>
              <p className="text-sm text-slate-500">{project.stack}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
