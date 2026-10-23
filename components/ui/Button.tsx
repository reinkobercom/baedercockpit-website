"use client";

import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { site } from "@/content/site";
import { useDemoPrefill } from "@/lib/demo-prefill";

type Variant = "primary" | "invert" | "outline";

const base =
  "group inline-flex h-[52px] items-center justify-center gap-2 rounded-[12px] px-7 text-[16px] font-bold transition-[background-color,box-shadow,transform,color] duration-200 ease-out active:scale-[0.98] focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary: "bg-navy text-white shadow-[0_1px_2px_rgba(11,58,91,.12),0_8px_20px_rgba(11,58,91,.18)] hover:bg-navy-900",
  invert: "bg-white text-navy hover:bg-eisblau",
  outline: "border border-line bg-white text-navy hover:border-petrol hover:bg-eisblau",
};

/** Einheitlicher CTA „Demo vereinbaren“ – scrollt zu #demo und belegt optional das Formular vor. */
export function DemoButton({
  variant = "primary",
  label = site.cta.label,
  role,
  className = "",
  size = "md",
  children,
}: {
  variant?: Variant;
  label?: string;
  role?: string;
  className?: string;
  size?: "md" | "sm";
  children?: ReactNode;
}) {
  const { requestDemo } = useDemoPrefill();
  return (
    <a
      href="#demo"
      onClick={(e) => {
        e.preventDefault();
        requestDemo(role ? { role } : undefined);
      }}
      className={`${base} ${variants[variant]} ${size === "sm" ? "h-11 px-4 text-[15px] sm:h-[46px] sm:px-5" : ""} ${className}`}
    >
      {children ?? label}
      <ArrowRight
        size={18}
        strokeWidth={2.25}
        aria-hidden
        className="transition-transform duration-200 group-hover:translate-x-0.5"
      />
    </a>
  );
}

export function Reassurance({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
  return (
    <p className={`mt-3 text-[14px] ${dark ? "text-white/70" : "text-muted"} ${className}`}>{site.cta.reassurance}</p>
  );
}

/** CTA-Block mit Entschärfung darunter */
export function CtaBlock({ dark = false, center = false, role, label }: { dark?: boolean; center?: boolean; role?: string; label?: string }) {
  return (
    <div className={`flex flex-col ${center ? "items-center text-center" : "items-start"}`}>
      <DemoButton variant={dark ? "invert" : "primary"} role={role} label={label} />
      <Reassurance dark={dark} />
    </div>
  );
}
