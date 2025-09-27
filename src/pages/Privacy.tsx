import React from 'react';

export default function Privacy() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Datenschutzerklärung</h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Diese private Portfolio‑Website dient ausschließlich der Darstellung meiner Projekte und
        beruflichen Erfahrungen. Es werden weder persönliche Daten verarbeitet noch an Dritte weitergegeben.
        Es existiert kein Kontaktformular; wenn Sie mich erreichen möchten, nutzen Sie bitte die im Impressum
        und auf der Kontaktseite aufgeführten Kontaktdaten (E‑Mail oder Telefon).
      </p>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Beim Besuch dieser Website werden standardmäßig nur die Daten erhoben, die Ihr Browser automatisch
        übermittelt (z.&nbsp;B. IP‑Adresse, Browsertyp). Diese Informationen werden vom Hosting‑Anbieter in
        Logfiles gespeichert, um den technischen Betrieb sicherzustellen. Es werden keine Cookies oder
        Tracking‑Technologien eingesetzt. Ihre Theme‑Einstellung (Dark‑/Light‑Mode) wird ausschließlich lokal
        in Ihrem Browser mittels <code>localStorage</code> gespeichert und nicht an den Server übertragen.
      </p>
      <p className="text-gray-700 dark:text-gray-300">
        Als private, nicht kommerzielle Website unterliegt diese Präsenz gemäß § § 38 BDSG keiner Pflicht zur Bestellung
        eines Datenschutzbeauftragten. Bei Fragen zum Datenschutz können Sie sich jederzeit per E‑Mail an mich wenden.
      </p>
    </section>
  );
}