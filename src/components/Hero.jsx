import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const subtitleY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scaleIn = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section id="home" ref={ref} className="relative h-[110svh] w-full overflow-hidden">
      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Vignette and gradients (non-blocking) */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/80" />
        <div className="absolute -left-10 top-10 size-[40rem] rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="absolute -right-20 bottom-10 size-[36rem] rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      {/* Headline overlay */}
      <motion.div style={{ opacity: fade, scale: scaleIn }} className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h1 style={{ y: titleY }} className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
            Ultra‑Modern
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400">Cyber Portfolio</span>
          </motion.h1>
          <motion.p style={{ y: subtitleY }} className="mt-4 max-w-2xl text-neutral-200 text-lg md:text-xl">
            Futuristic interfaces with 3D, parallax, and scroll‑linked motion. React, Node, Java/Spring, ANTLR, PostgreSQL, MongoDB.
          </motion.p>
          <div className="mt-8 flex gap-3">
            <a href="#projects" className="rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 active:bg-fuchsia-700 transition-colors px-5 py-3 font-medium">View Work</a>
            <a href="#experience" className="rounded-xl border border-white/20 hover:border-white/40 px-5 py-3 font-medium">Experience</a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
