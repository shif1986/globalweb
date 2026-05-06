import React from 'react';

const Footer = ({ content }) => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/95 py-6 text-xs text-slate-300">
      <div className="section-container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="max-w-md text-[11px] text-slate-400">
            {content.baseline}
          </p>
        </div>

        <div className="flex flex-col items-start gap-1 md:items-end">
          <a
            href="mailto:contact@globalweb.me"
            className="text-sky-300 hover:text-cyan-300"
          >
            {content.contactLabel}: contact@globalweb.me
          </a>
          <p className="text-[11px] text-slate-500">{content.madeBy}</p>
          <p className="text-[11px] text-slate-500">{content.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
