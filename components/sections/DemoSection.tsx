import { Check } from "lucide-react";
import { DemoForm } from "@/components/demo/DemoForm";
import { Eyebrow, Heading } from "@/components/ui/Section";
import { demo } from "@/content/site";

export function DemoSection() {
  return (
    <section id="demo" aria-labelledby="demo-title" className="section-y relative overflow-hidden bg-navy text-white">
      <svg aria-hidden className="pointer-events-none absolute -left-20 bottom-0 w-[900px] opacity-[0.12]" viewBox="0 0 900 260" fill="none">
        {[0, 1, 2, 3, 4].map((i) => (
          <path key={i} d={`M0 ${80 + i * 34}c75-30 150-30 225 0s150 30 225 0 150-30 225 0 150 30 225 0`} stroke="#8FD3E3" strokeWidth="1.5" />
        ))}
      </svg>
      <div className="container-bc relative grid items-start gap-12 lg:grid-cols-[45fr_55fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:pt-6">
          <Eyebrow dark>{demo.eyebrow}</Eyebrow>
          <Heading id="demo-title" dark text={demo.title} accent={demo.titleAccent} />
          <ul className="mt-10 grid gap-4">
            {demo.points.map((p) => (
              <li key={p} className="flex items-center gap-3.5 text-[18px] font-bold text-white">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-hellblau/15 text-hellblau">
                  <Check size={16} strokeWidth={3} aria-hidden />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[24px] bg-white p-6 text-navy shadow-[0_24px_64px_rgba(0,0,0,.28)] sm:p-9">
          <DemoForm />
        </div>
      </div>
    </section>
  );
}
