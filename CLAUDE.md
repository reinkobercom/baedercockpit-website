# Website-Briefing: BäderCockpit

> **Für Claude Code.** Diese Datei als `CLAUDE.md` ins Root des Website-Repos legen. Sie ist die verbindliche Vorgabe für Aufbau, Design, Inhalte und Technik der Marketing-Website. Bei Widersprüchen gilt diese Datei. Stand: 23. Oktober 2026.

---

## 0. Auftrag in einem Satz

Baue einen hochwertigen, sehr aufgeräumten **One-Pager** (plus Impressum und Datenschutz) für **BäderCockpit**, der Entscheidern aus Schwimmbädern in wenigen Sekunden zeigt, was die Software kann und was sie ihnen persönlich bringt – mit **genau einem Ziel: Demo-Termin vereinbaren.**

---

## 1. Produkt und Zielgruppe (Kontext)

**BäderCockpit** ist eine Software nur für Schwimmbäder (Frei-, Hallen-, Kombibäder, kommunal und privat, DACH-Raum). Sie bündelt vier Bereiche, die Bäder heute mit getrennten Tools, Papier und Excel lösen:

| Modul | Kurz | Kernnutzen |
|---|---|---|
| **Gäste-App** (White Label) | Punkte pro Besuch und für Empfehlungen, Einlösung am Kiosk/in der Gastro | Mehr Besuche pro Gast, höherer Umsatz pro Besuch |
| **Trinkgeld** | Gäste geben Punkte oder Geld als Trinkgeld an das Team | Wertschätzung für Personal, das heute leer ausgeht |
| **Dienstplan** | Dienste einsehen, planen, tauschen; Mindestbesetzung pro Becken | Weniger Telefonketten, sichere Aufsicht |
| **Betriebstagebuch** | Messungen (freies/gebundenes Chlor, pH, Redox) nach DIN 19643, Erinnerungen, Hinweise bei Grenzwerten | Lückenlose Dokumentation, schnelle Reaktion |

**Positionierung:** BäderCockpit ersetzt **keine Kasse**. Es dockt an bestehende Kassen- und Zutrittssysteme an. Botschaft: *„Ihre Kasse bleibt. Ihr Bad bekommt ein Cockpit.“*

**Zielgruppe:** eher konservativ, kommunal geprägt, wenig Zeit. Der Ton ist **seriös, klar, freundlich – kein Start-up-Slang, kein Pathos**. Ansprache: **„Sie“**.

**Status:** Das Produkt ist in Entwicklung, es gibt **noch keine Kunden**. Daraus folgen harte Regeln (siehe Kapitel 9).

---

## 2. Design-Grundsätze

1. **Hell und luftig.** Viel Weiß und Eisblau, Navy als Akzent und für wenige emotionale Sektionen. Wirkung: ruhig, präzise, vertrauenswürdig (Referenz-Anmutung: Linear, Stripe, Apple – aber wärmer).
2. **Wenig Text.** Pro Sektion: eine Headline (max. 8 Wörter), eine Subline (max. 25 Wörter), dann Visual oder max. 3–4 kurze Punkte. Keine Fließtextblöcke über 3 Zeilen.
3. **Zeigen statt beschreiben.** Die Bildwelt sind **hochwertige, im Code gebaute UI-Mockups** der Software (keine Stockfotos, keine generischen Illustrationen).
4. **Ein Ziel.** Ein CTA-Text auf der ganzen Seite: **„Demo vereinbaren“**. Darunter immer die Entschärfung: *„30 Minuten · online · unverbindlich“*.
5. **Keine Navigation.** Header nur mit Logo links und CTA rechts. Keine Menüpunkte, keine Querlinks.
6. **Ruhige Bewegung.** Dezente Einblend-Animationen (Fade/Slide 8–16 px, 400–600 ms, ease-out), keine Parallax-Spielereien. `prefers-reduced-motion` respektieren.

---

## 3. Design-Tokens

### 3.1 Farben (verbindlich aus dem CI)

| Token | HEX | Verwendung |
|---|---|---|
| `navy` | `#0B3A5B` | Haupttext, Headlines, Primär-Button, dunkle Sektionen |
| `petrol` | `#1B8AA6` | Akzente, Icons, große Zahlen, Links, Hervorhebungen in Headlines |
| `hellblau` | `#8FD3E3` | Flächen, Grafiken, Akzente **auf Navy** |
| `eisblau` | `#E8F4F8` | Sektionshintergründe, Karten |
| `weiss` | `#FFFFFF` | Grundfläche |

Abgeleitete Hilfstöne (dürfen ergänzt werden):

| Token | HEX | Verwendung |
|---|---|---|
| `navy-900` | `#072A42` | Footer, Hover auf Primär-Button |
| `text-muted` | `#4A6478` | Sublines, Beschriftungen |
| `line` | `#D5E7EE` | Rahmen, Trennlinien |
| `success` | `#2E9E6B` | Status „Im Normbereich“ in Mockups |
| `warning` | `#E0A030` | Status „Hinweis“ in Mockups |

**Kontrastregeln (WCAG 2.2 AA, wichtig):**
- Petrol `#1B8AA6` erreicht auf Weiß nur ca. 3,6 : 1 → **nur für große Schrift (≥ 24 px bzw. ≥ 19 px fett), Icons und Grafiken**, nie für Fließtext.
- Primär-Button: **Navy-Fläche mit weißer Schrift** (nicht Petrol).
- Hellblau nie als Textfarbe auf Weiß; auf Navy ist Hellblau gut lesbar.

