import { useNavigate, useLocation } from 'react-router-dom';

const BarraNavegacaoAdmin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const abas = [
    { label: 'Dashboard', path: '/admin/dashboard' },
    { label: 'Usuários', path: '/admin/usuarios' },
    { label: 'Configurações', path: '/admin/configuracoes' },
    { label: 'Relatórios', path: '/admin/relatorios' },
    { label: 'Notificações', path: '/admin/notificacoes' }
  ];

  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8">
          {abas.map(aba => (
            <button
              key={aba.path}
              onClick={() => navigate(aba.path)}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
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

export default BarraNavegacaoAdmin;