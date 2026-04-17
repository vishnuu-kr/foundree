import { motion } from "framer-motion";
import { Github } from "lucide-react";
import Magnetic from "./Magnetic";
import { useSfx } from "@/hooks/use-sfx";
import { ScrambleText } from "./ScrambleText";

export function TeamFooter() {
  const { playHoverSound, playClickSound } = useSfx();

  return (
    <section id="team" className="relative py-32 px-6 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center cursor-default group"
      >
        <h2 className="text-2xl font-mono text-white/50 tracking-widest uppercase mb-3 text-sm">
          <ScrambleText text="Led by Labeeb Hameed & Vishnu KR." onHover={true} />
        </h2>
        <p 
          className="font-serif italic text-3xl text-white/80 transition-colors duration-500 group-hover:text-white"
          onMouseEnter={playHoverSound}
        >
          Always starting. Always building.
        </p>
      </motion.div>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto mt-32 pt-8 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <div className="flex items-center gap-4">
            <span>© 2026 Foundree</span>
            <span className="opacity-40">•</span>
            <span className="text-sm text-white/60 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
               <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span>
               Compiling...
            </span>
          </div>
          <div className="flex items-center gap-6">
            <Magnetic>
              <a 
                href="https://x.com/foundree_dev" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors px-2 py-1 block"
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
              >
                X
              </a>
            </Magnetic>
            <Magnetic>
              <a 
                href="https://github.com/foundree" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors px-2 py-1 block"
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
              >
                <Github className="w-4 h-4" />
              </a>
            </Magnetic>
          </div>
        </div>
      </footer>
    </section>
  );
}
