'use client'

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../app/language-context';

export default function Footer() {
  const year = new Date().getFullYear();
  const { language } = useLanguage();
  const text = language === 'de'
    ? {
      rights: 'Alle Rechte vorbehalten.',
      imprint: 'Impressum',
      privacy: 'Datenschutz',
    }
    : {
      rights: 'All rights reserved.',
      imprint: 'Legal notice',
      privacy: 'Privacy policy',
    };

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-gray-600 dark:text-gray-400 space-y-2">
        <p>&copy; {year} Mareike Focken. {text.rights}</p>
        <p>
          <Link href="/imprint" className="hover:underline">{text.imprint}</Link> ·{' '}
          <Link href="/privacy" className="hover:underline">{text.privacy}</Link>
        </p>
      </div>
    </footer>
  );
}