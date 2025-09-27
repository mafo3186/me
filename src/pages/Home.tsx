import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hero-bg.png';

export default function Home() {
  return (
    <section>
      {/* Hero section */}
      <div
        className="min-h-screen flex flex-col justify-center items-center text-center relative"
        style={{
          backgroundImage: `url(${heroBg})`,
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
            Software‑ &amp; Web-Developer&nbsp;· Data Scientist&nbsp;· AI&nbsp;Enthusiast
          </p>
          <p className="mb-8 text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Mit langjähriger Erfahrung in interdisziplinärer Projektarbeit verbinde ich
            Technik, Kreativität und Teamarbeit, um digitale Lösungen zu entwickeln,
            die Menschen begeistern. Spezialisiert auf Webentwicklung, E‑Learning und
            Datenanalyse bringe ich Projekte von der Idee bis zur Umsetzung zum Erfolg.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/projects"
              className="px-6 py-3 rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors"
            >
              Projekte ansehen
            </Link>
            <Link
              to="/resume"
              className="px-6 py-3 rounded-md text-indigo-700 dark:text-indigo-300 border border-indigo-600 dark:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-800 transition-colors"
            >
              Lebenslauf
            </Link>
          </div>
        </div>
      </div>
      {/* About section */}
      <div className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Über mich</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Als leidenschaftliche Entwicklerin und Wissenschaftlerin arbeite ich an der Schnittstelle
          von Webentwicklung, Data Science und Machine Learning. Ich liebe es, komplexe
          Probleme zu analysieren, kreative Konzepte zu entwickeln und diese mit modernen
          Technologien umzusetzen. Mein Weg führte mich von der Linguistik und
          Informationswissenschaft über die Medieninformatik hin zu interdisziplinären Projekten
          im Bereich Digitalisierung und E‑Learning.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          In meiner aktuellen Rolle als wissenschaftliche Mitarbeiterin gestalte ich innovative
          Wissensplattformen mit und koordiniere Entwicklerteams. Neben der Arbeit bilde ich mich
          stetig weiter, schreibe meine Masterarbeit in Medieninformatik und teile mein Wissen als
          Tutorin und Dozentin. Reisen, Tanzen und Singen geben mir Inspiration und Ausgleich.
        </p>
      </div>
    </section>
  );
}