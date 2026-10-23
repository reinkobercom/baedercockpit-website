import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Fragment, type ReactNode } from "react";
import { Logo } from "@/components/brand/Logo";
import { Footer } from "@/components/sections/Footer";
import type { LegalBlock } from "@/content/legal";

/** Verlinkt E-Mail-Adressen und https-Links automatisch. */
function Linkify({ text }: { text: string }) {
  const parts = text.split(/(https?:\/\/[^\s]+?(?=[.,;:)]?(?:\s|$))|[\w.+-]+@[\w-]+\.[\w.-]+\w)/g);
  return (
    <>
      {parts.map((p, i) => {
        if (/^https?:\/\//.test(p))
          return (
            <a key={i} href={p} target="_blank" rel="noopener noreferrer" className="break-all font-bold text-navy underline underline-offset-2">
              {p.replace(/^https?:\/\//, "")}
            </a>
          );
        if (/^[\w.+-]+@[\w-]+\.[\w.-]+\w$/.test(p))
          return (
            <a key={i} href={`mailto:${p}`} className="font-bold text-navy underline underline-offset-2">
              {p}
            </a>
          );
        return <Fragment key={i}>{p}</Fragment>;
      })}
    </>
  );
}

function Block({ b, level = 2 }: { b: LegalBlock; level?: 2 | 3 }) {
  const H = level === 2 ? "h2" : "h3";
  const content: ReactNode = (
    <>
      {b.heading && (
        <H className={level === 2 ? "t-h3 text-navy" : "mt-6 text-[17px] font-bold text-navy"}>{b.heading}</H>
      )}
      {b.paragraphs?.map((p, i) => (
        <p key={i} className="mt-3 leading-relaxed text-muted">
          <Linkify text={p} />
        </p>
      ))}
      {b.lines && (
        <p className="mt-3 leading-relaxed text-muted">
          {b.lines.map((l, i) => (
            <Fragment key={i}>
              <Linkify text={l} />
              {i < b.lines!.length - 1 && <br />}
            </Fragment>
          ))}
        </p>
      )}
      {b.list && (
        <ul className="mt-3 grid list-disc gap-1.5 pl-5 leading-relaxed text-muted marker:text-petrol">
          {b.list.map((l, i) => (
            <li key={i}>
              <Linkify text={l} />
            </li>
          ))}
        </ul>
      )}
      {b.sub?.map((s, i) => (
        <Block key={i} b={s} level={3} />
      ))}
    </>
  );
  return level === 2 ? <section>{content}</section> : <div>{content}</div>;
}

export function LegalPage({
  title,
  intro,
  updated,
  sections,
}: {
  title: string;
  intro?: string;
  updated?: string;
  sections: LegalBlock[];
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
        <div className="container-bc max-w-[800px] py-16 lg:py-24">
          <h1 className="t-h2 text-navy">{title}</h1>
          {updated && <p className="mt-3 text-[14px] text-muted">{updated}</p>}
          {intro && <p className="body-l mt-6 text-muted">{intro}</p>}
          <div className="mt-12 grid gap-10">
            {sections.map((s, i) => (
              <Block key={i} b={s} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
