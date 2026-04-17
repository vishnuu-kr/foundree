import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useSfx } from "@/hooks/use-sfx";

export function TerminalModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [bootSequence, setBootSequence] = useState<string[]>([]);
  const [showPrompt, setShowPrompt] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isGranted, setIsGranted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { playHoverSound, playBootSound, playClickSound } = useSfx();

  const handleEmailSubmit = async () => {
    if (!emailInput || !emailInput.includes("@")) return;
    
    setIsProcessing(true);
    playBootSound();
    
    // Hide the input bar, show processing animation
    setShowPrompt(false);
    
    // Add "Sending..." line
    setBootSequence(prev => [...prev, `> Authenticating signal for ${emailInput}...`]);
    
    setTimeout(() => {
      setBootSequence(prev => [...prev, "> Encrypted payload prepared. [OK]"]);
      playHoverSound();
      
      setTimeout(() => {
        setIsProcessing(false);
        setIsGranted(true);
        playClickSound();
        
        setTimeout(() => {
          // Open default mail client
          window.location.href = `mailto:hello@foundree.dev?subject=Secure Contact from Terminal&body=Incoming transmission from: ${emailInput}%0D%0A%0D%0A`;
          
          setTimeout(() => {
            setIsOpen(false);
            setEmailInput("");
          }, 1500);
        }, 1500);
        
      }, 1000);
      
    }, 1000);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => {
          if (!prev) playBootSound();
          return !prev;
        });
      }
      if (e.key === "Escape") {
        setIsOpen(false);
        playClickSound();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [playBootSound, playClickSound]);

  useEffect(() => {
    if (isOpen) {
      setBootSequence([]);
      setShowPrompt(false);
      setIsGranted(false);
      
      const lines = [
        "> Booting Foundree comms protocol... [OK]",
        "> Decrypting secure channel... [OK]",
        "> Connection established."
      ];

      let currentLine = 0;
      const interval = setInterval(() => {
        if (currentLine < lines.length) {
          setBootSequence((prev) => [...prev, lines[currentLine]]);
          playHoverSound();
          currentLine++;
        } else {
          setShowPrompt(true);
          playClickSound();
          clearInterval(interval);
        }
      }, 600);

      return () => clearInterval(interval);
    }
  }, [isOpen]);

  useEffect(() => {
    if (showPrompt && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showPrompt]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="w-full max-w-2xl bg-[#0a0a0a] border border-white/20 rounded-xl overflow-hidden shadow-[0_0_100px_rgba(255,255,255,0.05)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
              <div className="text-xs font-mono text-white/40">root@foundree:~</div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/20 hover:text-white/60 transition-colors"
                onMouseEnter={() => playHoverSound()}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm min-h-[300px] flex flex-col gap-2">
              <AnimatePresence>
                {bootSequence.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-white/70"
                  >
                    {line}
                  </motion.div>
                ))}
              </AnimatePresence>

              {showPrompt && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4"
                >
                  <p className="text-white/80 mb-2">
                    <span className="text-green-400">foundree_admin$</span> Please enter your email to execute connection:
                  </p>
                  <div className="flex items-center justify-between gap-2 bg-white/5 p-3 rounded border border-white/10 group focus-within:border-white/30 transition-colors">
                    <div className="flex items-center gap-2 flex-1">
                      <span className="text-green-400 font-bold">{">"}</span>
                      <input
                        ref={inputRef}
                        type="email"
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        placeholder="admin@foundree.dev"
                        className="bg-transparent border-none outline-none text-white w-full focus:ring-0 placeholder:text-white/10"
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            handleEmailSubmit();
                          } else {
                            playHoverSound();
                          }
                        }}
                      />
                      <div className="w-2 h-5 bg-[#D4FF00] animate-pulse shrink-0" />
                    </div>
                    {emailInput && emailInput.includes("@") && (
                      <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        onClick={handleEmailSubmit}
                        onMouseEnter={() => playHoverSound()}
                        className="text-xs bg-white text-black px-3 py-1 rounded font-bold hover:bg-green-400 transition-colors"
                      >
                        RETURN
                      </motion.button>
                    )}
                  </div>
                  <p className="text-[10px] text-white/20 mt-4 uppercase tracking-widest">
                    [ Press ESC to abort protocol ]
                  </p>
                </motion.div>
              )}
              
              {isProcessing && (
                <div className="mt-8 flex justify-center">
                   <div className="w-6 h-6 border-2 border-green-500/30 border-t-green-500 rounded-full animate-spin" />
                </div>
              )}

              {isGranted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-6 p-6 border border-green-500/30 bg-green-500/5 rounded-lg flex flex-col items-center justify-center text-center space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-2">
                    <div className="w-6 h-6 border-2 border-green-400 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-green-400 tracking-widest uppercase">
                    Access Granted
                  </h3>
                  <p className="text-green-400/70 text-xs md:text-sm font-mono max-w-sm">
                    Secure channel established. Ready to receive transmission. Initiating external mail client...
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
