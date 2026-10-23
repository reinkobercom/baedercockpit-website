"use client";

import { ArrowLeft, ArrowRight, Check, Loader2 } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { cloneElement, useEffect, useRef, useState } from "react";
import { useForm, type Resolver } from "react-hook-form";
import { Txt } from "@/components/ui/Txt";
import { poolTypes, type PoolTypeId } from "@/content/hero";
import { interests } from "@/content/modules";
import { formRoles } from "@/content/roles";
import { demo, mailHref, site } from "@/content/site";
import { useDemoPrefill } from "@/lib/demo-prefill";
import { contactSchema, type ContactValues } from "@/lib/lead-schema";

type Interest = (typeof interests)[number];

/** Schlanker Zod-Resolver für react-hook-form */
const zodResolver: Resolver<ContactValues> = async (values) => {
  const r = contactSchema.safeParse(values);
  if (r.success) return { values: r.data as ContactValues, errors: {} };
  const errors: Record<string, { type: string; message: string }> = {};
  for (const issue of r.error.issues) {
    const k = String(issue.path[0]);
    if (!errors[k]) errors[k] = { type: issue.code, message: issue.message };
  }
  return { values: {}, errors };
};

const TOTAL = 4;
type Phase = "form" | "sending" | "success" | "error";

export function DemoForm() {
  const prefill = useDemoPrefill();
  const reduce = useReducedMotion();
  const [step, setStep] = useState(1);
  const [poolType, setPoolType] = useState<PoolTypeId | undefined>();
  const [role, setRole] = useState<string | undefined>();
  const [chosen, setChosen] = useState<Interest[]>([]);
  const [phase, setPhase] = useState<Phase>("form");
  const [honeypot, setHoneypot] = useState("");
  const startedAt = useRef<number>(0);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  // Vorbelegung aus Hero und Rollen-Auswähler; beantwortete Schritte überspringen
  useEffect(() => {
    if (!prefill.nonce) return;
    const p = prefill.poolType ?? poolType;
    const r = prefill.role ?? role;
    if (prefill.poolType) setPoolType(prefill.poolType);
    if (prefill.role) setRole(prefill.role);
    if (phase === "form") setStep(!p ? 1 : !r ? 2 : 3);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefill.nonce]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactValues>({ resolver: zodResolver, shouldFocusError: true, mode: "onTouched" });

  const go = (n: number) => {
    setStep(n);
    window.setTimeout(() => headingRef.current?.focus({ preventScroll: true }), 50);
  };

  const toggleInterest = (i: Interest) => {
    setChosen((cur) => {
      if (i === "Alles") return cur.includes("Alles") ? [] : ["Alles"];
      const base = cur.filter((c) => c !== "Alles");
      return base.includes(i) ? base.filter((c) => c !== i) : [...base, i];
    });
  };

  const onSubmit = async (contact: ContactValues) => {
    setPhase("sending");
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...contact,
          poolType,
          role,
          interests: chosen,
          website: honeypot,
          startedAt: startedAt.current,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean };
      setPhase(res.ok && data.ok ? "success" : "error");
    } catch {
      setPhase("error");
    }
  };

  const titles = ["Welches Bad betreiben Sie?", "Welche Rolle haben Sie?", "Was interessiert Sie besonders?", "Wie erreichen wir Sie?"];

  if (phase === "success") {
    return (
      <div className="flex min-h-[380px] flex-col items-center justify-center text-center" role="status" aria-live="polite">
        <motion.span
          initial={{ scale: reduce ? 1 : 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-petrol text-white"
        >
          <Check size={40} strokeWidth={3} aria-hidden />
        </motion.span>
        <p className="t-h3 max-w-[360px] text-navy">
          <Txt>{demo.success}</Txt>
        </p>
      </div>
    );
  }

  const cardBtn = (on: boolean) =>
    `flex min-h-[60px] w-full items-center justify-between gap-3 rounded-[14px] border px-4 py-3 text-left text-[16px] font-bold transition-colors duration-200 ${
      on ? "border-navy bg-navy text-white" : "border-line bg-white text-navy hover:border-petrol hover:bg-eisblau"
    }`;

  return (
    <div className="min-h-[380px]">
      {/* Fortschritt */}
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="text-[13px] font-bold text-muted" aria-live="polite">
          Schritt {step} von {TOTAL}
        </p>
        <div className="flex flex-1 justify-end gap-1.5" aria-hidden>
          {Array.from({ length: TOTAL }).map((_, i) => (
            <span key={i} className={`h-1.5 w-10 rounded-full transition-colors duration-300 ${i < step ? "bg-petrol" : "bg-line"}`} />
          ))}
        </div>
      </div>

      <h3 id="demo-form-heading" ref={headingRef} tabIndex={-1} className="t-h3 mb-5 text-navy outline-none">
        {titles[step - 1]}
      </h3>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={step}
          initial={{ opacity: 0, x: reduce ? 0 : 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: reduce ? 0 : -16 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {step === 1 && (
            <div role="radiogroup" aria-labelledby="demo-form-heading" className="grid gap-3 sm:grid-cols-2">
              {poolTypes.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  role="radio"
                  aria-checked={poolType === p.id}
                  onClick={() => {
                    setPoolType(p.id);
                    go(role ? 3 : 2);
                  }}
                  className={cardBtn(poolType === p.id)}
                >
                  {p.label}
                  {poolType === p.id && <Check size={18} strokeWidth={3} aria-hidden />}
                </button>
              ))}
            </div>
          )}

          {step === 2 && (
            <div role="radiogroup" aria-labelledby="demo-form-heading" className="grid gap-3">
              {formRoles.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  role="radio"
                  aria-checked={role === r.id}
                  onClick={() => {
                    setRole(r.id);
                    go(3);
                  }}
                  className={cardBtn(role === r.id)}
                >
                  {r.label}
                  {role === r.id && <Check size={18} strokeWidth={3} aria-hidden />}
                </button>
              ))}
            </div>
          )}

          {step === 3 && (
            <div>
              <p className="-mt-3 mb-4 text-[14px] text-muted">Mehrfachauswahl möglich.</p>
              <div role="group" aria-labelledby="demo-form-heading" className="grid gap-3 sm:grid-cols-2">
                {interests.map((i) => {
                  const on = chosen.includes(i);
                  return (
                    <button key={i} type="button" aria-pressed={on} onClick={() => toggleInterest(i)} className={cardBtn(on)}>
                      {i}
                      <span
                        className={`flex h-5 w-5 items-center justify-center rounded-md border ${on ? "border-white bg-white text-navy" : "border-line"}`}
                        aria-hidden
                      >
                        {on && <Check size={14} strokeWidth={3} />}
                      </span>
                    </button>
                  );
                })}
              </div>
              <button
                type="button"
                disabled={!chosen.length}
                onClick={() => go(4)}
                className="mt-6 inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-[12px] bg-navy px-7 font-bold text-white transition-colors hover:bg-navy-900 disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
              >
                Weiter <ArrowRight size={18} strokeWidth={2.25} aria-hidden />
              </button>
            </div>
          )}

          {step === 4 && (
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Vorname" id="firstName" error={errors.firstName?.message}>
                  <input id="firstName" autoComplete="given-name" className={inputCls(!!errors.firstName)} {...register("firstName")} />
                </Field>
                <Field label="Nachname" required id="lastName" error={errors.lastName?.message}>
                  <input id="lastName" autoComplete="family-name" className={inputCls(!!errors.lastName)} {...register("lastName")} />
                </Field>
              </div>
              <Field label="Bad / Organisation" required id="organization" error={errors.organization?.message}>
                <input id="organization" autoComplete="organization" className={inputCls(!!errors.organization)} {...register("organization")} />
              </Field>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="E-Mail" required id="email" error={errors.email?.message}>
                  <input id="email" type="email" autoComplete="email" inputMode="email" className={inputCls(!!errors.email)} {...register("email")} />
                </Field>
                <Field label="Telefon" hint="optional" id="phone" error={errors.phone?.message}>
                  <input id="phone" type="tel" autoComplete="tel" className={inputCls(!!errors.phone)} {...register("phone")} />
                </Field>
              </div>
              <Field label="Wunschzeitraum" hint="optional" id="timeframe" error={errors.timeframe?.message}>
                <input id="timeframe" placeholder="z. B. nächste Woche vormittags" className={inputCls(!!errors.timeframe)} {...register("timeframe")} />
              </Field>

              {/* Honeypot – für Menschen unsichtbar */}
              <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <label htmlFor="website">Website</label>
                <input id="website" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
              </div>

              <div>
                <label className="flex cursor-pointer items-start gap-3 text-[14px] leading-snug text-muted">
                  <input
                    type="checkbox"
                    className="mt-0.5 h-5 w-5 shrink-0 accent-[#0B3A5B]"
                    aria-invalid={!!errors.privacy}
                    aria-describedby={errors.privacy ? "privacy-error" : undefined}
                    {...register("privacy")}
                  />
                  <span>
                    Ich bin einverstanden, dass meine Angaben zur Bearbeitung der Demo-Anfrage verarbeitet werden. Details in der{" "}
                    <a href="/datenschutz" className="font-bold text-navy underline underline-offset-2">
                      Datenschutzerklärung
                    </a>
                    . <span className="text-navy">*</span>
                  </span>
                </label>
                {errors.privacy && (
                  <p id="privacy-error" className="mt-1.5 text-[13px] font-bold text-[#b4461f]">
                    {errors.privacy.message}
                  </p>
                )}
              </div>

              {phase === "error" && (
                <div role="alert" className="rounded-[12px] bg-warning/15 p-4 text-[14px] text-navy ring-1 ring-warning/40">
                  Das hat leider nicht geklappt. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt an{" "}
                  <a className="font-bold underline underline-offset-2" href={mailHref(site.contact.demoEmail)}>
                    <Txt>{site.contact.demoEmail}</Txt>
                  </a>
                  .
                </div>
              )}

              <button
                type="submit"
                disabled={phase === "sending"}
                className="mt-1 inline-flex h-[56px] w-full items-center justify-center gap-2 rounded-[12px] bg-navy px-7 text-[17px] font-bold text-white transition-colors hover:bg-navy-900 disabled:opacity-60"
              >
                {phase === "sending" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" aria-hidden /> Wird gesendet …
                  </>
                ) : (
                  <>
                    Demo anfragen <ArrowRight size={18} strokeWidth={2.25} aria-hidden />
                  </>
                )}
              </button>
              <p className="text-center text-[12px] text-muted">* Pflichtfeld · {site.cta.reassurance}</p>
            </form>
          )}
        </motion.div>
      </AnimatePresence>

      {step > 1 && (
        <button
          type="button"
          onClick={() => go(step - 1)}
          className="mt-5 inline-flex items-center gap-1.5 rounded-lg py-1 text-[14px] font-bold text-muted transition-colors hover:text-navy"
        >
          <ArrowLeft size={16} strokeWidth={2.25} aria-hidden /> Zurück
        </button>
      )}
    </div>
  );
}

function inputCls(err: boolean) {
  return `h-[52px] w-full rounded-[12px] border bg-white px-4 text-[16px] text-navy placeholder:text-[#8aa1b1] transition-colors focus:border-petrol focus:outline-none focus:ring-2 focus:ring-petrol/25 ${
    err ? "border-[#b4461f]" : "border-line"
  }`;
}

function Field({
  label,
  id,
  required,
  hint,
  error,
  children,
}: {
  label: string;
  id: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: React.ReactElement<Record<string, unknown>>;
}) {
  const child = cloneElement(children, {
    "aria-invalid": !!error,
    "aria-describedby": error ? `${id}-error` : undefined,
    "aria-required": required || undefined,
  });
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[14px] font-bold text-navy">
        {label}
        {required && <span className="text-navy"> *</span>}
        {hint && <span className="ml-1 font-normal text-muted">({hint})</span>}
      </label>
      {child}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-[13px] font-bold text-[#b4461f]">
          {error}
        </p>
      )}
    </div>
  );
}
