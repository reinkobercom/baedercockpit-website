"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { CtaBlock } from "@/components/ui/Button";
import { Txt } from "@/components/ui/Txt";
import { Heading } from "@/components/ui/Section";
import { faq, faqIntro } from "@/content/faq";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" aria-labelledby="faq-title" className="section-y bg-white text-navy">
      <div className="container-bc grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Heading id="faq-title" text={faqIntro.title} accent={faqIntro.titleAccent} />
          <p className="body-l mt-4 max-w-[400px] text-muted">{faqIntro.text}</p>
          <div className="mt-8">
            <CtaBlock />
          </div>
        </div>
        <div className="divide-y divide-line border-y border-line">
          {faq.map((item, i) => {
            const on = open === i;
            const id = `faq-${i}`;
            return (
              <div key={item.q}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={on}
                    aria-controls={`${id}-panel`}
                    id={`${id}-btn`}
                    onClick={() => setOpen(on ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left text-[17px] font-bold text-navy transition-colors hover:text-[#136a80] sm:py-6 sm:text-[18px]"
                  >
                    {item.q}
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${
                        on ? "bg-navy text-white" : "bg-eisblau text-navy"
                      }`}
                      aria-hidden
                    >
                      {on ? <Minus size={16} strokeWidth={2.5} /> : <Plus size={16} strokeWidth={2.5} />}
                    </span>
                  </button>
                </h3>
                <div
                  id={`${id}-panel`}
                  role="region"
                  aria-labelledby={`${id}-btn`}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="max-w-[620px] pb-6 pr-12 text-[16px] leading-relaxed text-muted sm:text-[17px]">
                      <Txt>{item.a}</Txt>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
