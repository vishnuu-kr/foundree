import { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";

const stats = [
  { value: 12, suffix: "+", label: "PROJECTS SHIPPED" },
  { value: 4, suffix: "", label: "OPEN SOURCE TOOLS" },
  { value: 50, suffix: "K+", label: "GITHUB STARS" },
  { value: 99, suffix: "%", label: "CLIENT RETENTION" },
];

function AnimatedCounter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate(v) {
          if (ref.current) {
            ref.current.textContent = Math.round(v).toString();
          }
        },
      });
      return controls.stop;
    }
  }, [value, inView]);

  return <span ref={ref}>0</span>;
}

export function StatsSection() {
  return (
    <section className="w-full relative">
      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* The Glass Pill Container */}
        <div className="w-full bg-white/[0.02] backdrop-blur-2xl border border-white/[0.08] rounded-[2rem] p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 relative overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
          
          {/* Subtle Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none z-0"></div>

          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center py-8 md:py-0 group cursor-default"
            >
              <div className="group-hover:scale-105 transition-transform duration-500 ease-out z-10 flex items-baseline">
                {/* Number Typography */}
                <span className="text-5xl md:text-7xl font-serif italic text-white tracking-tighter drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)] relative z-10">
                  <AnimatedCounter value={stat.value} />
                </span>
                <span className="text-3xl md:text-4xl font-sans font-light text-white/60 ml-1">
                  {stat.suffix}
                </span>
              </div>
              
              {/* Engineering Label */}
              <p className="text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase text-white/40 group-hover:text-white/70 transition-colors mt-4 relative z-10 text-center">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
