import React from "react";
import { motion } from "framer-motion";

const Hero = ({ content }) => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center gap-16 overflow-hidden p-4 md:flex-row md:gap-20 md:pt-24 md:pb-32"
    >
      {/* === Fond lumineux animé === */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-cyan-400/10 to-purple-500/10 blur-3xl"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 14,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </div>

      {/* === Partie gauche (texte) === */}
      <motion.div
        className="max-w-xl space-y-6"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-900/20 px-3 py-1 text-xs font-medium text-sky-300 shadow-glow">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span>{content.badge}</span>
        </div>

        <h1 className="text-3xl font-bold leading-tight md:text-5xl">
          <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
            {content.highlight}
          </span>
          <br />
          {content.title}
        </h1>

        <p className="text-sm leading-relaxed text-slate-300 md:text-base">
          {content.description}
        </p>

        <ul className="space-y-1.5 text-sm text-slate-300">
          {content.bullets.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-3 pt-1">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-glow transition hover:brightness-110"
          >
            {content.primaryCta}
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/60 px-5 py-2.5 text-sm font-medium text-slate-100 hover:border-sky-500/70 hover:text-sky-300"
          >
            {content.secondaryCta}
          </a>
        </div>
      </motion.div>

{/* === Partie droite : Animation E-commerce === */}
<motion.div
  className="relative w-full rounded-3xl border border-slate-800 bg-slate-900/30 backdrop-blur-xl p-5 shadow-2xl overflow-hidden"
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.4 }}
  transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
>
  {/* Image principale (illustration e-commerce) */}
  <motion.img
   src="/ecommerce-process.png"

    alt="E-commerce process illustration"
    className="w-full h-auto rounded-2xl shadow-lg"
    initial={{ scale: 0.95, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
  />

  {/* Effets d’animation flottants */}
  <motion.div
    className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-tr from-sky-400/50 to-cyan-300/30 blur-2xl"
    animate={{ y: [0, -15, 0], opacity: [0.6, 1, 0.6] }}
    transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
  />
  <motion.div
    className="absolute bottom-6 right-6 w-20 h-20 rounded-full bg-gradient-to-tr from-fuchsia-400/40 to-pink-300/40 blur-2xl"
    animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
    transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
  />

  {/* Éléments flottants du visuel */}
  <motion.div
    className="absolute top-12 left-12 text-sky-400 text-lg"
    animate={{ y: [0, -10, 0], rotate: [0, 2, -2, 0] }}
    transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
  >
    💳
  </motion.div>

  <motion.div
    className="absolute top-20 right-12 text-yellow-400 text-lg"
    animate={{ y: [0, 10, 0], rotate: [0, -3, 3, 0] }}
    transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
  >
    🎁
  </motion.div>

  <motion.div
    className="absolute bottom-8 left-10 text-cyan-300 text-lg"
    animate={{ y: [0, -8, 0], opacity: [1, 0.7, 1] }}
    transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
  >
    🕒
  </motion.div>

  {/* Texte animé */}
  <div className="mt-6 text-center">
    <motion.p
      className="text-sm font-semibold text-cyan-300"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      🚀 Votre boutique en ligne, prête à vendre 24/7
    </motion.p>
    <motion.p
      className="text-xs text-slate-400 mt-1"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
    
    </motion.p>
  </div>
</motion.div>

    </section>
  );
};

export default Hero;
