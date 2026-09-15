'use client'

import React, { useState } from 'react';
import { useLanguage } from '../language-context';

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
  thesis?: string;
  current?: boolean;
}

const experiencesDe: Experience[] = [
  {
    title: 'AI & Development - Consultant',
    organization: 'ProcuVia AG',
    period: 'seit 05/2026',
    description:
      'Beratung und Entwicklung von KI-gestützten Lösungen für Kundenprojekte, einschließlich Anforderungsanalyse, Implementierung und Schulung zu KI-Technologien.',
    current: true,
  },
  {
    title: 'Webentwicklung – Wissenschaftliche Mitarbeiterin',
    organization: 'HS Düsseldorf',
    period: '2024 – 2025',
    description:
      'Teamkoordination, Workshop‑Moderation, Anforderungsanalyse, Informationsarchitektur, Leitung Programmierteam und Webentwicklung zur Erstellung einer digitalen Wissensplattform für partizipative Technikentwicklung im Gesundheitsbereich.',
  },
  {
    title: 'E‑Learning – Wissenschaftliche Mitarbeiterin',
    organization: 'HS Düsseldorf',
    period: '2021 – 2023',
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
    period: '2007 – 2017',
    description: 'Planung und Durchführung von Veranstaltungen.',
  },
  {
    title: 'Tango Argentino – Dozentin',
    organization: 'Freiberuflich (u. a. im tanzhaus nrw)',
    period: 'seit 2007',
    description: 'Unterricht und Leitung von Tango Argentino Kursen.',
  },
];

const experiencesEn: Experience[] = [
  {
    title: 'AI & Development - Consultant',
    organization: 'ProcuVia AG',
    period: 'since 05/2026',
    description:
      'Consulting and development of AI-powered solutions for client projects, including requirements analysis, implementation, and training in AI technologies.',
    current: true,
  },
  {
    title: 'Web Development, Research Associate',
    organization: 'Düsseldorf University of Applied Sciences',
    period: '2024 to 2025',
    description:
      'Team coordination, workshop facilitation, requirements analysis, information architecture, programming team leadership, and web development for a digital knowledge platform on participatory technology development in healthcare.',
  },
  {
    title: 'E‑Learning, Research Associate',
    organization: 'Düsseldorf University of Applied Sciences',
    period: '2021 to 2023',
    description: 'Analysis, instructional design, development, and evaluation of learning modules in the field of databases.',
  },
  {
    title: 'Web Design, Web Editing, Staff Member',
    organization: 'IIK Düsseldorf e.V.',
    period: '2017 to 2021',
    description: 'Website relaunch planning, coordination, and implementation.',
  },
  {
    title: 'Marketing, Graphic Design, Assistant/Lead',
    organization: 'IIK Düsseldorf e.V.',
    period: '2015 to 2021',
    description: 'Assistant (2015 to 2021), acting department head (2018 to 2020).',
  },
  {
    title: 'OOP (Java), Subject Tutor',
    organization: 'Düsseldorf University of Applied Sciences',
    period: '2020 to 2021',
    description: 'Object-oriented programming in Java.',
  },
  {
    title: 'Assistant / Acting Department Head',
    organization: 'IIK Düsseldorf e.V.',
    period: '2015 to 2021',
    description: 'Administrative work and acting leadership for various projects.',
  },
  {
    title: 'Event Management Project Lead',
    organization: 'IIK e.V.',
    period: '2007 to 2017',
    description: 'Planning and execution of events.',
  },
  {
    title: 'Tango Argentino, Instructor',
    organization: 'Freelance (including at tanzhaus nrw)',
    period: 'since 2007',
    description: 'Teaching and leading Tango Argentino courses.',
  },
];

