import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { brandNotice } from "@/content/legal";
import { mailHref, site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-900 pb-28 pt-14 text-white/75 lg:pb-14">
      <div className="container-bc flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Logo variant="negative" height={30} />
          <p className="mt-3 text-[14px]">{site.tagline}</p>
        </div>
        <nav aria-label="Rechtliches" className="flex flex-wrap gap-x-6 gap-y-2 text-[14px] font-bold">
          <Link href="/impressum" className="hover:text-white">
            Impressum
          </Link>
          <Link href="/datenschutz" className="hover:text-white">
            Datenschutz
          </Link>
          <a href={mailHref(site.contact.email)} className="hover:text-white">
            Kontakt
          </a>
        </nav>
      </div>
      <div className="container-bc mt-10">
        <p className="border-t border-white/10 pt-6 text-[13px] text-white/55">
          © {year} BäderCockpit · {brandNotice}
        </p>
      </div>
    </footer>
  );
}
