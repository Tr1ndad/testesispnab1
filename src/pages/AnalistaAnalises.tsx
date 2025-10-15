import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import BarraNavegacaoAnalista from "@/components/navigation/BarraNavegacaoAnalista";

const AnalistaAnalises = () => {
  const [statusFilter, setStatusFilter] = useState("todos");
  const [areaFilter, setAreaFilter] = useState("todas");

  const propostas = [
    {
      id: "1",
      titulo: "Orquestra Sinfônica Juvenil",
      proponente: "João Almeida",
      area: "Música",
      status: "em_analise",
      dataSubmissao: "10/02/2025",
      valorSolicitado: "R$ 50.000",
      edital: "Prêmio de Música Popular 2025"
    },
    {
      id: "2",
      titulo: "Teatro Infantil Interativo",
      proponente: "Ana Costa",
      area: "Teatro",
      status: "em_analise",
      dataSubmissao: "15/02/2025",
      valorSolicitado: "R$ 30.000",
      edital: "Fomento ao Teatro Infantil"
    },
    {
      id: "3",
      titulo: "Exposição de Arte Digital",
      proponente: "Carlos Mendes",
      area: "Artes Visuais",
      status: "aprovado",
      dataSubmissao: "20/01/2025",
      valorSolicitado: "R$ 25.000",
      edital: "Bolsa de Artes Visuais 2025"
    },
    {
      id: "4",
      titulo: "Festival de Dança Contemporânea",
      proponente: "Maria Silva",
      area: "Dança",
      status: "rejeitado",
      dataSubmissao: "25/02/2025",
      valorSolicitado: "R$ 40.000",
      edital: "Prêmio de Dança Contemporânea"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "em_analise":
        return "bg-yellow-100 text-yellow-800";
      case "aprovado":
        return "bg-green-100 text-green-800";
      case "rejeitado":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "em_analise":
        return "Em Análise";
      case "aprovado":
        return "Aprovado";
      case "rejeitado":
        return "Rejeitado";
      default:
        return status;
    }
  };

  const propostasFiltradas = propostas.filter(proposta => {
    const matchesStatus = statusFilter === "todos" || proposta.status === statusFilter;
    const matchesArea = areaFilter === "todas" || proposta.area === areaFilter;
    return matchesStatus && matchesArea;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Nova barra de navegação no topo */}
      <BarraNavegacaoAnalista />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Análise de Propostas</h2>
            <p className="mt-1 text-sm text-gray-600">Avalie e gerencie as propostas recebidas</p>
          </div>

          {/* Filtros */}
          <div className="mb-6 flex space-x-4">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos os Status</SelectItem>
                <SelectItem value="em_analise">Em Análise</SelectItem>
                <SelectItem value="aprovado">Aprovados</SelectItem>
                <SelectItem value="rejeitado">Rejeitados</SelectItem>
              </SelectContent>
            </Select>

            <Select value={areaFilter} onValueChange={setAreaFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Área Cultural" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todas">Todas as Áreas</SelectItem>
                <SelectItem value="Música">Música</SelectItem>
                <SelectItem value="Teatro">Teatro</SelectItem>
                <SelectItem value="Artes Visuais">Artes Visuais</SelectItem>
                <SelectItem value="Dança">Dança</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Lista de Propostas */}
          <div className="space-y-4">
            {propostasFiltradas.map((proposta) => (
              <Card key={proposta.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{proposta.titulo}</CardTitle>
                      <CardDescription>{proposta.edital}</CardDescription>
                    </div>
                    <Badge className={getStatusColor(proposta.status)}>
                      {getStatusText(proposta.status)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <span className="text-sm text-gray-600">Proponente:</span>
                      <div className="font-medium">{proposta.proponente}</div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Área:</span>
                      <div className="font-medium">{proposta.area}</div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Valor Solicitado:</span>
                      <div className="font-medium">{proposta.valorSolicitado}</div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Data Submissão:</span>
                      <div className="font-medium">{proposta.dataSubmissao}</div>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2">
                    {proposta.status === "em_analise" && (
                      <>
                        <Button variant="outline" size="sm">
                          Ver Detalhes
                        </Button>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          Aprovar
                        </Button>
                        <Button variant="destructive" size="sm">
                          Rejeitar
                        </Button>
                      </>
                    )}
                    {proposta.status === "aprovado" && (
                      <Button variant="outline" size="sm">
                        Ver Detalhes
                      </Button>
                    )}
                    {proposta.status === "rejeitado" && (
                      <Button variant="outline" size="sm">
                        Ver Detalhes
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {propostasFiltradas.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">Nenhuma proposta encontrada com os filtros selecionados.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AnalistaAnalises;