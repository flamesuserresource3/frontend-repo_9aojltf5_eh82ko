import { Github, Mail, Rocket } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto mt-4 w-[92%] md:w-[86%] backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)]">
        <div className="flex items-center justify-between px-4 md:px-6 py-3">
          <a href="#home" className="flex items-center gap-2">
            <motion.span
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-cyan-400 text-white"
              initial={{ rotate: -15, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <Rocket size={18} />
            </motion.span>
            <span className="font-semibold tracking-tight">Dev Portfolio</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="mailto:contact@developer.dev"
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>
        </div>

        <div className="md:hidden px-4 pb-4">
          <div className="flex items-center gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-white text-sm"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
