import { LogoMark } from "@/components/brand/LogoMark";
import { Eyebrow, Heading, Section } from "@/components/ui/Section";
import { founder } from "@/content/site";

export function Founder() {
  return (
    <Section id="gruender" tone="ice" labelledBy="gruender-title">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Gründer-Duo (ohne Fotos: Initialen-Karten, Fotos können später ergänzt werden) */}
        <div className="relative mx-auto w-full max-w-[460px]">
          <div className="relative overflow-hidden rounded-[24px] bg-navy p-7 pb-24 sm:p-9 sm:pb-28">
            <svg aria-hidden className="absolute inset-x-0 -bottom-6 w-full opacity-25" viewBox="0 0 400 140" fill="none">
              {[0, 1, 2, 3].map((i) => (
                <path key={i} d={`M0 ${40 + i * 24}c50-20 100-20 150 0s100 20 150 0 75-20 100-10`} stroke="#8FD3E3" strokeWidth="2" />
              ))}
            </svg>
            <div className="relative mb-8 flex items-center gap-3">
              <LogoMark variant="negative" size={28} />
              <span className="text-[13px] font-bold uppercase tracking-[0.12em] text-hellblau">Gründer-Duo</span>
            </div>
            <ul className="relative grid gap-4">
              {founder.people.map((p, i) => (
                <li key={p.name} className="flex items-center gap-4 rounded-[18px] bg-white/[0.06] p-4 ring-1 ring-white/10 sm:p-5">
                  <span
                    aria-hidden
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-[24px] font-black ${
                      i === 0 ? "bg-hellblau text-navy" : "bg-petrol text-white"
                    }`}
                  >
                    {p.name[0]}
                  </span>
                  <span>
                    <span className="block text-[19px] font-bold text-white">{p.name}</span>
                    <span className="block text-[15px] leading-snug text-white/75">{p.role}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <Eyebrow>{founder.eyebrow}</Eyebrow>
          <Heading id="gruender-title" text={founder.title} />
          <figure className="mt-10">
            <blockquote className="border-l-[3px] border-petrol pl-6 text-[24px] font-light leading-snug text-navy sm:text-[28px]">
              „{founder.quote}“
            </blockquote>
            <figcaption className="mt-6 pl-[27px] text-[16px] font-bold text-navy">{founder.quoteBy}</figcaption>
          </figure>
        </div>
      </div>
    </Section>
  );
}
