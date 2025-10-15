import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import DashboardProponente from './pages/DashboardProponente';
import DashboardAdmin from './pages/DashboardAdmin';
import DashboardAnalista from './pages/DashboardAnalista';
import ProponenteMeusProjetos from './pages/ProponenteMeusProjetos';
import ProponenteEditais from './pages/ProponenteEditais';
import ProponenteNotificacoes from './pages/ProponenteNotificacoes';
import AdminUsuarios from './pages/AdminUsuarios';
import AdminRelatorios from './pages/AdminRelatorios';
import AnalistaAnalises from './pages/AnalistaAnalises';
import AnalistaRelatorios from './pages/AnalistaRelatorios';
import Index from './pages/Index';
import Municipios from './pages/Municipios';
import Editais from './pages/Editais';
import Projetos from './pages/Projetos';
import Indicadores from './pages/Indicadores';
import Sobre from './pages/Sobre';
import FAQ from './pages/FAQ';
import Contato from './pages/Contato';
import EditalDetalhe from './pages/EditalDetalhe';
import ProjetoDetalhe from './pages/ProjetoDetalhe';
import AuthTest from './pages/AuthTest';
import NovoProjeto from './pages/NovoProjeto';
import ProponenteEditalDetalhes from './pages/ProponenteEditalDetalhes';
import ProponenteEditarEdital from './pages/ProponenteEditarEdital';
import AdminConfiguracoes from './pages/AdminConfiguracoes';
import AdminDashboard from './pages/AdminDashboard';
import AnalistaDashboard from './pages/DashboardAnalista';
import AnalistaNotificacoes from './pages/AnalistaNotificacoes';
import LoginTest from './pages/LoginTest';

// Componente de proteção de rota - APENAS para rotas que precisam de autenticação
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Rotas PÚBLICAS - SEM PROTEÇÃO, SEM REDIRECIONAMENTO AUTOMÁTICO */}
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/auth-test" element={<AuthTest />} />
          <Route path="/login-test" element={<LoginTest />} />
          <Route path="/index" element={<Index />} />
          <Route path="/municipios" element={<Municipios />} />
          <Route path="/editais" element={<Editais />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/indicadores" element={<Indicadores />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/editais/:id" element={<EditalDetalhe />} />
          <Route path="/projetos/:id" element={<ProjetoDetalhe />} />
          
          {/* Rotas PROTEGIDAS - COM VERIFICAÇÃO DE AUTENTICAÇÃO VIA ProtectedRoute */}
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
          <Route 
            path="/proponente/edital-detalhes/:id" 
            element={
              <ProtectedRoute>
                <ProponenteEditalDetalhes />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/proponente/editar-edital/:id" 
            element={
              <ProtectedRoute>
                <ProponenteEditarEdital />
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
            path="/admin/relatorios" 
            element={
              <ProtectedRoute>
                <AdminRelatorios />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/configuracoes" 
            element={
              <ProtectedRoute>
                <AdminConfiguracoes />
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
          <Route 
            path="/analista/notificacoes" 
            element={
              <ProtectedRoute>
                <AnalistaNotificacoes />
              </ProtectedRoute>
            } 
          />
          
          {/* Rota de novo projeto */}
          <Route 
            path="/novo-projeto" 
            element={
              <ProtectedRoute>
                <NovoProjeto />
              </ProtectedRoute>
            } 
          />
          
          {/* Rota não encontrada - redireciona para login se não autenticado */}
          <Route path="*" element={
            <ProtectedRoute>
              <Navigate to="/dashboard/proponente" />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;