import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProponenteEditais = () => {
  const navigate = useNavigate();

  // Dados mockados para demonstração
  const editais = [
    {
      id: "1",
      titulo: "Prêmio de Música Popular 2025",
      municipio: "Pinhais",
      modalidade: "Prêmio",
      area_cultural: "Música",
      valor_total: 150000,
      valor_disponivel: 150000,
      status: "aberto",
      data_encerramento: "15/03/2025",
      vagas: 15,
      propostas: 8
    },
    {
      id: "2",
      titulo: "Fomento ao Teatro Infantil",
      municipio: "Colombo",
      modalidade: "Fomento",
      area_cultural: "Teatro",
      valor_total: 120000,
      valor_disponivel: 120000,
      status: "aberto",
      data_encerramento: "20/03/2025",
      vagas: 10,
      propostas: 6
    },
    {
      id: "3",
      titulo: "Bolsa de Artes Visuais 2024",
      municipio: "Piraquara",
      modalidade: "Bolsa",
      area_cultural: "Artes Visuais",
      valor_total: 80000,
      valor_disponivel: 0,
      status: "encerrado",
      data_encerramento: "30/09/2024",
      vagas: 8,
      propostas: 12
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "aberto": return "bg-green-100 text-green-800";
      case "encerrado": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "aberto": return "ABERTO";
      case "encerrado": return "ENCERRADO";
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
                  className="text-gray-500 hover:text-gray-700 px-1 pt-1 text-sm font-medium"
                >
                  Meus Projetos
                </button>
                <button 
                  onClick={() => navigate('/proponente/editais')}
                  className="text-blue-700 border-b-2 border-blue-700 px-1 pt-1 text-sm font-medium"
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
            <h2 className="text-2xl font-bold text-gray-900">Editais Disponíveis</h2>
            <p className="mt-1 text-sm text-gray-600">Encontre e se inscreva nos editais culturais disponíveis</p>
          </div>

          {/* Filtros */}
          <div className="mb-6 flex flex-wrap gap-4">
            <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
              <option>Todos os Status</option>
              <option>Abertos</option>
              <option>Encerrados</option>
            </select>
            <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
              <option>Todas as Áreas</option>
              <option>Música</option>
              <option>Teatro</option>
              <option>Artes Visuais</option>
            </select>
            <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
              <option>Todos os Municípios</option>
              <option>Pinhais</option>
              <option>Colombo</option>
              <option>Piraquara</option>
            </select>
          </div>

          {/* Lista de Editais */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {editais.map((edital) => (
              <Card key={edital.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={getStatusColor(edital.status)}>
                      {getStatusText(edital.status)}
                    </Badge>
                    <span className="text-sm text-gray-500">{edital.municipio}</span>
                  </div>
                  <CardTitle className="text-lg">{edital.titulo}</CardTitle>
                  <CardDescription>
                    {edital.modalidade} • {edital.area_cultural}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Valor Total:</span>
                      <span className="font-medium">R$ {edital.valor_total.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Vagas:</span>
                      <span className="font-medium">{edital.vagas}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Propostas:</span>
                      <span className="font-medium">{edital.propostas}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Encerra:</span>
                      <span className="font-medium">{edital.data_encerramento}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="flex-1"
                      onClick={() => navigate(`/proponente/editais/${edital.id}`)}
                    >
                      Ver Detalhes
                    </Button>
                    {edital.status === "aberto" && (
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="flex-1"
                        onClick={() => navigate(`/novo-projeto?edital=${edital.id}`)}
                      >
                        Propor Projeto
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProponenteEditais;