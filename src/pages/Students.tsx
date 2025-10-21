import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, ArrowLeft } from "lucide-react";

const Students = () => {
  const navigate = useNavigate();

  const students = [
    { id: 1, name: "Ana Silva", class: "3º Ano A", status: "ativo", grade: 8.5 },
    { id: 2, name: "Bruno Santos", class: "2º Ano B", status: "evasor", grade: 5.2 },
    { id: 3, name: "Carla Oliveira", class: "1º Ano C", status: "ativo", grade: 9.0 },
    { id: 4, name: "Daniel Costa", class: "3º Ano A", status: "ativo", grade: 7.8 },
    { id: 5, name: "Eduarda Lima", class: "2º Ano B", status: "evasor", grade: 4.8 },
    { id: 6, name: "Felipe Rocha", class: "1º Ano A", status: "ativo", grade: 8.2 },
    { id: 7, name: "Gabriela Dias", class: "3º Ano C", status: "ativo", grade: 9.5 },
    { id: 8, name: "Henrique Alves", class: "2º Ano A", status: "evasor", grade: 5.5 },
    { id: 9, name: "Isabela Martins", class: "1º Ano B", status: "ativo", grade: 7.5 },
    { id: 10, name: "João Pedro", class: "3º Ano B", status: "ativo", grade: 8.8 },
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
        <div className="mb-6 flex items-center gap-4">
          <Button variant="ghost" onClick={() => navigate("/dashboard")} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Button>
        </div>

        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle>Lista de Alunos</CardTitle>
            <CardDescription>
              {students.length} alunos cadastrados no sistema
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg border">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-4 font-semibold">Nome</th>
                      <th className="text-left p-4 font-semibold">Turma</th>
                      <th className="text-left p-4 font-semibold">Média</th>
                      <th className="text-left p-4 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {students.map((student) => (
                      <tr key={student.id} className="hover:bg-muted/30 transition-colors">
                        <td className="p-4 font-medium">{student.name}</td>
                        <td className="p-4 text-muted-foreground">{student.class}</td>
                        <td className="p-4">
                          <span className={student.grade >= 7 ? "text-green-600 font-semibold" : "text-destructive font-semibold"}>
                            {student.grade.toFixed(1)}
                          </span>
                        </td>
                        <td className="p-4">
                          <Badge
                            variant={student.status === "ativo" ? "default" : "destructive"}
                            className="capitalize"
                          >
                            {student.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Students;
