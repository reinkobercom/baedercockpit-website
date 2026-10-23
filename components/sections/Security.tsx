import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow, Heading, Section } from "@/components/ui/Section";
import { security } from "@/content/site";

export function Security() {
  return (
    <Section id="sicherheit" tone="white" labelledBy="sicherheit-title">
      <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
        <div className="lg:pt-2">
          <Eyebrow>{security.eyebrow}</Eyebrow>
          <Heading id="sicherheit-title" text={security.title} />
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {security.items.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={i * 0.06} className="h-full">
                <div className="h-full rounded-[20px] bg-eisblau/60 p-6 ring-1 ring-line">
                  <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-petrol ring-1 ring-line">
                    <Icon name={s.icon} size={22} />
                  </span>
                  <h3 className="t-h3 text-navy">{s.title}</h3>
                  <p className="mt-1.5 text-muted">
                    {s.text}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
