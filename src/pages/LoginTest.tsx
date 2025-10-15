import { useAuth } from '../contexts/AuthContext';

const LoginTest = () => {
  const { user, login, logout, isAuthenticated } = useAuth();

  const handleTestLogin = async () => {
    console.log('=== TESTE DE LOGIN ===');
    const success = await login('proponente@gmail.com', 'senha123');
    console.log('Resultado do login:', success);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Página de Teste do Login</h1>
        
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Status do Login</h2>
          <p>Autenticado: {isAuthenticated ? 'Sim' : 'Não'}</p>
          <p>Usuário: {user ? JSON.stringify(user, null, 2) : 'Nenhum'}</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Teste de Login</h2>
          <button 
            onClick={handleTestLogin}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Testar Login (proponente@gmail.com / senha123)
          </button>
          <button 
            onClick={logout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 ml-4"
          >
            Logout
          </button>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Credenciais de Teste</h2>
          <ul className="space-y-2">
            <li><strong>Proponente:</strong> proponente@gmail.com / senha123</li>
            <li><strong>Admin:</strong> admin@gmail.com / admin123</li>
            <li><strong>Analista:</strong> analista@gmail.com / senha123</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LoginTest;