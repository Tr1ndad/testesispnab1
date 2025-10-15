import { useNavigate, useLocation } from 'react-router-dom';

const BarraNavegacaoProponente = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const abas = [
    { label: 'Visão Geral', path: '/proponente/dashboard' },
    { label: 'Meus Projetos', path: '/proponente/meus-projetos' },
    { label: 'Novos Editais', path: '/proponente/novos-editais' },
    { label: 'Notificações', path: '/proponente/notificacoes' }
  ];

  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8">
          {abas.map(aba => (
            <button
              key={aba.path}
              onClick={() => navigate(aba.path)}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                location.pathname === aba.path
                  ? 'border-green-600 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {aba.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BarraNavegacaoProponente;