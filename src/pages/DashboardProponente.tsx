import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const DashboardProponente = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("visao-geral");

  // Dados mockados para demonstração
  const projetos = [
    {
      id: "1",
      titulo: "Álbum 'Sons de Pinhais'",
      status: "aprovado",
      valor_aprovado: 35000,
      edital: "001/2025-PINHAIS",
      data_submissao: "15/02/2025"
    },
    {
      id: "2",
      titulo: "Turnê Regional",
      status: "em_analise",
      valor_solicitado: 28000,
      edital: "001/2025-PINHAIS",
      data_submissao: "18/02/2025"
    },
    {
      id: "3",
      titulo: "Festival Cultural",
      status: "rascunho",
      valor_solicitado: 45000,
      edital: null,
      data_submissao: null
    }
  ];

  const editaisDisponiveis = [
    {
      id: "1",
      titulo: "Prêmio de Música Popular 2025",
      municipio: "Pinhais",
      valor_total: 150000,
      vagas: 15,
      data_encerramento: "15/03/2025"
    },
    {
      id: "2",
      titulo: "Fomento ao Teatro Infantil",
      municipio: "Colombo",
      valor_total: 120000,
      vagas: 10,
      data_encerramento: "20/03/2025"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "aprovado": return "bg-green-100 text-green-800";
      case "em_analise": return "bg-yellow-100 text-yellow-800";
      case "rascunho": return "bg-gray-100 text-gray-800";
      case "submetido": return "bg-blue-100 text-blue-800";
      case "reprovado": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "aprovado": return "APROVADO";
      case "em_analise": return "EM ANÁLISE";
      case "rascunho": return "RASCUNHO";
      case "submetido": return "SUBMETIDO";
      case "reprovado": return "REPROVADO";
      default: return status.toUpperCase();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header com barra de navegação do proponente movida para o topo */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">SISPNAB</h1>
              <nav className="ml-10 flex space-x-8">
                <button 
                  onClick={() => navigate('/dashboard/proponente')}
                  className={`px-1 pt-1 text-sm font-medium ${
                    activeTab === "visao-geral" 
                      ? 'text-blue-700 border-b-2 border-blue-700' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Visão Geral
                </button>
                <button 
                  onClick={() => navigate('/proponente/meus-projetos')}
                  className={`px-1 pt-1 text-sm font-medium ${
                    activeTab === "meus-projetos" 
                      ? 'text-blue-700 border-b-2 border-blue-700' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Meus Projetos
                </button>
                <button 
                  onClick={() => navigate('/proponente/editais')}
                  className={`px-1 pt-1 text-sm font-medium ${
                    activeTab === "editais" 
                      ? 'text-blue-700 border-b-2 border-blue-700' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Novos Editais
                </button>
                <button 
                  onClick={() => navigate('/proponente/notificacoes')}
                  className={`px-1 pt-1 text-sm font-medium ${
                    activeTab === "notificacoes" 
                      ? 'text-blue-700 border-b-2 border-blue-700' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Notificações
                </button>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-400 hover:text-gray-500">
                <span className="sr-only">Notificações</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400"></span>
              </button>
              <div className="flex items-center space-x-3">
                <div>
                  <p className="text-sm font-medium text-gray-900">João Almeida</p>
                  <p className="text-xs text-gray-500">Proponente</p>
                </div>
                <div className="h-8 w-8 rounded-full bg-blue-400 flex items-center justify-center text-white text-sm font-medium">
                  JA
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Welcome Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Olá, João! 👋</h2>
            <p className="mt-1 text-sm text-gray-600">Bem-vindo ao seu painel de controle</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Projetos</CardTitle>
                <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">Total de projetos</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Aprovados</CardTitle>
                <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">8</div>
                <p className="text-xs text-muted-foreground">67% do total</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Em Análise</CardTitle>
                <svg className="h-4 w-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-600">2</div>
                <p className="text-xs text-muted-foreground">Aguardando avaliação</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Rascunhos</CardTitle>
                <svg className="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-600">2</div>
                <p className="text-xs text-muted-foreground">Projetos não submetidos</p>
              </CardContent>
            </Card>
          </div>

          {/* Conteúdo principal */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Últimas Atividades</CardTitle>
                <CardDescription>Seu histórico recente no sistema</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">Projeto "Álbum Sons de Pinhais" submetido</p>
                      <p className="text-sm text-gray-500">Há 2 dias • Edital: 001/2025-PINHAIS</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">Projeto "Espetáculo Memórias" aprovado!</p>
                      <p className="text-sm text-gray-500">Há 5 dias • Valor: R$ 32.000</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">Novo edital disponível: "Fomento ao Teatro"</p>
                      <p className="text-sm text-gray-500">Há 1 semana • Pinhais</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recommended Editals */}
            <Card>
              <CardHeader>
                <CardTitle>Editais Recomendados</CardTitle>
                <CardDescription>Baseado no seu perfil cultural</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {editaisDisponiveis.map((edital) => (
                    <div key={edital.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium text-gray-900">{edital.titulo}</h3>
                        <Badge className="bg-green-100 text-green-800">ABERTO</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">📍 {edital.municipio}</p>
                      <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                        <span>💰 R$ {edital.valor_total.toLocaleString()}</span>
                        <span>👥 {edital.vagas} vagas</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">📅 Encerra: {edital.data_encerramento}</span>
                        <Button size="sm" onClick={() => navigate(`/proponente/editais/${edital.id}`)}>
                          Ver Detalhes
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Meus Projetos */}
            <Card>
              <CardHeader>
                <CardTitle>Meus Projetos</CardTitle>
                <CardDescription>Gerencie todos os seus projetos culturais</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {projetos.map((projeto) => (
                    <div key={projeto.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-medium text-gray-900">{projeto.titulo}</h3>
                          {projeto.edital && (
                            <p className="text-sm text-gray-600">📋 Edital: {projeto.edital}</p>
                          )}
                        </div>
                        <Badge className={getStatusColor(projeto.status)}>
                          {getStatusText(projeto.status)}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <div>
                          {projeto.status === "aprovado" && (
                            <span className="text-green-600 font-medium">
                              💰 Aprovado: R$ {projeto.valor_aprovado?.toLocaleString()}
                            </span>
                          )}
                          {projeto.status === "em_analise" && (
                            <span className="text-yellow-600 font-medium">
                              💰 Solicitado: R$ {projeto.valor_solicitado?.toLocaleString()}
                            </span>
                          )}
                          {projeto.status === "rascunho" && (
                            <span className="text-gray-600 font-medium">
                              💰 Solicitado: R$ {projeto.valor_solicitado?.toLocaleString()}
                            </span>
                          )}
                        </div>
                        <div className="space-x-2">
                          {projeto.status === "rascunho" && (
                            <Button size="sm" variant="outline">
                              Editar
                            </Button>
                          )}
                          <Button size="sm" onClick={() => navigate(`/proponente/projetos/${projeto.id}`)}>
                            {projeto.status === "rascunho" ? "Submeter" : "Ver Detalhes"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardProponente;