import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/components/providers/auth-provider";
import Navbar from "@/components/layout/Navbar";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Municipios from "./pages/Municipios";
import MunicipioDetalhe from "./pages/MunicipioDetalhe";
import DashboardProponente from "./pages/DashboardProponente";
import DashboardGestor from "./pages/DashboardGestor";
import DashboardAnalista from "./pages/DashboardAnalista";
import NotFound from "./pages/NotFound";
import Editais from "./pages/Editais";
import Projetos from "./pages/Projetos";
import Indicadores from "./pages/Indicadores";
import Sobre from "./pages/Sobre";
import FAQ from "./pages/FAQ";
import Contato from "./pages/Contato";
import EditalDetalhe from "./pages/EditalDetalhe";
import ProjetoDetalhe from "./pages/ProjetoDetalhe";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
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
            <Route path="/dashboard/proponente" element={<DashboardProponente />} />
            <Route path="/dashboard/gestor" element={<DashboardGestor />} />
            <Route path="/dashboard/analista" element={<DashboardAnalista />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;