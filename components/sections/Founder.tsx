import { Camera } from "lucide-react";
import { Txt } from "@/components/ui/Txt";
import { Eyebrow, Heading, Section } from "@/components/ui/Section";
import { founder } from "@/content/site";

export function Founder() {
  return (
    <Section id="gruender" tone="ice" labelledBy="gruender-title">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Foto-Platzhalter */}
        <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[460px]">
          <div className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-[24px] bg-gradient-to-br from-white to-[#d6ecf3] ring-1 ring-line">
            <svg aria-hidden className="absolute inset-x-0 bottom-0 w-full opacity-60" viewBox="0 0 400 120" fill="none">
              {[0, 1, 2].map((i) => (
                <path key={i} d={`M0 ${50 + i * 22}c50-20 100-20 150 0s100 20 150 0 75-20 100-10`} stroke="#8FD3E3" strokeWidth="2" />
              ))}
            </svg>
            <div className="relative flex flex-col items-center gap-3 text-muted">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-petrol ring-1 ring-line">
                <Camera size={28} strokeWidth={1.75} aria-hidden />
              </span>
              <span className="text-[13px]">
                <Txt>[Foto des Gründers]</Txt>
              </span>
            </div>
          </div>
        </div>

        <div>
          <Eyebrow>{founder.eyebrow}</Eyebrow>
          <Heading id="gruender-title" text={founder.title} />
          <figure className="mt-10">
            <blockquote className="relative border-l-[3px] border-petrol pl-6 text-[24px] font-light leading-snug text-navy sm:text-[28px]">
              „<Txt>{founder.quote}</Txt>“
            </blockquote>
            <figcaption className="mt-8 grid gap-3 pl-[27px]">
              {founder.people.map((p, i) => (
                <p key={i} className="text-[16px] text-muted">
                  <b className="text-navy">
                    <Txt>{p.name}</Txt>
                  </b>{" "}
                  · <Txt>{p.role}</Txt>
                </p>
              ))}
            </figcaption>
          </figure>
        </div>
      </div>
    </Section>
  );
}
