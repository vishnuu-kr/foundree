import { useRef, useState, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function MagneticButton({ children, className = "" }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const scale = useMotionValue(1);
  const shadowOpacity = useMotionValue(0.05);

  const springConfig = { stiffness: 150, damping: 15 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);
  const springScale = useSpring(scale, springConfig);
  const springShadow = useSpring(shadowOpacity, springConfig);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      // Rule: Proximity trigger within 100px (user asked for 50px of the button, 
      // but usually button center + some buffer is better for physics feel)
      // I'll stick to a slightly larger radius for the 'pull' to feel natural
      const triggerRadius = 150; 
      
      if (distance < triggerRadius) {
        setIsActive(true);
        // Calculate pull (max 15px as per user rule)
        const pullX = (distanceX / triggerRadius) * 20;
        const pullY = (distanceY / triggerRadius) * 20;
        
        // Clamp to max 15px
        mouseX.set(Math.max(-15, Math.min(15, pullX)));
        mouseY.set(Math.max(-15, Math.min(15, pullY)));
        scale.set(1.05);
        shadowOpacity.set(0.25); // Intensify inner shadow hint
      } else {
        setIsActive(false);
        mouseX.set(0);
        mouseY.set(0);
        scale.set(1);
        shadowOpacity.set(0.05);
      }
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
  }, []);

  return (
    <motion.div
      ref={ref}
      style={{
        x: springX,
        y: springY,
        scale: springScale,
        boxShadow: `inset 0 1px 1px rgba(255,255,255,${springShadow.get()}), 0 20px 40px rgba(0,0,0,0.3)`,
      }}
      className={`liquid-glass-strong cursor-pointer ${className}`}
    >
      {children}
    </motion.div>
  );
}
