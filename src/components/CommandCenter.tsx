import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Music, Clock, Play, Pause } from "lucide-react";

export function CommandCenter() {
  const [isHovered, setIsHovered] = useState(false);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    const id = setTimeout(() => {
      setIsHovered(true);
    }, 1000);
    setTimerId(id);
  };

  const handleMouseLeave = () => {
    if (timerId) clearTimeout(timerId);
    setTimerId(null);
    setIsHovered(false);
  };

  const [currentTime, setCurrentTime] = useState(new Date());
  const [lastCommit, setLastCommit] = useState<{ message: string; time: string } | null>(null);
  const [spotifyStatus, setSpotifyStatus] = useState<{ song: string; artist: string; albumArt?: string } | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    
    const fetchCommit = async () => {
      try {
        const response = await fetch("https://api.github.com/repos/vishnuu-kr/foundree/commits?per_page=1");
        const data = await response.json();
        if (data && data.length > 0) {
          const commit = data[0];
          const date = new Date(commit.commit.author.date);
          const diffInHours = Math.floor((new Date().getTime() - date.getTime()) / (1000 * 60 * 60));
          setLastCommit({
            message: commit.commit.message.split('\n')[0],
            time: diffInHours === 0 ? "JUST NOW" : `${diffInHours}H AGO`
          });
        }
      } catch (e) { console.error(e); }
    };

    setSpotifyStatus({ 
      song: "Atmosphere", 
      artist: "Foundree Radio",
      albumArt: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=100&h=100&fit=crop"
    });

    audioRef.current = null;

    fetchCommit();
    return () => {
      clearInterval(timer);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    // Initialize audio on first click to satisfy browser policies
    if (!audioRef.current) {
      audioRef.current = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.5;
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => {
        console.error("Audio playback failed:", err);
      });
    }
    setIsPlaying(!isPlaying);
  };

  const formatIST = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    });
  };

  return (
    <div className="relative h-9 flex items-start justify-center">
      <motion.div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="absolute top-0 z-[60]"
        layout
        transition={{ type: "spring", stiffness: 400, damping: 30, mass: 0.8 }}
        style={{ transformOrigin: "top center" }}
      >
        <motion.div
          layout
          className="liquid-glass bg-[#050505]/40 backdrop-blur-3xl rounded-[1.25rem] border border-white/10 shadow-2xl flex flex-col items-center justify-center overflow-hidden"
          animate={{
            width: isHovered ? "var(--width-expanded)" : "260px",
            height: isHovered ? "100px" : "36px",
          }}
          style={{
            // @ts-ignore - css variable for responsive motion
            "--width-expanded": "calc(min(460px, 90vw))"
          }}
        >
          <AnimatePresence mode="wait">
            {!isHovered ? (
              <motion.div
                key="pill"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full flex items-center justify-center gap-3 px-5 whitespace-nowrap"
              >
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                <span className="text-[10px] font-mono tracking-[0.2em] text-white/50 uppercase">IND</span>
                <div className="h-3 w-[1px] bg-white/10" />
                <span className="text-[10px] font-mono text-white/95">
                  {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}
                </span>
                <div className="h-3 w-[1px] bg-white/10" />
                <span className="text-[10px] font-mono tracking-wider text-white/70 uppercase">
                  PUSH: <span className="text-white font-bold">{lastCommit?.time || "SYNCING"}</span>
                </span>
              </motion.div>
            ) : (
              <motion.div
                key="essentials"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex items-center justify-between w-full h-full px-8 py-4 gap-8"
              >
                {/* 1. Time & Commitment */}
                <div className="flex flex-col gap-2 min-w-[120px]">
                  <div className="flex items-center gap-3">
                    <Clock className="w-3.5 h-3.5 text-white/30" />
                    <span className="text-2xl font-mono font-medium tracking-tighter text-white">
                      {formatIST(currentTime)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Github className="w-3 h-3 text-white/20" />
                    <span className="text-[9px] font-mono tracking-[0.15em] text-white/40 uppercase">
                      {lastCommit?.time || "SYNCING"}
                    </span>
                  </div>
                </div>

                <div className="h-8 w-[1px] bg-white/10" />

                {/* 2. Spotify Essentials */}
                <button 
                  onClick={togglePlay}
                  className="flex items-center gap-4 flex-1 min-w-0 group/music transition-all hover:opacity-100 opacity-90 text-left"
                >
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 shadow-lg border border-white/5">
                    <img src={spotifyStatus?.albumArt} className={`w-full h-full object-cover grayscale transition-all duration-700 ${isPlaying ? 'scale-110 opacity-70' : 'opacity-40'}`} />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover/music:bg-black/40 transition-colors">
                      {isPlaying ? (
                        <Pause className="w-5 h-5 text-white animate-pulse" />
                      ) : (
                        <Play className="w-5 h-5 text-white/60 translate-x-0.5" />
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-2">
                       <span className="text-[11px] font-semibold text-white/90 truncate uppercase tracking-tight">
                        {spotifyStatus?.song}
                      </span>
                      {isPlaying && (
                        <div className="flex items-end gap-[1px] h-2.5 mb-0.5">
                          {[1, 2, 3, 4].map((i) => (
                            <motion.div
                              key={i}
                              animate={{ height: ["20%", "100%", "30%", "80%", "20%"] }}
                              transition={{ 
                                repeat: Infinity, 
                                duration: 0.6 + i * 0.1,
                                ease: "easeInOut"
                              }}
                              className="w-[2px] bg-green-500/80 rounded-full"
                            />
                          ))}
                        </div>
                      )}
                    </div>
                    <span className="text-[9px] text-white/30 truncate uppercase tracking-widest mt-0.5">
                      {spotifyStatus?.artist}
                    </span>
                  </div>
                </button>

                {/* 3. Status Point */}
                <div className="flex-shrink-0">
                   <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.3)]" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
}
