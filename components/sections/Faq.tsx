import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { faqs } from "@/lib/data";

export function Faq() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
      <Reveal>
        <SectionHeader
          className="mb-8"
          label="FAQ"
          title="Quick answers before we start."
        />
      </Reveal>
      <StaggerGroup className="max-w-3xl space-y-3">
        {faqs.map((item) => (
          <StaggerItem key={item.question}>
            <Accordion item={item} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
