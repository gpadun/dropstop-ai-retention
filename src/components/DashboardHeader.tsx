import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import logoDropStop from "@/assets/logo-dropstop.png";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const DashboardHeader = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const institutionName = localStorage.getItem("institutionName") || "Instituição";

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("institutionName");
    
    toast({
      title: "Logout realizado com sucesso!",
      description: "Até logo!",
    });
    
    navigate("/");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate("/dashboard")}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          >
            <img 
              src={logoDropStop} 
              alt="DropStop Logo" 
              className="h-20 sm:h-28 md:h-32 w-auto"
            />
          </button>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-foreground font-medium text-sm sm:text-base hidden sm:inline">
            {institutionName}
          </span>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleLogout}
            className="gap-2 text-xs sm:text-sm md:text-base px-3 sm:px-4"
          >
            <LogOut className="w-4 h-4" />
            Sair
          </Button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
