import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const SKILLS = [
  { name: "React.js", color: "from-sky-400 to-cyan-400" },
  { name: "Node.js", color: "from-lime-400 to-emerald-400" },
  { name: "Express.js", color: "from-emerald-400 to-teal-400" },
  { name: "Java", color: "from-amber-400 to-orange-400" },
  { name: "Spring", color: "from-green-400 to-emerald-400" },
  { name: "Spring Boot", color: "from-green-300 to-lime-300" },
  { name: "ANTLR", color: "from-fuchsia-400 to-pink-400" },
  { name: "PostgreSQL", color: "from-blue-400 to-indigo-400" },
  { name: "MongoDB", color: "from-emerald-400 to-green-400" },
];

export default function Skills() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section id="skills" ref={ref} className="relative py-24">
      <motion.div style={{ y: y1 }} className="pointer-events-none absolute -top-28 -left-20 h-72 w-72 rounded-full bg-violet-500/30 blur-3xl" />
      <motion.div style={{ y: y2 }} className="pointer-events-none absolute -bottom-28 -right-16 h-80 w-80 rounded-full bg-cyan-500/30 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Tech I build with
          </motion.h2>
          <motion.p
            className="mt-3 text-white/75"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            A practical stack focused on high‑performance backends and delightful frontends.
          </motion.p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3">
          {SKILLS.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br ${s.color} mix-blend-overlay`} />
              <div className="relative">
                <div className={`h-2 w-16 rounded-full bg-gradient-to-r ${s.color} mb-3`} />
                <p className="font-semibold">{s.name}</p>
                <p className="mt-1 text-xs text-white/70">Production‑ready experience</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
