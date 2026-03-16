import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export function TerminalModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [bootSequence, setBootSequence] = useState<string[]>([]);
  const [showPrompt, setShowPrompt] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setBootSequence([]);
      setShowPrompt(false);
      
      const lines = [
        "> Booting Foundree comms protocol... [OK]",
        "> Decrypting secure channel... [OK]",
        "> Connection established."
      ];

      let currentLine = 0;
      const interval = setInterval(() => {
        if (currentLine < lines.length) {
          setBootSequence((prev) => [...prev, lines[currentLine]]);
          currentLine++;
        } else {
          setShowPrompt(true);
          clearInterval(interval);
        }
      }, 600);

      return () => clearInterval(interval);
    }
  }, [isOpen]);

  useEffect(() => {
    if (showPrompt && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showPrompt]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="w-full max-w-2xl bg-[#0a0a0a] border border-white/20 rounded-xl overflow-hidden shadow-[0_0_100px_rgba(255,255,255,0.05)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="text-xs font-mono text-white/40">root@foundree:~</div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/20 hover:text-white/60 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm min-h-[300px] flex flex-col gap-2">
              <AnimatePresence>
                {bootSequence.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-white/70"
                  >
                    {line}
                  </motion.div>
                ))}
              </AnimatePresence>

              {showPrompt && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4"
                >
                  <p className="text-white/80 mb-2">
                    <span className="text-green-400">foundree_admin$</span> Please enter your email to execute connection:
                  </p>
                  <div className="flex items-center gap-2 bg-white/5 p-3 rounded border border-white/10">
                    <span className="text-green-400 font-bold">{">"}</span>
                    <input
                      ref={inputRef}
                      type="email"
                      placeholder="admin@foundree.dev"
                      className="bg-transparent border-none outline-none text-white w-full focus:ring-0 placeholder:text-white/10"
                    />
                    <div className="w-2 h-5 bg-[#D4FF00] animate-pulse shrink-0" />
                  </div>
                  <p className="text-[10px] text-white/20 mt-4 uppercase tracking-widest">
                    [ Press ESC to abort protocol ]
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
