import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Experience from './components/Experience.jsx';
import Showcase from './components/Showcase.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-fuchsia-500/30 selection:text-fuchsia-200">
      <Navbar />
      <main className="relative">
        <Hero />
        <Experience />
        <Showcase />
        <footer id="contact" className="relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Let’s build something futuristic.</h2>
              <p className="mt-3 text-neutral-300 max-w-2xl">Open to collaborations across React, Node, Java/Spring Boot, ANTLR, PostgreSQL and MongoDB. I love crafting immersive, high‑performance interfaces.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="mailto:hello@example.com" className="inline-flex items-center rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 active:bg-fuchsia-700 transition-colors px-5 py-3 font-medium">
                  Email me
                </a>
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-xl border border-white/20 hover:border-white/40 px-5 py-3 font-medium">
                  GitHub
                </a>
              </div>
            </div>

            {/* Ambient gradient */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -right-20 top-10 size-[28rem] rounded-full bg-fuchsia-600/20 blur-3xl" />
              <div className="absolute left-0 bottom-0 size-[24rem] rounded-full bg-indigo-500/20 blur-3xl" />
            </div>
          </div>

          <div className="border-t border-white/10 text-center text-sm text-neutral-400 py-6">
            © {new Date().getFullYear()} • Built with React, Framer Motion, and Spline
          </div>
        </footer>
      </main>
    </div>
  );
}
