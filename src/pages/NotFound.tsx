import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NotFound = () => {
  const location = useLocation();
  const [lines, setLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const sequence = [
      { text: "> INTRUSION DETECTED.", delay: 500 },
      { text: `> UNAUTHORIZED ACCESS ATTEMPT ON ${location.pathname.toUpperCase()}.`, delay: 1200 },
      { text: "> TRACING IP ADDRESS...", delay: 2000 },
      { text: "loading_bar", delay: 2800 },
      { text: "> IP LOGGED.", delay: 4500 },
      { text: "> Just kidding. But seriously, you're lost. Turn back.", delay: 5500 },
    ];

    sequence.forEach((item, index) => {
      setTimeout(() => {
        if (item.text === "loading_bar") {
          let p = 0;
          const interval = setInterval(() => {
            p += 5;
            setProgress(p);
            if (p >= 100) {
              clearInterval(interval);
            }
          }, 80);
        } else {
          setLines((prev) => [...prev, item.text]);
        }
        
        if (index === sequence.length - 1) {
          setTimeout(() => setShowButton(true), 1000);
        }
      }, item.delay);
    });
  }, [location.pathname]);

  const renderProgressBar = () => {
    const bars = Math.floor(progress / 5);
    return `[${"█".repeat(bars)}${" ".repeat(20 - bars)}] ${progress}%`;
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 font-mono text-sm overflow-hidden select-none">
      <div className="w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-[0_0_100px_rgba(255,0,0,0.05)]">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]/50" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]/50" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]/50" />
          </div>
          <div className="text-xs text-white/20 uppercase tracking-widest">Security Protocol 404</div>
        </div>

        {/* Terminal Content */}
        <div className="p-8 space-y-3 min-h-[320px]">
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={line.includes("INTRUSION") || line.includes("UNAUTHORIZED") ? "text-red-500 font-bold" : "text-white/60"}
            >
              {line}
            </motion.div>
          ))}

          {progress > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-500 font-bold mt-2"
            >
              {renderProgressBar()}
            </motion.div>
          )}

          <AnimatePresence>
            {showButton && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="pt-8"
              >
                <div className="flex items-center gap-3 group">
                  <span className="text-[#D4FF00] font-bold animate-pulse">foundree_link$</span>
                  <Link
                    to="/"
                    className="bg-white/5 border border-white/10 hover:border-[#D4FF00]/40 px-6 py-2 rounded text-white/80 hover:text-white hover:bg-white/10 transition-all flex items-center gap-2 group-hover:shadow-[0_0_20px_rgba(212,255,0,0.1)]"
                  >
                    [ Return to safe zone ]
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <div className="w-2 h-5 bg-[#D4FF00] animate-pulse inline-block align-middle ml-1" />
        </div>
      </div>

      {/* Background static noise hint */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://media.giphy.com/media/oEI9uWUqWMrBK/giphy.gif')] mix-blend-overlay" />
    </div>
  );
};

export default NotFound;
