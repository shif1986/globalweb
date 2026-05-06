import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = ({ content }) => {
  return (
    <section
      id="portfolio"
      className="pt-24 pb-16 px-4 sm:px-6 bg-[#e8e6e6]"
      style={{ scrollMarginTop: '96px' }}
    >
      {/* Title */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-slate-800 tracking-tight"
        >
          {content.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-slate-500 max-w-2xl mx-auto"
        >
          {content.subtitle}
        </motion.p>
      </div>

      {/* Cards Container */}
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {content.projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="h-full"
            >
              <article className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* Image */}
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Overlay */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <span className="text-white text-sm font-semibold bg-black/60 px-3 py-1.5 rounded-full border border-white/30">
                      Voir le projet →
                    </span>
                  </a>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-400">
                        {project.type}
                      </p>
                      <h3 className="mt-1 text-lg font-semibold text-slate-800">
                        {project.name}
                      </h3>
                    </div>
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                  </div>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  <p className="mt-3 text-xs text-slate-500">
                    {project.tech}
                  </p>
                </div>
              </article>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
