/**
 * Rechtstexte.
 * Impressum: 1:1 übernommen von https://www.reinkober.com/impressum (Stand 23.10.2026),
 * ergänzt um den Markenhinweis.
 * Datenschutzerklärung: auf die tatsächliche Datenverarbeitung dieser Website zugeschnitten
 * (Hosting Vercel, Demo-Formular mit E-Mail-Versand über Resend, keine Cookies, kein Tracking,
 * lokal eingebundene Schrift). Bei Änderungen an der Website (z. B. Analyse-Tool, CRM) anpassen.
 */

export type LegalBlock = {
  heading: string;
  /** Absätze; E-Mail-Adressen und https-Links werden automatisch verlinkt */
  paragraphs?: string[];
  /** Zeilen ohne Absatzabstand, z. B. Anschrift */
  lines?: string[];
  list?: string[];
  /** Unterabschnitte */
  sub?: LegalBlock[];
};

export const company = {
  name: "RX2 Marketing GmbH",
  street: "Stockumer Straße 30",
  city: "59368 Werne",
  email: "kontakt@reinkober.com",
  phone: "+4916096088604",
  ceo: "Simon Reinkober",
};

export const brandNotice = "BäderCockpit ist eine Marke der RX2 Marketing GmbH.";

export const impressum: { title: string; intro: string; sections: LegalBlock[] } = {
  title: "Impressum",
  intro: brandNotice,
  sections: [
    {
      heading: "RX2 Marketing GmbH",
      lines: [
        "Stockumer Straße 30",
        "59368 Werne",
        "E-Mail: kontakt@reinkober.com",
        "Telefon: +4916096088604",
        "Registergericht: Dortmund",
        "Registernummer: HRB35256",
        "USt-IdNr.: DE362440352",
        "Geschäftsführer: Simon Reinkober",
      ],
    },
    {
      heading: "Alternative Streitbeilegung",
      paragraphs: [
        "Die EU-Kommission hat eine Internetplattform zur Online-Beilegung von Streitigkeiten (sog. „OS-Plattform“) geschaffen. Die OS-Plattform dient als Anlaufstelle zur außergerichtlichen Beilegung von Streitigkeiten, die aus Online-Kaufverträgen erwachsen. Die OS-Plattform kann unter dem folgenden Link erreicht werden: https://ec.europa.eu/consumers/odr.",
        "Information nach dem Gesetz über die alternative Streitbeilegung in Verbrauchersachen (Verbraucherstreitbeilegungsgesetz – VSBG) vom 19.02.2016, BGBl. I S. 254, 1039",
        "Wir informieren hiermit unsere Kunden, dass wir nicht bereit oder verpflichtet sind, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
      ],
    },
    {
      heading: "Haftung für Inhalte",
      paragraphs: [
        "Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
        "Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.",
      ],
    },
    {
      heading: "Haftung für Links",
      paragraphs: [
        "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.",
        "Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.",
      ],
    },
    {
      heading: "Urheberrecht",
      paragraphs: [
        "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.",
        "Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.",
      ],
    },
  ],
};

