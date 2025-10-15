import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Simular chamada de login
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simular diferentes usuários para teste
      if (email === "admin@sispnab.gov.br" && password === "admin123") {
        navigate("/dashboard/proponente");
      } else if (email === "analista@sispnab.gov.br" && password === "senha123") {
        navigate("/dashboard/proponente");
      } else if (email === "joao.almeida@email.com" && password === "senha123") {
        navigate("/dashboard/proponente");
      } else if (email === "ana.costa.artista@email.com" && password === "senha123") {
        navigate("/dashboard/proponente");
      } else {
        setError("Email ou senha incorretos");
      }
    } catch (err) {
      setError("Erro ao realizar login");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Login</h2>
          <p className="mt-2 text-sm text-gray-600">
            Entre com suas credenciais para acessar o sistema
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Acesso ao Sistema</CardTitle>
            <CardDescription>
              Digite seu email e senha para continuar
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="password">Senha</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
              
              {error && (
                <div className="text-red-600 text-sm">{error}</div>
              )}
              
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Entrando..." : "Entrar"}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Não tem uma conta?{" "}
                <button
                  onClick={() => navigate("/cadastro")}
                  className="text-blue-600 hover:text-blue-500"
                >
                  Cadastre-se
                </button>
              </p>
            </div>
            
            <div className="mt-6 border-t pt-4">
              <p className="text-xs text-gray-500 mb-2">Usuários de teste:</p>
              <div className="space-y-1 text-xs text-gray-600">
                <div>Admin: admin@sispnab.gov.br / admin123</div>
                <div>Analista: analista@sispnab.gov.br / senha123</div>
                <div>Proponente: joao.almeida@email.com / senha123</div>
                <div>Artista: ana.costa.artista@email.com / senha123</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;