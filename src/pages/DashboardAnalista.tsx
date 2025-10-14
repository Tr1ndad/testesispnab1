import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DashboardAnalista = () => {
  const [activeTab, setActiveTab] = useState("visao-geral");

  // Dados mockados para demonstração
  const kpiGerais = {
    total_propostas: 127,
    propostas_aprovadas: 89,
    taxa_aprovacao: 70,
    total_artistas: 201,
    total_investido: 1750000
  };

  const comparativoMunicipios = [
    {
      municipio: "Colombo",
      propostas: 50,
      aprovadas: 32,
      taxa: 64,
      investimento: 680000
    },
    {
      municipio: "Pinhais",
      propostas: 40,
      aprovadas: 28,
      taxa: 70,
      investimento: 620000
    },
    {
      municipio: "Piraquara",
      propostas: 37,
      aprovadas: 29,
      taxa: 78,
      investimento: 485000
    }
  ];

  const areasCulturais = [
    { area: "Música", percentual: 32, investimento: 560000 },
    { area: "Teatro", percentual: 22, investimento: 385000 },
    { area: "Artes Visuais", percentual: 18, investimento: 315000 },
    { area: "Dança", percentual: 15, investimento: 262500 },
    { area: "Literatura", percentual: 8, investimento: 140000 },
    { area: "Outros", percentual: 5, investimento: 87500 }
  ];

  const tendencias = [
    { mes: "Jan", propostas: 8, aprovadas: 6 },
    { mes: "Fev", propostas: 12, aprovadas: 9 },
    { mes: "Mar", propostas: 18, aprovadas: 14 },
    { mes: "Abr", propostas: 15, aprovadas: 11 },
    { mes: "Mai", propostas: 10, aprovadas: 7 },
    { mes: "Jun", propostas: 14, aprovadas: 10 },
    { mes: "Jul", propostas: 16, aprovadas: 12 },
    { mes: "Ago", propostas: 13, aprovadas: 9 },
    { mes: "Set", propostas: 11, aprovadas: 8 },
    { mes: "Out", propostas: 9, aprovadas: 6 },
    { mes: "Nov", propostas: 7, aprovadas: 5 },
    { mes: "Dez", propostas: 4, aprovadas: 2 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">SISPNAB</h1>
              <nav className="ml-10 flex space-x-8">
                <a href="#" className="text-purple-700 border-b-2 border-purple-700 px-1 pt-1 text-sm font-medium">
                  Dashboard
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700 px-1 pt-1 text-sm font-medium">
                  Análises
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700 px-1 pt-1 text-sm font-medium">
                  Relatórios
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700 px-1 pt-1 text-sm font-medium">
                  Comparativos
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700 px-1 pt-1 text-sm font-medium">
                  Exportar
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
                  <p className="text-sm font-medium text-gray-900">Maria Fernandes</p>
                  <p className="text-xs text-gray-500">Analista de Dados</p>
                </div>
                <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center text-white text-sm font-medium">
                  MF
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
            <h2 className="text-2xl font-bold text-gray-900">Dashboard de Análises Estratégicas</h2>
            <p className="mt-1 text-sm text-gray-600">Visão Completa da RMC • Analista: Maria Fernandes</p>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total de Propostas</CardTitle>
                <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{kpiGerais.total_propostas}</div>
                <p className="text-xs text-muted-foreground">+15% ano anterior</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Propostas Aprovadas</CardTitle>
                <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">{kpiGerais.propostas_aprovadas}</div>
                <p className="text-xs text-muted-foreground">+12% ano anterior</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Taxa de Aprovação</CardTitle>
                <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">{kpiGerais.taxa_aprovacao}%</div>
                <p className="text-xs text-muted-foreground">+5% ano anterior</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Artistas Beneficiados</CardTitle>
                <svg className="h-4 w-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">{kpiGerais.total_artistas}</div>
                <p className="text-xs text-muted-foreground">+18% ano anterior</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Investimento Total</CardTitle>
                <svg className="h-4 w-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">R$ {kpiGerais.total_investido.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">+25% ano anterior</p>
              </CardContent>
            </Card>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="visao-geral">Visão Geral</TabsTrigger>
              <TabsTrigger value="analises">Análises</TabsTrigger>
              <TabsTrigger value="relatorios">Relatórios</TabsTrigger>
              <TabsTrigger value="comparativos">Comparativos</TabsTrigger>
            </TabsList>

            <TabsContent value="visao-geral" className="space-y-6">
              {/* Comparativo de Performance */}
              <Card>
                <CardHeader>
                  <CardTitle>Comparativo de Performance - RMC 2024</CardTitle>
                  <CardDescription>Análise detalhada dos municípios</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Métrica</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Colombo</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pinhais</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Piraquara</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Média RMC</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Propostas</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">50 (+10%)</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">40 (+8%)</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">37 (+5%)</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">42</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Aprovadas</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">32 (64%)</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">28 (70%)</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">29 (78%)</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">30</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Investimento</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">R$ 680K</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">R$ 620K</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">R$ 485K</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">R$ 595K</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Per Capita</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">R$ 2,82</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">R$ 4,69</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">R$ 4,30</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">R$ 3,94</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Artistas</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">89 (+15%)</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">67 (+12%)</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">45 (+8%)</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">67</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 flex space-x-2">
                    <Button size="sm" variant="outline">Exportar CSV</Button>
                    <Button size="sm" variant="outline">Baixar Excel</Button>
                    <Button size="sm">Gerar Relatório PDF</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Insights */}
              <Card>
                <CardHeader>
                  <CardTitle>Insights e Recomendações Estratégicas</CardTitle>
                  <CardDescription>Análise inteligente dos dados culturais</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">📈 Piraquara lidera em taxa de aprovação (78%)</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            Recomendação: Estudar critérios de avaliação para replicar boas práticas nos demais municípios
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">📊 Música representa 32% do investimento total</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            Atenção: Diversificar áreas culturais contempladas para maior equilíbrio regional
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-yellow-50 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">⚠️ Colombo tem volume 35% maior que Piraquara</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            Análise: População maior, mas per capita é menor - oportunidade de otimização
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-purple-50 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">✅ Taxa de aprovação geral acima de 70%</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            Tendência: Crescimento de 5% em relação ao ano anterior - política eficaz
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-orange-50 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">🎯 Oportunidade: Fomentar mais editais em Piraquara</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            Potencial de crescimento baseado na alta taxa de sucesso e baixa concorrência
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analises" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Distribuição por Área Cultural</CardTitle>
                    <CardDescription>Investimento por tipo de cultura</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {areasCulturais.map((area) => (
                        <div key={area.area}>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-gray-700">{area.area}</span>
                            <span className="text-sm font-medium text-gray-700">{area.percentual}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-purple-600 h-2 rounded-full"
                              style={{ width: `${area.percentual}%` }}
                            ></div>
                          </div>
                          <div className="text-xs text-gray-500 mt-1">R$ {area.investimento.toLocaleString()}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Tendência Mensal</CardTitle>
                    <CardDescription>Evolução de propostas ao longo do ano</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {tendencias.map((mes) => (
                        <div key={mes.mes} className="flex items-center space-x-4">
                          <span className="text-sm font-medium w-8">{mes.mes}</span>
                          <div className="flex-1">
                            <div className="flex space-x-2">
                              <div className="flex-1">
                                <div className="text-xs text-gray-500 mb-1">Propostas</div>
                                <div className="bg-blue-200 rounded h-4 relative">
                                  <div 
                                    className="bg-blue-600 h-4 rounded"
                                    style={{ width: `${(mes.propostas / 20) * 100}%` }}
                                  ></div>
                                </div>
                              </div>
                              <div className="flex-1">
                                <div className="text-xs text-gray-500 mb-1">Aprovadas</div>
                                <div className="bg-green-200 rounded h-4 relative">
                                  <div 
                                    className="bg-green-600 h-4 rounded"
                                    style={{ width: `${(mes.aprovadas / 20) * 100}%` }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div className="flex justify-between text-xs text-gray-500 mt-1">
                              <span>{mes.propostas}</span>
                              <span>{mes.aprovadas}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="relatorios" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Gerador de Relatórios</CardTitle>
                  <CardDescription>Crie relatórios customizados com dados da RMC</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-4">Configuração do Relatório</h4>
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm text-gray-600">Período:</label>
                          <select className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md">
                            <option>Anual 2024</option>
                            <option>Trimestral Q4 2024</option>
                            <option>Mensal Dezembro 2024</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-sm text-gray-600">Municípios:</label>
                          <div className="mt-2 space-y-2">
                            <label className="flex items-center">
                              <input type="checkbox" className="mr-2" defaultChecked />
                              <span className="text-sm">Todos os municípios</span>
                            </label>
                            <label className="flex items-center">
                              <input type="checkbox" className="mr-2" />
                              <span className="text-sm">Apenas Pinhais</span>
                            </label>
                            <label className="flex items-center">
                              <input type="checkbox" className="mr-2" />
                              <span className="text-sm">Apenas Colombo</span>
                            </label>
                            <label className="flex items-center">
                              <input type="checkbox" className="mr-2" />
                              <span className="text-sm">Apenas Piraquara</span>
                            </label>
                          </div>
                        </div>
                        <div>
                          <label className="text-sm text-gray-600">Formato:</label>
                          <div className="mt-2 space-y-2">
                            <label className="flex items-center">
                              <input type="radio" name="formato" className="mr-2" defaultChecked />
                              <span className="text-sm">PDF</span>
                            </label>
                            <label className="flex items-center">
                              <input type="radio" name="formato" className="mr-2" />
                              <span className="text-sm">Excel</span>
                            </label>
                            <label className="flex items-center">
                              <input type="radio" name="formato" className="mr-2" />
                              <span className="text-sm">PowerPoint</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-4">Incluir no Relatório</h4>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" defaultChecked />
                          <span className="text-sm">Resumo Executivo</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" defaultChecked />
                          <span className="text-sm">Indicadores Gerais</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" defaultChecked />
                          <span className="text-sm">Comparativo Municipal</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">Análise por Área Cultural</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">Tendências Históricas</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">Gráficos e Visualizações</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">Recomendações Estratégicas</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex space-x-3">
                    <Button>Gerar Relatório</Button>
                    <Button variant="outline">Salvar Configuração</Button>
                    <Button variant="outline">Pré-visualizar</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="comparativos" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Análise Comparativa</CardTitle>
                  <CardDescription>Compare diferentes períodos e métricas</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-4">Período 1</h4>
                      <div className="space-y-3">
                        <div>
                          <label className="text-sm text-gray-600">Ano:</label>
                          <select className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md">
                            <option>2024</option>
                            <option>2023</option>
                            <option>2022</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-sm text-gray-600">Trimestre:</label>
                          <select className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md">
                            <option>Q1</option>
                            <option>Q2</option>
                            <option>Q3</option>
                            <option>Q4</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-4">Período 2</h4>
                      <div className="space-y-3">
                        <div>
                          <label className="text-sm text-gray-600">Ano:</label>
                          <select className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md">
                            <option>2023</option>
                            <option>2024</option>
                            <option>2022</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-sm text-gray-600">Trimestre:</label>
                          <select className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md">
                            <option>Q1</option>
                            <option>Q2</option>
                            <option>Q3</option>
                            <option>Q4</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-end">
                      <Button className="w-full">Gerar Comparativo</Button>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="font-medium text-gray-900 mb-4">Resultados do Comparativo</h4>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="text-center text-gray-500">
                        <div className="text-4xl mb-2">📊</div>
                        <p>Selecione os períodos acima para gerar o comparativo</p>
                      </div>
                    </div>
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

export default DashboardAnalista;