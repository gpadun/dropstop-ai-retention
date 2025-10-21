<<<<<<< HEAD
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
=======
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Brain, TrendingUp, Shield, Check } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Básico",
      price: "R$ 297",
      period: "/mês",
      description: "Ideal para escolas pequenas",
      features: [
        "Até 100 alunos",
        "Análises mensais",
        "Relatórios básicos",
        "Suporte por email"
      ]
    },
    {
      name: "Profissional",
      price: "R$ 597",
      period: "/mês",
      description: "Para instituições em crescimento",
      features: [
        "Até 500 alunos",
        "Análises em tempo real",
        "Relatórios avançados",
        "Suporte prioritário",
        "Integrações API"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Soluções personalizadas",
      features: [
        "Alunos ilimitados",
        "IA personalizada",
        "Consultoria dedicada",
        "Suporte 24/7",
        "Treinamento da equipe"
      ]
    }
  ];

  const benefits = [
    {
      icon: Brain,
      title: "Inteligência Artificial Avançada",
      description: "Algoritmos de machine learning identificam padrões de evasão antes que aconteçam"
    },
    {
      icon: TrendingUp,
      title: "Análises Preditivas",
      description: "Dados em tempo real para tomada de decisão estratégica e assertiva"
    },
    {
      icon: Shield,
      title: "Proteção de Dados",
      description: "Segurança de nível empresarial com conformidade LGPD"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold">DropStop AI Retention</span>
          </div>
          <Button onClick={() => navigate("/login")}>
            Entrar
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/20">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Reduza a Evasão Escolar com
              <span className="block text-primary mt-2">Inteligência Artificial</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Identifique alunos em risco, tome decisões baseadas em dados e transforme 
              indicadores educacionais com tecnologia de ponta.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" onClick={() => navigate("/login")} className="gap-2">
                Começar Agora
                <GraduationCap className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline">
                Agendar Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que escolher o DropStop AI?
            </h2>
            <p className="text-muted-foreground text-lg">
              Tecnologia de ponta para enfrentar um dos maiores desafios da educação
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gradient-to-br from-accent/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Planos e Valores
            </h2>
            <p className="text-muted-foreground text-lg">
              Escolha o plano ideal para sua instituição
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`shadow-soft hover:shadow-medium transition-all duration-300 relative ${
                  plan.popular ? 'border-primary shadow-primary/20' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Mais Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-6" 
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Escolher Plano
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              <span className="font-semibold">DropStop AI Retention</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2025 DropStop AI. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
>>>>>>> origem-atualizada/main
    </div>
  );
};

export default Index;
