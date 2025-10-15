import { useAuth } from '../contexts/AuthContext';

const RedirectionTest = () => {
  const { user, login, logout, isAuthenticated } = useAuth();

  const handleTestLogin = async (email: string, password: string, expectedRole: string) => {
    console.log(`=== TESTE DE LOGIN PARA ${expectedRole.toUpperCase()} ===`);
    const success = await login(email, password);
    console.log(`Resultado do login para ${expectedRole}:`, success);
    console.log(`User após login:`, user);
    console.log(`User role após login:`, user?.role);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Teste de Redirecionamento</h1>
        
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Status do Login</h2>
          <p>Autenticado: {isAuthenticated ? 'Sim' : 'Não'}</p>
          <p>Usuário: {user ? JSON.stringify(user, null, 2) : 'Nenhum'}</p>
          <p>Role: {user?.role || 'Nenhuma'}</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Testes de Login</h2>
          <div className="space-y-4">
            <button 
              onClick={() => handleTestLogin('proponente@gmail.com', 'senha123', 'proponente')}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Testar Login Proponente
            </button>
            <button 
              onClick={() => handleTestLogin('admin@gmail.com', 'admin123', 'admin')}
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
            >
              Testar Login Admin
            </button>
            <button 
              onClick={() => handleTestLogin('analista@gmail.com', 'senha123', 'analista')}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Testar Login Analista
            </button>
            <button 
              onClick={logout}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Credenciais de Teste</h2>
          <ul className="space-y-2">
            <li><strong>Proponente:</strong> proponente@gmail.com / senha123</li>
            <li><strong>Admin:</strong> admin@gmail.com / admin123</li>
            <li><strong>Analista:</strong> analista@gmail.com / senha123</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Após fazer login, clique em qualquer aba para verificar se o redirecionamento está correto.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RedirectionTest;