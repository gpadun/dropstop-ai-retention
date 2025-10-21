<<<<<<< HEAD
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "@/components/DashboardHeader";
import HeroSection from "@/components/HeroSection";
import RiskGauge from "@/components/RiskGauge";
import FilterPanel from "@/components/FilterPanel";
import StudentGrid from "@/components/StudentGrid";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
=======
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, TrendingDown, Users, BookOpen, ArrowRight } from "lucide-react";
>>>>>>> origem-atualizada/main

const Dashboard = () => {
  const navigate = useNavigate();

<<<<<<< HEAD
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
=======
  const stats = [
    {
      title: "Média de Notas",
      value: "7.8",
      description: "Média geral dos alunos",
      icon: GraduationCap,
      trend: "+0.3 vs mês anterior"
    },
    {
      title: "Matéria Crítica",
      value: "Matemática",
      description: "Maior taxa de evasão",
      icon: BookOpen,
      trend: "18% de evasão"
    },
    {
      title: "Total de Alunos",
      value: "324",
      description: "Alunos ativos no sistema",
      icon: Users,
      trend: "+12 este mês"
    },
    {
      title: "Taxa de Evasão",
      value: "12.3%",
      description: "Evasão geral do período",
      icon: TrendingDown,
      trend: "-2.1% vs semestre anterior"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/30 to-background">
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold">DropStop AI</span>
          </div>
          <Button variant="outline" onClick={() => navigate("/")}>
            Sair
          </Button>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Painel de Análises</h1>
          <p className="text-muted-foreground">Acompanhe métricas e indicadores de evasão escolar</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <CardDescription className="text-xs">{stat.description}</CardDescription>
                <div className="mt-2 text-xs text-primary">{stat.trend}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle>Gestão de Alunos</CardTitle>
            <CardDescription>
              Visualize e analise o perfil individual de cada aluno
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => navigate("/students")} className="gap-2">
              Ver Lista de Alunos
              <ArrowRight className="w-4 h-4" />
            </Button>
          </CardContent>
        </Card>
>>>>>>> origem-atualizada/main
      </main>
    </div>
  );
};

export default Dashboard;
