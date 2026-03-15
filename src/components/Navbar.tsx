import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

const links = [
  { label: "Works", href: "#works" },
  { label: "Open Source", href: "#philosophy" },
  { label: "Manifesto", href: "#team" },
];

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="bg-white/[0.03] backdrop-blur-md border border-white/[0.08] rounded-full px-6 py-3 flex items-center gap-8 shadow-2xl">
        <span className="text-sm font-semibold tracking-tight text-white">Foundree</span>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Magnetic key={link.label}>
              <a
                href={link.href}
                className="text-xs text-white/60 hover:text-white transition-colors px-2 py-1"
              >
                {link.label}
              </a>
            </Magnetic>
          ))}
        </div>

        <Magnetic>
          <a
            href="mailto:hello@foundree.dev"
            className="bg-white text-black px-4 py-1.5 rounded-full text-xs font-medium hover:bg-white/90 transition-colors inline-block"
          >
            hello@foundree.dev
          </a>
        </Magnetic>
      </div>
    </motion.nav>
  );
}
