import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects } from "@/lib/data";

const statusLabel: Record<string, string> = {
  live: "In progress",
  "in-progress": "In progress",
  "coming-soon": "Coming soon",
};

const linkClassName =
  "text-success font-medium underline underline-offset-4 decoration-camel/60 hover:opacity-80 transition-opacity";

export function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20"
    >
      <Reveal>
        <SectionHeader
          className="mb-8"
          label="Projects"
          title="I'm building real projects to sharpen my skills and show what I can do - not just class assignments."
        />
      </Reveal>
      <StaggerGroup className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <StaggerItem key={project.title}>
            <Card
              image={project.image}
              imageAlt={project.title}
              className="transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-foreground text-xl font-semibold">
                    {project.title}
                  </h3>
                  <Badge>{statusLabel[project.status]}</Badge>
                </div>

                <p className="text-foreground/70 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-accent/70 text-foreground/70 rounded-full px-3 py-1 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-1">
                  {project.stack.map(({ name, Icon }) => (
                    <div
                      key={name}
                      className="group/stack relative flex items-center"
                    >
                      {Icon ? (
                        <Icon className="text-foreground/60 hover:text-foreground h-5 w-5 transition-colors" />
                      ) : (
                        <span className="text-foreground/60 hover:text-foreground text-xs font-medium transition-colors">
                          {name}
                        </span>
                      )}
                      <span className="sr-only">{name}</span>

                      {Icon && (
                        <span className="bg-foreground text-background pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded px-2 py-1 text-xs whitespace-nowrap opacity-0 transition-opacity duration-200 group-hover/stack:opacity-100">
                          {name}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 pt-2 text-sm font-medium">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClassName}
                    >
                      Still want a live demo?
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${linkClassName} text-foreground/70`}
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
