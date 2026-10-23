import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Txt } from "@/components/ui/Txt";
import { Footer } from "@/components/sections/Footer";

export function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro?: string;
  sections: { heading: string; lines: string[] }[];
}) {
  return (
    <>
      <header className="border-b border-line bg-white">
        <div className="container-bc flex h-[72px] items-center justify-between">
          <Link href="/" aria-label="BäderCockpit – Startseite" className="rounded-lg">
            <Logo height={30} />
          </Link>
          <Link href="/" className="inline-flex items-center gap-1.5 text-[14px] font-bold text-muted hover:text-navy">
            <ArrowLeft size={16} strokeWidth={2.25} aria-hidden /> Zur Startseite
          </Link>
        </div>
      </header>
      <main id="inhalt" className="bg-white">
        <div className="container-bc max-w-[760px] py-16 lg:py-24">
          <h1 className="t-h2 text-navy">{title}</h1>
          {intro && (
            <p className="mt-6 text-muted">
              <Txt>{intro}</Txt>
            </p>
          )}
          <div className="mt-12 grid gap-10">
            {sections.map((s) => (
              <section key={s.heading}>
                <h2 className="t-h3 text-navy">{s.heading}</h2>
                <div className="mt-3 grid gap-1 text-muted">
                  {s.lines.map((l, i) => (
                    <p key={i}>
                      <Txt>{l}</Txt>
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
