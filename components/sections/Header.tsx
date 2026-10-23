"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { DemoButton } from "@/components/ui/Button";
import { site } from "@/content/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      id="top"
      className={`sticky top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled ? "bg-white/80 shadow-[0_1px_0_#D5E7EE] backdrop-blur-xl" : "bg-white/0"
      }`}
    >
      <div className="container-bc flex h-[72px] items-center justify-between">
        <a href="#hero" aria-label="BäderCockpit – zum Seitenanfang" className="rounded-lg">
          <Logo variant="color" showWordmark height={32} />
        </a>
        <span className="hidden sm:block">
          <DemoButton size="sm" />
        </span>
        <span className="sm:hidden">
          <DemoButton size="sm" label={site.cta.short} />
        </span>
      </div>
    </header>
  );
}
