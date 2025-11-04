import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const PROJECTS = [
  {
    title: "Analytics Dashboard",
    desc: "Reactive admin panel with real‑time charts, built with React, Express, PostgreSQL.",
    tags: ["React", "Express", "PostgreSQL"],
    link: "#",
  },
  {
    title: "API Gateway",
    desc: "Spring Boot microservice gateway with JWT auth, rate limits, and observability.",
    tags: ["Java", "Spring Boot"],
    link: "#",
  },
  {
    title: "DSL Parser",
    desc: "ANTLR‑powered parser and codegen pipeline for a domain specific language.",
    tags: ["ANTLR", "Java"],
    link: "#",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="projects" ref={ref} className="relative py-24">
      <motion.div style={{ y }} className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-48 w-[80%] rounded-3xl bg-gradient-to-r from-fuchsia-500/25 via-violet-500/25 to-cyan-500/25 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Selected work
          </motion.h2>
          <motion.p
            className="mt-3 text-white/75"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            A mix of frontend polish and backend craftsmanship.
          </motion.p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * i, duration: 0.55 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 hover:-translate-y-1 transition-transform shadow-[0_10px_35px_-12px_rgba(0,0,0,0.35)]"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-tr from-fuchsia-500/30 to-cyan-400/30 blur-2xl transition-opacity group-hover:opacity-100 opacity-0" />

              <div className="relative">
                <div className="flex items-center gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[10px] rounded-full bg-white/10 px-2 py-1 text-white/80 border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="mt-3 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-white/80 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
