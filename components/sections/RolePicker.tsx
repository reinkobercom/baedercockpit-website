"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { DemoButton, Reassurance } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Txt } from "@/components/ui/Txt";
import { Eyebrow, Heading } from "@/components/ui/Section";
import { MockupView } from "@/components/mockups/MockupView";
import { rolePicker, roles } from "@/content/roles";

export function RolePicker() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // ?rolle=… aus der URL übernehmen (teilbar, z. B. für Mailings)
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("rolle");
    const i = roles.findIndex((r) => r.id === id);
    if (i >= 0) setActive(i);
  }, []);

  const choose = (i: number) => {
    setActive(i);
    const url = new URL(window.location.href);
    url.searchParams.set("rolle", roles[i].id);
    window.history.replaceState(null, "", url.toString());
  };

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const delta = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : e.key === "ArrowLeft" || e.key === "ArrowUp" ? -1 : 0;
    if (!delta && e.key !== "Home" && e.key !== "End") return;
    e.preventDefault();
    const next = e.key === "Home" ? 0 : e.key === "End" ? roles.length - 1 : (i + delta + roles.length) % roles.length;
    choose(next);
    tabRefs.current[next]?.focus();
  };

  const r = roles[active];

  return (
    <section id="rollen" aria-labelledby="rollen-title" className="section-y bg-eisblau text-navy">
      <div className="container-bc">
        <div className="mx-auto max-w-[720px] text-center">
          <Eyebrow>{rolePicker.eyebrow}</Eyebrow>
          <Heading id="rollen-title" text={rolePicker.title} accent={rolePicker.titleAccent} />
          <p className="body-l mt-4 text-muted">{rolePicker.subline}</p>
        </div>

        {/* Rollen-Karten */}
        <div
          role="tablist"
          aria-label="Rolle wählen"
          className="no-scrollbar -mx-4 mt-10 flex snap-x gap-3 overflow-x-auto px-4 pb-1 md:mx-0 md:grid md:grid-cols-4 md:gap-4 md:overflow-visible md:px-0"
        >
          {roles.map((role, i) => {
            const on = i === active;
            return (
              <button
                key={role.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                id={`rolle-tab-${role.id}`}
                aria-selected={on}
                aria-controls="rolle-panel"
                tabIndex={on ? 0 : -1}
                onClick={() => choose(i)}
                onKeyDown={(e) => onKey(e, i)}
                className={`flex shrink-0 snap-start items-center gap-3 rounded-[20px] p-4 text-left transition-[background-color,box-shadow,color,transform] duration-300 md:flex-col md:items-start md:gap-5 md:p-6 ${
                  on
                    ? "bg-navy text-white shadow-[0_12px_32px_rgba(11,58,91,.25)]"
                    : "bg-white text-navy ring-1 ring-line hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(11,58,91,.08)]"
                }`}
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl md:h-12 md:w-12 ${
                    on ? "bg-white/10 text-hellblau" : "bg-eisblau text-petrol"
                  }`}
                >
                  <Icon name={role.icon} size={22} />
                </span>
                <span className="whitespace-nowrap text-[15px] font-bold leading-snug md:whitespace-normal md:text-[17px]">{role.title}</span>
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <div
          id="rolle-panel"
          role="tabpanel"
          aria-labelledby={`rolle-tab-${r.id}`}
          className="mt-6 overflow-hidden rounded-[28px] bg-white ring-1 ring-line shadow-[0_1px_2px_rgba(11,58,91,.06),0_12px_32px_rgba(11,58,91,.08)]"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: reduce ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid items-center gap-10 p-6 sm:p-10 lg:grid-cols-2 lg:gap-14 lg:p-14"
            >
              <div>
                <h3 className="t-h2 text-[clamp(1.6rem,1.2rem+1.4vw,2.25rem)]! text-navy">{r.headline}</h3>
                <ul className="mt-8 grid gap-6">
                  {r.benefits.map((b) => (
                    <li key={b.title} className="flex gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-eisblau text-petrol">
                        <Icon name={b.icon} size={21} />
                      </span>
                      <span>
                        <span className="block text-[17px] font-bold text-navy">{b.title}</span>
                        <span className="mt-0.5 block text-[16px] text-muted">
                          <Txt>{b.text}</Txt>
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <DemoButton role={r.id} label={`Demo für ${r.ctaLabel} vereinbaren`} className="max-w-full h-auto! min-h-[52px] py-3 text-left" />
                  <Reassurance />
                </div>
              </div>
              <div className="flex min-h-[420px] items-center justify-center rounded-[24px] bg-gradient-to-br from-eisblau to-white p-5 sm:p-8">
                <MockupView id={r.mockup} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
