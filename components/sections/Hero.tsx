"use client";

import { Check } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { DemoButton, Reassurance } from "@/components/ui/Button";
import { BrowserFrame, PhoneFrame } from "@/components/mockups/Frames";
import { CockpitOverview } from "@/components/mockups/CockpitOverview";
import { GuestApp } from "@/components/mockups/GuestApp";
import { hero, poolTypes } from "@/content/hero";
import { useDemoPrefill } from "@/lib/demo-prefill";

export function Hero() {
  const { requestDemo } = useDemoPrefill();
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section id="hero" aria-labelledby="hero-title" className="hero-glow relative -mt-[72px] overflow-hidden pt-[72px]">
      {/* feine Wellenlinien als Grund */}
      <svg aria-hidden className="pointer-events-none absolute -right-40 bottom-0 hidden w-[900px] opacity-[0.35] lg:block" viewBox="0 0 900 200" fill="none">
        {[0, 1, 2, 3].map((i) => (
          <path key={i} d={`M0 ${120 + i * 18}c75-30 150-30 225 0s150 30 225 0 150-30 225 0 150 30 225 0`} stroke="#8FD3E3" strokeWidth="1.2" opacity={1 - i * 0.2} />
        ))}
      </svg>

      <div className="container-bc relative grid items-center gap-12 pb-16 pt-10 sm:pt-14 lg:grid-cols-[55fr_45fr] lg:gap-10 lg:pb-28 lg:pt-20">
        {/* Text */}
        <div className="max-w-[620px]">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-[12px] font-bold uppercase tracking-[0.12em] text-[#136a80] ring-1 ring-line backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-petrol" />
            {hero.eyebrow}
          </p>
          <h1 id="hero-title" className="t-display text-navy">
            {hero.titleStart}
            <br />
            {hero.titleMid} <span className="text-petrol">{hero.titleAccent}</span>
          </h1>
          <p className="body-l mt-6 max-w-[560px] text-muted">{hero.subline}</p>

          <ul className="mt-6 grid gap-2.5">
            {hero.proof.map((p) => (
              <li key={p} className="flex items-center gap-3 text-[16px] font-bold text-navy sm:text-[17px]">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-petrol/12 text-petrol">
                  <Check size={14} strokeWidth={3} aria-hidden />
                </span>
                {p}
              </li>
            ))}
          </ul>

          {/* Micro-Commitment */}
          <div className="mt-9 rounded-[20px] bg-white/85 p-4 ring-1 ring-line backdrop-blur sm:p-5">
            <p id="hero-question" className="mb-3 text-[15px] font-bold text-navy">
              {hero.question}
            </p>
            <div role="group" aria-labelledby="hero-question" className="grid grid-cols-3 gap-2 sm:gap-3">
              {poolTypes.slice(0, 3).map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => requestDemo({ poolType: t.id })}
                  className="h-[52px] rounded-[12px] border border-line bg-white text-[15px] font-bold text-navy transition-colors duration-200 hover:border-petrol hover:bg-eisblau sm:text-[16px]"
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-1">
            <DemoButton />
            <Reassurance className="mt-0" />
          </div>
        </div>

        {/* Visual */}
        <div className="relative mx-auto w-full max-w-[560px] lg:mx-0">
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="lg:mr-16"
          >
            <BrowserFrame>
              <CockpitOverview compact />
            </BrowserFrame>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 24, rotate: 4 }}
            animate={{ opacity: 1, y: 0, rotate: 4 }}
            transition={{ duration: 0.8, ease, delay: 0.3 }}
            className="absolute -bottom-14 -right-3 hidden origin-bottom-left sm:block lg:-right-12"
          >
            <PhoneFrame width={200}>
              <div className="origin-top-left scale-[0.74]" style={{ width: `${100 / 0.74}%`, height: `${100 / 0.74}%` }}>
                <GuestApp screen="points" />
              </div>
            </PhoneFrame>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
