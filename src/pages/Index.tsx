
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BestCasesSection from "@/components/BestCasesSection";
import WhySection from "@/components/WhySection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-6">
        <HeroSection />
        <BestCasesSection />
        <WhySection />
      </main>
      <footer className="bg-muted py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © 2023 CS:Кейсы. Все права защищены.
        </div>
      </footer>
    </div>
  );
};

export default Index;
