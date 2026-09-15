'use client'

import React from 'react';
import { useLanguage } from '../language-context';

export default function Privacy() {
  const { language } = useLanguage();

  return (
    <section className="max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{language === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'}</h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        {language === 'de'
          ? 'Diese private Portfolio‑Website dient ausschließlich der Darstellung meiner Projekte und beruflichen Erfahrungen. Es werden weder persönliche Daten verarbeitet noch an Dritte weitergegeben. Es existiert kein Kontaktformular; wenn Sie mich erreichen möchten, nutzen Sie bitte die im Impressum und auf der Kontaktseite aufgeführten Kontaktdaten (E‑Mail oder Telefon).'
          : 'This private portfolio website is used solely to present my projects and professional experience. No personal data is actively processed or shared with third parties. There is no contact form; if you would like to reach me, please use the contact details listed in the legal notice and on the contact page (email or phone).'}
      </p>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        {language === 'de'
          ? <>Beim Besuch dieser Website werden standardmäßig nur die Daten erhoben, die Ihr Browser automatisch übermittelt (z.&nbsp;B. IP‑Adresse, Browsertyp). Diese Informationen werden vom Hosting‑Anbieter in Logfiles gespeichert, um den technischen Betrieb sicherzustellen. Es werden keine Cookies oder Tracking‑Technologien eingesetzt. Ihre Theme‑Einstellung (Dark‑/Light‑Mode) wird ausschließlich lokal in Ihrem Browser mittels <code>localStorage</code> gespeichert und nicht an den Server übertragen.</>
          : <>When visiting this website, only the data automatically transmitted by your browser is collected by default (e.g. IP address, browser type). This information is stored in log files by the hosting provider to ensure technical operation. No cookies or tracking technologies are used. Your theme setting (dark/light mode) is stored locally in your browser via <code>localStorage</code> and is not transmitted to the server.</>}
      </p>
      <p className="text-gray-700 dark:text-gray-300">
        {language === 'de'
          ? 'Als private, nicht kommerzielle Website unterliegt diese Präsenz gemäß § 38 BDSG keiner Pflicht zur Bestellung eines Datenschutzbeauftragten. Bei Fragen zum Datenschutz können Sie sich jederzeit per E‑Mail an mich wenden.'
          : 'As a private, non-commercial website, this presence is not subject to an obligation to appoint a data protection officer under § 38 BDSG. If you have any questions about data protection, you can contact me at any time by email.'}
      </p>
    </section>
  );
}