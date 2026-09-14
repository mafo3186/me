'use client'

import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import './globals.css';
import { getInitialLanguage, Language, LanguageProvider, LANGUAGE_STORAGE_KEY } from './language-context';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Determine the initial theme based on localStorage or system preference
  const getInitialTheme = () => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored === 'light' || stored === 'dark') return stored;
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'dark' : 'light';
    }
    return 'light';
  };

  const [theme, setTheme] = useState<string>(getInitialTheme);
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <html lang={language}>
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content={
            language === 'de'
              ? 'Portfolio von Mareike Focken – Software- und Webentwicklung, Data Science und KI.'
              : 'Portfolio of Mareike Focken – software and web development, data science and AI.'
          }
        />
        <title>Mareike Focken – Portfolio</title>
      </head>
      <body className="font-sans antialiased bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <LanguageProvider value={{ language, setLanguage }}>
          <div className="flex flex-col min-h-screen">
            <NavBar theme={theme} onToggleTheme={toggleTheme} />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}