import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mt-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="text-white font-semibold tracking-tight text-lg">Cyberfolio</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-200">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#labs" className="hover:text-white transition-colors">Labs</a>
          </nav>
          <a href="#contact" className="inline-flex items-center rounded-xl bg-white text-black px-3 py-2 text-sm font-medium hover:bg-neutral-200 transition-colors">Contact</a>
        </div>
      </div>
    </header>
  );
}
