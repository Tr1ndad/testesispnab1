import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { showSuccess, showError } from "@/utils/toast";
import { useAuth } from "@/contexts/AuthContext";

const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  senha: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    try {
      const success = await login(data.email, data.senha);
      
      if (success) {
        showSuccess("Login realizado com sucesso!");
        
        // Redirecionar com base no papel do usuário
        const user = JSON.parse(localStorage.getItem('mockUser') || '{}');
        switch (user.role) {
          case 'admin':
            navigate('/dashboard/admin');
            break;
          case 'gestor':
            navigate('/dashboard/gestor');
            break;
          case 'proponente':
            navigate('/dashboard/proponente');
            break;
          case 'analista':
            navigate('/dashboard/analista');
            break;
          case 'artista':
            navigate('/dashboard/artista');
            break;
          default:
            navigate('/');
        }
      } else {
        showError("Email ou senha inválidos");
      }
    } catch (error) {
      showError("Erro ao realizar login");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Entrar no Sistema
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Acesse sua conta para continuar
          </p>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email ou CPF
              </label>
              <input
                {...register("email")}
                type="email"
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="seu@email.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="senha" className="block text-sm font-medium text-gray-700">
                Senha
              </label>
              <input
                {...register("senha")}
                type="password"
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="••••••••"
              />
              {errors.senha && (
                <p className="mt-1 text-sm text-red-600">{errors.senha.message}</p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Lembrar de mim
              </label>
            </div>

            <div className="text-sm">
              <a href="/recuperar-senha" className="font-medium text-green-600 hover:text-green-500">
                Esqueceu a senha?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Entrando..." : "Entrar"}
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Não tem conta?{" "}
              <a href="/cadastro" className="font-medium text-green-600 hover:text-green-500">
                Cadastre-se
              </a>
            </p>
          </div>
        </form>

        {/* Credenciais de teste */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="text-sm font-medium text-blue-900 mb-2">Credenciais de Teste:</h3>
          <div className="text-xs text-blue-700 space-y-1">
            <p>Admin: admin@sispnab.gov.br / admin123</p>
            <p>Proponente: joao.almeida@email.com / senha123</p>
            <p>Gestor Pinhais: fernanda.santos@pinhais.pr.gov.br / senha123</p>
            <p>Analista: analista@sispnab.gov.br / senha123</p>
            <p>Artista: ana.costa.artista@email.com / senha123</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;