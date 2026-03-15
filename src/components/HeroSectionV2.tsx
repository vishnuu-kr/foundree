import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { BlurText } from "./BlurText";
import { useHlsVideo } from "@/hooks/useHlsVideo";

export function HeroSectionV2() {
  const videoRef = useHlsVideo("https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8");

  return (
    <section className="relative overflow-visible min-h-[100vh] lg:h-[1000px] bg-black">
      {/* 1. Background Video & Atmosphere */}
      <div className="absolute inset-x-0 top-0 h-full z-0 pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50"
        ></video>

        {/* Overall darkener */}
        <div className="absolute inset-0 bg-black/10 z-0" />

        {/* Bottom Fade (Enhanced) */}
        <div className="absolute bottom-0 left-0 right-0 z-[1] h-[500px] bg-gradient-to-b from-transparent via-black/40 to-black" />
      </div>

      {/* 2. Content Container */}
      <div className="z-10 flex flex-col items-center text-center pt-[220px] relative max-w-5xl mx-auto px-6">

        {/* 3. The Badge (Top) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="liquid-glass rounded-full px-3 py-1.5 flex items-center gap-2 mb-8 cursor-default"
        >
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
          <span className="text-xs font-body font-medium text-white/80">
            Kerala, IN — Last commit: 3 hrs ago
          </span>
        </motion.div>

        {/* 4. The Main Headline (The BlurText Effect) */}
        <BlurText
          text="Obsessed with building tools that feel alive."
          className="font-heading italic text-foreground text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.8] tracking-[-4px] max-w-4xl"
          delay={0.1}
        />

        {/* 5. The Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="font-body font-light text-white/60 text-lg md:text-xl max-w-2xl mt-6 leading-relaxed"
        >
          We operate on a strict "build what we want" philosophy. A Kerala-based collective of engineers and designers forging AI systems, MCP architecture, and open-source experiments.
        </motion.p>

        {/* 6. CTA Buttons (The Action Row) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10"
        >
          <button className="liquid-glass-strong w-full sm:w-auto rounded-full px-8 py-3.5 flex items-center justify-center gap-2 text-white font-body group transition-transform hover:scale-105 active:scale-95">
            <span>View Selected Works</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <button className="text-white/70 hover:text-white font-body flex items-center gap-2 transition-all hover:gap-3">
            <span>Explore GitHub</span>
            <Github className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
