import Spline from "@splinetool/react-spline";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Rocket } from "lucide-react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <section id="home" ref={ref} className="relative min-h-[96vh] w-full overflow-hidden">
      {/* Full-width colorful 3D cover */}
      <motion.div style={{ y }} className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        {/* Top/bottom gradients for readability; do not block interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(168,85,247,0.25),transparent),radial-gradient(40%_40%_at_80%_70%,rgba(34,211,238,0.25),transparent)]" />
      </motion.div>

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 pb-28 pt-40 md:pb-32 md:pt-44">
        <motion.div style={{ y: titleY }} className="max-w-3xl">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Crafting playful, modern, vibrant products
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-violet-300 to-cyan-300">
              React • Node • Java • Spring Boot
            </span>
          </motion.h1>
        </motion.div>

        <motion.p
          style={{ y: subtitleY }}
          className="max-w-2xl text-white/85 text-base md:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          I build delightful interfaces and resilient backends—bringing together React, Express,
          Java, Spring, ANTLR, PostgreSQL, and MongoDB to ship real, impactful software.
        </motion.p>

        <div className="mt-2 flex flex-wrap items-center gap-3">
          <motion.a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:brightness-110 transition"
            whileTap={{ scale: 0.98 }}
          >
            <Rocket size={18} /> Explore Projects
          </motion.a>
          <motion.a
            href="#labs"
            className="inline-flex items-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
            whileTap={{ scale: 0.98 }}
          >
            Open Labs
          </motion.a>
        </div>

        <motion.div
          className="mt-6 flex flex-wrap gap-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {["React.js", "Node.js", "Express.js", "Java", "Spring", "Spring Boot", "ANTLR", "PostgreSQL", "MongoDB"].map(
            (tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.02 * i, duration: 0.4 }}
                className="rounded-full border border-white/15 bg-gradient-to-tr from-white/10 to-white/5 px-3 py-1 text-xs text-white/90 backdrop-blur"
              >
                {tag}
              </motion.span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
