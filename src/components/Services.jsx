import React from "react";
import { motion } from "framer-motion";

const Services = ({ content, pricing }) => {
  return (
    <section id="services" className="section-container space-y-20 md:space-y-28">
      {/* === Services Section === */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title text-center bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
          {content.title}
        </h2>
        <p className="section-subtitle text-center mx-auto">
          {content.subtitle}
        </p>

        {/* Cartes de services */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {content.items.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900 p-5 shadow-lg shadow-black/40 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/60 hover:shadow-glow"
            >
              {/* Image illustrée */}
              {service.image && (
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <motion.img
                    src={service.image}
                    alt={service.name}
                    loading="lazy"
                    className="h-36 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/20 to-transparent"></div>
                </div>
              )}

              {/* Contenu texte */}
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-semibold text-slate-50">
                  {service.name}
                </h3>
                <span className="rounded-full border border-sky-500/30 bg-slate-900/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-sky-300">
                  {service.tag}
                </span>
              </div>
              <p className="text-xs leading-relaxed text-slate-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

{/* === Section Tarifs === */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.4 }}
  transition={{ duration: 0.6, delay: 0.1 }}
  className="space-y-10"
>
  <div className="text-center">
    <h2 className="section-title bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
      {pricing.title}
    </h2>
    <p className="section-subtitle mx-auto">{pricing.subtitle}</p>
  </div>

  <div className="grid gap-10 md:grid-cols-2">
    {/* === Colonne gauche : Site vitrine === */}
    <div className="flex flex-col">
      <h3 className="text-center mb-6 text-lg font-bold uppercase tracking-wide bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
        🌐 Sites vitrines
      </h3>

      <div className="grid gap-8 flex-1">
        {pricing.plans
          .filter((p) =>
  ["vitrine", "showcase"].some((kw) =>
    p.type.toLowerCase().includes(kw)
  )
)

          .map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`flex flex-col justify-between rounded-3xl border bg-slate-950/70 p-6 text-sm shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-glow min-h-[420px] ${
                plan.popular
                  ? "border-sky-500/70 shadow-glow"
                  : "border-slate-800"
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-400">
                      {plan.type}
                    </p>
                    <h3 className="mt-1 text-base font-semibold text-slate-50">
                      {plan.name}
                    </h3>
                  </div>
                  {plan.popular && (
                    <span className="rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-950">
                      ⭐ Populaire
                    </span>
                  )}
                </div>

                <p className="mt-4 text-lg font-semibold text-sky-400">
                  {plan.price}
                </p>
                <p className="mt-1 text-xs text-slate-400">{plan.delay}</p>

                <ul className="mt-6 space-y-1.5 text-xs text-slate-200">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-3 text-xs text-slate-400">{plan.service}</p>
              </div>

              <a
                href="#contact"
                className="mt-5 inline-flex items-center justify-center rounded-full border border-sky-500/70 bg-slate-900/80 px-5 py-2 text-xs font-semibold text-sky-300 transition hover:bg-sky-500 hover:text-slate-950"
              >
                Demander un devis
              </a>
            </motion.div>
          ))}
      </div>
    </div>

    {/* === Colonne droite : E-commerce === */}
    <div className="flex flex-col">
      <h3 className="text-center mb-6 text-lg font-bold uppercase tracking-wide bg-gradient-to-r from-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
        🛍️ Sites e-commerce
      </h3>

      <div className="grid gap-8 flex-1">
        {pricing.plans
          .filter((p) =>
  ["e-commerce", "commerce"].some((kw) =>
    p.type.toLowerCase().includes(kw)
  )
)

          .map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`flex flex-col justify-between rounded-3xl border bg-slate-950/70 p-6 text-sm shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-glow min-h-[420px] ${
                plan.popular
                  ? "border-fuchsia-500/70 shadow-glow"
                  : "border-slate-800"
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-400">
                      {plan.type}
                    </p>
                    <h3 className="mt-1 text-base font-semibold text-slate-50">
                      {plan.name}
                    </h3>
                  </div>
                  {plan.popular && (
                    <span className="rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-400 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-950">
                      ⭐ Populaire
                    </span>
                  )}
                </div>

                <p className="mt-4 text-lg font-semibold text-fuchsia-400">
                  {plan.price}
                </p>
                <p className="mt-1 text-xs text-slate-400">{plan.delay}</p>

                <ul className="mt-6 space-y-1.5 text-xs text-slate-200">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-3 text-xs text-slate-400">{plan.service}</p>
              </div>

              <a
                href="#contact"
                className="mt-5 inline-flex items-center justify-center rounded-full border border-fuchsia-500/70 bg-slate-900/80 px-5 py-2 text-xs font-semibold text-fuchsia-300 transition hover:bg-fuchsia-500 hover:text-slate-950"
              >
                Demander un devis
              </a>
            </motion.div>
          ))}
      </div>
    </div>
  </div>

  <p className="text-xs text-center text-slate-400 max-w-xl mx-auto">
    {pricing.note}
  </p>
</motion.div>


    </section>
  );
};

export default Services;