const educationsDe: Education[] = [
  {
    title: 'M.Sc. Medieninformatik',
    institution: 'HSD',
    period: '2023 – 2026 (Abschluss 05/2026)',
    description: 'Master of Science (M.Sc.) | Note: 1,0 (mit Auszeichnung bestanden)',
    thesis: 'A Data-Driven Audio Processing Pipeline for Isolating Non-Verbal Vocalizations from In-the-Wild Recordings',
    current: false,
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

const educationsEn: Education[] = [
  {
    title: 'M.Sc. Media Informatics',
    institution: 'HSD',
    period: '2023 to 2026 (graduated 05/2026)',
    description: 'Master of Science (M.Sc.) | Grade: 1.0 (Graduated with distinction)',
    thesis: 'A Data-Driven Audio Processing Pipeline for Isolating Non-Verbal Vocalizations from In-the-Wild Recordings',
    current: false,
  },
  {
    title: 'B.Sc. Media Informatics',
    institution: 'HSD',
    period: '2019 to 2023',
    description: '90 ECTS credits (avg. = 1.3)',
  },
  {
    title: 'M.A. Linguistics, Information Science & Modern Japan',
    institution: 'HHU Düsseldorf',
    period: '2001 to 2009',
    description: 'Magistra Artium (M.A.) | Grade: 1.1 + additional qualification in German as a foreign language',
  },
  {
    title: 'Abitur (German university entrance qualification)',
    institution: 'Söderblom‑Gymnasium Espelkamp',
    period: '2001',
    description: 'Final grade 1.9',
  },
];

export default function Resume() {
  const [showMoreExp, setShowMoreExp] = useState(false);
  const { language } = useLanguage();
  const isGerman = language === 'de';

  const text = isGerman
    ? {
      currentDate: '15.09.2026',
      title: 'Lebenslauf',
      subtitle: 'Software- & Webentwicklerin | Data Science & AI Enthusiastin',
      updated: 'Stand',
      experience: 'Berufserfahrung',
      education: 'Bildung',
      skills: 'Technische Kenntnisse',
      methods: 'Methoden & Stärken',
      languages: 'Sprachen',
      interests: 'Interessen',
      more: 'Mehr anzeigen',
      less: 'Weniger anzeigen',
      thesis: 'Thesis',
      downloadPdf: 'PDF herunterladen (DE)',
      skillsList: ['Python (ML/DL)', 'Java', 'Typescript', 'Javascript', 'React/Next.js', 'HTML5', 'CSS/Tailwind', 'SQL', 'Git', 'GitHub CoPilot', 'Claude Code', 'Adobe Suite'],
      methodsList: ['Scrum / Agile Methoden', 'Requirements Engineering', 'Workshop‑Moderation', 'Prompting', 'Kommunikativ', 'Lösungsorientiert', 'Lernfähig'],
      languagesList: ['Deutsch (Muttersprache)', 'Englisch (C1)', 'Französisch (B2)', 'Spanisch (A2)'],
      interestsList: ['Reisen', 'Tanzen', 'Singen', 'KI: Machine/Deep Learning', 'Sinnvolle Digitalisierung'],
    }
    : {
      currentDate: '09/15/2026',
      title: 'Resume',
      subtitle: 'Software & Web Developer | Data Science & AI Enthusiast',
      updated: 'Updated',
      experience: 'Professional Experience',
      education: 'Education',
      skills: 'Technical Skills',
      methods: 'Methods & Strengths',
      languages: 'Languages',
      interests: 'Interests',
      more: 'Show more',
      less: 'Show less',
      thesis: 'Thesis',
      downloadPdf: 'Download PDF (EN)',
      skillsList: ['Python (ML/DL)', 'Java', 'TypeScript', 'JavaScript', 'React/Next.js', 'HTML5', 'CSS/Tailwind', 'SQL', 'Git', 'GitHub Copilot', 'Claude Code', 'Adobe Suite'],
      methodsList: ['Scrum / Agile methods', 'Requirements engineering', 'Workshop facilitation', 'Prompting', 'Communicative', 'Solution-oriented', 'Fast learner'],
      languagesList: ['German (native)', 'English (C1)', 'French (B2)', 'Spanish (A2)'],
      interestsList: ['Traveling', 'Dancing', 'Singing', 'AI: machine/deep learning', 'Meaningful digitalization'],
    };

  const experiences = isGerman ? experiencesDe : experiencesEn;
  const educations = isGerman ? educationsDe : educationsEn;

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900/30" id="cv">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">{text.title}</h2>
        <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 flex flex-col gap-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm py-6">
          <div className="text-center px-6">
            <div className="leading-none font-semibold text-lg">Mareike&nbsp;Focken</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{text.subtitle}</div>
            <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">{text.updated}: {text.currentDate}</div>
          </div>
          <div className="px-6 space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{text.experience}</h3>
              <div className="space-y-4">
                {(showMoreExp ? experiences : experiences.slice(0, 4)).map((exp, idx) => (
                  <div
                    key={idx}
                    className={`border-l-2 pl-4 ${exp.current ? 'border-indigo-600 dark:border-indigo-400' : 'border-gray-300 dark:border-gray-600'}`}
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:gap-4">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 w-32 shrink-0 mb-1 md:mb-0">{exp.period}</p>
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
                    {showMoreExp ? text.less : text.more}
                  </button>
                </div>
              )}
            </div>
            <hr className="border-t border-gray-200 dark:border-gray-700" />
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{text.education}</h3>
              <div className="space-y-4">
                {educations.map((edu, idx) => (
                  <div
                    key={idx}
                    className={`border-l-2 pl-4 ${edu.current ? 'border-indigo-600 dark:border-indigo-400' : 'border-gray-300 dark:border-gray-600'}`}
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:gap-4">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 w-32 shrink-0 mb-1 md:mb-0">{edu.period}</p>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">{edu.title}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{edu.institution}</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{edu.description}</p>
                        {edu.thesis && (
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 italic">{text.thesis}: {edu.thesis}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <hr className="border-t border-gray-200 dark:border-gray-700" />
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{text.skills}</h3>
              <div className="flex flex-wrap gap-3">
                {text.skillsList.map((skill) => (
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
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{text.methods}</h3>
              <div className="flex flex-wrap gap-3">
                {text.methodsList.map((method) => (
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
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{text.languages}</h3>
              <div className="flex flex-wrap gap-3">
                {text.languagesList.map((lang) => (
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
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{text.interests}</h3>
              <div className="flex flex-wrap gap-3">
                {text.interestsList.map((interest) => (
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
          <div className="px-6">
            <a
              href={isGerman ? '/CV_mf.pdf' : '/CV_mf_en.pdf'}
              download
              className="inline-block px-4 py-2 mt-4 rounded-md text-sm font-medium text-indigo-600 dark:text-indigo-400 border border-indigo-600 dark:border-indigo-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 transition-colors"
            >
              {text.downloadPdf}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
