import { Link } from 'react-router-dom';

const BarraNavegacaoVisitante = () => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-semibold text-gray-900">
              SISPNAB
            </Link>
            <nav className="ml-10 flex space-x-8">
              <Link 
                to="/"
                className="text-gray-500 hover:text-gray-700 px-1 pt-1 text-sm font-medium"
              >
                Home
              </Link>
              <Link 
                to="/editais"
                className="text-gray-500 hover:text-gray-700 px-1 pt-1 text-sm font-medium"
              >
                Editais
              </Link>
              <Link 
                to="/indicadores"
                className="text-gray-500 hover:text-gray-700 px-1 pt-1 text-sm font-medium"
              >
                Indicadores
              </Link>
              <Link 
                to="/municipios"
                className="text-gray-500 hover:text-gray-700 px-1 pt-1 text-sm font-medium"
              >
                Municípios
              </Link>
              <Link 
                to="/faq"
                className="text-gray-500 hover:text-gray-700 px-1 pt-1 text-sm font-medium"
              >
                FAQ
              </Link>
              <Link 
                to="/contato"
                className="text-gray-500 hover:text-gray-700 px-1 pt-1 text-sm font-medium"
              >
                Contato
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Link 
              to="/login"
              className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Entrar
            </Link>
            <Link 
              to="/cadastro"
              className="bg-green-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700"
            >
              Cadastrar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BarraNavegacaoVisitante;