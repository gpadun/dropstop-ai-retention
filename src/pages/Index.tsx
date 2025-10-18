import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import RiskGauge from "@/components/RiskGauge";
import FilterPanel from "@/components/FilterPanel";
import StudentGrid from "@/components/StudentGrid";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 pb-16">
        <HeroSection />
        
        <div className="grid lg:grid-cols-12 gap-8 mt-12">
          {/* Filter Panel */}
          <aside className="lg:col-span-3">
            <FilterPanel />
          </aside>
          
          {/* Main Dashboard */}
          <section className="lg:col-span-9 space-y-8">
            {/* Gauge */}
            <div className="bg-card rounded-2xl shadow-card p-8">
              <RiskGauge percentage={75} />
            </div>
            
            {/* Student Grid */}
            <div className="bg-card rounded-2xl shadow-card p-8">
              <StudentGrid />
            </div>
            
            {/* CTA Button */}
            <div className="flex justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg rounded-xl group"
              >
                Ver lista completa de alunos
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
