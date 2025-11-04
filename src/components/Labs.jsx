import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

export default function Labs() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const blobY = useTransform(scrollYProgress, [0, 1], [40, -60]);
  const gridY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section id="labs" ref={ref} className="relative py-24">
      <motion.div style={{ y: blobY }} className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-48 w-[80%] rounded-3xl bg-gradient-to-r from-pink-500/25 via-amber-400/25 to-cyan-500/25 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Labs & Experiments
          </motion.h2>
          <motion.p
            className="mt-3 text-white/75"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            High‑color motion prototypes, parallax explorations, and micro‑interactions.
          </motion.p>
        </div>

        <motion.div style={{ y: gridY }} className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.04 * i }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_10px_35px_-12px_rgba(0,0,0,0.35)]"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-tr from-fuchsia-500/30 to-cyan-400/30 blur-2xl transition-opacity group-hover:opacity-100 opacity-0" />
              <div className="relative">
                <div className="flex items-center gap-2 text-white/80 text-xs">
                  <Sparkles size={14} />
                  Parallax Demo #{i}
                </div>
                <h3 className="mt-2 text-lg font-semibold">Kinetic Card {i}</h3>
                <p className="mt-1 text-white/80 text-sm leading-relaxed">
                  Colorful motion and layered depth with Framer Motion.
                </p>
              </div>
              <motion.div
                className="mt-4 h-24 rounded-xl bg-gradient-to-r from-fuchsia-500/30 via-violet-500/30 to-cyan-400/30"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
