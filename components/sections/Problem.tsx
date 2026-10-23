import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow, Section } from "@/components/ui/Section";
import { problem } from "@/content/site";

export function Problem() {
  return (
    <Section id="problem" tone="navy" labelledBy="problem-title" className="overflow-hidden">
      <svg aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-full w-full opacity-[0.07]" preserveAspectRatio="none" viewBox="0 0 1200 400">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <path key={i} d={`M0 ${60 + i * 60}c100-40 200-40 300 0s200 40 300 0 200-40 300 0 200 40 300 0`} stroke="#8FD3E3" strokeWidth="1.5" fill="none" />
        ))}
      </svg>
      <div className="relative mx-auto max-w-[880px] text-center">
        <Eyebrow dark>{problem.eyebrow}</Eyebrow>
        <h2 id="problem-title" className="t-h2 text-balance text-white">
          {problem.title}
        </h2>
      </div>
      <div className="relative mx-auto mt-12 grid max-w-[1040px] gap-4 md:grid-cols-3 md:gap-5">
        {problem.cards.map((c, i) => (
          <Reveal key={c.text} delay={i * 0.08}>
            <div className="h-full rounded-[20px] border border-hellblau/20 bg-white/[0.04] p-6 md:p-7">
              <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-hellblau/12 text-hellblau">
                <Icon name={c.icon} size={22} />
              </span>
              <p className="text-[18px] font-bold leading-snug text-white">{c.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
