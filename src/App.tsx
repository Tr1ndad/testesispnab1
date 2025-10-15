import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/layout/Navbar";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Municipios from "./pages/Municipios";
import MunicipioDetalhe from "./pages/MunicipioDetalhe";
import DashboardGestor from "./pages/DashboardGestor";
import AnalistaAnalises from "./pages/AnalistaAnalises";
import AnalistaNotificacoes from "./pages/AnalistaNotificacoes";
import AnalistaRelatorios from "./pages/AnalistaRelatorios";
import AdminUsuarios from "./pages/AdminUsuarios";
import AdminConfiguracoes from "./pages/AdminConfiguracoes";
import AdminRelatorios from "./pages/AdminRelatorios";
import NotFound from "./pages/NotFound";
import Editais from "./pages/Editais";
import Projetos from "./pages/Projetos";
import Indicadores from "./pages/Indicadores";
import Sobre from "./pages/Sobre";
import FAQ from "./pages/FAQ";
import Contato from "./pages/Contato";
import EditalDetalhe from "./pages/EditalDetalhe";
import ProjetoDetalhe from "./pages/ProjetoDetalhe";
import NovoProjeto from "./pages/NovoProjeto";
import ProponenteMeusProjetos from "./pages/ProponenteMeusProjetos";
import ProponenteEditais from "./pages/ProponenteEditais";
import ProponenteNotificacoes from "./pages/ProponenteNotificacoes";
import AuthTestPage from "./pages/AuthTest";
import ProponenteDashboard from "./pages/ProponenteDashboard";
import AnalistaDashboard from "./pages/AnalistaDashboard";
import AdminDashboard from "./pages/AdminDashboard";

const queryClient = new QueryClient();

const AppContent = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <>
      {!isAuthenticated && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/municipios" element={<Municipios />} />
        <Route path="/municipios/:slug" element={<MunicipioDetalhe />} />
        <Route path="/editais" element={<Editais />} />
        <Route path="/editais/:id" element={<EditalDetalhe />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/projetos/:id" element={<ProjetoDetalhe />} />
        <Route path="/indicadores" element={<Indicadores />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contato" element={<Contato />} />
        
        {/* Rotas de Dashboard */}
        <Route path="/dashboard/proponente" element={<ProponenteDashboard />} />
        <Route path="/dashboard/analista" element={<AnalistaDashboard />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        
        {/* Rotas específicas do analista */}
        <Route path="/analista/analises" element={<AnalistaAnalises />} />
        <Route path="/analista/notificacoes" element={<AnalistaNotificacoes />} />
        <Route path="/analista/relatorios" element={<AnalistaRelatorios />} />
        
        {/* Rotas específicas do admin */}
        <Route path="/admin/usuarios" element={<AdminUsuarios />} />
        <Route path="/admin/configuracoes" element={<AdminConfiguracoes />} />
        <Route path="/admin/relatorios" element={<AdminRelatorios />} />
        
        {/* Rotas específicas do proponente */}
        <Route path="/proponente/dashboard" element={<ProponenteDashboard />} />
        <Route path="/proponente/meus-projetos" element={<ProponenteMeusProjetos />} />
        <Route path="/proponente/novos-editais" element={<ProponenteEditais />} />
        <Route path="/proponente/notificacoes" element={<ProponenteNotificacoes />} />
        <Route path="/proponente/projetos/:id" element={<ProjetoDetalhe />} />
        <Route path="/proponente/editais/:id" element={<EditalDetalhe />} />
        
        <Route path="/novo-projeto" element={<NovoProjeto />} />
        <Route path="/auth-test" element={<AuthTestPage />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;