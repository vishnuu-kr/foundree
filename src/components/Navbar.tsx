import { motion } from "framer-motion";
import Magnetic from "./Magnetic";
import { useSfx } from "@/hooks/use-sfx";

const links = [
  { label: "Works", href: "#works" },
  { label: "Open Source", href: "#philosophy" },
  { label: "Manifesto", href: "#team" },
];

export function Navbar() {
  const { playHoverSound, playClickSound } = useSfx();
  
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    playClickSound();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="bg-white/[0.03] backdrop-blur-md border border-white/[0.08] rounded-full px-4 md:px-6 py-2.5 md:py-3 flex items-center gap-4 md:gap-8 shadow-2xl">
        <span className="text-xs md:text-sm font-semibold tracking-tight text-white shrink-0">Foundree</span>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((link) => (
            <Magnetic key={link.label}>
              <a
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                onMouseEnter={() => playHoverSound()}
                className="text-xs text-white/50 hover:text-white transition-colors px-2 py-1"
              >
                {link.label}
              </a>
            </Magnetic>
          ))}
        </div>

        <Magnetic>
          <a
            href="mailto:hello@foundree.dev"
            onMouseEnter={() => playHoverSound()}
            onClick={() => playClickSound()}
            className="bg-white text-black px-3 md:px-4 py-1.5 rounded-full text-[10px] md:text-xs font-medium hover:bg-white/90 transition-colors inline-block whitespace-nowrap"
          >
            <span className="hidden sm:inline">hello@foundree.dev</span>
            <span className="sm:hidden">Protocol</span>
          </a>
        </Magnetic>
      </div>
    </motion.nav>
  );
}
