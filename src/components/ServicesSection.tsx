import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Cpu, Palette, Blocks, Zap, ArrowRight } from "lucide-react";
import { useState, useRef } from "react";

const services = [
  {
    icon: Cpu,
    title: "AI Integrations",
    description: "Custom LLM pipelines, RAG systems, and intelligent agents tailored to your product's unique needs.",
    number: "01",
    media: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800&h=600" // abstract AI
  },
  {
    icon: Blocks,
    title: "MCP Architecture",
    description: "Model Context Protocol servers that bridge AI models with real-world data sources and developer tools.",
    number: "02",
    media: "https://images.unsplash.com/photo-1639815188546-c43c240ff4df?auto=format&fit=crop&q=80&w=800&h=600" // abstract server/nodes
  },
  {
    icon: Palette,
    title: "Product Design & Engineering",
    description: "End-to-end product development from concept to pixel-perfect, performant applications.",
    number: "03",
    media: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800&h=600" // clean design
  },
  {
    icon: Zap,
    title: "Open Source Tooling",
    description: "High-quality developer tools and libraries built in public. Fast, composable, and beautifully documented.",
    number: "04",
    media: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=800&h=600" // code/tools
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function ServicesSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Floating media coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const floatX = useSpring(mouseX, springConfig);
  const floatY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - 160; // Offset by half image width
    const y = e.clientY - rect.top - 110; // Offset by half image height
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section id="services" className="relative py-32 px-6 md:px-12 bg-background">
      <div className="max-w-6xl mx-auto mb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.p variants={itemVariants} className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">What We Do</motion.p>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-medium text-foreground max-w-3xl leading-tight">
            Engineering that moves at the{" "}
            <span className="font-serif-italic text-foreground/60">speed of ideas.</span>
          </motion.h2>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto group/list" onMouseLeave={() => setHoveredIdx(null)}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="space-y-0 relative"
          // Attach mouse move at container level or item level?
          // Actually, let's attach to container to track anywhere inside
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseMove={handleMouseMove}
              className={`group/item relative flex flex-col md:grid md:grid-cols-12 md:items-center py-10 md:py-14 cursor-pointer transition-all duration-500 hover:bg-white/[0.02] px-6 -mx-6
              ${hoveredIdx !== null && hoveredIdx !== i ? 'opacity-30' : 'opacity-100'} 
              `}
            >
              {/* Gradient Divider */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <div className="absolute inset-0 bg-gradient-to-r from-white/[0.03] to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-500" />
              
              {/* Grid 1 Col: Number & Icon */}
              <div className="col-span-2 md:col-span-1 flex items-center gap-4 z-10 group-hover/item:translate-x-2 transition-transform duration-500">
                <span className="text-xs text-muted-foreground group-hover/item:text-white transition-colors duration-500 font-mono w-6">{service.number}</span>
                <service.icon className="w-5 h-5 text-foreground/20 group-hover/item:text-foreground transition-all duration-500" />
              </div>
              
              {/* Grid 4 Cols: Title */}
              <div className="col-span-10 md:col-span-4 z-10">
                <h3 className="text-xl md:text-2xl font-medium text-foreground mt-4 mb-2 md:mt-0 md:mb-0 group-hover/item:translate-x-2 transition-transform duration-500">
                  {service.title}
                </h3>
              </div>

              {/* Grid 5 Cols: Description */}
              <div className="col-span-12 md:col-span-5 md:col-start-6 z-10">
                <p className="text-sm text-muted-foreground leading-relaxed w-full group-hover/item:text-foreground/80 transition-colors duration-500">
                  {service.description}
                </p>
              </div>

              {/* Rest of cols are empty space, button hidden on md */}
              <div className="hidden md:flex items-center justify-end col-span-2 text-xs font-medium opacity-0 group-hover/item:opacity-100 transition-all duration-500 translate-x-4 group-hover/item:translate-x-0 z-10">
                <span className="mr-2">Inquire</span>
                <ArrowRight className="w-4 h-4" />
              </div>

              {/* Floating Media Reveal */}
              {hoveredIdx === i && (
                <motion.div
                  className="pointer-events-none absolute top-0 left-0 z-50 overflow-hidden rounded-xl border border-white/10 shadow-2xl bg-black/50 backdrop-blur-md hidden md:block"
                  style={{
                    width: 320,
                    height: 220,
                    x: floatX,
                    y: floatY,
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={service.media}
                    alt={service.title}
                    className="w-full h-full object-cover opacity-90"
                  />
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
