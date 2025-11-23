'use client'

import React, { useState } from 'react';

interface ProjectCard {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

const professionalProjects: ProjectCard[] = [
  {
    title: 'Webentwicklung CoCre-HIT-Kompendium – Wissenschaftliche Mitarbeiterin',
    description:
      'Teamkoordination, Workshop‑Moderation, Anforderungsanalyse, Informationsarchitektur, Leitung Programmierteam und Webentwicklung zur Erstellung einer digitalen Wissensplattform für partizipative Technikentwicklung im Gesundheitsbereich.',
    technologies: ['Project Management', 'Team Coordination', 'Team Lead','Web Development', 'RequirementsEngineering', 'React', 'TypeScript','JSON', 'CI/CD'],
    link: 'https://cocre-hit.de/kompendium',
  },
  {
    title: 'Datenbanken E‑Learning-Module – Wissenschaftliche Mitarbeiterin',
    description:
      'Analyse, Mediendidaktik, Entwicklung und Evaluation von Lernmodulen im Fach Datenbanken.',
    technologies: ['E‑Learning', 'Database Design', 'Open Educational Resources (OER)', 'LMS', 'Web Development' ],
    link: 'https://eild.nrw',
  },
  {
    title: 'Website Relaunch Projekt IIK',
    description:
      'Kompletter Relaunch der IIK Deutschland Website mit moderner Technologie und nutzerfreundlichem Design.',
    technologies: ['Project Management', 'UX/UI Design', 'Prototyping', 'Typo3', 'Magento', 'HTML', 'CSS'],
    link: 'https://iik-deutschland.de',
  },
  {
    title: 'OOP (Java) – Fachtutorin',
    description: 'Fachtutorin für Objektorientierte Programmierung in Java an der Hochschule Düsseldorf.',
    technologies: ['Java', 'Object‑Oriented Programming', 'Teaching'],
  },
  {
    title: 'Assistenz / kommissarische Leitung',
    description: 'Assistenz / Kommissarische Leitung der Marketing-Abteilung am IIK Düsseldorf e.V.',
    technologies: ['Marketing', 'Team Lead', 'Project Coordination'],
    link: undefined,
  },
  {
    title: 'Projektleitung Eventmanagement',
    description: 'Planung, Durchführung, Disposition, Umsetzung, Budgetplanung für jährlich ca. 200 Freizeit- und Kulturveranstaltungen beim IIK e.V.',
    technologies: ['Event Management', 'Team Leadership'],
    link: undefined,
  },
  {
    title: 'Tango Argentino – Dozentin',
    description: 'Seit 2007 freiberuflich (u. a. im tanzhaus nrw) als Dozentin für Tango Argentino tätig.',
    technologies: ['Teaching', 'Dance'],
    // Link to personal Tango project website
    link: 'https://tangold.de/',
  },
];

const studentProjects: ProjectCard[] = [
  {
    title: 'Wir sollten viel mehr reisen',
    description:
      'Interaktives Flowchart zur Reflexion des Themas "Fremde überall" anlässlich der 60. Kunst‑Biennale in Venedig 2024. Erkunden Sie das Diagramm und entdecken Sie neue Perspektiven auf Reisen und Fremdheit.',
    technologies: ['Interactive Flowchart','HTML', 'CSS','CI/CD'],
    link: 'https://mafo3186.github.io/wir-sollten-viel-mehr-reisen/',
  },
  {
    title: 'Venezia Website',
    description:
      'Moderne Website zur 60. Kunst‑Biennale in Venedig 2024 mit interaktiven Inhalten. Sie kombiniert klare Gestaltung mit kreativen Elementen, um Besucher über das Thema "Fremde überall" zu informieren.',
    technologies: ['Web Development','UI/UX', 'React', 'TypeScript', 'Next.js', 'Sanity', 'CI/CD', 'HTML', 'CSS', ],
    link: 'https://venezia-website.vercel.app/',
  },
  {
    title: 'Student Timer',
    description:
      'React‑Native‑App für Android und iOS zur Überwachung und Organisation des eigenen Lernverhaltens. Der Backend‑Service basiert auf Java Spring Boot und einer PostgreSQL‑Datenbank.',
    technologies: ['Mobile App', 'React Native', 'Java' ],
    link: 'https://github.com/mafo3186/StudentTimer',
  },
];

export default function Projects() {
  const [showMore, setShowMore] = useState(false);

  const renderProjectCard = (project: ProjectCard) => (
    <div
      key={project.title}
      className="flex flex-col rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="p-6 flex-1">
        <h3 className="text-xl font-semibold mb-2 text-indigo-700 dark:text-indigo-300">{project.title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-block bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200 px-2 py-0.5 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      {project.link && (
        <div className="p-4 bg-gray-50 dark:bg-gray-800 text-right">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 border border-indigo-600 dark:border-indigo-400 rounded-md hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 transition-colors"
          >
            Zum Projekt
          </a>
        </div>
      )}
    </div>
  );

  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white text-center">Projekte &amp; Erfahrungen</h2>
      <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white text-center">Berufliche Projekte</h3>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8">
        {(showMore ? professionalProjects : professionalProjects.slice(0, 3)).map((project) => renderProjectCard(project))}
      </div>
      {professionalProjects.length > 3 && (
        <div className="text-center mb-16">
          <button
            onClick={() => setShowMore(!showMore)}
            className="inline-block px-4 py-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 border border-indigo-600 dark:border-indigo-400 rounded-md hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 transition-colors"
          >
            {showMore ? 'Weniger anzeigen' : 'Mehr anzeigen'}
          </button>
        </div>
      )}
      <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white text-center">Studentische Projekte</h3>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {studentProjects.map((project) => renderProjectCard(project))}
      </div>
    </section>
  );
}