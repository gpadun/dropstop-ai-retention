import { GraduationCap } from "lucide-react";

interface StudentCardProps {
  name: string;
  riskLevel: "high" | "medium" | "low";
}

const StudentCard = ({ name, riskLevel }: StudentCardProps) => {
  const riskColors = {
    high: "text-danger",
    medium: "text-warning",
    low: "text-primary",
  };

  const bgColors = {
    high: "bg-danger/10 border-danger/20",
    medium: "bg-warning/10 border-warning/20",
    low: "bg-primary/10 border-primary/20",
  };

  return (
    <div className={`${bgColors[riskLevel]} border rounded-xl p-4 hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer`}>
      <div className="flex flex-col items-center space-y-3">
        <div className={`${riskColors[riskLevel]} p-3 bg-background rounded-full`}>
          <GraduationCap className="w-8 h-8" />
        </div>
        <p className="text-sm font-medium text-foreground text-center">{name}</p>
      </div>
    </div>
  );
};

export default StudentCard;
