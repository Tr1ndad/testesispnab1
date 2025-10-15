import BarraNavegacaoAdmin from '@/components/navigation/BarraNavegacaoAdmin';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <BarraNavegacaoAdmin />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard do Administrador</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">Bem-vindo ao seu dashboard, administrador!</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;