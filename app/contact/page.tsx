'use client'

import React from 'react';
import { useLanguage } from '../language-context';

export default function Contact() {
  const { language } = useLanguage();
  const text = language === 'de'
    ? {
      title: 'Kontakt',
      intro: 'Interesse an einer Zusammenarbeit? Ich freue mich auf Ihre Nachricht!',
      phone: 'Telefon',
      email: 'E‑Mail',
      location: 'Ort',
      locationValue: 'Düsseldorf, Deutschland',
    }
    : {
      title: 'Contact',
      intro: 'Interested in working together? I look forward to hearing from you.',
      phone: 'Phone',
      email: 'Email',
      location: 'Location',
      locationValue: 'Düsseldorf, Germany',
    };

  return (
    <section className="max-w-3xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{text.title}</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        {text.intro}
      </p>
      <div className="space-y-2 text-lg text-gray-800 dark:text-gray-200">
        <p>
          <strong>{text.phone}:</strong> <a href="tel:+491795659567" className="hover:underline">+49&nbsp;179&nbsp;56&nbsp;59&nbsp;567</a>
        </p>
        <p>
          <strong>{text.email}:</strong> <a href="mailto:ping@mareikefocken.de" className="hover:underline">ping@mareikefocken.de</a>
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
          <strong>{text.location}:</strong> {text.locationValue}
        </p>
      </div>
    </section>
  );
}