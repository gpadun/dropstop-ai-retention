import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield } from "lucide-react";
import logoDropStop from "@/assets/logo-dropstop.png";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação simples - qualquer valor não vazio
    if (email.trim() && password.trim()) {
      // Simula login bem-sucedido
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("institutionName", "Escola Exemplo");
      
      toast({
        title: "Login realizado com sucesso!",
        description: "Redirecionando para o dashboard...",
      });
      
      // Redireciona para o dashboard
      navigate("/dashboard");
    } else {
      toast({
        title: "Erro no login",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-2xl shadow-xl border border-border p-8 sm:p-10">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src={logoDropStop} 
              alt="DropStop Logo" 
              className="h-24 sm:h-28 w-auto"
            />
          </div>

          {/* Título */}
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Acesse sua Conta
            </h1>
            <p className="text-sm text-muted-foreground">
              Monitore e previna a evasão escolar
            </p>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                E-mail ou CNPJ
              </Label>
              <Input
                id="email"
                type="text"
                placeholder="seu@email.com ou 00.000.000/0001-00"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-11"
              />
            </div>

            {/* Senha */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground">
                Senha
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-11"
              />
            </div>

            {/* Esqueci minha senha */}
            <div className="flex justify-end">
              <Link 
                to="/recuperar-senha" 
                className="text-sm text-primary hover:underline"
              >
                Esqueci minha senha
              </Link>
            </div>

            {/* Botão Entrar */}
            <Button 
              type="submit" 
              className="w-full h-11 text-base font-semibold"
              size="lg"
            >
              Entrar
            </Button>

            {/* Gatilho de Confiança - LGPD */}
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-2">
              <Shield className="w-4 h-4" />
              <span>Segurança e Conformidade LGPD</span>
            </div>

            {/* Divisor */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">
                  Novo por aqui?
                </span>
              </div>
            </div>

            {/* Cadastrar Instituição */}
            <div className="text-center">
              <Link to="/cadastro">
                <Button 
                  type="button" 
                  variant="outline" 
                  className="w-full h-11 text-base"
                  size="lg"
                >
                  Primeiro acesso? Cadastre sua Instituição
                </Button>
              </Link>
            </div>
          </form>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          © 2025 DropStop. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
};

export default Login;
