import React, { useEffect, useState } from 'react';
import { translations } from './i18n';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [lang, setLang] = useState('fr');

  const content = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = content.meta.title;
  }, [lang, content.meta.title]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-50">
      <Navbar
        lang={lang}
        onChangeLang={setLang}
        labels={content.nav}
      />
      <main className="pt-20 space-y-24 md:space-y-32" id="home">
        <Hero content={content.hero} />
         <Portfolio content={content.portfolio} />
        <Services content={content.services} pricing={content.pricing} />
        <Contact content={content.contact} />
      </main>
      <Footer content={content.footer} />
    </div>
  );
};

export default App;
