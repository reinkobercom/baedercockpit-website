"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const fmt = new Intl.NumberFormat("de-DE");

/** Zählt einmalig hoch, sobald sichtbar (≤ 1,2 s). Startwert = Endwert bei reduzierter Bewegung. */
export function CountUp({ to, duration = 1.1, decimals = 0, prefix = "" }: { to: number; duration?: number; decimals?: number; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [val, setVal] = useState(to);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || reduce || started.current) return;
    started.current = true;
    setVal(0);
    const ctrl = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(v),
    });
    return () => ctrl.stop();
  }, [inView, reduce, to, duration]);

  const shown =
    decimals > 0
      ? val.toLocaleString("de-DE", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
      : fmt.format(Math.round(val));
  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {shown}
    </span>
  );
}
