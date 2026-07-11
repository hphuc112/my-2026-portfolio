import { projects } from "@/lib/data";
import { Card } from "@/components/ui/Card";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
      <div className="mb-8 max-w-2xl">
        <p className="text-camel text-sm font-semibold tracking-[0.3em] uppercase">
          Projects
        </p>
        <h2 className="text-foreground mt-3 text-3xl font-semibold tracking-tight">
          I&apos;m building real projects to sharpen my skills and show what I
          can do - not just class assignments.
        </h2>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} className="space-y-4">
            <div className="border-border bg-accent/70 text-foreground/70 rounded-2xl border p-6 text-sm">
              {project.description}
            </div>
            <div className="space-y-2">
              <h3 className="text-foreground text-xl font-semibold">
                {project.title}
              </h3>
              <p className="text-foreground/60 text-sm">{project.stack}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
