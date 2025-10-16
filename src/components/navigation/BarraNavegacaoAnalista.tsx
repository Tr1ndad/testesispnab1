import { Link, useLocation } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';

const BarraNavegacaoAnalista = () => {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/dashboard/analista" className="text-xl font-semibold text-gray-900">
              SISPNAB
            </Link>
            <nav className="ml-10 flex space-x-8">
              <Link 
                to="/dashboard/analista"
                className={`px-1 pt-1 text-sm font-medium ${
                  location.pathname === '/dashboard/analista' 
                    ? 'border-b-2 border-blue-500 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Dashboard
              </Link>
              <Link 
                to="/analista/analises"
                className={`px-1 pt-1 text-sm font-medium ${
                  location.pathname === '/analista/analises' 
                    ? 'border-b-2 border-blue-500 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Análises
              </Link>
              <Link 
                to="/analista/relatorios"
                className={`px-1 pt-1 text-sm font-medium ${
                  location.pathname === '/analista/relatorios' 
                    ? 'border-b-2 border-blue-500 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Relatórios
              </Link>
              <Link 
                to="/analista/notificacoes"
                className={`px-1 pt-1 text-sm font-medium ${
                  location.pathname === '/analista/notificacoes' 
                    ? 'border-b-2 border-blue-500 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Notificações
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div>
                <p className="text-sm font-medium text-gray-900">Carlos Silva</p>
                <p className="text-xs text-gray-500">Analista</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-green-400 flex items-center justify-center text-white text-sm font-medium">
                CS
              </div>
              <LogoutButton className="text-sm text-gray-600 hover:text-gray-900">
                Sair
              </LogoutButton>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BarraNavegacaoAnalista;