import { Button } from "@/components/ui/button";
import logoDropStop from "@/assets/logo-dropstop.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={logoDropStop} 
            alt="DropStop Logo" 
            className="h-24 w-auto"
          />
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="lg" className="text-foreground hover:bg-accent">
            Entrar
          </Button>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md">
            Cadastrar
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
