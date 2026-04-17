import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import { CustomCursor } from "@/components/CustomCursor";
import { SmoothScroll } from "@/components/SmoothScroll";
import { TerminalModal } from "@/components/TerminalModal";
import { VibeBackground } from "@/components/VibeBackground";
import { useSfx } from "@/hooks/use-sfx";

const queryClient = new QueryClient();

const AppContent = () => {
  const [hasBooted, setHasBooted] = useState(false);
  const { playBootSound } = useSfx();

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasBooted) {
        setHasBooted(true);
        playBootSound();
      }
    };
    
    // Play boot sound on first interaction to bypass autoplay restrictions
    window.addEventListener("click", handleFirstInteraction, { once: true });
    return () => window.removeEventListener("click", handleFirstInteraction);
  }, [hasBooted, playBootSound]);

  return (
    <>
      <div className="noise-overlay" />
      <VibeBackground />
      <CustomCursor />
      <TerminalModal />
      <Toaster />
      <Sonner />
      <SmoothScroll>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </SmoothScroll>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AppContent />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
