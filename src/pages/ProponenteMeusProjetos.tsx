import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProponenteMeusProjetos = () => {
  const navigate = useNavigate();

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
    },
    {
      id: "4",
      titulo: "Workshop de Música",
      status: "reprovado",
      valor_solicitado: 15000,
      edital: "002/2025-PINHAIS",
      data_submissao: "10/01/2025"
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
      {/* Header com barra de navegação do proponente */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">SISPNAB</h1>
              <nav className="ml-10 flex space-x-8">
                <button 
                  onClick={() => navigate('/dashboard/proponente')}
                  className="text-gray-500 hover:text-gray-700 px-1 pt-1 text-sm font-medium"
                >
                  Visão Geral
                </button>
                <button 
                  onClick={() => navigate('/proponente/meus-projetos')}
                  className="text-blue-700 border-b-2 border-blue-700 px-1 pt-1 text-sm font-medium"
                >
                  Meus Projetos
                </button>
                <button 
                  onClick={() => navigate('/proponente/editais')}
                  className="text-gray-500 hover:text-gray-700 px-1 pt-1 text-sm font-medium"
                >
                  Novos Editais
                </button>
                <button 
                  onClick={() => navigate('/proponente/notificacoes')}
                  className="text-gray-500 hover:text-gray-700 px-1 pt-1 text-sm font-medium"
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
          {/* Header */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Meus Projetos</h2>
                <p className="mt-1 text-sm text-gray-600">Gerencie todos os seus projetos culturais</p>
              </div>
              <Button onClick={() => navigate('/novo-projeto')} className="bg-green-600 hover:bg-green-700">
                Novo Projeto
              </Button>
            </div>
          </div>

          {/* Filtros */}
          <div className="mb-6 flex space-x-4">
            <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
              <option>Todos os Status</option>
              <option>Aprovado</option>
              <option>Em Análise</option>
              <option>Rascunho</option>
              <option>Reprovado</option>
            </select>
            <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
              <option>Todos os Editais</option>
              <option>001/2025-PINHAIS</option>
              <option>002/2025-PINHAIS</option>
            </select>
          </div>

          {/* Lista de Projetos */}
          <div className="space-y-4">
            {projetos.map((projeto) => (
              <div key={projeto.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{projeto.titulo}</h3>
                    {projeto.edital && (
                      <p className="text-sm text-gray-600 mt-1">📋 Edital: {projeto.edital}</p>
                    )}
                  </div>
                  <Badge className={getStatusColor(projeto.status)}>
                    {getStatusText(projeto.status)}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <span className="text-sm text-gray-600">Status:</span>
                    <div className="font-medium">{getStatusText(projeto.status)}</div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Valor:</span>
                    <div className="font-medium">
                      {projeto.status === "aprovado" 
                        ? `R$ ${projeto.valor_aprovado?.toLocaleString()}` 
                        : `R$ ${projeto.valor_solicitado?.toLocaleString()}`
                      }
                    </div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Data Submissão:</span>
                    <div className="font-medium">{projeto.data_submissao}</div>
                  </div>
                </div>

                <div className="flex justify-end space-x-2">
                  {projeto.status === "rascunho" && (
                    <Button size="sm" variant="outline" onClick={() => navigate(`/novo-projeto?edit=${projeto.id}`)}>
                      Editar
                    </Button>
                  )}
                  <Button size="sm" onClick={() => navigate(`/proponente/projetos/${projeto.id}`)}>
                    {projeto.status === "rascunho" ? "Submeter" : "Ver Detalhes"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProponenteMeusProjetos;