/**
 * Rechtsseiten: nur Gliederung mit Platzhaltern.
 * Die Inhalte liefert der Auftraggeber (bzw. seine Rechtsberatung) – hier keine Rechtstexte erfinden.
 */
export const impressum = {
  title: "Impressum",
  sections: [
    { heading: "Angaben gemäß § 5 DDG", lines: ["[Firmenname, Rechtsform]", "[Straße Hausnummer]", "[PLZ Ort]"] },
    { heading: "Vertreten durch", lines: ["[Geschäftsführung]"] },
    { heading: "Kontakt", lines: ["Telefon: [Telefon]", "E-Mail: [kontakt@baedercockpit.de]"] },
    { heading: "Registereintrag", lines: ["[Registergericht, Registernummer]"] },
    { heading: "Umsatzsteuer-ID", lines: ["[USt-IdNr.]"] },
    { heading: "Verantwortlich für den Inhalt", lines: ["[Name, Anschrift]"] },
  ],
};

export const datenschutz = {
  title: "Datenschutzerklärung",
  intro: "[Die Datenschutzerklärung wird vom Auftraggeber bereitgestellt. Die folgende Gliederung dient nur als Platzhalter.]",
  sections: [
    { heading: "1. Verantwortlicher", lines: ["[Name, Anschrift, Kontakt]"] },
    { heading: "2. Hosting", lines: ["[Angaben zum Hosting-Anbieter und Serverstandort]"] },
    { heading: "3. Demo-Anfrage über das Formular", lines: ["[Zweck, Rechtsgrundlage, Speicherdauer, Empfänger (E-Mail-Versanddienst)]"] },
    { heading: "4. Cookies und Analyse", lines: ["Diese Website setzt derzeit keine Cookies und kein Tracking ein. [bestätigen]"] },
    { heading: "5. Ihre Rechte", lines: ["[Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch, Datenübertragbarkeit, Beschwerderecht]"] },
  ],
};
