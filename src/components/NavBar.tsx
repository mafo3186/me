import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

interface NavBarProps {
  theme: string;
  onToggleTheme: () => void;
}

export default function NavBar({ theme, onToggleTheme }: NavBarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projekte' },
    { path: '/resume', label: 'Lebenslauf' },
    { path: '/contact', label: 'Kontakt' },
  ];

  return (
    // Erhöhte z‑Index, damit die Navigation beim Scrollen stets über dem Inhalt bleibt
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur sticky top-0 z-20 border-b border-gray-200 dark:border-gray-700">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center flex-shrink-0 text-lg font-semibold">
          <NavLink to="/" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 transition-colors">
            Mareike&nbsp;Focken
          </NavLink>
        </div>
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-label="Menü öffnen"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        <div className="hidden md:flex md:items-center md:space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive
                  ? 'bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <button
            onClick={onToggleTheme}
            className="ml-4 p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Farbmodus umschalten"
          >
            {theme === 'dark' ? (
              // Sun icon for dark mode
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 15a5 5 0 100-10 5 5 0 000 10z" />
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm0 13a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm8-5a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM4 10a1 1 0 011 1H4a1 1 0 110-2h1a1 1 0 01-1 1zm11.657-6.657a1 1 0 010 1.414L15.414 6a1 1 0 01-1.414-1.414l1.243-1.243a1 1 0 011.414 0zM6 15.414a1 1 0 011.414 0L8.657 14.17a1 1 0 10-1.414-1.414L6 14a1 1 0 010 1.414zm9.414 1.414a1 1 0 010-1.414L15.414 14a1 1 0 111.414 1.414l-1.243 1.243a1 1 0 01-1.414 0zM4.586 4.586a1 1 0 011.414 0L7.243 6a1 1 0 11-1.414 1.414L4.586 6a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            ) : (
              // Moon icon for light mode
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293a1 1 0 011.414 0 8.001 8.001 0 11-10.586-10.586 1 1 0 010 1.414 6 6 0 108.172 8.172z" />
              </svg>
            )}
          </button>
        </div>
      </nav>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-3 space-y-1 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive
                  ? 'bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <button
            onClick={() => {
              onToggleTheme();
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100"
          >
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      )}
    </header>
  );
}