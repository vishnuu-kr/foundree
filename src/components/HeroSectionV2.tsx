import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { BlurText } from "./BlurText";
import { useHlsVideo } from "@/hooks/useHlsVideo";
import { CommandCenter } from "./CommandCenter";
import { MagneticButton } from "./MagneticButton";

export function HeroSectionV2() {
  const videoRef = useHlsVideo("https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8");

  return (
    <section className="relative overflow-visible min-h-[85vh]">
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
      <div className="z-10 flex flex-col items-center text-center relative max-w-5xl mx-auto px-6 pt-[180px] pb-20">

        {/* 3. The Badge (Top) - Command Center */}
        <div className="mb-6 flex justify-center w-full relative z-30">
          <CommandCenter />
        </div>

        {/* 4. The Main Headline (The BlurText Effect) */}
        <div className="relative z-20 w-full px-4 sm:px-0">
          <BlurText
            text="Obsessed with building tools that feel alive."
            className="font-heading italic text-foreground text-[clamp(2.5rem,8vw,5.5rem)] leading-[1.1] md:leading-[1.15] tracking-[-0.04em] max-w-4xl mx-auto"
            delay={0.1}
          />
        </div>

        {/* 5. The Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="font-body font-light text-white/60 text-lg md:text-xl max-w-xl mt-6 leading-relaxed"
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
          <MagneticButton className="rounded-full overflow-hidden">
            <a href="#works" className="w-full sm:w-auto px-8 py-3.5 flex items-center justify-center gap-2 text-white font-body group">
              <span>View Selected Works</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </MagneticButton>

          <MagneticButton className="rounded-full overflow-hidden bg-transparent border-none shadow-none">
            <a 
              href="https://github.com/vishnuu-kr/foundree" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/70 hover:text-white font-body flex items-center gap-4 transition-all px-8 py-3.5 group"
            >
              <span>Explore GitHub</span>
              <Github className="w-5 h-5 transition-transform group-hover:scale-110" />
            </a>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
