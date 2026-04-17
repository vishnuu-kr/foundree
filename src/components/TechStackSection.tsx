import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { useSfx } from "@/hooks/use-sfx";

const prompts = [
  "Build a high-frequency trading bot in Rust...",
  "Wire up an MCP server to ingest raw GitHub data...",
  "Spin up a real-time multiplayer canvas in WebGL...",
  "Train a localized LLM on custom campus data...",
];

export function TechStackSection() {
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const { playHoverSound, playClickSound } = useSfx();

  useEffect(() => {
    const handleTyping = () => {
      const fullText = prompts[currentPromptIndex];
      
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
          setTypingSpeed(150);
        } else {
          setTypingSpeed(70);
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentPromptIndex((prev) => (prev + 1) % prompts.length);
          setTypingSpeed(100);
        } else {
          setTypingSpeed(40);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentPromptIndex, typingSpeed]);

  const backgroundTechs = [
    "PYTHON", "RUST", "TYPESCRIPT", "GO", "C++", "WEBGPU", "KUBERNETES", "PYTORCH", "REACT", "SWIFT", "WEBASSEMBLY", "SUPABASE", "TAILWIND", "DOCKER", "TENSORFLOW"
  ];

  // Repeat techs to fill the background
  const repeatedTechs = Array(15).fill(backgroundTechs).flat();

  return (
    <section id="stack" className="relative py-32 min-h-screen overflow-hidden flex flex-col items-center justify-center px-6">
      
      {/* 1. The Background (The Infinite Matrix) */}
      <div className="absolute inset-0 overflow-hidden flex flex-wrap gap-4 text-white/[0.02] font-mono text-2xl md:text-4xl font-bold uppercase select-none leading-none z-0 mix-blend-overlay p-4 pointer-events-none">
        {repeatedTechs.map((tech, i) => (
          <span key={i}>{tech} //</span>
        ))}
      </div>

      {/* 2. The Section Header (Centered, z-10) */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono uppercase tracking-[0.3em] text-white/40 mb-6"
        >
          [ THE CAPABILITY ]
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-sans font-medium text-white mb-2 tracking-tight"
        >
          Stack agnostic.
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-6xl font-serif italic text-white/70 tracking-tight"
        >
          Obsession driven.
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto text-center mt-6 text-white/60 font-sans text-lg mb-4"
        >
          We aren't tied to a specific framework. We are engineers. Tell us what the artifact needs to do, and we will read the docs, learn the syntax, and bend the machine to our will. If it compiles, we can build it.
        </motion.p>
      </div>

      {/* 3. The Interactive Command Palette (The Hero UI) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="max-w-3xl w-full mx-auto mt-16 bg-[#0a0a0a]/80 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(255,255,255,0.05)] overflow-hidden relative z-10 flex flex-col group"
      >
        {/* 4. Inside the Command Palette (The Typing Animation) */}
        <div className="flex items-center gap-4 px-6 py-5 border-b border-white/10">
          <Search className="w-5 h-5 text-white/40 flex-shrink-0" />
          <div className="flex items-center font-mono text-lg md:text-xl text-white overflow-hidden">
            <span>{displayedText}</span>
            <span className="w-2 h-5 bg-[#D4FF00] inline-block animate-pulse ml-1 shrink-0"></span>
          </div>
        </div>

        {/* 5. The Output Row (The Flex) */}
        <div className="px-6 py-4 bg-white/[0.02] flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono text-sm text-[#D4FF00]">
            <span className="animate-pulse">●</span>
            <span className="uppercase text-white/50 tracking-wider text-xs">Status: RUNNING</span>
          </div>
          
          <button 
            onClick={() => {
              playClickSound();
              window.location.href = `mailto:hello@foundree.dev?subject=Project Inquiry: ${prompts[currentPromptIndex].replace('...', '')}`;
            }}
            onMouseEnter={() => playHoverSound()}
            className="flex items-center gap-2 cursor-pointer group/cmd transition-transform active:scale-95"
            title="Execute command"
          >
            <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-white/30 mr-2 group-hover/cmd:text-[#D4FF00] transition-colors duration-300">
              EXECUTE
            </span>
            <span className="px-2 py-1 rounded bg-white/10 group-hover/cmd:bg-[#D4FF00]/20 group-hover/cmd:text-[#D4FF00] group-hover/cmd:border-[#D4FF00]/30 text-xs font-mono text-white/50 border border-white/5 shadow-inner transition-all duration-300">
              ⌘
            </span>
            <span className="px-2 py-1 rounded bg-white/10 group-hover/cmd:bg-[#D4FF00]/20 group-hover/cmd:text-[#D4FF00] group-hover/cmd:border-[#D4FF00]/30 text-xs font-mono text-white/50 border border-white/5 shadow-inner transition-all duration-300">
              ↵
            </span>
          </button>
        </div>
      </motion.div>
    </section>
  );
}
