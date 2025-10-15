import { Link } from 'react-router-dom';

const BarraNavegacaoProponente = () => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/dashboard/proponente" className="text-xl font-semibold text-gray-900">
              SISPNAB
            </Link>
            <nav className="ml-10 flex space-x-8">
              <Link 
                to="/dashboard/proponente"
                className="text-blue-700 border-b-2 border-blue-700 px-1 pt-1 text-sm font-medium"
              >
                Visão Geral
              </Link>
              <Link 
                to="/proponente/meus-projetos"
                className="text-gray-500 hover:text-gray-700 px-1 pt-1 text-sm font-medium"
              >
                Meus Projetos
              </Link>
              <Link 
                to="/proponente/novos-editais"
                className="text-gray-500 hover:text-gray-700 px-1 pt-1 text-sm font-medium"
              >
                Novos Editais
              </Link>
              <Link 
                to="/proponente/notificacoes"
                className="text-gray-500 hover:text-gray-700 px-1 pt-1 text-sm font-medium"
              >
                Notificações
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/proponente/notificacoes" className="relative p-2 text-gray-400 hover:text-gray-500">
              <span className="sr-only">Notificações</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400"></span>
            </Link>
            <div className="flex items-center space-x-3">
              <div>
                <p className="text-sm font-medium text-gray-900">João Almeida</p>
                <p className="text-xs text-gray-500">Proponente</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-blue-400 flex items-center justify-center text-white text-sm font-medium">
                JA
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BarraNavegacaoProponente;