export const datenschutz: { title: string; intro: string; updated: string; sections: LegalBlock[] } = {
  title: "Datenschutzerklärung",
  updated: "Stand: Oktober 2026",
  intro:
    "Mit dieser Datenschutzerklärung informieren wir Sie darüber, welche personenbezogenen Daten wir beim Besuch dieser Website und bei einer Demo-Anfrage verarbeiten, zu welchen Zwecken das geschieht und welche Rechte Sie haben. Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen.",
  sections: [
    {
      heading: "1. Verantwortlicher",
      paragraphs: [
        "Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:",
      ],
      lines: [
        "RX2 Marketing GmbH",
        "Stockumer Straße 30",
        "59368 Werne",
        "Deutschland",
        "Vertreten durch den Geschäftsführer Simon Reinkober",
        "E-Mail: kontakt@reinkober.com",
        "Telefon: +4916096088604",
      ],
      sub: [
        {
          heading: "",
          paragraphs: [
            "BäderCockpit ist eine Marke der RX2 Marketing GmbH. Bei Fragen zum Datenschutz können Sie sich jederzeit an die oben genannten Kontaktdaten wenden.",
          ],
        },
      ],
    },
    {
      heading: "2. Überblick über die Verarbeitung",
      paragraphs: ["Auf dieser Website verarbeiten wir personenbezogene Daten nur in folgenden Fällen:"],
      list: [
        "beim Aufruf der Website (technisch notwendige Server-Logdaten),",
        "wenn Sie über das Formular eine Demo anfragen,",
        "wenn Sie uns per E-Mail oder Telefon kontaktieren.",
      ],
      sub: [
        {
          heading: "",
          paragraphs: [
            "Wir setzen auf dieser Website keine Cookies, keine Analyse- oder Tracking-Werkzeuge, keine Werbe-Pixel und keine Social-Media-Plugins ein. Die verwendete Schriftart (Lato) wird von unserem eigenen Server ausgeliefert; es werden dabei keine Verbindungen zu Servern von Google oder anderen Schriftanbietern aufgebaut. Ein Cookie-Banner ist deshalb nicht erforderlich.",
          ],
        },
      ],
    },
    {
      heading: "3. Rechtsgrundlagen",
      paragraphs: ["Wir verarbeiten personenbezogene Daten auf Grundlage folgender Bestimmungen der DSGVO:"],
      list: [
        "Art. 6 Abs. 1 lit. b DSGVO – zur Durchführung vorvertraglicher Maßnahmen, die auf Ihre Anfrage hin erfolgen (z. B. Vereinbarung und Durchführung einer Demo),",
        "Art. 6 Abs. 1 lit. c DSGVO – zur Erfüllung rechtlicher Verpflichtungen, insbesondere handels- und steuerrechtlicher Aufbewahrungspflichten,",
        "Art. 6 Abs. 1 lit. f DSGVO – zur Wahrung unserer berechtigten Interessen, z. B. am sicheren und stabilen Betrieb der Website und an der Beantwortung von Anfragen.",
      ],
      sub: [
        {
          heading: "",
          paragraphs: [
            "Soweit wir für den Zugriff auf Informationen in Ihrem Endgerät eine Einwilligung benötigen würden (§ 25 Abs. 1 TDDDG), holen wir diese ein. Auf dieser Website findet ein solcher Zugriff nur statt, soweit er für die Bereitstellung der Website unbedingt erforderlich ist (§ 25 Abs. 2 Nr. 2 TDDDG).",
          ],
        },
      ],
    },
    {
      heading: "4. Hosting und Server-Logdaten",
      paragraphs: [
        "Diese Website wird bei Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, USA („Vercel“) gehostet. Wenn Sie die Website aufrufen, verarbeitet Vercel automatisch Daten, die Ihr Browser übermittelt. Dazu gehören insbesondere:",
      ],
      list: [
        "IP-Adresse des anfragenden Endgeräts,",
        "Datum und Uhrzeit des Zugriffs,",
        "aufgerufene Seite bzw. Datei und übertragene Datenmenge,",
        "Referrer-URL (die zuvor besuchte Seite),",
        "verwendeter Browser, Betriebssystem und Spracheinstellungen,",
        "aus der IP-Adresse abgeleiteter ungefährer Standort (Land/Stadt).",
      ],
      sub: [
        {
          heading: "",
          paragraphs: [
            "Die Verarbeitung ist technisch erforderlich, um Ihnen die Website anzuzeigen, sowie um die Stabilität und Sicherheit des Angebots zu gewährleisten (z. B. Abwehr von Angriffen und Fehleranalyse). Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der zuverlässigen und sicheren Bereitstellung der Website.",
            "Vercel verarbeitet diese Daten in unserem Auftrag. Wir haben mit Vercel einen Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO abgeschlossen. Die Logdaten werden von Vercel nur für begrenzte Zeit gespeichert und anschließend gelöscht.",
            "Vercel ist ein Unternehmen mit Sitz in den USA, sodass Daten in die USA übermittelt werden können. Vercel ist unter dem EU-U.S. Data Privacy Framework zertifiziert. Für zertifizierte Unternehmen besteht ein Angemessenheitsbeschluss der EU-Kommission (Art. 45 DSGVO). Weitere Informationen: https://vercel.com/legal/privacy-policy",
          ],
        },
      ],
    },
    {
      heading: "5. Demo-Anfrage über das Formular",
      paragraphs: [
        "Wenn Sie über das Formular auf dieser Website eine Demo anfragen, verarbeiten wir die Angaben, die Sie dort machen:",
      ],
      list: [
        "Art Ihres Bades (z. B. Hallenbad, Freibad) und Ihre Rolle,",
        "die Module, die Sie interessieren,",
        "Vor- und Nachname, Bad bzw. Organisation, E-Mail-Adresse,",
        "optional Telefonnummer und Wunschzeitraum für den Termin.",
      ],
      sub: [
        {
          heading: "",
          paragraphs: [
            "Wir nutzen diese Daten ausschließlich, um Ihre Anfrage zu bearbeiten, mit Ihnen einen Termin zu vereinbaren und die Demo vorzubereiten und durchzuführen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, da die Anfrage auf den Abschluss eines Vertrags gerichtet ist, sowie ergänzend Art. 6 Abs. 1 lit. f DSGVO (unser berechtigtes Interesse an der Beantwortung von Anfragen).",
            "Die Pflichtfelder sind gekennzeichnet. Ohne diese Angaben können wir Ihre Anfrage nicht bearbeiten. Die Angabe weiterer Daten ist freiwillig.",
            "Zum Schutz vor automatisierten Spam-Einsendungen enthält das Formular ein für Menschen unsichtbares Feld und prüft, wie viel Zeit zwischen Aufruf und Absenden vergeht. Hierfür werden keine zusätzlichen personenbezogenen Daten erhoben und keine Dienste Dritter (z. B. reCAPTCHA) eingebunden.",
          ],
        },
        {
          heading: "E-Mail-Versand über Resend",
          paragraphs: [
            "Die Formulardaten werden nicht in einer Datenbank auf dieser Website gespeichert, sondern unmittelbar per E-Mail an uns übermittelt. Für den Versand dieser E-Mail nutzen wir den Dienst Resend der Plus Five Five, Inc., 2261 Market Street #5039, San Francisco, CA 94114, USA („Resend“). Resend verarbeitet die Formulardaten in unserem Auftrag nur zum Zweck der Zustellung. Wir haben mit Resend einen Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO abgeschlossen.",
            "Resend verarbeitet Daten überwiegend in den USA. Resend ist unter dem EU-U.S. Data Privacy Framework zertifiziert (Angemessenheitsbeschluss nach Art. 45 DSGVO). Weitere Informationen: https://resend.com/legal/privacy-policy",
          ],
        },
        {
          heading: "Speicherdauer",
          paragraphs: [
            "Wir löschen Ihre Anfragedaten, sobald sie für die Bearbeitung Ihrer Anfrage nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Kommt es nicht zu einer Zusammenarbeit, löschen wir die Daten in der Regel spätestens sechs Monate nach Abschluss der Kommunikation. Kommt es zu einem Vertrag, gelten die gesetzlichen Aufbewahrungsfristen (bis zu sechs bzw. zehn Jahre nach § 257 HGB und § 147 AO).",
          ],
        },
      ],
    },
    {
      heading: "6. Kontakt per E-Mail oder Telefon",
      paragraphs: [
        "Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir Ihre Angaben (z. B. Name, E-Mail-Adresse, Telefonnummer und den Inhalt Ihrer Nachricht), um Ihr Anliegen zu bearbeiten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit einem Vertrag oder vorvertraglichen Maßnahmen zusammenhängt, und im Übrigen Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen). Für die Speicherdauer gilt Abschnitt 5 entsprechend.",
      ],
    },
    {
      heading: "7. Empfänger der Daten",
      paragraphs: [
        "Eine Weitergabe Ihrer Daten an Dritte findet nur statt, soweit dies in dieser Datenschutzerklärung beschrieben ist (Vercel als Hosting-Anbieter, Resend als E-Mail-Versanddienst), Sie eingewilligt haben oder wir gesetzlich dazu verpflichtet sind. Darüber hinaus können Daten an Dienstleister weitergegeben werden, die uns bei der Bearbeitung von Anfragen unterstützen (z. B. E-Mail- und IT-Dienstleister). Diese sind als Auftragsverarbeiter vertraglich an unsere Weisungen gebunden. Wir verkaufen keine personenbezogenen Daten.",
      ],
    },
    {
      heading: "8. SSL- bzw. TLS-Verschlüsselung",
      paragraphs: [
        "Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers mit „https://“ beginnt und ein Schloss-Symbol angezeigt wird. Bei aktivierter Verschlüsselung können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.",
      ],
    },
    {
      heading: "9. Ihre Rechte",
      paragraphs: ["Ihnen stehen nach der DSGVO folgende Rechte zu:"],
      list: [
        "Auskunft über die zu Ihrer Person gespeicherten Daten (Art. 15 DSGVO),",
        "Berichtigung unrichtiger Daten (Art. 16 DSGVO),",
        "Löschung Ihrer Daten (Art. 17 DSGVO),",
        "Einschränkung der Verarbeitung (Art. 18 DSGVO),",
        "Datenübertragbarkeit (Art. 20 DSGVO),",
        "Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO).",
      ],
      sub: [
        {
          heading: "Widerspruchsrecht nach Art. 21 DSGVO",
          paragraphs: [
            "Soweit wir Ihre Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO verarbeiten, haben Sie das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit Widerspruch gegen diese Verarbeitung einzulegen. Wir verarbeiten Ihre Daten dann nicht mehr, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.",
            "Zur Ausübung Ihrer Rechte genügt eine formlose Nachricht an kontakt@reinkober.com.",
          ],
        },
        {
          heading: "Beschwerderecht bei einer Aufsichtsbehörde",
          paragraphs: [
            "Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen die DSGVO verstößt (Art. 77 DSGVO). Zuständig für uns ist:",
          ],
          lines: [
            "Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen",
            "Kavalleriestraße 2–4",
            "40213 Düsseldorf",
            "https://www.ldi.nrw.de",
          ],
        },
      ],
    },
    {
      heading: "10. Automatisierte Entscheidungsfindung",
      paragraphs: [
        "Eine automatisierte Entscheidungsfindung einschließlich Profiling im Sinne von Art. 22 DSGVO findet nicht statt.",
      ],
    },
    {
      heading: "11. Änderungen dieser Datenschutzerklärung",
      paragraphs: [
        "Wir passen diese Datenschutzerklärung an, wenn sich die Website oder die rechtlichen Anforderungen ändern. Es gilt jeweils die auf dieser Seite veröffentlichte Fassung.",
      ],
    },
  ],
};
