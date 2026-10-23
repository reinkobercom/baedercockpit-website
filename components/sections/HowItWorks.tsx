import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow, Heading, Section } from "@/components/ui/Section";
import { howItWorks } from "@/content/site";

export function HowItWorks() {
  return (
    <Section id="ablauf" tone="white" labelledBy="ablauf-title">
      <div className="mx-auto max-w-[760px] text-center">
        <Eyebrow>{howItWorks.eyebrow}</Eyebrow>
        <Heading id="ablauf-title" text={howItWorks.title} accent={howItWorks.titleAccent} />
      </div>

      <div className="relative mt-14 lg:mt-20">
        {/* Wellenlinie als Verbindung (Desktop) */}
        <svg aria-hidden className="absolute left-[16%] right-[16%] top-8 hidden h-6 w-[68%] md:block" viewBox="0 0 600 24" preserveAspectRatio="none" fill="none">
          <path d="M0 12c25-10 50-10 75 0s50 10 75 0 50-10 75 0 50 10 75 0 50-10 75 0 50 10 75 0 50-10 75 0 50 10 75 0" stroke="#1B8AA6" strokeWidth="1.5" strokeDasharray="4 6" vectorEffect="non-scaling-stroke" />
        </svg>
        {/* vertikale Linie (mobil) */}
        <div aria-hidden className="absolute bottom-8 left-8 top-8 w-px border-l border-dashed border-petrol/50 md:hidden" />

        <ol className="relative grid gap-10 md:grid-cols-3 md:gap-8">
          {howItWorks.steps.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={i * 0.1} className="flex gap-5 md:flex-col md:items-center md:text-center">
                <span className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-[20px] bg-white text-petrol ring-1 ring-line shadow-[0_1px_2px_rgba(11,58,91,.06),0_12px_32px_rgba(11,58,91,.08)]">
                  <Icon name={s.icon} size={26} />
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-navy text-[12px] font-bold text-white">
                    {i + 1}
                  </span>
                </span>
                <div className="md:mt-6 md:max-w-[300px]">
                  <h3 className="t-h3 text-navy">{s.title}</h3>
                  <p className="mt-2 text-muted">{s.text}</p>
                  {s.note && <p className="mt-3 text-[13px] italic leading-snug text-muted">{s.note}</p>}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
