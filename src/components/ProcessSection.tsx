import { motion } from "framer-motion";

export function ProcessSection() {
  const steps = [
    { number: "01", title: "Discovery", description: "We listen obsessively. Understanding the problem space before writing a single line of code." },
    { number: "02", title: "Prototype", description: "Rapid, high-fidelity prototypes. We ship visual proofs within the first week." },
    { number: "03", title: "Build", description: "Lean sprints with continuous delivery. Every commit is production-ready." },
    { number: "04", title: "Refine", description: "Polish until it feels inevitable. Performance, accessibility, and delight." },
  ];

  return (
    <section className="relative py-32 px-6 md:px-12 bg-black">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-xs font-mono tracking-[0.3em] uppercase text-white/40 mb-12">
            PROCESS
          </p>
          <h2 className="text-5xl md:text-6xl font-sans font-medium text-white tracking-tight flex flex-wrap gap-x-3">
            How we <span className="font-serif italic text-white/70">get it done.</span>
          </h2>
        </motion.div>

        {/* The Execution Pipeline */}
        <div className="group/grid relative w-full">
          
          {/* The Connecting Pipeline (Top Edge) */}
          <div className="w-full hidden md:grid grid-cols-4 mb-4 relative">
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            {steps.map((_, i) => (
              <div key={`dot-${i}`} className="relative flex justify-center z-10 pl-8 md:pl-0">
                <div className="w-1.5 h-1.5 bg-white/80 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
              </div>
            ))}
          </div>

          {/* Core Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative p-8 rounded-2xl border border-transparent hover:border-white/10 hover:bg-white/[0.02] backdrop-blur-sm transition-all duration-500 group/card overflow-hidden cursor-default group-hover/grid:opacity-40 hover:!opacity-100"
              >
                {/* Spotlight Hover Effect */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.03),transparent_50%)] opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>

                {/* Macro-Typography Numbers */}
                <div className="absolute -right-4 -bottom-10 text-[10rem] font-serif italic font-bold text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.05)] group-hover/card:[-webkit-text-stroke:1px_rgba(255,255,255,0.15)] group-hover/card:scale-110 transition-all duration-700 select-none z-0">
                  {step.number}
                </div>

                {/* Content Hierarchy */}
                <div className="relative z-10 flex flex-col h-full min-h-[200px]">
                  <h3 className="text-2xl font-sans font-medium text-white/70 group-hover/card:text-white transition-colors mb-4">
                    {step.title}
                  </h3>
                  <p className="text-sm font-sans font-light text-white/40 group-hover/card:text-white/70 leading-relaxed transition-colors max-w-[90%] mt-auto">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
