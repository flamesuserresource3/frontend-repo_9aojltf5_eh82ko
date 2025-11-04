import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Reactive 3D Dashboard',
    stack: 'React • Framer Motion • Three/Spline',
    href: '#',
  },
  {
    title: 'Compiler Playground',
    stack: 'Java • ANTLR • Visualization',
    href: '#',
  },
  {
    title: 'Service API Suite',
    stack: 'Node • Express • PostgreSQL • MongoDB',
    href: '#',
  },
];

export default function Showcase() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const ySlow = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);
  const yFast = useTransform(scrollYProgress, [0, 1], ['0%', '-16%']);

  return (
    <div ref={ref} className="relative">
      {/* Projects */}
      <section id="projects" className="relative py-28">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold tracking-tight"
          >
            Selected Projects
          </motion.h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {projects.map((p, i) => (
              <motion.a
                key={p.title}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 24, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold group-hover:text-white transition-colors">{p.title}</h3>
                    <p className="text-sm text-neutral-300">{p.stack}</p>
                  </div>
                  <ExternalLink className="size-5 text-neutral-400 group-hover:text-white transition-colors" />
                </div>
                <div className="mt-6 h-28 rounded-xl bg-gradient-to-br from-fuchsia-500/20 via-purple-500/10 to-indigo-500/20 border border-white/10" />
                <div className="mt-4 flex gap-3 text-sm text-neutral-300">
                  <span className="inline-flex items-center gap-1"><Github className="size-4" /> Code</span>
                  <span>•</span>
                  <span>Case Study</span>
                </div>
                <div aria-hidden className="pointer-events-none absolute -right-24 -bottom-24 size-64 rounded-full bg-fuchsia-600/20 blur-3xl" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Parallax accents */}
        <motion.div style={{ y: ySlow }} aria-hidden className="pointer-events-none absolute inset-x-0 -top-10">
          <div className="mx-auto max-w-7xl px-6">
            <div className="h-24 rounded-3xl bg-gradient-to-r from-fuchsia-600/20 to-indigo-600/20 blur-2xl" />
          </div>
        </motion.div>
      </section>

      {/* Labs */}
      <section id="labs" className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold tracking-tight"
          >
            Labs & Experiments
          </motion.h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24, rotate: -1 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.55, delay: i * 0.06 }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Motion Study 0{i + 1}</h3>
                  <span className="text-xs text-neutral-400">Framer Motion</span>
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="mt-5 h-40 rounded-xl border border-white/10 bg-gradient-to-br from-purple-500/20 via-fuchsia-500/10 to-cyan-500/20"
                />
                <p className="mt-4 text-neutral-300 text-sm leading-relaxed">
                  Exploring parallax, spring physics, and scroll‑linked animation patterns for richer UX.
                </p>
                <div aria-hidden className="pointer-events-none absolute -left-24 -top-24 size-64 rounded-full bg-indigo-500/20 blur-3xl" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Faster parallax accent */}
        <motion.div style={{ y: yFast }} aria-hidden className="pointer-events-none absolute inset-x-0 -bottom-6">
          <div className="mx-auto max-w-7xl px-6">
            <div className="h-24 rounded-3xl bg-gradient-to-r from-cyan-600/20 to-fuchsia-600/20 blur-2xl" />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
