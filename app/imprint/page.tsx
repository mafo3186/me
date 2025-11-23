import React from 'react';

export default function Imprint() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Impressum</h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300 font-semibold">Angaben gemäß § 5 TMG</p>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Mareike&nbsp;Focken<br />
        Wülfrather&nbsp;Str.&nbsp;13<br />
        40233&nbsp;Düsseldorf<br />
        Deutschland
      </p>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Kontakt:<br />
        Telefon: <a href="tel:+491795659567" className="hover:underline">+49&nbsp;179&nbsp;56&nbsp;59&nbsp;567</a><br />
        E‑Mail: <a href="mailto:ping@mareikefocken.de" className="text-indigo-600 dark:text-indigo-400 hover:underline">ping@mareikefocken.de</a>
      </p>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Verantwortlich für den Inhalt nach § 55 Abs. 2&nbsp;RStV: Mareike&nbsp;Focken, Anschrift wie oben.
        Dieses Impressum gilt nicht für externe Webseiten oder Social‑Media‑Profile, auf die von dieser
        Website verlinkt wird. Für den Inhalt verlinkter Seiten sind ausschließlich deren Betreiber verantwortlich.
      </p>
      <p className="text-gray-700 dark:text-gray-300">
        Haftungsausschluss: Trotz sorgfältiger inhaltlicher Kontrolle übernehme ich keine Haftung für die
        Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte. Als Diensteanbieter bin ich gemäß
        § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
        §§ 8 bis 10 TMG bin ich jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
        überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
        Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
        Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
        möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.
      </p>
    </section>
  );
}