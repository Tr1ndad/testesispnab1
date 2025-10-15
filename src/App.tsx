import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Login from './pages/Login';
import DashboardProponente from './pages/DashboardProponente';
import DashboardAdmin from './pages/DashboardAdmin';
import DashboardAnalista from './pages/DashboardAnalista';
import ProponenteMeusProjetos from './pages/ProponenteMeusProjetos';
import ProponenteEditais from './pages/ProponenteEditais';
import ProponenteNotificacoes from './pages/ProponenteNotificacoes';
import AdminUsuarios from './pages/AdminUsuarios';
import AdminEditais from './pages/AdminEditais';
import AdminRelatorios from './pages/AdminRelatorios';
import AnalistaAnalises from './pages/AnalistaAnalises';
import AnalistaRelatorios from './pages/AnalistaRelatorios';

// Componente de proteção de rota
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

// Componente de redirecionamento após login
const RedirectAfterLogin = () => {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/login" />;
  }
  
  // Redirecionar para o dashboard do respectivo papel
  switch (user.role) {
    case 'proponente':
      return <Navigate to="/dashboard/proponente" />;
    case 'admin':
      return <Navigate to="/dashboard/admin" />;
    case 'analista':
      return <Navigate to="/dashboard/analista" />;
    default:
      return <Navigate to="/login" />;
  }
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Rotas públicas */}
          <Route path="/login" element={<Login />} />
          
          {/* Rota raiz - redireciona para dashboard do usuário logado ou login */}
          <Route path="/" element={<RedirectAfterLogin />} />
          
          {/* Rotas protegidas */}
          <Route path="/dashboard" element={<RedirectAfterLogin />} />
          
          {/* Dashboard padronizados */}
          <Route 
            path="/dashboard/proponente" 
            element={
              <ProtectedRoute>
                <DashboardProponente />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/dashboard/admin" 
            element={
              <ProtectedRoute>
                <DashboardAdmin />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/dashboard/analista" 
            element={
              <ProtectedRoute>
                <DashboardAnalista />
              </ProtectedRoute>
            } 
          />
          
          {/* Rotas do proponente */}
          <Route 
            path="/proponente/meus-projetos" 
            element={
              <ProtectedRoute>
                <ProponenteMeusProjetos />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/proponente/novos-editais" 
            element={
              <ProtectedRoute>
                <ProponenteEditais />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/proponente/notificacoes" 
            element={
              <ProtectedRoute>
                <ProponenteNotificacoes />
              </ProtectedRoute>
            } 
          />
          
          {/* Rotas do admin */}
          <Route 
            path="/admin/usuarios" 
            element={
              <ProtectedRoute>
                <AdminUsuarios />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/editais" 
            element={
              <ProtectedRoute>
                <AdminEditais />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/relatorios" 
            element={
              <ProtectedRoute>
                <AdminRelatorios />
              </ProtectedRoute>
            } 
          />
          
          {/* Rotas do analista */}
          <Route 
            path="/analista/analises" 
            element={
              <ProtectedRoute>
                <AnalistaAnalises />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/analista/relatorios" 
            element={
              <ProtectedRoute>
                <AnalistaRelatorios />
              </ProtectedRoute>
            } 
          />
          
          {/* Rota não encontrada */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;