import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const techCategories = [
  {
    id: "languages",
    label: "Languages",
    items: ["TypeScript", "Python", "Rust", "Go"],
    glowColor: "from-amber-500/20",
  },
  {
    id: "frontend",
    label: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    glowColor: "from-blue-500/20",
  },
  {
    id: "ai-ml",
    label: "AI & ML",
    items: ["OpenAI", "LangChain", "MCP Protocol", "RAG Pipelines"],
    glowColor: "from-purple-500/20",
  },
  {
    id: "infrastructure",
    label: "Infrastructure",
    items: ["Supabase", "Vercel", "Docker", "GitHub Actions"],
    glowColor: "from-emerald-500/20",
  },
];

export function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState(techCategories[0]);

  return (
    <section id="stack" className="relative py-32 bg-black min-h-[80vh] flex items-center px-6 md:px-12">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column (col-span-5) */}
        <div className="lg:col-span-5 flex flex-col relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-xs font-mono tracking-[0.3em] uppercase text-white/40 mb-6">
              OUR ARSENAL
            </p>
            <h2 className="text-5xl font-sans font-medium text-white tracking-tight flex flex-col gap-y-2">
              <span>Built with conviction,</span>
              <span className="font-serif italic text-white/70">not convention.</span>
            </h2>
          </motion.div>

          {/* Interactive Navigation */}
          <div className="flex flex-col space-y-2">
            {techCategories.map((cat) => (
              <button
                key={cat.id}
                onMouseEnter={() => setActiveCategory(cat)}
                className={`text-4xl md:text-5xl font-sans font-bold text-left transition-all duration-300 py-4 block ${
                  activeCategory.id === cat.id
                    ? "text-white pl-4"
                    : "text-white/20 hover:text-white/60 hover:pl-2"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column (col-span-7) */}
        <div className="lg:col-span-7 relative z-10">
          <div className="h-[500px] w-full rounded-[2rem] relative overflow-hidden border border-white/10 bg-white/[0.01] backdrop-blur-3xl p-10 shadow-2xl">
            {/* Soft background radial glow */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${activeCategory.glowColor} to-transparent opacity-50 transition-colors duration-700 pointer-events-none`}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full flex items-center justify-center p-10"
              >
                {/* Visual Stage Content Conditional Rendering */}
                
                {/* LANGUAGES MODULE */}
                {activeCategory.id === "languages" && (
                  <div className="relative w-full h-full">
                    <div className="absolute top-0 w-full overflow-hidden whitespace-nowrap opacity-10 font-mono text-xl tracking-widest text-white animate-pulse">
                      {">"} print("Hello World")_ <br />
                      {">"} cargo run --release <br />
                      {">"} go build -o main
                    </div>
                    {/* Floating Pills */}
                    <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute top-1/4 left-1/4 px-6 py-3 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-md text-white font-mono text-lg shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                      TypeScript
                    </motion.div>
                    <motion.div animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }} className="absolute bottom-1/3 right-1/4 px-8 py-4 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md text-white font-mono text-2xl shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                      Python
                    </motion.div>
                    <motion.div animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }} className="absolute top-1/2 left-1/2 px-5 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-md text-white font-mono shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                      Rust
                    </motion.div>
                    <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1.5 }} className="absolute top-1/3 right-1/3 px-4 py-2 rounded-full border border-teal-500/30 bg-teal-500/10 backdrop-blur-md text-white font-mono shadow-[0_0_15px_rgba(20,184,166,0.2)]">
                      Go
                    </motion.div>
                  </div>
                )}

                {/* FRONTEND MODULE */}
                {activeCategory.id === "frontend" && (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="w-[80%] h-[80%] border border-white/20 rounded-2xl p-4 flex flex-col gap-4 relative bg-white/[0.02]">
                      <div className="h-12 w-full border border-white/10 rounded-xl bg-white/5" />
                      <div className="flex flex-1 gap-4">
                        <div className="w-1/3 border border-white/10 rounded-xl bg-white/5 relative flex items-center justify-center">
                          <span className="absolute -left-6 -top-4 rounded-full border border-white/20 bg-black/80 px-4 py-2 text-sm text-white/90 backdrop-blur-xl">
                            React
                          </span>
                        </div>
                        <div className="flex-1 border border-white/10 rounded-xl bg-white/5 relative flex items-center justify-center">
                          <span className="absolute -right-6 bottom-12 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-2 text-sm text-sky-200 backdrop-blur-xl">
                            Tailwind CSS
                          </span>
                          <span className="absolute left-1/2 -top-6 -translate-x-1/2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-200 backdrop-blur-xl">
                            Framer Motion
                          </span>
                          <span className="absolute -bottom-4 right-1/4 rounded-full border border-white/20 bg-black/80 px-4 py-2 text-sm text-white/90 backdrop-blur-xl">
                            Next.js
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* AI & ML MODULE */}
                {activeCategory.id === "ai-ml" && (
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Glowing Connections */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M50 50 L20 20 M50 50 L80 30 M50 50 L70 80 M50 50 L30 70" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" fill="none" className="animate-pulse" />
                    </svg>
                    <div className="w-24 h-24 rounded-full border border-white/30 bg-white/10 backdrop-blur-xl flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.1)] z-10">
                      <div className="w-16 h-16 rounded-full border border-white/40 bg-white/20 animate-ping opacity-20" />
                    </div>
                    {/* Orbital Nodes */}
                    <div className="absolute top-[15%] left-[15%] border border-white/20 bg-black/50 backdrop-blur-md px-4 py-2 rounded-lg text-sm text-white/80">OpenAI</div>
                    <div className="absolute top-[25%] right-[15%] border border-white/20 bg-black/50 backdrop-blur-md px-4 py-2 rounded-lg text-sm text-white/80">LangChain</div>
                    <div className="absolute bottom-[15%] right-[25%] border border-white/20 bg-black/50 backdrop-blur-md px-4 py-2 rounded-lg text-sm text-white/80">MCP Protocol</div>
                    <div className="absolute bottom-[25%] left-[25%] border border-white/20 bg-black/50 backdrop-blur-md px-4 py-2 rounded-lg text-sm text-white/80">RAG Pipelines</div>
                  </div>
                )}

                {/* INFRASTRUCTURE MODULE */}
                {activeCategory.id === "infrastructure" && (
                  <div className="relative w-full h-full flex flex-col items-center justify-center">
                    {/* Isometric Stack */}
                    <div className="relative w-64 h-80 perspective-[1000px] flex items-center justify-center">
                      <div className="absolute space-y-12">
                        {activeCategory.items.map((item, idx) => (
                          <motion.div
                            key={item}
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: idx * 0.15 }}
                            className="w-48 h-16 bg-white/[0.05] border border-white/20 rounded-xl flex items-center justify-center backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform -rotate-12 skew-x-[20deg] hover:bg-white/[0.1] transition-colors"
                          >
                            <span className="text-white/80 font-mono text-sm tracking-widest uppercase transform rotate-12 -skew-x-[20deg]">
                              {item}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
