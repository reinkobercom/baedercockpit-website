"use client";

import { useEffect, useState } from "react";
import { DemoButton } from "@/components/ui/Button";
import { site } from "@/content/site";

/** Mobile CTA-Leiste: ab 30 % Scrolltiefe, ausgeblendet sobald #demo sichtbar ist. */
export function StickyCta() {
  const [deep, setDeep] = useState(false);
  const [demoVisible, setDemoVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setDeep(max > 0 && window.scrollY / max > 0.3);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const el = document.getElementById("demo");
    const io = el ? new IntersectionObserver(([e]) => setDemoVisible(e.isIntersecting), { threshold: 0.05 }) : null;
    if (el && io) io.observe(el);
    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
    };
  }, []);

  const show = deep && !demoVisible;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 bg-navy pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_24px_rgba(11,58,91,.25)] transition-transform duration-300 lg:hidden ${
        show ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
      aria-hidden={!show}
      inert={!show}
    >
      <div className="container-bc flex h-16 items-center justify-between gap-3">
        <span className="text-[13px] font-bold text-white/80">{site.cta.reassuranceShort}</span>
        <DemoButton variant="invert" size="sm" />
      </div>
    </div>
  );
}
