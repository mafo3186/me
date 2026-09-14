'use client'

import React, { createContext, useContext } from 'react';

export type Language = 'de' | 'en';

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const LANGUAGE_STORAGE_KEY = 'language';

export const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') {
    return 'de';
  }

  const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (stored === 'de' || stored === 'en') {
    return stored;
  }

  const preferredLanguages = navigator.languages?.length ? navigator.languages : [navigator.language];
  const prefersGerman = preferredLanguages.some((entry) => entry.toLowerCase().startsWith('de'));

  return prefersGerman ? 'de' : 'en';
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({
  value,
  children,
}: {
  value: LanguageContextValue;
  children: React.ReactNode;
}) {
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export const useLanguage = (): LanguageContextValue => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
