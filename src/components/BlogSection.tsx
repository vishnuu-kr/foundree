import { motion } from "framer-motion";
import { ArrowUpRight, MessageSquare, Repeat2, Heart, Share, BarChart2 } from "lucide-react";
import { toast } from "sonner";

export function BlogSection() {
  const handleInteraction = (type: string) => {
    toast.info(`${type} functionality coming soon.`, {
      description: "We're currently scaling our backend protocols.",
    });
  };

  return (
    <section id="insights" className="relative py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-white/40 mb-6">
              INSIGHTS
            </p>
            <h2 className="text-5xl md:text-6xl font-sans font-medium text-white tracking-tight flex flex-wrap gap-x-2">
              Thoughts, <span className="font-serif italic text-white/70">unfiltered.</span>
            </h2>
          </div>
          <a
            href="https://x.com/foundree_dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-sans text-white/50 hover:text-white transition-colors mt-6 md:mt-0"
          >
            Follow @foundree_dev <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* The Feed Container */}
        <div className="max-w-[600px] mx-auto mt-16 flex flex-col gap-6">
          
          {/* Post 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 transition-colors hover:bg-white/[0.04] cursor-pointer group shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
          >
            {/* Author Block */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 shrink-0 overflow-hidden p-2 flex items-center justify-center">
                <img src="/favicon.svg" alt="Foundree" className="w-full h-full object-contain opacity-100" />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-base font-sans font-medium text-white flex items-center gap-1">
                  Foundree
                  <svg className="w-4 h-4 text-white/80" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10.95 21.05a1.5 1.5 0 01-1.06-.44l-4.5-4.5a1.5 1.5 0 012.12-2.12l3.44 3.44 7.44-7.44a1.5 1.5 0 112.12 2.12l-8.5 8.5a1.5 1.5 0 01-1.06.44z" />
                  </svg>
                </span>
                <span className="text-sm font-sans text-white/40">
                  @foundree_dev · Mar 15
                </span>
              </div>
            </div>

            {/* Post Content */}
            <div className="font-sans text-[15px] leading-relaxed text-white/80 whitespace-pre-wrap">
              <p className="font-medium text-white mb-2">Why We Bet Everything on MCP Architecture</p>
              The Model Context Protocol is quietly becoming the backbone of agentic AI. Here's why we went all-in early. <span className="text-white/40">#AI #Engineering</span>
            </div>

            {/* Engagement Bar */}
            <div className="flex items-center justify-between mt-6 max-w-md pr-10">
              <button onClick={() => handleInteraction("Reply")} className="flex items-center gap-2 text-white/30 text-xs font-sans group/btn hover:text-white transition-colors">
                <MessageSquare className="w-4 h-4" /> 12
              </button>
              <button onClick={() => handleInteraction("Retweet")} className="flex items-center gap-2 text-white/30 text-xs font-sans group/btn hover:text-emerald-400 transition-colors">
                <Repeat2 className="w-4 h-4" /> 4
              </button>
              <button onClick={() => handleInteraction("Like")} className="flex items-center gap-2 text-white/30 text-xs font-sans group/btn hover:text-rose-400 transition-colors">
                <Heart className="w-4 h-4" /> 48
              </button>
              <button onClick={() => handleInteraction("Stats")} className="flex items-center gap-2 text-white/30 text-xs font-sans group/btn hover:text-blue-400 transition-colors">
                <BarChart2 className="w-4 h-4" /> 1.2k
              </button>
              <button onClick={() => handleInteraction("Share")} className="flex items-center gap-2 text-white/30 text-xs font-sans group/btn hover:text-white transition-colors">
                <Share className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Post 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 transition-colors hover:bg-white/[0.04] cursor-pointer group shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 shrink-0 overflow-hidden p-2 flex items-center justify-center">
                <img src="/favicon.svg" alt="Foundree" className="w-full h-full object-contain opacity-100" />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-base font-sans font-medium text-white flex items-center gap-1">
                  Foundree
                  <svg className="w-4 h-4 text-white/80" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10.95 21.05a1.5 1.5 0 01-1.06-.44l-4.5-4.5a1.5 1.5 0 012.12-2.12l3.44 3.44 7.44-7.44a1.5 1.5 0 112.12 2.12l-8.5 8.5a1.5 1.5 0 01-1.06.44z" />
                  </svg>
                </span>
                <span className="text-sm font-sans text-white/40">
                  @foundree_dev · Feb 28
                </span>
              </div>
            </div>

            <div className="font-sans text-[15px] leading-relaxed text-white/80 whitespace-pre-wrap">
              <p className="font-medium text-white mb-2">Building GitForge: Giving AI Models Real GitHub Context</p>
              How we built an MCP server that feeds structured, high-quality repository data directly into LLM conversations. <span className="text-blue-400">#OpenSource</span>
            </div>

            {/* Rich Media Card */}
            <a href="https://github.com/foundree/gitforge" target="_blank" rel="noopener noreferrer" className="block mt-4 border border-white/10 rounded-xl overflow-hidden bg-black/50 hover:bg-white/5 transition-colors group/link relative">        
              <div className="h-48 relative overflow-hidden">
                 <img 
                    src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80" 
                    alt="GitHub Context" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/link:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div className="p-3 border-t border-white/10 flex justify-between items-center absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-md">
                <ArrowUpRight className="w-4 h-4 text-white/40" />
              </div>
            </a>

            <div className="flex items-center justify-between mt-6 max-w-md pr-10">
              <button onClick={() => handleInteraction("Reply")} className="flex items-center gap-2 text-white/30 text-xs font-sans group/btn hover:text-white transition-colors">
                <MessageSquare className="w-4 h-4" /> 34
              </button>
              <button onClick={() => handleInteraction("Retweet")} className="flex items-center gap-2 text-white/30 text-xs font-sans group/btn hover:text-emerald-400 transition-colors">
                <Repeat2 className="w-4 h-4" /> 18
              </button>
              <button onClick={() => handleInteraction("Like")} className="flex items-center gap-2 text-white/30 text-xs font-sans group/btn hover:text-rose-400 transition-colors">
                <Heart className="w-4 h-4" /> 215
              </button>
              <button onClick={() => handleInteraction("Stats")} className="flex items-center gap-2 text-white/30 text-xs font-sans group/btn hover:text-blue-400 transition-colors">
                <BarChart2 className="w-4 h-4" /> 8.4k
              </button>
              <button onClick={() => handleInteraction("Share")} className="flex items-center gap-2 text-white/30 text-xs font-sans group/btn hover:text-white transition-colors">
                <Share className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Post 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 transition-colors hover:bg-white/[0.04] cursor-pointer group shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 shrink-0 overflow-hidden p-2 flex items-center justify-center">
                <img src="/favicon.svg" alt="Foundree" className="w-full h-full object-contain opacity-100" />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-base font-sans font-medium text-white flex items-center gap-1">
                  Foundree
                  <svg className="w-4 h-4 text-white/80" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10.95 21.05a1.5 1.5 0 01-1.06-.44l-4.5-4.5a1.5 1.5 0 012.12-2.12l3.44 3.44 7.44-7.44a1.5 1.5 0 112.12 2.12l-8.5 8.5a1.5 1.5 0 01-1.06.44z" />
                  </svg>
                </span>
                <span className="text-sm font-sans text-white/40">
                  @foundree_dev · Jan 12
                </span>
              </div>
            </div>

            <div className="font-sans text-[15px] leading-relaxed text-white/80 whitespace-pre-wrap">
              <p className="font-medium text-white mb-2">The Case for Dark-First Design Systems</p>
              Why starting with dark mode isn't just aesthetic, it's a better foundation for accessible, layered interfaces.
            </div>

            <div className="flex items-center justify-between mt-6 max-w-md pr-10">
              <button onClick={() => handleInteraction("Reply")} className="flex items-center gap-2 text-white/30 text-xs font-sans group/btn hover:text-white transition-colors">
                <MessageSquare className="w-4 h-4" /> 8
              </button>
              <button onClick={() => handleInteraction("Retweet")} className="flex items-center gap-2 text-white/30 text-xs font-sans group/btn hover:text-emerald-400 transition-colors">
                <Repeat2 className="w-4 h-4" /> 2
              </button>
              <button onClick={() => handleInteraction("Like")} className="flex items-center gap-2 text-white/30 text-xs font-sans group/btn hover:text-rose-400 transition-colors">
                <Heart className="w-4 h-4" /> 64
              </button>
              <button onClick={() => handleInteraction("Stats")} className="flex items-center gap-2 text-white/30 text-xs font-sans group/btn hover:text-blue-400 transition-colors">
                <BarChart2 className="w-4 h-4" /> 3.1k
              </button>
              <button onClick={() => handleInteraction("Share")} className="flex items-center gap-2 text-white/30 text-xs font-sans group/btn hover:text-white transition-colors">
                <Share className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
