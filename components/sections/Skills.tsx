import { skills } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";

export function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
      <div className="mb-8 max-w-2xl">
        <p className="text-success text-sm font-semibold tracking-[0.3em] uppercase">
          Skills
        </p>
        <h2 className="text-foreground mt-3 text-3xl font-semibold tracking-tight">
          The stack I reach for most.
        </h2>
      </div>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </div>
    </section>
  );
}
