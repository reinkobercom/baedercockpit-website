"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { LogoMark } from "@/components/brand/LogoMark";
import { CtaBlock } from "@/components/ui/Button";
import { DevBadge } from "@/components/ui/Badge";
import { Eyebrow, Heading } from "@/components/ui/Section";
import { StatusIcon } from "@/components/ui/StatusIcon";
import { categories, comparison, featureGroups, statusLabel, type CategoryId, type Feature, type Status } from "@/content/features";

function BcCell({ f }: { f: Feature }) {
  return (
    <span className="flex flex-col items-center gap-1">
      <StatusIcon status={f.bc} strong />
      {f.bc === "dev" && <DevBadge className="px-2! py-0.5! text-[10.5px]!" />}
      {f.bcNote && <span className="text-[12px] font-bold text-muted">{f.bcNote}</span>}
    </span>
  );
}

function Legend() {
  const items: Status[] = ["yes", "partial", "dev", "no"];
  return (
    <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[14px] text-muted">
      {items.map((s) => (
        <li key={s} className="flex items-center gap-2">
          <StatusIcon status={s} size={18} />
          {statusLabel[s]}
        </li>
      ))}
    </ul>
  );
}

export function ComparisonTable() {
  const [cat, setCat] = useState<CategoryId>("kasse");
  const catLabel = categories.find((c) => c.id === cat)!.label;

  return (
    <section id="vergleich" aria-labelledby="vergleich-title" className="section-y bg-white text-navy">
      <div className="container-bc">
        <div className="mx-auto max-w-[760px] text-center">
          <Eyebrow>{comparison.eyebrow}</Eyebrow>
          <Heading id="vergleich-title" text={comparison.title} accent={comparison.titleAccent} />
          <p className="body-l mt-4 text-muted">{comparison.subline}</p>
        </div>

        <div className="mt-8">
          <Legend />
        </div>

        {/* ---------- Desktop: volle Tabelle ---------- */}
        <div className="mt-10 hidden overflow-x-auto lg:block">
          <table className="w-full min-w-[1040px] border-separate border-spacing-0 text-left">
            <caption className="sr-only">Funktionsumfang von BäderCockpit im Vergleich zu typischen Software-Kategorien</caption>
            <thead>
              <tr>
                <th scope="col" className="w-[26%] pb-4 align-bottom text-[13px] font-bold uppercase tracking-[0.1em] text-muted">
                  Funktion
                </th>
                {categories.map((c) => (
                  <th key={c.id} scope="col" className="px-2 pb-4 text-center align-bottom text-[13px] font-bold leading-snug text-muted">
                    {c.label}
                  </th>
                ))}
                <th
                  scope="col"
                  className="sticky right-0 w-[13%] rounded-t-[18px] bg-navy px-3 pb-4 pt-5 text-center align-bottom text-white"
                >
                  <span className="flex flex-col items-center gap-2">
                    <LogoMark variant="negative" size={26} />
                    <span className="text-[15px] font-bold">BäderCockpit</span>
                  </span>
                </th>
              </tr>
            </thead>
            {featureGroups.map((g, gi) => (
              <tbody key={g.title}>
                <tr>
                  <th scope="colgroup" colSpan={7} className="border-b border-line pb-2.5 pt-7 text-[15px] font-bold text-petrol">
                    {g.title}
                  </th>
                  <td className="sticky right-0 bg-eisblau" />
                </tr>
                {g.features.map((f, fi) => {
                  const last = gi === featureGroups.length - 1 && fi === g.features.length - 1;
                  return (
                    <tr key={f.id} className="group">
                      <th scope="row" className="border-b border-line py-3.5 pr-4 text-[16px] font-normal text-navy group-hover:bg-[#f6fafc]">
                        {f.label}
                      </th>
                      {categories.map((c) => (
                        <td key={c.id} className="border-b border-line px-2 py-3.5 align-middle group-hover:bg-[#f6fafc]">
                          <span className="flex justify-center">
                            <StatusIcon status={f.others[c.id]} />
                          </span>
                        </td>
                      ))}
                      <td
                        className={`sticky right-0 border-b border-white bg-eisblau px-3 py-3.5 text-center align-middle ${
                          last ? "rounded-b-[18px] border-b-0" : ""
                        }`}
                      >
                        <BcCell f={f} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            ))}
          </table>
        </div>

        {/* ---------- Mobil/Tablet: 2-Spalten-Vergleich ---------- */}
        <div className="mt-8 lg:hidden">
          <label htmlFor="vergleich-select" className="mb-2 block text-[14px] font-bold text-navy">
            Vergleichen mit:
          </label>
          <div className="relative">
            <select
              id="vergleich-select"
              value={cat}
              onChange={(e) => setCat(e.target.value as CategoryId)}
              className="h-[52px] w-full appearance-none rounded-[12px] border border-line bg-white pl-4 pr-12 text-[16px] font-bold text-navy"
            >
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label}
                </option>
              ))}
            </select>
            <ChevronDown size={20} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-petrol" aria-hidden />
          </div>

          <div className="mt-5 grid gap-3">
            {featureGroups.map((g, gi) => (
              <details key={g.title} open={gi < 2} className="group overflow-hidden rounded-[18px] bg-white ring-1 ring-line">
                <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-4 text-[16px] font-bold text-navy [&::-webkit-details-marker]:hidden">
                  {g.title}
                  <ChevronDown size={20} className="text-petrol transition-transform duration-200 group-open:rotate-180" aria-hidden />
                </summary>
                <table className="w-full border-t border-line text-left">
                  <caption className="sr-only">
                    {g.title}: {catLabel} im Vergleich zu BäderCockpit
                  </caption>
                  <thead>
                    <tr className="text-[12px] text-muted">
                      <th scope="col" className="px-4 py-2 font-bold">Funktion</th>
                      <th scope="col" className="w-[84px] px-1 py-2 text-center font-bold leading-tight">
                        {categories.find((c) => c.id === cat)!.short}
                      </th>
                      <th scope="col" className="w-[104px] bg-navy px-1 py-2 text-center font-bold text-white">BäderCockpit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {g.features.map((f) => (
                      <tr key={f.id} className="border-t border-line">
                        <th scope="row" className="px-4 py-3 text-[15px] font-normal leading-snug text-navy">{f.label}</th>
                        <td className="px-1 py-3 text-center">
                          <span className="inline-flex">
                            <StatusIcon status={f.others[cat]} />
                          </span>
                        </td>
                        <td className="bg-eisblau px-1 py-3 text-center">
                          <BcCell f={f} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </details>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-[720px] text-center text-[13px] leading-relaxed text-muted">{comparison.footnote}</p>

        <div className="mt-12 flex justify-center">
          <CtaBlock center />
        </div>
      </div>
    </section>
  );
}
