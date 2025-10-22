import { useState } from "react";
import DashboardHeader from "@/components/DashboardHeader";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, Eye } from "lucide-react";

const studentsData = [
  { matricula: "ADS202501", nome: "Ana Silva Santos", periodo: "3º", presenca: 65, evasor: true },
  { matricula: "ADS202502", nome: "Carlos Eduardo Lima", periodo: "2º", presenca: 92, evasor: false },
  { matricula: "ADS202503", nome: "Maria Oliveira Costa", periodo: "4º", presenca: 58, evasor: true },
  { matricula: "ADS202504", nome: "João Pedro Alves", periodo: "1º", presenca: 88, evasor: false },
  { matricula: "ADS202505", nome: "Julia Fernandes", periodo: "3º", presenca: 75, evasor: false },
  { matricula: "ADS202506", nome: "Rafael Souza", periodo: "2º", presenca: 95, evasor: false },
  { matricula: "ADS202507", nome: "Beatriz Lima Rocha", periodo: "4º", presenca: 62, evasor: true },
  { matricula: "ADS202508", nome: "Lucas Martins", periodo: "1º", presenca: 85, evasor: false },
  { matricula: "ADS202509", nome: "Camila Santos", periodo: "3º", presenca: 55, evasor: true },
  { matricula: "ADS202510", nome: "Pedro Henrique Costa", periodo: "2º", presenca: 90, evasor: false },
  { matricula: "ADS202511", nome: "Fernanda Oliveira", periodo: "4º", presenca: 78, evasor: false },
  { matricula: "ADS202512", nome: "Gabriel Silva", periodo: "1º", presenca: 52, evasor: true },
  { matricula: "ADS202513", nome: "Larissa Almeida", periodo: "3º", presenca: 87, evasor: false },
  { matricula: "ADS202514", nome: "Thiago Rodrigues", periodo: "2º", presenca: 60, evasor: true },
  { matricula: "ADS202515", nome: "Amanda Ferreira", periodo: "4º", presenca: 93, evasor: false },
  { matricula: "ADS202516", nome: "Bruno Santos", periodo: "1º", presenca: 72, evasor: false },
  { matricula: "ADS202517", nome: "Isabela Costa", periodo: "3º", presenca: 58, evasor: true },
  { matricula: "ADS202518", nome: "Matheus Lima", periodo: "2º", presenca: 89, evasor: false },
  { matricula: "ADS202519", nome: "Letícia Souza", periodo: "4º", presenca: 91, evasor: false },
  { matricula: "ADS202520", nome: "Vinicius Oliveira", periodo: "1º", presenca: 54, evasor: true },
];

const StudentsList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = studentsData.filter((student) =>
    student.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

          <main className="flex-1 p-6 space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Lista Completa de Alunos
              </h1>
              <p className="text-muted-foreground">
                Curso: Análise e Desenvolvimento de Sistemas
              </p>
            </div>

            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Buscar aluno por nome..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="rounded-lg border bg-card">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Matrícula</TableHead>
                    <TableHead>Nome Completo</TableHead>
                    <TableHead>Curso</TableHead>
                    <TableHead className="text-center">Período</TableHead>
                    <TableHead className="text-center">Presença</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                    <TableHead className="text-center">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredStudents.map((student) => (
                    <TableRow key={student.matricula}>
                      <TableCell className="font-mono text-sm">
                        {student.matricula}
                      </TableCell>
                      <TableCell className="font-medium">{student.nome}</TableCell>
                      <TableCell>Análise e Desenvolvimento de Sistemas</TableCell>
                      <TableCell className="text-center">{student.periodo}</TableCell>
                      <TableCell className="text-center">
                        <span
                          className={
                            student.presenca < 70
                              ? "text-danger font-semibold"
                              : "text-foreground"
                          }
                        >
                          {student.presenca}%
                        </span>
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge
                          variant={student.evasor ? "destructive" : "default"}
                          className="whitespace-nowrap"
                        >
                          {student.evasor ? "Potencial Evasor" : "Baixo Risco"}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          Detalhes
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {filteredStudents.length === 0 && (
              <p className="text-center text-muted-foreground py-8">
                Nenhum aluno encontrado com esse nome.
              </p>
            )}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default StudentsList;
