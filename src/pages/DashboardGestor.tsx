import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DashboardGestor = () => {
  const [activeTab, setActiveTab] = useState("visao-geral");

  // Dados mockados para demonstração
  const municipio = {
    nome: "Pinhais",
    editais_ativos: 2,
    propostas_recebidas: 18,
    pendentes_avaliacao: 4,
    taxa_aprovacao: 70
  };

  const editais = [
    {
      id: "1",
      titulo: "Prêmio de Música Popular 2025",
      status: "aberto",
      valor_total: 150000,
      propostas: 8,
      data_encerramento: "15/03/2025"
    },
    {
      id: "2",
      titulo: "Fomento ao Teatro Infantil",
      status: "aberto",
      valor_total: 120000,
      propostas: 6,
      data_encerramento: "20/03/2025"
    },
    {
      id: "3",
      titulo: "Artes Visuais 2024",
      status: "encerrado",
      valor_total: 80000,
      propostas: 12,
      data_encerramento: "30/09/2024"
    }
  ];

  const propostas_pendentes = [
    {
      id: "1",
      titulo: "Álbum 'Sons de Pinhais'",
      proponente: "João Santos",
      area_cultural: "Música",
      valor_solicitado: 35000,
      data_submissao: "15/02/2025"
    },
    {
      id: "2",
      titulo: "Espetáculo 'Memórias Urbanas'",
      proponente: "Maria Silva",
      area_cultural: "Teatro",
      valor_solicitado: 28000,
      data_submissao: "18/02/2025"
    },
    {
      id: "3",
      titulo: "Oficina de Artes Plásticas",
      proponente: "Carlos Mendes",
      area_cultural: "Artes Visuais",
      valor_solicitado: 15000,
      data_submissao: "20/02/2025"
    },
    {
      id: "4",
      titulo: "Festival de Dança Contemporânea",
      proponente: "Grupo Dança Livre",
      area_cultural: "Dança",
      valor_solicitado: 42000,
      data_submissao: "22/02/2025"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "aberto": return "bg-green-100 text-green-800";
      case "encerrado": return "bg-gray-100 text-gray-800";
      case "em_analise": return "bg-yellow-100 text-yellow-800";
      case "concluido": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "aberto": return "ABERTO";
      case "encerrado": return "ENCERRADO";
      case "em_analise": return "EM ANÁLISE";
      case "concluido": return "CONCLUÍDO";
      default: return status.toUpperCase();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">SISPNAB</h1>
              <nav className="ml-10 flex space-x-8">
                <a href="#" className="text-blue-700 border-b-2 border-blue-700 px-1 pt-1 text-sm font-medium">
                  Dashboard
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700 px-1 pt-1 text-sm font-medium">
                  Editais
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700 px-1 pt-1 text-sm font-medium">
                  Avaliação
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700 px-1 pt-1 text-sm font-medium">
                  Indicadores
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700 px-1 pt-1 text-sm font-medium">
                  Relatórios
                </a>
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
                  <p className="text-sm font-medium text-gray-900">Fernanda Santos</p>
                  <p className="text-xs text-gray-500">Secretária de Cultura - Pinhais</p>
                </div>
                <div className="h-8 w-8 rounded-full bg-blue-700 flex items-center justify-center text-white text-sm font-medium">
                  FS
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
            <h2 className="text-2xl font-bold text-gray-900">Secretaria de Cultura de Pinhais</h2>
            <p className="mt-1 text-sm text-gray-600">Gestora: Fernanda Santos</p>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Editais Ativos</CardTitle>
                <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{municipio.editais_ativos}</div>
                <p className="text-xs text-muted-foreground">Em aberto</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Propostas Recebidas</CardTitle>
                <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{municipio.propostas_recebidas}</div>
                <p className="text-xs text-muted-foreground">Total este ano</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pendentes</CardTitle>
                <svg className="h-4 w-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-600">{municipio.pendentes_avaliacao}</div>
                <p className="text-xs text-muted-foreground">Aguardando avaliação</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Taxa de Aprovação</CardTitle>
                <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">{municipio.taxa_aprovacao}%</div>
                <p className="text-xs text-muted-foreground">Média histórica</p>
              </CardContent>
            </Card>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="visao-geral">Visão Geral</TabsTrigger>
              <TabsTrigger value="editais">Editais</TabsTrigger>
              <TabsTrigger value="avaliacao">Avaliação</TabsTrigger>
              <TabsTrigger value="indicadores">Indicadores</TabsTrigger>
            </TabsList>

            <TabsContent value="visao-geral" className="space-y-6">
              {/* Tarefas Pendentes */}
              <Card>
                <CardHeader>
                  <CardTitle>Tarefas Pendentes</CardTitle>
                  <CardDescription>Ações urgentes que precisam da sua atenção</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <div>
                          <p className="font-medium text-gray-900">4 propostas aguardando avaliação</p>
                          <p className="text-sm text-gray-600">Prazo máximo: 15 dias úteis</p>
                        </div>
                      </div>
                      <Button size="sm">Ir para Avaliação</Button>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div>
                          <p className="font-medium text-gray-900">Edital "Fomento Teatro" encerra em 5 dias</p>
                          <p className="text-sm text-gray-600">6 propostas recebidas</p>
                        </div>
                      </div>
                      <Button size="sm">Ver Edital</Button>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div>
                          <p className="font-medium text-gray-900">Relatório Q1 2025 concluído</p>
                          <p className="text-sm text-gray-600">Aguardando aprovação final</p>
                        </div>
                      </div>
                      <Button size="sm">Visualizar</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Últimas Atividades */}
              <Card>
                <CardHeader>
                  <CardTitle>Últimas Atividades</CardTitle>
                  <CardDescription>Historico de ações recentes no sistema</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">Proposta "Álbum Sons" aprovada</p>
                        <p className="text-sm text-gray-500">Por você • Há 2 horas</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">Novo edital "Literatura 2025" publicado</p>
                        <p className="text-sm text-gray-500">Por você • Ontem</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">Proposta "Festival Cultural" em análise</p>
                        <p className="text-sm text-gray-500">Enviada por João Almeida • Há 3 dias</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="editais" className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Gerenciamento de Editais</h3>
                <Button>Novo Edital</Button>
              </div>

              <div className="space-y-4">
                {editais.map((edital) => (
                  <div key={edital.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-medium text-gray-900">{edital.titulo}</h3>
                        <p className="text-sm text-gray-600">Valor: R$ {edital.valor_total.toLocaleString()}</p>
                      </div>
                      <Badge className={getStatusColor(edital.status)}>
                        {getStatusText(edital.status)}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-gray-600">Propostas:</span>
                        <div className="font-medium">{edital.propostas}</div>
                      </div>
                      <div>
                        <span className="text-gray-600">Encerramento:</span>
                        <div className="font-medium">{edital.data_encerramento}</div>
                      </div>
                      <div>
                        <span className="text-gray-600">Status:</span>
                        <div className="font-medium">{getStatusText(edital.status)}</div>
                      </div>
                      <div>
                        <span className="text-gray-600">Ações:</span>
                        <div className="font-medium">
                          <Button size="sm" className="mr-2">Editar</Button>
                          <Button size="sm" variant="outline">Ver Propostas</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="avaliacao" className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Avaliação de Propostas</h3>
                <div className="flex space-x-2">
                  <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
                    <option>Todos os editais</option>
                    <option>Prêmio de Música 2025</option>
                    <option>Fomento ao Teatro</option>
                  </select>
                  <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
                    <option>Pendentes</option>
                    <option>Em Análise</option>
                    <option>Avaliadas</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                {propostas_pendentes.map((proposta) => (
                  <div key={proposta.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-medium text-gray-900">{proposta.titulo}</h3>
                        <p className="text-sm text-gray-600">👤 {proposta.proponente}</p>
                      </div>
                      <Badge className="bg-yellow-100 text-yellow-800">PENDENTE</Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-gray-600">Área Cultural:</span>
                        <div className="font-medium">{proposta.area_cultural}</div>
                      </div>
                      <div>
                        <span className="text-gray-600">Valor Solicitado:</span>
                        <div className="font-medium">R$ {proposta.valor_solicitado.toLocaleString()}</div>
                      </div>
                      <div>
                        <span className="text-gray-600">Data Submissão:</span>
                        <div className="font-medium">{proposta.data_submissao}</div>
                      </div>
                      <div>
                        <span className="text-gray-600">Ações:</span>
                        <div className="font-medium">
                          <Button size="sm" className="mr-2">Ver Detalhes</Button>
                          <Button size="sm" variant="outline">Iniciar Avaliação</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="indicadores" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Indicadores do Município</CardTitle>
                  <CardDescription>Cadastre e monitore os indicadores culturais</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-4">Período</h4>
                      <div className="space-y-3">
                        <div>
                          <label className="text-sm text-gray-600">Ano:</label>
                          <select className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md">
                            <option>2025</option>
                            <option>2024</option>
                            <option>2023</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-sm text-gray-600">Trimestre:</label>
                          <select className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md">
                            <option>1º Trimestre</option>
                            <option>2º Trimestre</option>
                            <option>3º Trimestre</option>
                            <option>4º Trimestre</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-4">Investimento</h4>
                      <div className="space-y-3">
                        <div>
                          <label className="text-sm text-gray-600">Total Investido (R$):</label>
                          <input type="number" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md" defaultValue="620000" />
                        </div>
                        <div>
                          <label className="text-sm text-gray-600">Total Executado (R$):</label>
                          <input type="number" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md" defaultValue="452000" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button>Salvar Indicadores</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default DashboardGestor;