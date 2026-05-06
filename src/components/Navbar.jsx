import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ lang, onChangeLang, labels }) => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { id: 'home', label: labels.home },
    { id: 'services', label: labels.services },
    { id: 'portfolio', label: labels.portfolio },
    { id: 'contact', label: labels.contact }
  ];

  const handleLangChange = (code) => {
    if (code !== lang) {
      onChangeLang(code);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3">
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/public/global-web-logo.png"
            alt="Logo Global Web"
            className="h-12 sm:h-16 w-auto"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-200">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="relative transition hover:text-sky-400 group"
            >
              {item.label}
              <span className="pointer-events-none absolute inset-x-1 -bottom-1 h-px scale-x-0 bg-gradient-to-r from-sky-400 to-cyan-400 transition-transform duration-200 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        {/* Lang switcher + mobile menu */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden md:flex rounded-full bg-slate-900/90 p-1 text-xs">
            <button
              type="button"
              onClick={() => handleLangChange('fr')}
              className={`flex items-center gap-1 rounded-full px-2 py-1 transition ${
                lang === 'fr'
                  ? 'bg-sky-500 text-slate-950 shadow-glow'
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <span>🇫🇷</span>
              <span>FR</span>
            </button>
            <button
              type="button"
              onClick={() => handleLangChange('en')}
              className={`ml-1 flex items-center gap-1 rounded-full px-2 py-1 transition ${
                lang === 'en'
                  ? 'bg-sky-500 text-slate-950 shadow-glow'
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <span>🇬🇧</span>
              <span>EN</span>
            </button>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-200 ring-1 ring-slate-700 hover:bg-slate-900 md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1">
              <span className="block h-0.5 w-5 bg-slate-100" />
              <span className="block h-0.5 w-5 bg-slate-100" />
              <span className="block h-0.5 w-5 bg-slate-100" />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          className="border-t border-slate-800 bg-slate-950/95 md:hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-2 py-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="py-2 text-sm text-slate-200 hover:text-sky-400 transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <div className="mt-4 flex gap-2 text-xs">
              <button
                type="button"
                onClick={() => handleLangChange('fr')}
                className={`flex-1 rounded-full px-3 py-2 transition ${
                  lang === 'fr'
                    ? 'bg-sky-500 text-slate-950'
                    : 'bg-slate-900 text-slate-200 hover:bg-slate-800'
                }`}
              >
                🇫🇷 FR
              </button>
              <button
                type="button"
                onClick={() => handleLangChange('en')}
                className={`flex-1 rounded-full px-3 py-2 transition ${
                  lang === 'en'
                    ? 'bg-sky-500 text-slate-950'
                    : 'bg-slate-900 text-slate-200 hover:bg-slate-800'
                }`}
              >
                🇬🇧 EN
              </button>
            </div>
          </div>
        </motion.nav>
      )}
    </header>
  );
};

export default Navbar;
