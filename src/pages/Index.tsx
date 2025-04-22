
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { BestCasesSection } from "@/components/BestCasesSection";
import { WhySection } from "@/components/WhySection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <BestCasesSection />
      <WhySection />
    </div>
  );
};

export default Index;
