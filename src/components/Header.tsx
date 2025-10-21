import { Button } from "@/components/ui/button";
import logoDropStop from "@/assets/logo-dropstop.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={logoDropStop} 
            alt="DropStop Logo" 
            className="h-20 sm:h-28 md:h-32 w-auto"
          />
        </div>
        
        <div className="flex items-center gap-2 sm:gap-3">
          <Link to="/login">
            <Button variant="ghost" size="sm" className="text-foreground hover:bg-accent text-xs sm:text-sm md:text-base px-2 sm:px-4">
              Entrar
            </Button>
          </Link>
          <Link to="/login">
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md text-xs sm:text-sm md:text-base px-2 sm:px-4">
              Cadastrar
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
