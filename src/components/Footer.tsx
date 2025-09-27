import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-gray-600 dark:text-gray-400 space-y-2">
        <p>&copy; {year} Mareike Focken. Alle Rechte vorbehalten.</p>
        <p>
          <Link to="/imprint" className="hover:underline">Impressum</Link> ·{' '}
          <Link to="/privacy" className="hover:underline">Datenschutz</Link>
        </p>
      </div>
    </footer>
  );
}