### 3.2 Typografie

- Schrift: **Lato** (über `next/font/google`, Gewichte 300, 400, 700, 900). Fallback: Carlito, system-ui, sans-serif.
- Skala (Desktop / Mobil):
  - Display (Hero-H1): 64 / 40 px, Gewicht 900, Zeilenhöhe 1.05, Laufweite −0.02em
  - H2: 44 / 30 px, Gewicht 700, Zeilenhöhe 1.15
  - H3: 22 / 20 px, Gewicht 700
  - Body L: 20 / 18 px, Gewicht 400, Zeilenhöhe 1.55
  - Body: 17 / 16 px
  - Label/Eyebrow: 13 px, Versalien, Laufweite +0.12em, Gewicht 700, Farbe Petrol
- In Headlines darf **ein Schlüsselwort in Petrol** hervorgehoben werden (pro Headline maximal eins).

### 3.3 Raster, Abstände, Formen

- Content-Maxbreite 1200 px, 12-Spalten-Raster, Gutter 24 px, Seitenrand mobil 16 px (kein horizontales Scrollen).
- Sektionsabstand: 128 px Desktop, 72 px mobil.
- Radius: Karten 20 px, Buttons 12 px, Mockup-Rahmen 24 px.
- Schatten (navy-getönt, weich): `0 1px 2px rgba(11,58,91,.06), 0 12px 32px rgba(11,58,91,.08)`.
- Buttons: Höhe 52 px (mobil Tap-Fläche ≥ 48 px), Padding 0 28 px, Gewicht 700.
- Icons: `lucide-react`, Strichstärke 1.75, Farbe Petrol oder Navy.

---

## 4. Logo

Verwendet wird **Logo-Idee 6 „Modul-Kacheln“**: vier abgerundete Quadrate im 2×2-Raster, die für die vier Module stehen (Gäste, Personal, Technik, Gastronomie); eine Kachel trägt eine weiße Wellenlinie. Wortmarke **„BäderCockpit“** in Lato (Vorschlag: „Bäder“ 400, „Cockpit“ 700, Farbe Navy).

**Muss austauschbar sein:**
- Eine einzige Komponente `components/brand/Logo.tsx` mit Props `variant: "color" | "negative" | "mono"` und `showWordmark: boolean`.
- Die Bildmarke liegt als eigene SVG-Komponente `components/brand/LogoMark.tsx`. Ein späterer Logo-Wechsel = nur diese Datei ersetzen.
- Liegt die Original-SVG aus `logos_quelldateien/` (Idee 6) vor, diese verwenden. Sonst die Kachelmarke nach obiger Beschreibung nachbauen: Kacheln Navy, Petrol, Hellblau, Petrol mit weißer Welle; Abstand zwischen Kacheln ca. 10 % der Kachelbreite.
- Favicon und Apple-Touch-Icon aus der Bildmarke erzeugen (Navy-Hintergrund für das App-Icon).
- Im Code nirgends das Logo „hart“ als Bild einbauen – immer über die Komponente.

---

## 5. Seitenaufbau (One-Pager)

Reihenfolge, Hintergrund und Zweck sind verbindlich. Hintergrundrhythmus: nie mehr als zwei gleichfarbige Sektionen hintereinander.

| # | Sektion (ID) | Hintergrund | Zweck |
|---|---|---|---|
| 1 | Header (`#top`) | Weiß, sticky, beim Scrollen mit Blur + Linie | Logo + CTA |
| 2 | Hero (`#hero`) | Weiß mit zartem Eisblau-Verlauf | Sofort klar: was, für wen, Nutzen |
| 3 | Vertrauensleiste (`#vertrauen`) | Eisblau, schmal | Rationale Anker direkt unter dem Hero |
| 4 | Problem (`#problem`) | **Navy** | Wiedererkennung: „So ist es heute“ |
| 5 | Plattform-Showcase (`#plattform`) | Weiß | Die vier Module, interaktiv |
| 6 | Rollen-Auswähler (`#rollen`) | Eisblau | „Was bringt es **mir**?“ |
| 7 | So funktioniert es (`#ablauf`) | Weiß | Andocken an die Kasse in 3 Schritten |
| 8 | Heute vs. BäderCockpit (`#vorher-nachher`) | **Navy** | Vier Insellösungen gegen eine Plattform |
| 9 | Vergleichstabelle (`#vergleich`) | Weiß | Funktionsumfang vs. Software-Kategorien inkl. Entwicklungsstatus |
| 10 | In Entwicklung (`#roadmap`) | Eisblau | Was als Nächstes kommt |
| 11 | Sicherheit & Compliance (`#sicherheit`) | Weiß | Datenschutz, Hosting, Norm |
| 12 | Gründer (`#gruender`) | Eisblau | „Aus dem Bäderbetrieb, für den Bäderbetrieb“ |
| 13 | Demo vereinbaren (`#demo`) | **Navy** | Abschluss + mehrstufiges Formular |
| 14 | FAQ (`#faq`) | Weiß | Letzte Einwände |
| 15 | Footer | `navy-900` | Recht, Kontakt |
| 16 | Sticky-CTA mobil | Navy | ab 30 % Scrolltiefe, ausgeblendet sobald `#demo` sichtbar ist |

**CTA-Kadenz:** CTA „Demo vereinbaren“ im Header, Hero, nach Sektion 6, nach Sektion 9, in Sektion 13 und als Sticky-Bar mobil. Alle CTAs scrollen weich zu `#demo` (kein Modal).

---

## 6. Sektionen im Detail (Layout + Texte)

Die Texte sind fertig formuliert und sollen so übernommen werden. Eckige Klammern `[…]` = Platzhalter, die der Auftraggeber füllt.

### 6.1 Header
- Links: `<Logo variant="color" showWordmark />`, Höhe 32 px.
- Rechts: Primär-Button „Demo vereinbaren“ (mobil kompakter: „Demo“).
- Keine Navigation.

### 6.2 Hero
Layout Desktop 55/45: Text links, Visual rechts. Mobil: Text zuerst, Visual danach, Hero max. 1 Bildschirmhöhe + 20 %.

**Links:**
- Eyebrow: `SOFTWARE NUR FÜR SCHWIMMBÄDER`
- H1: **Ihr ganzes Bad. In einem *Cockpit*.** („Cockpit“ in Petrol)
- Subline: *Gäste-App mit Punkten, Trinkgeld, Dienstplan und digitales Betriebstagebuch – in einer Plattform. Dockt an Ihre bestehende Kasse an.*
- Drei Belegpunkte mit Häkchen-Icon (eine Zeile je Punkt):
  - Mehr Besuche pro Gast
  - Weniger Abstimmung im Team
  - Betriebstagebuch nach DIN 19643
- **Micro-Commitment statt sofortigem Formular:**
  - Frage: *Welches Bad betreiben Sie?*
  - Drei große Auswahl-Buttons (Outline, Eisblau-Fläche bei Hover): **Hallenbad · Freibad · Kombibad**
  - Klick → speichert Auswahl, scrollt zu `#demo`, Formular startet mit vorausgefülltem Schritt 1 und springt direkt zu Schritt 2.
  - Darunter klein: Primär-Button „Demo vereinbaren“ + *30 Minuten · online · unverbindlich*

**Rechts – Hero-Visual (Komposition):**
- Großes Desktop-Mockup „Cockpit-Übersicht“ (Browser-Rahmen, Radius 24 px) mit vier Kacheln:
  - *Heute im Bad:* 412 Besuche, Auslastung-Balken
  - *Team:* „Frühschicht vollständig · 2 Tauschanfragen“
  - *Wasser Becken 1:* freies Chlor 0,42 mg/l · pH 7,1 · grüner Status „Im Normbereich“, nächste Messung 14:00
  - *Gäste-App:* „+38 Empfehlungen diese Woche“
- Davor, leicht überlappend und um 4° gedreht: Smartphone-Mockup der Gäste-App (Punktestand „1.240 Punkte“, Karte „Gratis-Kaffee am Kiosk einlösen“).
- Sanftes Einschweben beim Laden; die Zahlen zählen einmalig hoch (≤ 1,2 s).
- Alle Daten sind fiktiv: Bad heißt im Mockup **„Hallenbad Musterstadt“**.

### 6.3 Vertrauensleiste
Eine Zeile, vier Elemente mit Icon, zentriert, mobil 2×2:
- **Aus dem Bäderbetrieb entwickelt**
- **DSGVO-konform**
- **Hosting in Deutschland** `[vor Livegang bestätigen]`
- **Betriebstagebuch nach DIN 19643**

Keine Fremdlogos, keine Kundenlogos.

### 6.4 Problem (Navy, zentriert)
- Eyebrow (Hellblau): `DER ALLTAG IM BAD`
- H2 (Weiß): **Vier Tools. Zettel. Excel. Und zu wenig Personal.**
- Drei Karten nebeneinander (Navy-Karten mit 1 px Hellblau-Rand 20 % Deckkraft), je Icon + eine Zeile:
  - *Dienstplan per Excel, Tausch per WhatsApp*
  - *Messwerte auf Papier, Lücken fallen spät auf*
  - *Stammgäste bleiben anonym – und kommen seltener*
- Kein CTA.

### 6.5 Plattform-Showcase (interaktiv)
- Eyebrow: `EINE PLATTFORM`
- H2: **Alles, was Ihr Bad bewegt.**
- Layout Desktop: links eine vertikale Liste der vier Module (aktiver Eintrag: Navy-Text, Petrol-Balken links, kurze Beschreibung klappt auf), rechts das passende Mockup, das weich überblendet.
- Wechsel per Klick **und** automatisch beim Scrollen (Sticky-Scroll), Tastatur-bedienbar (Tabs mit `role="tablist"`).
- Mobil: horizontale Pill-Tabs oben, Mockup darunter.

| Modul | Titel | Beschreibung (eine Zeile) | Mockup |
|---|---|---|---|
| 1 | **Gäste-App** | Punkte für jeden Besuch und jede Empfehlung – im Design Ihres Bades. | Smartphone: Punktestand, Prämien, „Freund einladen“ |
| 2 | **Trinkgeld** | Gäste sagen Danke – mit Punkten oder Geld, direkt ans Team. | Smartphone: „Trinkgeld an das Kiosk-Team“, Betragsauswahl 1 € / 2 € / 5 € oder 200 Punkte |
| 3 | **Dienstplan** | Dienste planen, tauschen, Mindestbesetzung pro Becken im Blick. | Tablet/Desktop: Wochenplan, eine Tauschanfrage, Hinweis „Sportbecken 14–16 Uhr: 1 Aufsicht fehlt“ |
| 4 | **Betriebstagebuch** | Messungen nach DIN 19643 – mit Erinnerung und Hinweis bei Abweichung. | Smartphone/Tablet: Messung erfassen (freies Chlor, gebundenes Chlor, pH, Redox), Verlaufskurve, Warnhinweis gelb |

