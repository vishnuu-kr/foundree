import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

export function CTASection() {
  return (
    <section className="relative py-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-sans font-medium text-white mb-4">
            Got an idea living rent-free
          </h2>
          <h2 className="font-serif italic text-4xl md:text-6xl text-white/60 mb-8">
            in your head?
          </h2>
          <p className="font-sans font-light text-white/50 text-lg max-w-xl mx-auto mb-12">
            We partner with founders, creators, and dreamers who want to build cool shit without the corporate red tape. Let's open a repo, turn on some music, and make it real.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <MagneticButton className="rounded-full">
              <a
                href="mailto:hello@foundree.dev"
                className="px-8 py-4 text-sm font-medium text-black bg-white rounded-full inline-flex items-center gap-2"
              >
                Start Building <ArrowRight className="w-4 h-4" />
              </a>
            </MagneticButton>

            <MagneticButton className="rounded-full">
              <a
                href="mailto:hello@foundree.dev"
                className="px-8 py-4 text-sm font-medium text-white rounded-full inline-flex items-center gap-2 whitespace-nowrap border border-white/20 hover:border-white/40 transition-colors"
              >
                Get in Touch
              </a>
            </MagneticButton>
          </div>
          <p className="text-[10px] font-mono text-white/20 mt-12">
            Press ⌘K to initialize contact protocol.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
