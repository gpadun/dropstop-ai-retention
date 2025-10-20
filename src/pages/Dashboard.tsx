import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "@/components/DashboardHeader";
import HeroSection from "@/components/HeroSection";
import RiskGauge from "@/components/RiskGauge";
import FilterPanel from "@/components/FilterPanel";
import StudentGrid from "@/components/StudentGrid";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Verifica se o usuário está autenticado
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <HeroSection />
        
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 mt-8 sm:mt-12">
          {/* Filter Panel */}
          <aside className="lg:col-span-3">
            <FilterPanel />
          </aside>
          
          {/* Main Dashboard */}
          <section className="lg:col-span-9 space-y-6 sm:space-y-8">
            {/* Gauge */}
            <div className="bg-card rounded-2xl shadow-card p-4 sm:p-6 md:p-8">
              <RiskGauge percentage={75} />
            </div>
            
            {/* Student Grid */}
            <div className="bg-card rounded-2xl shadow-card p-4 sm:p-6 md:p-8">
              <StudentGrid />
            </div>
            
            {/* CTA Button */}
            <div className="flex justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base md:text-lg rounded-xl group w-full sm:w-auto"
              >
                Ver lista completa de alunos
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