### 6.6 Rollen-Auswähler (Herzstück)
- Eyebrow: `FÜR IHRE ROLLE`
- H2: **Was bringt BäderCockpit *Ihnen*?**
- Subline: *Wählen Sie Ihre Rolle.*
- Vier große, wählbare Rollen-Karten (Icon + Titel), aktive Karte: Navy-Fläche, weiße Schrift. Mobil: horizontal scrollbare Chips.
- Darunter ein Panel, das weich wechselt: links Headline + 3 Vorteile (Icon + fett gesetzter Nutzen + 1 kurze Zeile), rechts das passende Mockup. Unten ein CTA **„Demo für [Rolle] vereinbaren“** → scrollt zu `#demo` und füllt dort die Rolle vor.
- Standard-Auswahl beim Laden: Betriebsleitung.
- Gewählte Rolle per `?rolle=` in der URL teilbar machen (z. B. für Mailings).

**Inhalte:**

**1 · Betriebsleitung** (Icon: Layout-Dashboard)
Headline: *Ihr Betrieb auf einen Blick.*
- **Ein Login statt vier Tools** – Dienstplan, Messungen und Gäste an einem Ort.
- **Aufsicht sicher planen** – Mindestbesetzung pro Becken, Lücken werden sofort sichtbar.
- **Schichttausch ohne Telefonkette** – das Team tauscht, Sie geben frei.
Mockup: Cockpit-Übersicht.

**2 · Geschäftsführung, Stadtwerke, Träger** (Icon: Landmark)
Headline: *Mehr Wert aus jedem Besuch.*
- **Stammgäste binden** – Punkte pro Besuch sorgen für mehr Besuche pro Jahr.
- **Bestehende Kasse bleibt** – keine neue Hardware, keine Großinvestition.
- **Datenschutz von Anfang an** – DSGVO-konform, Hosting in Deutschland `[bestätigen]`.
Mockup: Auswertung „Besuche pro Gast“ und „Gastro-Umsatz pro Besuch“ als ruhige Linien-/Balkendiagramme ohne konkrete Prozentversprechen (fiktive Achsen).

**3 · Schwimmmeister und Technik** (Icon: Droplets)
Headline: *Messen, dokumentieren, fertig.*
- **Betriebstagebuch auf dem Handy** – nach DIN 19643, in Sekunden erfasst.
- **Erinnerung und Hinweis** – wenn eine Messung fällig ist oder ein Wert abweicht.
- **Prüfbereit fürs Gesundheitsamt** – Export auf Knopfdruck.
Mockup: Betriebstagebuch.

**4 · Marketing und Gastronomie** (Icon: Heart-Handshake)
Headline: *Gäste, die wiederkommen.*
- **Ihre eigene App** – im Look Ihres Bades, mit Ihrem Logo.
- **Punkte am Kiosk einlösen** – Kaffee, Snack, Saunaaufguss.
- **Trinkgeld fürs Team** – digital, mit Punkten oder Geld.
Mockup: Gäste-App mit Prämien.

### 6.7 So funktioniert es
- Eyebrow: `ANDOCKEN STATT ERSETZEN`
- H2: **Ihre Kasse bleibt. Ihr Bad bekommt ein Cockpit.**
- Drei Schritte horizontal, verbunden durch eine feine Petrol-Wellenlinie (SVG), mobil vertikal:
  1. **Verbinden** – BäderCockpit dockt an Ihr Kassen- und Zutrittssystem an.
  2. **Einrichten** – Becken, Team und App in Ihrem Design – wir begleiten Sie.
  3. **Loslegen** – Gäste sammeln Punkte, das Team plant und dokumentiert.
- Kleine Fußnote unter Schritt 1: *Kassen-Schnittstellen sind in Entwicklung – wir klären die Anbindung im Demo-Gespräch.*

### 6.8 Heute vs. BäderCockpit (Navy)
- Eyebrow (Hellblau): `VORHER · NACHHER`
- H2 (Weiß): **Aus vier Insellösungen wird eine Plattform.**
- Layout zweispaltig:
  - **Links „Heute“:** 5 verstreute, leicht gedrehte, entsättigte Karten (Opacity 60 %): *Excel-Dienstplan · WhatsApp-Gruppe · Papier-Betriebstagebuch · Stempelkarte · Trinkgeldglas*
  - **Rechts „Mit BäderCockpit“:** eine einzige, klare weiße Karte mit dem Logo und vier Häkchen: *Dienstplan & Tausch · Betriebstagebuch · Gäste-App & Punkte · Trinkgeld*
- Animation beim Einscrollen: Die verstreuten Karten „sortieren“ sich und gleiten in die rechte Karte (einmalig, reduziert bei `prefers-reduced-motion`).
- Unter der Grafik eine Zeile: *Ein Login. Ein Ansprechpartner. Ein Vertrag.*

### 6.9 Vergleichstabelle
- Eyebrow: `IM VERGLEICH`
- H2: **Was andere einzeln können – in einem System.**
- Subline: *Typischer Funktionsumfang je Software-Kategorie.*

