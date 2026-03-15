import { ScrollRevealText } from "./ScrollRevealText";

export function PhilosophySection() {
  return (
    <section id="philosophy" className="py-32 px-6 md:px-12 bg-background relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="font-serif-italic text-4xl md:text-6xl leading-tight text-center relative">
          <div className="shimmer inline-block w-full">
            <ScrollRevealText text="We're a tight-knit crew of engineers and designers obsessed with the craft. Every push to main is a chance to sweat the details, minimize latency, and build things people actually want to use. And sometimes? We just build things because they're cool." />
          </div>
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="handwritten text-3xl md:text-5xl opacity-40 -rotate-3 select-none pointer-events-none">
            Foundree.
          </div>
        </div>
      </div>
      
      {/* Decorative backdrop glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}

