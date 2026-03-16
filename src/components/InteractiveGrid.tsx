import { useEffect, useRef } from "react";

export function InteractiveGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width: number;
    let height: number;
    let dots: { x: number; y: number; originX: number; originY: number }[] = [];
    const spacing = 35;
    const mouse = { x: -1000, y: -1000 };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initDots();
    };

    const initDots = () => {
      dots = [];
      // Offset for isometric/staggered feel if desired, 
      // but a standard clean grid usually resonates better with premium hacker aesthetics
      for (let x = spacing; x < width; x += spacing) {
        for (let y = spacing; y < height; y += spacing) {
          dots.push({ x, y, originX: x, originY: y });
        }
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      dots.forEach((dot) => {
        const dx = mouse.x - dot.originX;
        const dy = mouse.y - dot.originY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const radius = 120;

        if (distance < radius) {
          // Repulse logic
          const angle = Math.atan2(dy, dx);
          const force = (radius - distance) / radius;
          dot.x = dot.originX - Math.cos(angle) * force * 15;
          dot.y = dot.originY - Math.sin(angle) * force * 15;
          
          // Lighting logic
          const opacity = 0.05 + (force * 0.4);
          ctx.fillStyle = `rgba(212, 255, 0, ${opacity})`; // #D4FF00
        } else {
          // Reset dot position slowly for smoothness
          dot.x += (dot.originX - dot.x) * 0.1;
          dot.y += (dot.originY - dot.y) * 0.1;
          ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
        }

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 1, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    
    resize();
    render();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-30 select-none"
    />
  );
}
