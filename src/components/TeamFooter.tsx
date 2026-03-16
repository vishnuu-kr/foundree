import { motion } from "framer-motion";
import { Github } from "lucide-react";

export function TeamFooter() {
  return (
    <section id="team" className="relative py-32 px-6 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-2xl font-mono text-white/50 tracking-widest uppercase mb-3 text-sm">
          Led by Labeeb Hameed & Vishnu KR.
        </h2>
        <p className="font-serif italic text-3xl text-white/80">
          Always starting. Always building.
        </p>
      </motion.div>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto mt-32 pt-8 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <div className="flex items-center gap-4">
            <span>© 2026 Foundree</span>
            <span className="opacity-40">•</span>
            <span className="text-sm text-white/60">Compiling...</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://x.com/foundree_dev" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              X
            </a>
            <a href="https://github.com/foundree" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Github className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
