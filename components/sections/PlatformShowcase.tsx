"use client";

import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import { Icon } from "@/components/ui/Icon";
import { Eyebrow, Heading } from "@/components/ui/Section";
import { MockupView } from "@/components/mockups/MockupView";
import { modules, platform } from "@/content/modules";

export function PlatformShowcase() {
  const [active, setActive] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const scrollArea = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const lock = useRef(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const on = () => setIsDesktop(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  const { scrollYProgress } = useScroll({ target: scrollArea, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    if (!isDesktop || lock.current) return;
    const i = Math.min(modules.length - 1, Math.max(0, Math.floor(p * modules.length)));
    setActive(i);
  });

  const select = useCallback(
    (i: number) => {
      setActive(i);
      const el = scrollArea.current;
      if (isDesktop && el) {
        // Scrollposition passend zum Modul setzen, damit Scroll und Auswahl übereinstimmen
        const top = el.getBoundingClientRect().top + window.scrollY;
        const range = el.offsetHeight - window.innerHeight;
        lock.current = true;
        window.scrollTo({ top: top + ((i + 0.5) / modules.length) * range, behavior: reduce ? "auto" : "smooth" });
        window.setTimeout(() => (lock.current = false), 700);
      }
    },
    [isDesktop, reduce],
  );

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const keys: Record<string, number> = {
      ArrowDown: 1,
      ArrowRight: 1,
      ArrowUp: -1,
      ArrowLeft: -1,
    };
    let next: number | null = null;
    if (e.key in keys) next = (i + keys[e.key] + modules.length) % modules.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = modules.length - 1;
    if (next === null) return;
    e.preventDefault();
    select(next);
    tabRefs.current[next]?.focus();
  };

  const m = modules[active];

  return (
    <section id="plattform" aria-labelledby="plattform-title" className="bg-white text-navy">
      <div className="container-bc pt-[72px] lg:pt-32">
        <div className="max-w-[640px]">
          <Eyebrow>{platform.eyebrow}</Eyebrow>
          <Heading id="plattform-title" text={platform.title} accent={platform.titleAccent} />
        </div>
      </div>

      <div ref={scrollArea} className="relative lg:h-[230vh]">
        <div className="container-bc pb-[72px] pt-10 lg:sticky lg:top-[72px] lg:flex lg:min-h-[calc(100vh-72px)] lg:items-center lg:pb-16 lg:pt-6">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16">
            {/* Tabs */}
            <div
              role="tablist"
              aria-label="Module"
              aria-orientation={isDesktop ? "vertical" : "horizontal"}
              className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 lg:mx-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:px-0"
            >
              {modules.map((mod, i) => {
                const on = i === active;
                return (
                  <button
                    key={mod.id}
                    ref={(el) => {
                      tabRefs.current[i] = el;
                    }}
                    role="tab"
                    id={`tab-${mod.id}`}
                    aria-selected={on}
                    aria-controls="plattform-panel"
                    tabIndex={on ? 0 : -1}
                    onClick={() => select(i)}
                    onKeyDown={(e) => onKey(e, i)}
                    className={`group relative shrink-0 text-left transition-colors duration-300 lg:w-full lg:rounded-[16px] lg:py-5 lg:pl-7 lg:pr-5 ${
                      on
                        ? "rounded-full bg-navy px-4 py-2.5 text-white lg:bg-eisblau lg:text-navy"
                        : "rounded-full bg-eisblau px-4 py-2.5 text-navy lg:bg-transparent lg:text-muted lg:hover:bg-eisblau/60"
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`absolute left-0 top-4 bottom-4 hidden w-[3px] rounded-full transition-colors duration-300 lg:block ${
                        on ? "bg-petrol" : "bg-line"
                      }`}
                    />
                    <span className="flex items-center gap-3">
                      <span
                        className={`hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 lg:flex ${
                          on ? "bg-white text-petrol ring-1 ring-line" : "bg-eisblau text-muted"
                        }`}
                      >
                        <Icon name={mod.icon} size={20} />
                      </span>
                      <span className="whitespace-nowrap text-[15px] font-bold lg:text-[20px]">{mod.title}</span>
                    </span>
                    <span
                      className={`hidden overflow-hidden text-[16px] leading-relaxed text-muted transition-[grid-template-rows,opacity] duration-300 lg:grid ${
                        on ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <span className="min-h-0 pl-[52px]">{mod.text}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Panel */}
            <div
              id="plattform-panel"
              role="tabpanel"
              aria-labelledby={`tab-${m.id}`}
              className="relative"
            >
              <p className="mb-6 text-[17px] text-muted lg:hidden">{m.text}</p>
              <div className="relative flex min-h-[600px] items-center justify-center rounded-[28px] bg-gradient-to-br from-eisblau via-white to-eisblau p-6 ring-1 ring-line sm:p-10 lg:min-h-[640px]">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: reduce ? 0 : 12, scale: reduce ? 1 : 0.985 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: reduce ? 0 : -8 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full"
                  >
                    <MockupView id={m.mockup} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
