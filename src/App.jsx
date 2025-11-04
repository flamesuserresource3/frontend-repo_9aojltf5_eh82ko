import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Labs from "./components/Labs";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b12] text-white">
      {/* Global colorful mesh */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.18),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.14),transparent_35%),radial-gradient(circle_at_30%_80%,rgba(99,102,241,0.14),transparent_35%)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Experience />
        <Projects />
        <Labs />
        <Contact />

        <footer className="border-t border-white/10 py-8 text-center text-sm text-white/70">
          © {new Date().getFullYear()} Full‑Stack Developer • Built with love, color, and motion
        </footer>
      </main>
    </div>
  );
}

export default App;
