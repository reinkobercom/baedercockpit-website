"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import type { PoolTypeId } from "@/content/hero";

/**
 * Gemeinsamer Zustand zwischen Hero-Frage, Rollen-Auswähler und Demo-Formular.
 * `nonce` erhöht sich bei jeder neuen Vorbelegung, damit das Formular reagieren kann.
 */
type Prefill = { poolType?: PoolTypeId; role?: string; nonce: number };

type Ctx = Prefill & {
  requestDemo: (data?: { poolType?: PoolTypeId; role?: string }) => void;
};

const DemoPrefillContext = createContext<Ctx | null>(null);

export function scrollToDemo() {
  const el = document.getElementById("demo");
  if (!el) return;
  el.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  // Fokus in das Formular setzen (ohne erneutes Springen)
  window.setTimeout(() => {
    const target = document.getElementById("demo-form-heading");
    target?.focus({ preventScroll: true });
  }, 600);
}

export function DemoPrefillProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<Prefill>({ nonce: 0 });

  const requestDemo = useCallback((data?: { poolType?: PoolTypeId; role?: string }) => {
    setState((s) => ({
      poolType: data?.poolType ?? s.poolType,
      role: data?.role ?? s.role,
      nonce: s.nonce + 1,
    }));
    scrollToDemo();
  }, []);

  const value = useMemo(() => ({ ...state, requestDemo }), [state, requestDemo]);
  return <DemoPrefillContext.Provider value={value}>{children}</DemoPrefillContext.Provider>;
}

export function useDemoPrefill() {
  const ctx = useContext(DemoPrefillContext);
  if (!ctx) throw new Error("useDemoPrefill muss innerhalb von DemoPrefillProvider verwendet werden");
  return ctx;
}
