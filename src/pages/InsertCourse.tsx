import { useState } from "react";
import DashboardHeader from "@/components/DashboardHeader";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { PlusCircle } from "lucide-react";

const InsertCourse = () => {
  const [courseName, setCourseName] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (courseName.trim() && courseCode.trim()) {
      toast({
        title: "Curso cadastrado com sucesso!",
        description: `O curso "${courseName}" foi adicionado ao sistema.`,
      });
      setCourseName("");
      setCourseCode("");
    } else {
      toast({
        title: "Erro ao cadastrar curso",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
    }
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <header className="sticky top-0 z-10 border-b bg-background">
            <div className="flex items-center gap-2 p-4">
              <SidebarTrigger />
              <DashboardHeader />
            </div>
          </header>

          <main className="flex-1 p-6">
            <div className="max-w-2xl mx-auto space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  Inserir Novo Curso
                </h1>
                <p className="text-muted-foreground">
                  Adicione um novo curso ao sistema
                </p>
              </div>

              <div className="bg-card rounded-xl border p-6 space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="courseName">Nome do Curso</Label>
                    <Input
                      id="courseName"
                      placeholder="Ex: Análise e Desenvolvimento de Sistemas"
                      value={courseName}
                      onChange={(e) => setCourseName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="courseCode">Código do Curso</Label>
                    <Input
                      id="courseCode"
                      placeholder="Ex: ADS"
                      value={courseCode}
                      onChange={(e) => setCourseCode(e.target.value)}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <PlusCircle className="mr-2 h-5 w-5" />
                    Cadastrar Curso
                  </Button>
                </form>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default InsertCourse;
