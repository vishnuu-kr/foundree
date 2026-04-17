import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface ScrambleTextProps {
  text: string;
  delay?: number;
  duration?: number;
  className?: string;
  onHover?: boolean;
}

const chars = "!<>-_\\\\/[]{}—=+*^?#________";

export const ScrambleText: React.FC<ScrambleTextProps> = ({ 
  text, 
  delay = 0, 
  duration = 1000, 
  className = "", 
  onHover = false 
}) => {
  const [displayText, setDisplayText] = useState(onHover ? text : "");
  const [isScrambling, setIsScrambling] = useState(!onHover);
  const frameRef = useRef<number>();

  const scramble = (startTime: number, targetQueue: string) => {
    let now = Date.now();
    let progress = Math.min((now - startTime) / duration, 1);
    
    if (progress < 1) {
      let scrambled = "";
      for (let i = 0; i < targetQueue.length; i++) {
        if (targetQueue[i] === " ") {
          scrambled += " ";
        } else if (Math.random() > progress * 1.5) {
          scrambled += chars[Math.floor(Math.random() * chars.length)];
        } else {
          scrambled += targetQueue[i];
        }
      }
      setDisplayText(scrambled);
      frameRef.current = requestAnimationFrame(() => scramble(startTime, targetQueue));
    } else {
      setDisplayText(targetQueue);
      setIsScrambling(false);
    }
  };

  useEffect(() => {
    if (!onHover) {
      const timeoutId = setTimeout(() => {
        setIsScrambling(true);
        frameRef.current = requestAnimationFrame(() => scramble(Date.now(), text));
      }, delay);
      
      return () => {
        clearTimeout(timeoutId);
        if (frameRef.current) cancelAnimationFrame(frameRef.current);
      }
    }
  }, [text, delay, duration, onHover]);

  const handleHover = () => {
    if (onHover && !isScrambling) {
      setIsScrambling(true);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => scramble(Date.now(), text));
    }
  };

  return (
    <motion.span 
      className={className}
      onMouseEnter={handleHover}
      style={{ display: "inline-block" }}
    >
      {displayText}
    </motion.span>
  );
};
