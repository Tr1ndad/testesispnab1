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
import RedirectionTest from './pages/RedirectionTest';
import LayoutPublico from './components/layout/LayoutPublico';
import { ProtectedRoute } from './components/auth/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Rotas PÚBLICAS - COM LAYOUT PÚBLICO */}
          <Route element={<LayoutPublico />}>
            <Route path="/" element={<Index />} />
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
          </Route>
          
          {/* Rotas de autenticação */}
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/auth-test" element={<AuthTest />} />
          <Route path="/login-test" element={<LoginTest />} />
          <Route path="/redirection-test" element={<RedirectionTest />} />
          
          {/* Rotas PROTEGIDAS - COM VERIFICAÇÃO DE AUTENTICAÇÃO E ROLE */}
          <Route 
            path="/dashboard/proponente" 
            element={
              <ProtectedRoute requiredRole="proponente">
                <DashboardProponente />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/dashboard/admin" 
            element={
              <ProtectedRoute requiredRole="admin">
                <DashboardAdmin />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/dashboard/analista" 
            element={
              <ProtectedRoute requiredRole="analista">
                <DashboardAnalista />
              </ProtectedRoute>
            } 
          />
          
          {/* Rotas do proponente */}
          <Route 
            path="/proponente/meus-projetos" 
            element={
              <ProtectedRoute requiredRole="proponente">
                <ProponenteMeusProjetos />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/proponente/novos-editais" 
            element={
              <ProtectedRoute requiredRole="proponente">
                <ProponenteEditais key="novos-editais" />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/proponente/notificacoes" 
            element={
              <ProtectedRoute requiredRole="proponente">
                <ProponenteNotificacoes />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/proponente/edital-detalhes/:id" 
            element={
              <ProtectedRoute requiredRole="proponente">
                <ProponenteEditalDetalhes />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/proponente/editar-edital/:id" 
            element={
              <ProtectedRoute requiredRole="proponente">
                <ProponenteEditarEdital />
              </ProtectedRoute>
            } 
          />
          
          {/* Rotas do admin */}
          <Route 
            path="/admin/usuarios" 
            element={
              <ProtectedRoute requiredRole="admin">
                <AdminUsuarios />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/relatorios" 
            element={
              <ProtectedRoute requiredRole="admin">
                <AdminRelatorios />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/configuracoes" 
            element={
              <ProtectedRoute requiredRole="admin">
                <AdminConfiguracoes />
              </ProtectedRoute>
            } 
          />
          
          {/* Rotas do analista */}
          <Route 
            path="/analista/analises" 
            element={
              <ProtectedRoute requiredRole="analista">
                <AnalistaAnalises />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/analista/relatorios" 
            element={
              <ProtectedRoute requiredRole="analista">
                <AnalistaRelatorios />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/analista/notificacoes" 
            element={
              <ProtectedRoute requiredRole="analista">
                <AnalistaNotificacoes />
              </ProtectedRoute>
            } 
          />
          
          {/* Rota de novo projeto */}
          <Route 
            path="/novo-projeto" 
            element={
              <ProtectedRoute requiredRole="proponente">
                <NovoProjeto />
              </ProtectedRoute>
            } 
          />
          
          {/* Rota não encontrada - redireciona para dashboard do usuário logado */}
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