import { Navbar } from "@/components/Navbar";

import { HeroSectionV2 } from "@/components/HeroSectionV2";
import { PhilosophySection } from "@/components/PhilosophySection";
import { ServicesSection } from "@/components/ServicesSection";
import { WorksSection } from "@/components/WorksSection";
import { TechStackSection } from "@/components/TechStackSection";
import { ProcessSection } from "@/components/ProcessSection";
import { StatsSection } from "@/components/StatsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BlogSection } from "@/components/BlogSection";
import { CTASection } from "@/components/CTASection";
import { TeamFooter } from "@/components/TeamFooter";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      <HeroSectionV2 />
      <PhilosophySection />
      <ServicesSection />
      <WorksSection />
      <TechStackSection />
      <ProcessSection />
      <StatsSection />
      <TestimonialsSection />
      <BlogSection />
      <CTASection />
      <TeamFooter />
    </div>
  );
};

export default Index;
