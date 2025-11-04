import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Database, Braces } from 'lucide-react';

const entries = [
  {
    icon: Rocket,
    title: 'Frontend Engineering',
    meta: 'React, Framer Motion, WebGL & Spline',
    desc: 'Designing ultra‑modern, animated interfaces with scroll‑linked motion and 3D scenes.',
  },
  {
    icon: Braces,
    title: 'Backend & Compilers',
    meta: 'Node.js, Express, Java, Spring Boot, ANTLR',
    desc: 'Building reliable APIs and language tooling with robust architectures and testing.',
  },
  {
    icon: Database,
    title: 'Data Layer',
    meta: 'PostgreSQL, MongoDB',
    desc: 'Schema design, indexing strategies, and performance tuning for real‑world data.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold tracking-tight"
          >
            Experience
          </motion.h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {entries.map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6"
              >
                <e.icon className="size-6 text-fuchsia-400" />
                <h3 className="mt-4 text-xl font-semibold">{e.title}</h3>
                <p className="text-sm text-neutral-300">{e.meta}</p>
                <p className="mt-3 text-neutral-200 leading-relaxed">{e.desc}</p>
                <div aria-hidden className="pointer-events-none absolute -right-24 -bottom-24 size-64 rounded-full bg-fuchsia-600/20 blur-3xl" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Ambient mesh */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-10 size-[28rem] rounded-full bg-purple-600/10 blur-3xl" />
          <div className="absolute left-10 bottom-0 size-[22rem] rounded-full bg-indigo-500/10 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