**Spalten** (Kategorien, **keine Anbieternamen**):
1. Kassen- und Zutrittssystem
2. Ticketing-Plattform
3. Loyalty-App (branchenübergreifend)
4. Dienstplan-Software (branchenübergreifend)
5. Betriebstagebuch-Tool
6. Trinkgeld-App
7. **BäderCockpit** (hervorgehoben: Navy-Kopf, Eisblau-Spalte, leicht erhöht mit Schatten, sticky beim horizontalen Scrollen)

**Legende (mit Icons, nicht nur Farbe):** ● Enthalten · ◐ Teilweise · ◔ In Entwicklung (Petrol-Badge „In Entwicklung“) · – Nicht enthalten

**Zeilen, gruppiert:**

| Funktion | Kasse | Ticketing | Loyalty | Dienstplan | Betriebstagebuch | Trinkgeld | **BäderCockpit** |
|---|---|---|---|---|---|---|---|
| **Gäste** | | | | | | | |
| Eigene App im Design des Bades | ◐ | ◐ | ● | – | – | – | ● |
| Punkte für Empfehlungen | – | – | ● | – | – | – | ● |
| Punkte automatisch pro Besuch | – | – | ◐ | – | – | – | ◔ |
| Punkte in der Gastronomie einlösen | ◐ | – | ◐ | – | – | – | ● |
| Live-Auslastung in der App | ◐ | ◐ | – | – | – | – | ◔ |
| **Gastronomie & Trinkgeld** | | | | | | | |
| Digitales Trinkgeld | – | – | – | – | – | ● | ● |
| Trinkgeld mit Punkten | – | – | – | – | – | – | ● |
| **Team** | | | | | | | |
| Dienstplan und Schichttausch | – | – | – | ● | – | – | ● |
| Mindestbesetzung pro Becken | – | – | – | – | – | – | ● |
| Qualifikationsnachweise mit Ablaufdatum | – | – | – | ◐ | – | – | ◔ |
| **Technik** | | | | | | | |
| Betriebstagebuch nach DIN 19643 | – | – | – | – | ● | – | ● |
| Erinnerung und Hinweis bei Abweichung | – | – | – | – | ◐ | – | ● |
| Automatische Messwertübernahme | – | – | – | – | ◐ | – | ◔ |
| **Plattform** | | | | | | | |
| Speziell für Schwimmbäder | ● | ◐ | – | – | ● | – | ● |
| Alles mit einem Login | – | – | – | – | – | – | ● |
| Ersetzt die Kasse | ● | – | – | – | – | – | – *(dockt an)* |

- Fußnote: *Einstufung nach öffentlich verfügbaren Angaben typischer Anbieter je Kategorie, Stand Oktober 2026. Einzelne Anbieter können abweichen.*
- **Mobil:** keine 7-Spalten-Tabelle. Stattdessen oben ein Umschalter „Vergleichen mit: [Kategorie ▾]“ – angezeigt werden nur zwei Spalten: gewählte Kategorie vs. BäderCockpit. Gruppen als einklappbare Abschnitte.
- Semantisch eine echte `<table>` mit `<th scope>`; Status-Symbole haben `aria-label` („Enthalten“, „In Entwicklung“ …).
- Inhalte aus `content/comparison.ts` laden, damit Zeilen und Status ohne Code-Änderung pflegbar sind.
- Nach der Tabelle: CTA „Demo vereinbaren“.

### 6.10 In Entwicklung (Roadmap)
- Eyebrow: `IN ENTWICKLUNG`
- H2: **Was als Nächstes kommt.**
- Vier Karten in einer Reihe (mobil gestapelt), jede mit Petrol-Badge „In Entwicklung“, Icon, Titel, einer Zeile:
  1. **Kassen-Schnittstellen** – Besuche lösen automatisch Punkte aus.
  2. **Live-Auslastung** – Gäste sehen in der App, wie voll es ist.
  3. **Automatische Messwerte** – direkt aus der Mess- und Regeltechnik ins Betriebstagebuch.
  4. **Qualifikationsnachweise** – Rettungsschwimmer und Unterweisungen mit Ablaufdatum im Dienstplan.
- Optional Zeitangabe je Karte als Platzhalter `[Quartal]` – nur anzeigen, wenn befüllt.
- Inhalte aus `content/roadmap.ts`; der Status hier und in der Vergleichstabelle kommt aus **derselben Quelle** (ein Feature-Objekt, zwei Darstellungen).

### 6.11 Sicherheit & Compliance
- Eyebrow: `SICHERHEIT`
- H2: **Gebaut für öffentliche Betreiber.**
- 2×2-Raster aus Karten (Icon + Titel + eine Zeile):
  - **DSGVO-konform** – Auftragsverarbeitungsvertrag inklusive. `[bestätigen]`
  - **Hosting in Deutschland** – Ihre Daten bleiben in der EU. `[bestätigen]`
  - **DIN 19643** – Betriebstagebuch nach der geltenden Norm.
  - **Rollen und Rechte** – jeder sieht nur, was er braucht.
- Kein CTA.

### 6.12 Gründer
- Layout 50/50: links Foto (Platzhalter mit Eisblau-Fläche + Kamera-Icon, Seitenverhältnis 4:5, Radius 24 px), rechts Text.
- Eyebrow: `WER DAHINTERSTEHT`
- H2: **Aus dem Bäderbetrieb. Für den Bäderbetrieb.**
- Zitat (groß, Lato 300, Navy): *„[Zitat des Gründers, max. 25 Wörter – z. B. warum er BäderCockpit baut]“*
- Darunter: **[Name]** · Betriebsleiter und Marketingleiter, [Bad, Ort]
- Optional zweite Person: **[Name]** · [Rolle]
- Keine erfundenen Zitate oder Namen – nur Platzhalter.

