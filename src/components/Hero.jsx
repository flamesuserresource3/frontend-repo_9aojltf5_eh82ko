import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden">
      {/* Colorful gradient blobs as ambient lights */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-fuchsia-500/30 blur-3xl"
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/30 blur-3xl"
          animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col-reverse gap-10 px-6 pb-24 pt-40 md:flex-row md:items-center md:pb-28 md:pt-32">
        <div className="relative z-10 max-w-xl">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Full‑Stack Developer
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-300">
              React • Node • Java • Spring Boot
            </span>
          </motion.h1>

          <motion.p
            className="mt-5 text-white/80 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            Building robust web platforms with React.js, Express.js, Java, Spring & Spring Boot.
            Experienced with ANTLR parsers, PostgreSQL, and MongoDB. 2+ years crafting high‑impact
            solutions at Endava Solutions.
          </motion.p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <motion.a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:brightness-110 transition"
              whileTap={{ scale: 0.98 }}
            >
              <Rocket size={18} /> View Projects
            </motion.a>
            <motion.a
              href="mailto:contact@developer.dev"
              className="inline-flex items-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
              whileTap={{ scale: 0.98 }}
            >
              Contact Me
            </motion.a>
          </div>

          <motion.div
            className="mt-8 flex flex-wrap gap-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              "React.js",
              "Node.js",
              "Express.js",
              "Java",
              "Spring",
              "Spring Boot",
              "ANTLR",
              "PostgreSQL",
              "MongoDB",
            ].map((tag, i) => (
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
            ))}
          </motion.div>
        </div>

        <div className="relative h-[380px] w-full md:h-[520px] md:flex-1">
          <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 bg-black/20">
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: "100%", height: "100%" }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
