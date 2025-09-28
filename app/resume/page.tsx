'use client'

import React, { useState } from 'react';

interface Experience {
  title: string;
  organization: string;
  period: string;
  description: string;
  current?: boolean;
}

interface Education {
  title: string;
  institution: string;
  period: string;
  description: string;
  current?: boolean;
}

export default function Resume() {
  const currentDate = '27.09.2025';

  const experiences: Experience[] = [
    {
      title: 'Webentwicklung – Wissenschaftliche Mitarbeiterin',
      organization: 'HS Düsseldorf',
      period: '01/2024 – 07/2025',
      description:
        'Teamkoordination, Workshop‑Moderation, Anforderungsanalyse, Informationsarchitektur, Leitung Programmierteam und Webentwicklung zur Erstellung einer digitalen Wissensplattform für partizipative Technikentwicklung im Gesundheitsbereich.',
    },
    {
      title: 'E‑Learning – Wissenschaftliche Mitarbeiterin',
      organization: 'HS Düsseldorf',
      period: '01/2021 – 12/2023',
      description: 'Analyse, Mediendidaktik, Entwicklung und Evaluation von Lernmodulen im Fach Datenbanken.',
    },
    {
      title: 'Webdesign, Webredaktion – Mitarbeiterin',
      organization: 'IIK Düsseldorf e.V.',
      period: '2017 – 2021',
      description: 'Webrelaunch Projektplanung, -koordination, -umsetzung.',
    },
    {
      title: 'Marketing, Grafikdesign – Assistenz/Leitung',
      organization: 'IIK Düsseldorf e.V.',
      period: '2015 – 2021',
      description: 'Assistenz (2015–2021), kommissarische Leitung (2018–2020).',
    },
    {
      title: 'OOP (Java) – Fachtutorin',
      organization: 'HS Düsseldorf',
      period: '2020 – 2021',
      description: 'Objektorientierte Programmierung in Java.',
    },
    {
      title: 'Assistenz / kommissarische Leitung',
      organization: 'IIK Düsseldorf e.V.',
      period: '2015 – 2021',
      description: 'Administrative Tätigkeiten und kommissarische Leitung verschiedener Projekte.',
    },
    {
      title: 'Projektleitung Eventmanagement',
      organization: 'IIK e. V.',
      period: '2010 – 2017',
      description: 'Planung und Durchführung von Veranstaltungen.',
    },
    {
      title: 'Tango Argentino – Dozentin',
      organization: 'Freiberuflich (u. a. im tanzhaus nrw)',
      period: 'seit 2007',
      description: 'Unterricht und Leitung von Tango Argentino Kursen.',
    },
  ];

  const educations: Education[] = [
    {
      title: 'M.Sc. Medieninformatik (berufsbegleitend)',
      institution: 'HSD',
      period: '2023 – 2026 (Abschluss voraussichtlich 04/2026)',
      description: '65 ECTS‑Punkte (Ø = 1,0)',
      current: true,
    },
    {
      title: 'B.Sc. Medieninformatik',
      institution: 'HSD',
      period: '2019 – 2023',
      description: '90 ECTS‑Punkte (Ø = 1,3)',
    },
    {
      title: 'M.A. Linguistik, Informationswissenschaft & Modernes Japan',
      institution: 'HHU Düsseldorf',
      period: '2001 – 2009',
      description: 'Magistra Artium (M.A.) | Note: 1,1 + Zusatzqualifikation Deutsch als Fremdsprache',
    },
    {
      title: 'Abitur',
      institution: 'Söderblom‑Gymnasium Espelkamp',
      period: '2001',
      description: 'Durchschnitt 1,9',
    },
  ];

  const skills = ['Python (ML/DL)', 'Java', 'Typescript', 'Javascript', 'React/Next.js', 'HTML5', 'CSS/Tailwind', 'SQL', 'Git', 'Adobe Suite'];
  const methods = ['Scrum / Agile Methoden', 'Requirements Engineering', 'Workshop‑Moderation', 'Prompting', 'Kommunikativ', 'Lösungsorientiert', 'Lernfähig'];
  const languages = ['Deutsch (Muttersprache)', 'Englisch (C1)', 'Französisch (B2)', 'Spanisch (A2)'];
  const interests = ['Reisen', 'Tanzen', 'Singen', 'KI: Machine/Deep Learning', 'Sinnvolle Digitalisierung'];

  // State to control display of additional experiences
  const [showMoreExp, setShowMoreExp] = useState(false);

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900/30" id="cv">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Lebenslauf</h2>
        <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 flex flex-col gap-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm py-6">
          <div className="text-center px-6">
            <div className="leading-none font-semibold text-lg">Mareike&nbsp;Focken</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Webentwicklerin &amp; Data Scientist&nbsp;| AI&nbsp;Enthusiast</div>
            <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">Stand: {currentDate}</div>
          </div>
          <div className="px-6 space-y-8">
            {/* Berufserfahrung */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Berufserfahrung</h3>
              <div className="space-y-4">
                {(showMoreExp ? experiences : experiences.slice(0, 4)).map((exp, idx) => (
                  <div
                    key={idx}
                    className={`border-l-2 pl-4 border-gray-300 dark:border-gray-600`}
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:gap-4">
                      {/* Zeitraum */}
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 w-32 shrink-0 mb-1 md:mb-0">{exp.period}</p>
                      {/* Inhalt */}
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">{exp.title}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{exp.organization}</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {experiences.length > 4 && (
                <div className="mt-4 text-center">
                  <button
                    onClick={() => setShowMoreExp(!showMoreExp)}
                    className="inline-block px-4 py-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 border border-indigo-600 dark:border-indigo-400 rounded-md hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 transition-colors"
                  >
                    {showMoreExp ? 'Weniger anzeigen' : 'Mehr anzeigen'}
                  </button>
                </div>
              )}
            </div>
            <hr className="border-t border-gray-200 dark:border-gray-700" />
            {/* Bildung */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Bildung</h3>
              <div className="space-y-4">
                {educations.map((edu, idx) => (
                  <div
                    key={idx}
                    className={`border-l-2 pl-4 ${edu.current ? 'border-indigo-600 dark:border-indigo-400' : 'border-gray-300 dark:border-gray-600'}`}
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:gap-4">
                      {/* Zeitraum */}
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 w-32 shrink-0 mb-1 md:mb-0">{edu.period}</p>
                      {/* Inhalt */}
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">{edu.title}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{edu.institution}</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{edu.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <hr className="border-t border-gray-200 dark:border-gray-700" />
            {/* Technische Kenntnisse */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Technische&nbsp;Kenntnisse</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <hr className="border-t border-gray-200 dark:border-gray-700" />
            {/* Methoden & Stärken */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Methoden &amp; Stärken</h3>
              <div className="flex flex-wrap gap-3">
                {methods.map((method) => (
                  <span
                    key={method}
                    className="inline-block bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
            <hr className="border-t border-gray-200 dark:border-gray-700" />
            {/* Sprachen */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Sprachen</h3>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="inline-block bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            <hr className="border-t border-gray-200 dark:border-gray-700" />
            {/* Interessen */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Interessen</h3>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="inline-block bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/* PDF Download Button */}
          <div className="px-6">
            <a
              href="/resume-placeholder.pdf"
              download
              className="inline-block px-4 py-2 mt-4 rounded-md text-sm font-medium text-indigo-600 dark:text-indigo-400 border border-indigo-600 dark:border-indigo-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 transition-colors"
            >
              PDF herunterladen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}