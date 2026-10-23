import { DevBadge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Txt } from "@/components/ui/Txt";
import { Eyebrow, Heading, Section } from "@/components/ui/Section";
import { roadmap, roadmapItems } from "@/content/features";

export function Roadmap() {
  const items = roadmapItems();
  return (
    <Section id="roadmap" tone="ice" labelledBy="roadmap-title">
      <div className="max-w-[640px]">
        <Eyebrow>{roadmap.eyebrow}</Eyebrow>
        <Heading id="roadmap-title" text={roadmap.title} />
      </div>
      <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {items.map((f, i) => (
          <li key={f.id}>
            <Reveal delay={i * 0.08} className="h-full">
              <div className="relative flex h-full flex-col rounded-[20px] bg-white p-6 ring-1 ring-line">
                <div className="mb-8 flex items-start justify-between gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-eisblau text-petrol">
                    <Icon name={f.roadmap.icon} size={23} />
                  </span>
                  <DevBadge />
                </div>
                <h3 className="t-h3 hyphens-auto break-words text-navy">{f.roadmap.title}</h3>
                <p className="mt-2 text-muted">{f.roadmap.text}</p>
                {f.roadmap.quarter && (
                  <p className="mt-auto pt-5 text-[13px] font-bold text-muted">
                    <Txt>{f.roadmap.quarter}</Txt>
                  </p>
                )}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
