# BäderCockpit – Website

Marketing-One-Pager für BäderCockpit (Next.js App Router, TypeScript, Tailwind CSS v4).
Die verbindliche Vorgabe für Aufbau, Design und Texte steht in [`CLAUDE.md`](./CLAUDE.md).

## Entwicklung

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Inhalte pflegen

Alle Texte liegen in `content/*.ts` – Komponenten müssen dafür nicht angefasst werden.

| Datei | Inhalt |
|---|---|
| `content/site.ts` | CTA, Vertrauensleiste, Problem, Ablauf, Vorher/Nachher, Sicherheit, Gründer, Demo |
| `content/hero.ts` | Hero-Texte, Bad-Typen |
| `content/modules.ts` | Plattform-Module |
| `content/roles.ts` | Rollen-Auswähler |
| `content/features.ts` | Vergleichstabelle **und** Roadmap (eine Quelle) |
| `content/faq.ts` | FAQ |
| `content/legal.ts` | Gliederung Impressum / Datenschutz |

Platzhalter in `[eckigen Klammern]` werden auf der Seite gelb markiert, bis sie ersetzt sind.

## Logo tauschen

Nur `components/brand/LogoMark.tsx` ersetzen. Favicon, Apple-Icon und OG-Bild lesen die Marke von dort.

## Umgebungsvariablen (Vercel)

Siehe `.env.example`:

- `RESEND_API_KEY` – API-Key von resend.com
- `DEMO_RECIPIENT_EMAIL` – Empfänger der Demo-Anfragen (mehrere kommagetrennt)
- `DEMO_SENDER_EMAIL` – verifizierter Absender, z. B. `BäderCockpit <demo@baedercockpit.de>`
- `NEXT_PUBLIC_SITE_URL` – z. B. `https://baedercockpit.de`

Ohne `RESEND_API_KEY` und `DEMO_RECIPIENT_EMAIL` zeigt das Formular eine Fehlermeldung mit Mail-Alternative.