### 6.13 Demo vereinbaren (Navy, Abschluss)
Layout Desktop 45/55: links Abschluss-Argument, rechts Formular-Karte (weiß, Radius 24 px, Schatten).

**Links:**
- Eyebrow (Hellblau): `DEMO`
- H2 (Weiß): **Sehen Sie BäderCockpit in 30 Minuten.**
- Drei Punkte (Hellblau-Häkchen, weiße Schrift):
  - Live-Demo für Ihre Rolle
  - Ihre Fragen zu Kasse und Datenschutz
  - Unverbindlich und online

**Rechts – mehrstufiges Formular** (Fortschrittsanzeige „Schritt 2 von 4“, Zurück-Button, jeder Schritt eine Frage):
1. **Welches Bad betreiben Sie?** – Hallenbad · Freibad · Kombibad · Mehrere Bäder *(große Auswahlkarten)*
2. **Welche Rolle haben Sie?** – Betriebsleitung · Geschäftsführung / Stadtwerke / Träger · Schwimmmeister / Technik · Marketing / Gastronomie · Sonstiges
3. **Was interessiert Sie besonders?** *(Mehrfachauswahl)* – Gäste-App · Trinkgeld · Dienstplan · Betriebstagebuch · Alles
4. **Wie erreichen wir Sie?** – Vorname, Nachname*, Bad / Organisation*, E-Mail*, Telefon (optional), Wunschzeitraum (optional, Freitext), Checkbox Datenschutz* mit Link
   → Button **„Demo anfragen“**

- Vorbelegung aus Hero (Schritt 1) und Rollen-Auswähler (Schritt 2); bereits beantwortete Schritte werden übersprungen, bleiben aber über „Zurück“ änderbar.
- Erfolgszustand: Häkchen-Animation, *„Danke! Wir melden uns innerhalb von [1 Werktag] mit Terminvorschlägen.“*
- Fehlerzustand: freundliche Meldung + Alternative `mailto:[demo@baedercockpit.de]`.
- Validierung: React Hook Form + Zod, Inline-Fehler unter dem Feld, Fokus springt zum ersten Fehler.
- Spam-Schutz: Honeypot-Feld + Zeitprüfung (Absenden < 3 s nach Laden = verwerfen). Kein reCAPTCHA.
- Versand: Next.js Route Handler `app/api/demo/route.ts` → E-Mail über Resend (`RESEND_API_KEY`, `DEMO_RECIPIENT_EMAIL` als Umgebungsvariablen). Saubere Abstraktion `lib/leads.ts`, damit später ein CRM angebunden werden kann.

### 6.14 FAQ
Layout: links H2 + kurzer Satz + CTA, rechts Accordion (eine Frage offen gleichzeitig, Plus/Minus-Icon, animierte Höhe).
- H2: **Häufige Fragen.**

Fragen und Antworten (jede Antwort max. 2 Sätze):
1. **Müssen wir unsere Kasse austauschen?** – Nein. BäderCockpit dockt an Ihr bestehendes Kassen- und Zutrittssystem an.
2. **Mit welchen Kassensystemen funktioniert das?** – Die Schnittstellen zu den gängigen Systemen sind in Entwicklung. Im Demo-Gespräch klären wir, wie die Anbindung bei Ihnen aussieht.
3. **Können wir mit einzelnen Modulen starten?** – Ja. Sie können mit einem Modul beginnen und weitere jederzeit ergänzen.
4. **Passt BäderCockpit auch für Freibäder mit Saisonbetrieb?** – Ja. BäderCockpit ist für Frei-, Hallen- und Kombibäder gebaut – auch für den Wechsel zwischen Saison und Winterpause.
5. **Brauchen unsere Gäste eine eigene App?** – Ihre Gäste nutzen eine App im Design Ihres Bades. `[iOS/Android/Web-App vor Livegang festlegen]`
6. **Wo liegen unsere Daten?** – Auf Servern in Deutschland, DSGVO-konform mit Auftragsverarbeitungsvertrag. `[bestätigen]`
7. **Wie lange dauert die Einführung?** – Wir richten BäderCockpit gemeinsam mit Ihnen ein und schulen Ihr Team. `[Dauer ergänzen]`
8. **Wie wird Trinkgeld abgerechnet?** – Das Trinkgeld geht an das Team, das Sie festlegen. Die Abwicklung mit Ihrer Gastronomie besprechen wir gemeinsam. `[nach steuerlicher Prüfung finalisieren]`

**Preise werden auf der Website nirgends erwähnt** – auch nicht im FAQ.

FAQ als `FAQPage`-Schema (JSON-LD) ausgeben.

### 6.15 Footer
- Bildmarke negativ + Wortmarke, eine Zeile: *Software nur für Schwimmbäder.*
- Links: Impressum · Datenschutz · Kontakt (`mailto:[kontakt@baedercockpit.de]`)
- © [Jahr automatisch] BäderCockpit `[Rechtsform/Firmenname]`

### 6.16 Sticky-CTA mobil
- Fixiert unten, Navy, Höhe 64 px inkl. Safe-Area: links *„30 Min · unverbindlich“*, rechts Button „Demo vereinbaren“ (Weiß auf Navy, invertiert).
- Erscheint ab 30 % Scrolltiefe, verschwindet sobald `#demo` im Viewport ist.

