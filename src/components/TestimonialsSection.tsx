import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Foundree shipped what our internal team couldn't in 6 months — in three weeks. Their MCP integration was flawless.",
    author: "Arjun Menon",
    role: "CTO, NeuralPath AI",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80",
  },
  {
    quote: "The attention to detail is unreal. Every interaction, every animation feels intentional. They don't just build products, they craft experiences.",
    author: "Sara Krishnan",
    role: "Head of Design, VerseStudio",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80",
  },
  {
    quote: "Finally Found completely changed how I discover films. It understands taste in a way no algorithm has before.",
    author: "Rahul Dev",
    role: "Film Critic & Writer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&q=80",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-32 px-6 md:px-12 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-mono tracking-[0.3em] uppercase text-white/40 mb-12">
            VOICES
          </p>
          <h2 className="text-5xl md:text-6xl font-sans font-medium text-white tracking-tight flex flex-wrap items-baseline gap-x-2">
            What they <span className="font-serif italic text-white/70 ml-1 md:ml-3">say about us.</span>
          </h2>
        </motion.div>

        {/* Container & Spotlight Effect */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 group/list">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
              className="bg-white/[0.02] backdrop-blur-2xl border border-white/[0.08] rounded-3xl p-8 md:p-10 relative overflow-hidden transition-all duration-500 group/card shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:bg-white/[0.04] hover:border-white/20 group-hover/list:opacity-40 hover:!opacity-100 flex flex-col"
            >
              {/* Macro-Typography Watermark */}
              <div className="absolute -top-4 -left-2 text-[12rem] leading-none font-serif italic text-white/[0.03] select-none z-0 group-hover/card:text-white/[0.06] transition-colors duration-500 pointer-events-none">
                “
              </div>

              {/* The Quote Text */}
              <div className="flex-1 relative z-10">
                <p className="text-lg md:text-xl font-sans font-light text-white/70 leading-relaxed mb-10 group-hover/card:text-white transition-colors duration-500">
                  {t.quote}
                </p>
              </div>

              {/* The Author Block */}
              <div className="relative z-10 mt-auto flex items-center gap-4 pt-6 border-t border-white/10">
                <img 
                  src={t.avatar} 
                  alt={t.author} 
                  className="w-12 h-12 rounded-full border border-white/20 grayscale object-cover" 
                />
                <div>
                  <p className="text-base font-sans font-medium text-white">{t.author}</p>
                  <p className="text-[10px] font-mono tracking-widest uppercase text-white/40 mt-1">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
