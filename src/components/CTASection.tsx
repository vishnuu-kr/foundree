import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-32 px-6 md:px-12 bg-black">
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@foundree.dev"
              className="bg-white text-black px-8 py-4 rounded-full text-sm font-medium hover:bg-white/90 transition-colors inline-flex items-center gap-2"
            >
              Initialize Project <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://cal.com/foundree"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] rounded-full px-8 py-4 text-sm font-medium text-white hover:bg-white/[0.05] hover:border-white/20 transition-all"
            >
              Read the Docs (or Email Us)
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
