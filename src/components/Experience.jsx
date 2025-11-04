import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const ROLES = [
  {
    company: "Endava Solutions",
    title: "Full‑Stack Developer",
    period: "2022 — Present",
    points: [
      "Built React + Express platforms with PostgreSQL & MongoDB backends",
      "Implemented Spring Boot microservices with JWT and observability",
      "Authored ANTLR grammars for a DSL and automated code generation",
    ],
  },
  {
    company: "Freelance",
    title: "Consultant / Builder",
    period: "Ongoing",
    points: [
      "Performance audits, CI pipelines, and scalable API design",
      "UI polish with Framer Motion and accessibility best practices",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const blobY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const blobY2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section id="experience" ref={ref} className="relative py-24">
      <motion.div style={{ y: blobY }} className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-fuchsia-500/25 blur-3xl" />
      <motion.div style={{ y: blobY2 }} className="pointer-events-none absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-cyan-500/25 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Experience
          </motion.h2>
          <motion.p
            className="mt-3 text-white/75"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            A quick timeline of building production systems and shipping polished experiences.
          </motion.p>
        </div>

        <div className="relative mx-auto mt-12 max-w-3xl">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-white/0 via-white/20 to-white/0" />
          <ul className="space-y-8">
            {ROLES.map((r, i) => (
              <motion.li
                key={r.company + i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i, duration: 0.55 }}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-6 pl-14 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.35)]"
              >
                <span className="absolute left-0 top-6 -translate-x-1/2 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-cyan-400 border border-white/20 shadow-lg">
                  <Briefcase size={16} />
                </span>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold">{r.title}</h3>
                  <span className="text-xs text-white/60">{r.period}</span>
                </div>
                <p className="text-white/80 mt-1 text-sm">{r.company}</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-white/80">
                  {r.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
