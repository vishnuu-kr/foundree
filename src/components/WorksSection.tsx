import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    id: "finally-found",
    title: "Finally Found®",
    description: "Hyper-personalized movie recommendations powered by AI taste-mapping.",
    tags: ["React", "TypeScript", "AI"],
    colSpan: true,
  },
  {
    id: "cinelore",
    title: "Cinelore®",
    description: "A platform for film enthusiasts to dissect theories and hidden meanings.",
    tags: ["Community", "Platform"],
  },
  {
    id: "gitforge",
    title: "GitForge®",
    description: "MCP server feeding high-quality GitHub context into AI models.",
    tags: ["Python", "MCP", "AI"],
  },
  {
    id: "foliosync",
    title: "FolioSync®",
    description: "Auto-updating developer portfolios driven by GitHub activity.",
    tags: ["Automation", "AI"],
  },
  {
    id: "allopen",
    title: "Allopen®",
    description: "An omni-format application designed to smoothly open and inspect absolutely any file type.",
    tags: ["Desktop", "Utility"],
  }
];

export function WorksSection() {
  return (
    <section id="works" className="relative py-24 px-6 md:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-baseline gap-2 mb-12">
          <span className="font-serif italic text-white/50 text-4xl md:text-5xl">Crafted by</span>
          <span className="font-sans font-medium text-white text-4xl md:text-5xl tracking-tight">Foundree.</span>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.15 }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
