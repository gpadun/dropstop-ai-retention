import StudentCard from "./StudentCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const students = [
  { name: "Ana Silva", riskLevel: "high" as const },
  { name: "Carlos Santos", riskLevel: "high" as const },
  { name: "Maria Oliveira", riskLevel: "high" as const },
  { name: "João Costa", riskLevel: "high" as const },
  { name: "Pedro Alves", riskLevel: "high" as const },
  { name: "Julia Ferreira", riskLevel: "low" as const },
  { name: "Lucas Souza", riskLevel: "low" as const },
  { name: "Beatriz Lima", riskLevel: "low" as const },
  { name: "Rafael Rocha", riskLevel: "low" as const },
];

const StudentGrid = () => {
  return (
    <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
      <div className="relative">
        <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4 sm:w-5 sm:h-5" />
        <Input 
          placeholder="Buscar aluno..." 
          className="pl-10 sm:pl-12 h-10 sm:h-12 rounded-xl border-border bg-card shadow-sm text-sm sm:text-base"
        />
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        {students.map((student, index) => (
          <StudentCard key={index} {...student} />
        ))}
      </div>
    </div>
  );
};

export default StudentGrid;