---

## 7. UI-Mockups (Bildwelt)

Alle Visuals sind **React-Komponenten**, keine Bilder. Ziel: gestochen scharf, leicht animierbar, im CI.

Komponenten in `components/mockups/`:
- `BrowserFrame.tsx`, `PhoneFrame.tsx`, `TabletFrame.tsx` – neutrale Gerätehüllen (Weiß, feine `line`-Kontur, Schatten; kein Apple-/Samsung-Design kopieren).
- `CockpitOverview.tsx` – Übersicht mit 4 Kacheln (siehe Hero).
- `GuestApp.tsx` – Punktestand, Prämien, Freund einladen. Props: `screen: "points" | "rewards" | "tip"`.
- `ShiftPlan.tsx` – Wochenraster, farbige Dienste (Aufsicht Petrol, Kasse Hellblau, Technik Navy), eine offene Tauschanfrage, ein gelber Hinweis zur Mindestbesetzung.
- `LogBook.tsx` – Messwerterfassung und 7-Tage-Verlauf (einfaches SVG-Diagramm), Statuschips grün/gelb.
- `ReportChart.tsx` – zwei ruhige Diagramme für die Träger-Rolle.

Regeln:
- Fiktives Bad „Hallenbad Musterstadt“, fiktive Vornamen (z. B. Jana, Murat, Lena, Tobias).
- Realistische Wasserwerte (freies Chlor ca. 0,3–0,6 mg/l, pH ca. 7,0–7,2, Redox ca. 750–780 mV).
- Mockups innerhalb der Seite bleiben dekorativ: `aria-hidden="true"`, daneben steht die Aussage immer auch als Text.
- Kein Mockup darf Funktionen zeigen, die in Kapitel 6 als „In Entwicklung“ markiert sind, ohne das Badge „In Entwicklung“.

---

## 8. Technik

- **Framework:** aktuelle stabile Version von **Next.js** (App Router), **TypeScript** strict, **Tailwind CSS** (Design-Tokens aus Kapitel 3 als Theme-Variablen).
- **Animation:** `motion` (Framer Motion), sparsam; alles bei `prefers-reduced-motion` deaktiviert bzw. auf Opacity reduziert.
- **Icons:** `lucide-react`.
- **Formular:** `react-hook-form` + `zod`, Versand über Resend.
- **Deployment:** Vercel. Domain-Ziel `baedercockpit.de` `[Verfügbarkeit prüfen]`.
- **Inhalte getrennt vom Layout:** alle Texte, Rollen, Module, Vergleich, Roadmap und FAQ in `content/*.ts` (typisiert). Ein Redakteur soll Texte ändern können, ohne Komponenten anzufassen.
- **Sprache:** nur Deutsch, `lang="de"`. Struktur so anlegen, dass später Englisch ergänzt werden kann (Inhalte bereits zentral).

### Ordnerstruktur
```
app/
  layout.tsx            # Lato, Metadaten, JSON-LD Organization/SoftwareApplication
  page.tsx              # setzt die Sektionen zusammen
  impressum/page.tsx
  datenschutz/page.tsx
  api/demo/route.ts
  opengraph-image.tsx   # OG-Bild im CI
components/
  brand/Logo.tsx, LogoMark.tsx
  ui/Button.tsx, Badge.tsx, Section.tsx, Eyebrow.tsx, StatusIcon.tsx, Accordion.tsx
  sections/Header.tsx, Hero.tsx, TrustBar.tsx, Problem.tsx, PlatformShowcase.tsx,
           RolePicker.tsx, HowItWorks.tsx, BeforeAfter.tsx, ComparisonTable.tsx,
           Roadmap.tsx, Security.tsx, Founder.tsx, DemoSection.tsx, Faq.tsx,
           Footer.tsx, StickyCta.tsx
  demo/DemoForm.tsx (+ Schritte)
  mockups/…
content/
  site.ts, hero.ts, modules.ts, roles.ts, features.ts (Vergleich + Roadmap),
  faq.ts, legal.ts
lib/
  leads.ts, demo-prefill.ts (Zustand Hero/Rollen → Formular, z. B. über Context oder URL-Parameter)
```

### SEO und Metadaten
- Title: *BäderCockpit – Software für Schwimmbäder: Gäste-App, Dienstplan, Betriebstagebuch*
- Description: *Eine Plattform für Frei-, Hallen- und Kombibäder: Gäste-App mit Punkten, Trinkgeld, Dienstplan und Betriebstagebuch nach DIN 19643. Dockt an Ihre Kasse an.*
- Eine H1 (Hero), saubere H2-Hierarchie je Sektion.
- `sitemap.xml`, `robots.txt`, Canonical, OG-/Twitter-Bild im CI (Navy-Fläche, Logo, H1).

### Datenschutz und Tracking
- Standardmäßig **kein Tracking und keine Cookies** → kein Cookie-Banner nötig.
- Falls Analyse gewünscht: nur cookielos (z. B. Vercel Web Analytics oder Plausible), per Umgebungsvariable schaltbar.
- Schriften werden über `next/font` lokal ausgeliefert (keine Google-Fonts-Abfrage aus dem Browser).
- Impressum und Datenschutz als eigene, schlicht gestaltete Seiten mit Platzhaltern `[…]` – **Inhalte liefert der Auftraggeber** (kein Rechtstext erfinden außer klar markierter Gliederung).

