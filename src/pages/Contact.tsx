import React from 'react';

export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Kontakt</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Interesse an einer Zusammenarbeit? Ich freue mich auf Ihre Nachricht!
      </p>
      <div className="space-y-2 text-lg text-gray-800 dark:text-gray-200">
        <p>
          <strong>Telefon:</strong> <a href="tel:+491795659567" className="hover:underline">+49&nbsp;179&nbsp;56&nbsp;59&nbsp;567</a>
        </p>
        <p>
          <strong>E‑Mail:</strong> <a href="mailto:kontakt@mareikefocken.de" className="hover:underline">kontakt@mareikefocken.de</a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{' '}
          <a
            href="https://www.linkedin.com/in/mareikefocken/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            linkedin.com/in/mareikefocken
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{' '}
          <a
            href="https://github.com/mafo3186"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            github.com/mafo3186
          </a>
        </p>
        <p>
          <strong>Ort:</strong> Düsseldorf, Deutschland
        </p>
      </div>
    </section>
  );
}