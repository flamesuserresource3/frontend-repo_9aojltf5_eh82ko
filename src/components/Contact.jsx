import { motion } from "framer-motion";
import { Mail, Send, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_40%_at_20%_30%,rgba(244,114,182,0.18),transparent),radial-gradient(40%_40%_at_80%_60%,rgba(34,197,94,0.16),transparent)]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Let’s build something colorful
          </motion.h2>
          <motion.p
            className="mt-3 text-white/75"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Available for freelance and full‑time roles. I love impactful products, clean architectures,
            and delightful UX.
          </motion.p>
        </div>

        <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3">
          <a
            href="mailto:contact@developer.dev"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:brightness-110 transition"
          >
            <Send size={16} /> Send an email
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
          >
            <Github size={16} /> View GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