### Qualitätsziele
- Lighthouse mobil: Performance ≥ 95, Accessibility 100, Best Practices 100, SEO 100.
- LCP < 2,0 s, CLS < 0,05, keine Layout-Sprünge durch Animationen.
- Voll per Tastatur bedienbar (Rollen-Auswähler, Showcase-Tabs, Vergleichs-Umschalter, Accordion, Formular), sichtbarer Fokus-Ring (2 px Petrol, 2 px Abstand).
- Getestet bei 360, 390, 768, 1024, 1280 und 1440 px Breite.

---

## 9. Harte Regeln (nicht verhandelbar)

1. **Keine erfundenen Belege:** keine Kundenlogos, keine Testimonials, keine Prozent- oder Wachstumsversprechen („+30 % Besuche“), keine Nutzerzahlen. Zahlen nur in klar fiktiven Mockups.
2. **Keine Fremdlogos und keine Anbieternamen** (Kassenhersteller, Wettbewerber) – Vergleich nur nach Kategorien.
3. **Keine Preise**, nirgends.
4. **Entwicklungsstatus ehrlich zeigen:** Was in Kapitel 6.9/6.10 als „In Entwicklung“ markiert ist, erscheint überall mit diesem Badge.
5. **Ein CTA-Text:** „Demo vereinbaren“ (einzige Variante: „Demo für [Rolle] vereinbaren“ im Rollen-Auswähler).
6. **Keine Navigation**, keine externen Links außer Rechtsseiten und Mail.
7. Platzhalter `[…]` sichtbar lassen, nicht durch Fantasietexte ersetzen; am Ende eine Liste aller offenen Platzhalter ausgeben.
8. Farben ausschließlich aus Kapitel 3; Petrol nie als Fließtextfarbe.

---

## 10. Arbeitsweise für Claude Code

1. Projekt aufsetzen (Next.js, TypeScript, Tailwind, Lato), Design-Tokens anlegen, `Logo`-Komponenten bauen.
2. Basis-UI (`Button`, `Section`, `Eyebrow`, `Badge`, `StatusIcon`) und `content/*.ts` mit allen Texten aus Kapitel 6 anlegen.
3. Sektionen in der Reihenfolge aus Kapitel 5 bauen, zuerst statisch, dann Interaktionen (Showcase, Rollen-Auswähler, Vergleich mobil, Accordion).
4. Mockup-Komponenten bauen und einsetzen.
5. Demo-Formular mit Vorbelegung, Validierung, API-Route und Erfolgs-/Fehlerzustand.
6. SEO, OG-Bild, Rechtsseiten, Sticky-CTA.
7. Prüfen gegen Kapitel 11, Screenshots in allen Breiten kontrollieren, Lighthouse laufen lassen.
8. Ergebnis übergeben mit: Kurzbeschreibung, Liste offener Platzhalter, benötigte Umgebungsvariablen, Deploy-Hinweis.

---

## 11. Abnahme-Checkliste

- [ ] Above the fold (Desktop 1440×900 und Mobil 390×844) sichtbar: H1, Subline, drei Belegpunkte, Einstiegsfrage bzw. CTA, Teil des Visuals.
- [ ] Hintergrundrhythmus wie in Kapitel 5, nie drei gleichfarbige Sektionen in Folge.
- [ ] Jede Sektion: max. eine Headline, eine Subline, keine Textblöcke > 3 Zeilen.
- [ ] Rollen-Auswähler: alle 4 Rollen, Wechsel per Maus, Tastatur und `?rolle=`; CTA füllt Rolle im Formular vor.
- [ ] Hero-Auswahl füllt Schritt 1 im Formular vor.
- [ ] Vergleichstabelle: Desktop 7 Spalten mit hervorgehobener BäderCockpit-Spalte; mobil 2-Spalten-Umschalter; Legende mit Icons; Fußnote vorhanden.
- [ ] Roadmap und Tabelle lesen denselben Feature-Status.
- [ ] Kein Preis, kein Fremdlogo, kein Anbietername, kein erfundenes Testimonial.
- [ ] Logo ausschließlich über `Logo`/`LogoMark`; Austausch einer Datei ändert das Logo überall inkl. Favicon-Quelle.
- [ ] Formular: Validierung, Honeypot, Erfolg/Fehler, E-Mail kommt an.
- [ ] Kontrast AA überall, Fokus sichtbar, `prefers-reduced-motion` greift.
- [ ] Lighthouse-Ziele erreicht, keine Konsolenfehler.
- [ ] Liste offener Platzhalter übergeben.

---

## 12. Offene Punkte für den Auftraggeber

| Punkt | Wo |
|---|---|
| Hosting in Deutschland, AVV, DSGVO-Aussagen bestätigen | 6.3, 6.6, 6.11, FAQ 6 |
| Gründerfoto, Name, Rolle, Zitat | 6.12 |
| App-Form für Gäste (iOS/Android/Web-App) | FAQ 5 |
| Einführungsdauer | FAQ 7 |
| Trinkgeld-Abwicklung nach steuerlicher Prüfung | FAQ 8 |
| Antwortzeit Demo-Anfrage, Empfänger-E-Mail | 6.13 |
| Firmenname, Rechtsform, Impressum, Datenschutzerklärung | 6.15, Rechtsseiten |
| Domain baedercockpit.de prüfen und sichern | Kapitel 8 |
| Original-SVG Logo-Idee 6 bereitstellen | Kapitel 4 |
| Optional: Quartale für Roadmap | 6.10 |
