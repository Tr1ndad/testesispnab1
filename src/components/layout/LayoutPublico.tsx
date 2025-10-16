import { Outlet } from 'react-router-dom';
import BarraNavegacaoVisitante from '../navigation/BarraNavegacaoVisitante';

const LayoutPublico = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <BarraNavegacaoVisitante />
      <main className="py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutPublico;