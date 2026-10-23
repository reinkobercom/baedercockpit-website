import { Icon } from "@/components/ui/Icon";
import { trust } from "@/content/site";

export function TrustBar() {
  return (
    <section id="vertrauen" aria-label="Vertrauen" className="border-y border-line bg-eisblau">
      <ul className="container-bc grid grid-cols-2 gap-x-4 gap-y-5 py-7 md:grid-cols-4 md:py-8">
        {trust.map((t) => (
          <li key={t.label} className="flex items-center gap-3 md:justify-center">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-petrol ring-1 ring-line">
              <Icon name={t.icon} size={20} />
            </span>
            <span className="text-[14px] font-bold leading-snug text-navy sm:text-[15px]">
              {t.label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
