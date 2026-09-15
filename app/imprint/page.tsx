'use client'

import React from 'react';
import { useLanguage } from '../language-context';

export default function Imprint() {
  const { language } = useLanguage();

  return (
    <section className="max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{language === 'de' ? 'Impressum' : 'Legal Notice'}</h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300 font-semibold">{language === 'de' ? 'Angaben gemäß § 5 TMG' : 'Information pursuant to § 5 TMG'}</p>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Mareike&nbsp;Focken<br />
        Wülfrather&nbsp;Str.&nbsp;13<br />
        40233&nbsp;Düsseldorf<br />
        {language === 'de' ? 'Deutschland' : 'Germany'}
      </p>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        {language === 'de' ? 'Kontakt:' : 'Contact:'}<br />
        {language === 'de' ? 'Telefon' : 'Phone'}: <a href="tel:+491795659567" className="hover:underline">+49&nbsp;179&nbsp;56&nbsp;59&nbsp;567</a><br />
        {language === 'de' ? 'E‑Mail' : 'Email'}: <a href="mailto:ping@mareikefocken.de" className="text-indigo-600 dark:text-indigo-400 hover:underline">ping@mareikefocken.de</a>
      </p>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        {language === 'de'
          ? 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: Mareike Focken, Anschrift wie oben. Dieses Impressum gilt nicht für externe Webseiten oder Social‑Media‑Profile, auf die von dieser Website verlinkt wird. Für den Inhalt verlinkter Seiten sind ausschließlich deren Betreiber verantwortlich.'
          : 'Responsible for content according to § 55 para. 2 RStV: Mareike Focken, address as above. This legal notice does not apply to external websites or social media profiles linked from this website. The operators of linked pages are solely responsible for their content.'}
      </p>
      <p className="text-gray-700 dark:text-gray-300">
        {language === 'de'
          ? 'Haftungsausschluss: Trotz sorgfältiger inhaltlicher Kontrolle übernehme ich keine Haftung für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte. Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.'
          : 'Disclaimer: Despite careful review of content, I assume no liability for the accuracy, completeness, or timeliness of the information provided. As a service provider, I am responsible for my own content on these pages in accordance with general laws under § 7 para. 1 TMG. Under §§ 8 to 10 TMG, however, I am not obliged to monitor transmitted or stored third-party information or investigate circumstances indicating unlawful activity. Obligations to remove or block the use of information under general law remain unaffected. Liability in this respect is only possible from the time I become aware of a specific legal violation. Upon becoming aware of such violations, I will remove this content immediately.'}
      </p>
    </section>
  );
}