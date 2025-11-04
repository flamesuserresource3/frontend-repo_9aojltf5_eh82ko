import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b12] text-white">
      {/* Background gradient mesh */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.18),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.14),transparent_35%),radial-gradient(circle_at_30%_80%,rgba(99,102,241,0.14),transparent_35%)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Experience />
        <Projects />

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h3 className="text-2xl md:text-3xl font-bold">Let’s build something great</h3>
            <p className="mt-3 text-white/75">
              Available for freelance and full‑time opportunities. I love impactful products,
              clean architectures, and delightful UX.
            </p>
            <a
              href="mailto:contact@developer.dev"
              className="mt-6 inline-flex items-center rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:brightness-110 transition"
            >
              Get in touch
            </a>
          </div>
        </section>

        <footer className="border-t border-white/10 py-8 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Full‑Stack Developer • Endava Solutions alum
        </footer>
      </main>
    </div>
  );
}

export default App;
