import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { useSfx } from "@/hooks/use-sfx";
import { ScrambleText } from "./ScrambleText";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  colSpan?: boolean;
  href?: string;
  status?: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function ProjectCard({ id, title, description, tags, colSpan = false, href, status = "live" }: ProjectCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const { playHoverSound, playClickSound } = useSfx();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);

    cardRef.current.style.setProperty("--mouse-x", `${mouseX}px`);
    cardRef.current.style.setProperty("--mouse-y", `${mouseY}px`);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const renderAbstractVisual = () => {
    let glowClass = "";
    let patternNode = null;
    let metadataNode = null;

    switch (id) {
      case "finally-found":
        glowClass = "-top-[50%] -right-[50%] bg-[radial-gradient(circle,rgba(168,85,247,0.1)_0%,transparent_60%)]";
        patternNode = (
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_60%_60%_at_70%_30%,#000_10%,transparent_100%)] opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out z-10" />
        );
        metadataNode = <div className="absolute top-8 right-8 z-20 font-mono text-[10px] tracking-[0.2em] text-white/20">[SYS.RCMD.01]</div>;
        break;

      case "cinelore":
        glowClass = "-bottom-[50%] -right-[50%] bg-[radial-gradient(circle,rgba(239,68,68,0.1)_0%,transparent_60%)]";
        patternNode = (
          <div 
            className="absolute -right-[20%] -top-[20%] w-[150%] h-[150%] opacity-50 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-1000 ease-out z-10 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='circles' width='60' height='60' patternUnits='userSpaceOnUse' patternTransform='scale(1)'%3E%3Ccircle cx='30' cy='30' r='10' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='1'/%3E%3Ccircle cx='30' cy='30' r='20' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='1'/%3E%3Ccircle cx='30' cy='30' r='30' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23circles)'/%3E%3C/svg%3E")`,
              maskImage: "radial-gradient(circle at center, black 10%, transparent 70%)",
              WebkitMaskImage: "radial-gradient(circle at center, black 10%, transparent 70%)"
            }}
          />
        );
        metadataNode = <div className="absolute top-8 right-8 z-20 font-mono text-[10px] tracking-[0.2em] text-white/20">[NET.THRY.88]</div>;
        break;

      case "gitforge":
        glowClass = "-top-[50%] -right-[50%] bg-[radial-gradient(circle,rgba(34,197,94,0.1)_0%,transparent_60%)]";
        patternNode = (
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom_left,#000_10%,transparent_80%)] opacity-50 group-hover:opacity-100 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-1000 ease-out z-10" />
        );
        metadataNode = <div className="absolute top-8 right-8 z-20 font-mono text-[10px] tracking-[0.2em] text-white/20">[MCP.AUTH.OK]</div>;
        break;

      case "foliosync":
        glowClass = "-bottom-[50%] -left-[50%] bg-[radial-gradient(circle,rgba(59,130,246,0.1)_0%,transparent_60%)]";
        patternNode = (
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_8px)] [mask-image:linear-gradient(to_top_right,#000_0%,transparent_80%)] opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out z-10" />
        );
        metadataNode = <div className="absolute top-8 right-8 z-20 font-mono text-[10px] tracking-[0.2em] text-white/20">[CRON.SYNC.00]</div>;
        break;

      case "allopen":
        glowClass = "-top-[50%] -left-[50%] bg-[radial-gradient(circle,rgba(245,158,11,0.1)_0%,transparent_60%)]";
        patternNode = (
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.03)_1px,transparent_1px),radial-gradient(circle,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:40px_40px] [background-position:0_0,20px_20px] [mask-image:radial-gradient(ellipse_60%_60%_at_30%_70%,#000_10%,transparent_100%)] opacity-50 group-hover:opacity-100 group-hover:-translate-x-2 group-hover:scale-105 transition-all duration-1000 ease-out z-10" />
        );
        metadataNode = <div className="absolute top-8 right-8 z-20 font-mono text-[10px] tracking-[0.2em] text-white/20">[SYS.OPEN.IO]</div>;
        break;
        
      default:
        glowClass = "-top-[50%] -right-[50%] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_60%)]";
        break;
    }

    // Modern base64 SVG noise for high-end overlay texture
    const noiseSvg = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`;

    return (
      <>
        {/* Unified 'Aurora' Glow + Hover Icons */}
        <div className={`absolute w-[150%] h-[150%] z-0 pointer-events-none transition-opacity duration-1000 group-hover:opacity-100 opacity-60 ${glowClass}`} />
        
        {patternNode}
        {metadataNode}

        {/* Premium Noise Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay z-0 pointer-events-none"
          style={{
            backgroundImage: noiseSvg,
            backgroundRepeat: 'repeat'
          }}
        />
      </>
    );
  };

  return (
    <motion.a
      href={status === "development" ? undefined : href}
      target={status === "development" ? undefined : "_blank"}
      rel={status === "development" ? undefined : "noopener noreferrer"}
      ref={cardRef}
      variants={cardVariants}
      onMouseEnter={() => playHoverSound()}
      onClick={() => {
        if (status !== "development") playClickSound();
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`bg-white/[0.02] backdrop-blur-2xl border border-white/[0.08] rounded-[2rem] overflow-hidden relative group shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] p-10 flex flex-col justify-between min-h-[360px] md:min-h-[420px] transition-shadow duration-700 hover:shadow-[0_20px_50px_rgba(255,255,255,0.05)] ${
        status === "development" ? "cursor-default" : "cursor-pointer"
      } ${colSpan ? "md:col-span-2" : ""}`}
    >
      <div
        style={{ transform: "translateZ(50px)" }}
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.3)_0%,transparent_80%)] z-0"
      />

      {renderAbstractVisual()}

      <div style={{ transform: "translateZ(40px)" }} className="relative z-20 flex flex-wrap gap-2 mb-auto text-left justify-start">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest font-mono text-white/60"
          >
             <ScrambleText text={tag} onHover={true} duration={600} />
          </span>
        ))}
      </div>

      <div 
        style={{ transform: "translateZ(60px)" }} 
        className="relative z-20 mt-auto flex flex-col pr-8 text-left items-start pointer-events-none"
      >
        <h3 className="font-sans text-3xl font-medium tracking-tight text-white mb-2">
          <ScrambleText text={title} onHover={true} duration={800} />
        </h3>
        <p className="text-white/50 font-light text-sm max-w-xs">{description}</p>
      </div>

      {/* Sleek Arrow Icon or Development Badge */}
      <div 
        style={{ transform: "translateZ(80px)" }}
        className={`absolute bottom-8 right-8 md:bottom-10 md:right-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 backdrop-blur-md opacity-0 transition-all duration-500 ease-out z-30 ${
          status === "development"
            ? "px-4 py-2 group-hover:opacity-100 text-[10px] font-mono tracking-widest text-white/70 uppercase"
            : "w-10 h-10 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-white"
        }`}
      >
        {status === "development" ? (
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-pulse" />
            Forging
          </span>
        ) : (
          <ArrowUpRight className="w-5 h-5" />
        )}
      </div>
    </motion.a>
  );
}
