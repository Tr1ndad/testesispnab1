import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Logs de depuração
    console.log('=== INÍCIO DO LOGIN ===');
    console.log('Email digitado:', email);
    console.log('Senha digitada:', password);
    console.log('Função login disponível:', typeof login);
    console.log('Função navigate disponível:', typeof navigate);

    try {
      // Verificar se a função login existe
      if (typeof login !== 'function') {
        throw new Error('A função login não está disponível no contexto');
      }

      // Credenciais de teste
      let loginResult = false;
      
      if (email === "proponente@gmail.com" && password === "senha123") {
        console.log('Credenciais de proponente corretas!');
        loginResult = await login(email, password);
        console.log('Resultado do login:', loginResult);
        navigate('/dashboard/proponente');
      } else if (email === "admin@gmail.com" && password === "admin123") {
        console.log('Credenciais de admin corretas!');
        loginResult = await login(email, password);
        console.log('Resultado do login:', loginResult);
        navigate('/dashboard/admin');
      } else if (email === "analista@gmail.com" && password === "senha123") {
        console.log('Credenciais de analista corretas!');
        loginResult = await login(email, password);
        console.log('Resultado do login:', loginResult);
        navigate('/dashboard/analista');
      } else {
        console.log('Credenciais inválidas');
        setError("Email ou senha incorretos");
      }

      console.log('=== FIM DO LOGIN ===');
    } catch (err) {
      console.error('Erro durante o login:', err);
      setError(`Erro durante o login: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Entrar no SISPNAB
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Sistema de Projetos e Notificações da Arte Brasileira
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Senha
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded relative">
              {error}
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              {isLoading ? 'Entrando...' : 'Entrar'}
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Dicas de login:
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Proponente: proponente@gmail.com / senha123<br/>
              Admin: admin@gmail.com / admin123<br/>
              Analista: analista@gmail.com / senha123
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;