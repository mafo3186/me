'use client'

import React from 'react';
import Link from 'next/link';
import { useLanguage } from './language-context';

export default function Home() {
  const { language } = useLanguage();
  const text = language === 'de'
    ? {
      role: 'Software‑ & Web-Developer · Data Scientist · AI Enthusiast',
      intro: 'Mit langjähriger Erfahrung in interdisziplinärer Projektarbeit verbinde ich Technik, Kreativität und Teamarbeit, um digitale Lösungen zu entwickeln, die Menschen sinnvoll unterstützen. Mit klarer Kommunikation, analytischer Stärke und technischer Kompetenz bringe ich Projekte von der Idee bis zur Umsetzung zum Erfolg.',
      projectsCta: 'Projekte ansehen',
      resumeCta: 'Lebenslauf',
      aboutTitle: 'Über mich',
      aboutParagraph1: 'Als leidenschaftliche Entwicklerin, Wissenschaftlerin, Projektleiterin und Consultant arbeite ich an der Schnittstelle von Webentwicklung, Machine Learning und KI-gestützten Anwendungen. Ich liebe es, komplexe Probleme zu analysieren, systematisch Lösungen zu entwickeln und diese mit modernen Technologien umzusetzen. Mein Weg führte mich von der Linguistik und Informationswissenschaft über die Medieninformatik hin zu interdisziplinären Projekten im Bereich Digitalisierung, E-Learning und Co-Creation. Aktuell arbeite ich als Consultant im Bereich AI & Development.',
      aboutParagraph2: 'Ich lebe auf der Sonnenseite und gebe begeistert alles, besonders wenn ich Interesse, Spaß und Freude an einer Aufgabe habe. Was ich am liebsten mache und wirklich gut kann: verstehen, was andere wollen, erkennen, was nötig ist, um genau das zu erreichen, und mir das dafür nötige Wissen in kurzer Zeit anzueignen. Ich bin kommunikativ und aufgeschlossen, brauche zum Ausgleich gelegentlich Zeit als einsamer Wolf, bin neugierig auf Medien, Technik und Entwicklung, habe Lust darauf, konstruktiv und produktiv zu arbeiten, und bin überzeugt davon, dass sich der Rest von selbst daraus ergibt. Reisen, Tanzen und Singen geben mir Inspiration und Ausgleich.',
    }
    : {
      role: 'Software & Web Developer · Data Scientist · AI Enthusiast',
      intro: 'With many years of experience in interdisciplinary project work, I combine technology, creativity, and teamwork to build digital solutions that meaningfully support people. Through clear communication, analytical strength, and technical expertise, I guide projects from the initial idea to successful implementation.',
      projectsCta: 'View projects',
      resumeCta: 'Resume',
      aboutTitle: 'About me',
      aboutParagraph1: 'As a passionate developer, researcher, project lead, and consultant, I work at the intersection of web development, machine learning, and AI-powered applications. I love analyzing complex problems, systematically developing solutions, and implementing them using modern technologies. My career path has taken me from linguistics and information science to media informatics and interdisciplinary projects in the fields of digitalization, e-learning, and co-creation. I currently work as a consultant in the field of AI & Software Development.',
      aboutParagraph2: 'I look on the bright side and give my all with enthusiasm, especially when a task sparks my curiosity and joy. What I love doing most - and am really good at - is understanding what people really want,identifying what is needed to achieve exactly that, and quickly acquiring then necessary knowledge to make it happen. I am communicative and open-minded; to maintain balance, I occasionally need quiet time as a lone wolf. I am curious about media, technology, and development, and enjoy working constructively and productively. Traveling, dancing, and singing provide me with inspiration and balance.',
    };

  return (
    <section>
      {/* Hero section */}
      <div
        className="min-h-screen flex flex-col justify-center items-center text-center relative"
        style={{
          backgroundImage: `url(/hero-bg.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-white/70 dark:bg-gray-900/70"></div>
        <div className="relative z-10 max-w-3xl px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Mareike&nbsp;Focken
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-700 dark:text-indigo-300 mb-6">
            {text.role}
          </p>
          <p className="mb-8 text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            {text.intro}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/projects"
              className="px-6 py-3 rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors"
            >
              {text.projectsCta}
            </Link>
            <Link
              href="/resume"
              className="px-6 py-3 rounded-md text-indigo-700 dark:text-indigo-300 border border-indigo-600 dark:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-800 transition-colors"
            >
              {text.resumeCta}
            </Link>
          </div>
        </div>
      </div>
      {/* About section */}
      <div className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{text.aboutTitle}</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          {text.aboutParagraph1}
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          {text.aboutParagraph2}
        </p>
      </div>
    </section>
  );
}