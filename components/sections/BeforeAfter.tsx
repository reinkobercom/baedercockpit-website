"use client";

import { Check, FileSpreadsheet, MessageCircle, NotebookPen, Stamp, PiggyBank, ArrowRight } from "lucide-react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { LogoMark } from "@/components/brand/LogoMark";
import { Eyebrow, Heading } from "@/components/ui/Section";
import { beforeAfter } from "@/content/site";

const icons = [FileSpreadsheet, MessageCircle, NotebookPen, Stamp, PiggyBank];
// verstreute Ausgangslage (Desktop)
const scatter = [
  { x: "2%", y: "4%", r: -6 },
  { x: "50%", y: "0%", r: 5 },
  { x: "0%", y: "38%", r: 3 },
  { x: "60%", y: "34%", r: -4 },
  { x: "26%", y: "72%", r: -2 },
];

export function BeforeAfter() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -25% 0px" });
  const reduce = useReducedMotion();

  return (
    <section id="vorher-nachher" aria-labelledby="vn-title" className="section-y relative overflow-hidden bg-navy text-white">
      <div className="container-bc">
        <div className="mx-auto max-w-[760px] text-center">
          <Eyebrow dark>{beforeAfter.eyebrow}</Eyebrow>
          <Heading id="vn-title" dark text={beforeAfter.title} />
        </div>

        <div ref={ref} className="mt-14 grid items-center gap-10 lg:mt-20 lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
          {/* Heute */}
          <div>
            <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.12em] text-white/60">Heute</p>
            {/* Mobil: einfache Liste */}
            <ul className="grid gap-2.5 lg:hidden">
              {beforeAfter.before.map((t, i) => {
                const I = icons[i];
                return (
                  <li key={t} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white/70">
                    <I size={18} strokeWidth={1.75} aria-hidden /> <span className="line-through decoration-white/30">{t}</span>
                  </li>
                );
              })}
            </ul>
            {/* Desktop: verstreut, sortiert sich beim Einscrollen */}
            <div className="relative hidden h-[340px] lg:block" aria-hidden>
              {beforeAfter.before.map((t, i) => {
                const I = icons[i];
                const s = scatter[i];
                return (
                  <motion.div
                    key={t}
                    className="absolute flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-[15px] text-white/75 backdrop-blur"
                    style={{ left: s.x, top: s.y }}
                    initial={{ rotate: s.r, opacity: 0.6, x: 0 }}
                    animate={
                      inView && !reduce
                        ? { rotate: 0, x: 90, opacity: 0.18, transition: { delay: 0.35 + i * 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] } }
                        : { rotate: s.r, opacity: 0.6 }
                    }
                  >
                    <I size={18} strokeWidth={1.75} />
                    {t}
                  </motion.div>
                );
              })}
            </div>
            {/* Screenreader */}
            <p className="sr-only">Heute: {beforeAfter.before.join(", ")}.</p>
          </div>

          <div className="flex justify-center text-hellblau" aria-hidden>
            <span className="flex h-12 w-12 rotate-90 items-center justify-center rounded-full border border-hellblau/30 lg:rotate-0">
              <ArrowRight size={22} strokeWidth={2} />
            </span>
          </div>

          {/* Mit BäderCockpit */}
          <div>
            <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.12em] text-hellblau">Mit BäderCockpit</p>
            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: reduce ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[24px] bg-white p-6 text-navy shadow-[0_24px_64px_rgba(0,0,0,.25)] sm:p-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <LogoMark size={36} />
                <span className="text-[20px] leading-none">
                  Bäder<b>Cockpit</b>
                </span>
              </div>
              <ul className="grid gap-3.5">
                {beforeAfter.after.map((t, i) => (
                  <motion.li
                    key={t}
                    initial={{ opacity: 0, x: reduce ? 0 : -8 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: reduce ? 0 : 0.9 + i * 0.12, duration: 0.45 }}
                    className="flex items-center gap-3 border-b border-line pb-3.5 text-[17px] font-bold last:border-b-0 last:pb-0"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-petrol text-white">
                      <Check size={15} strokeWidth={3} aria-hidden />
                    </span>
                    {t}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        <p className="mt-14 text-center text-[20px] font-bold text-white lg:mt-16 lg:text-[24px]">
          {beforeAfter.closing}
        </p>
      </div>
    </section>
  );
}
