import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProponenteNotificacoes = () => {
  const navigate = useNavigate();

  // Dados mockados para demonstração
  const notificacoes = [
    {
      id: "1",
      tipo: "aprovacao",
      titulo: "Projeto Aprovado",
      mensagem: "Seu projeto 'Álbum Sons de Pinhais' foi aprovado no edital 001/2025-PINHAIS",
      data: "2025-02-20 14:30",
      lida: false
    },
    {
      id: "2",
      tipo: "analise",
      titulo: "Em Análise",
      mensagem: "Seu projeto 'Turnê Regional' está em análise pela comissão de cultura",
      data: "2025-02-18 10:15",
      lida: false
    },
    {
      id: "3",
      tipo: "edital",
      titulo: "Novo Edital Disponível",
      mensagem: "Foi publicado um novo edital de fomento ao teatro infantil em Colombo",
      data: "2025-02-15 09:00",
      lida: true
    },
    {
      id: "4",
      tipo: "reuniao",
      titulo: "Reunião Agendada",
      mensagem: "Sua reunião de alinhamento sobre o projeto 'Festival Cultural' foi agendada para dia 25/02",
      data: "2025-02-10 16:45",
      lida: true
    }
  ];

  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case "aprovacao": return "bg-green-100 text-green-800";
      case "analise": return "bg-yellow-100 text-yellow-800";
      case "edital": return "bg-blue-100 text-blue-800";
      case "reuniao": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getTipoIcon = (tipo: string) => {
    switch (tipo) {
      case "aprovacao": return "✅";
      case "analise": return "⏳";
      case "edital": return "📋";
      case "reuniao": return "📅";
      default: return "📢";
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
                  className="text-gray-500 hover:text-gray-700 px-1 pt-1 text-sm font-medium"
                >
                  Novos Editais
                </button>
                <button 
                  onClick={() => navigate('/proponente/notificacoes')}
                  className="text-blue-700 border-b-2 border-blue-700 px-1 pt-1 text-sm font-medium"
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
        </div

Vou continuar criando as páginas de notificações e atualizar o App.tsx para corrigir a navegação:

<dyad-write path="src/pages/ProponenteNotificacoes.tsx" description="Criando página de notificações do proponente">
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProponenteNotificacoes = () => {
  const navigate = useNavigate();

  // Dados mockados para demonstração
  const notificacoes = [
    {
      id: "1",
      tipo: "aprovacao",
      titulo: "Projeto Aprovado",
      mensagem: "Seu projeto 'Álbum Sons de Pinhais' foi aprovado no edital 001/2025-PINHAIS",
      data: "2025-02-20 14:30",
      lida: false
    },
    {
      id: "2",
      tipo: "analise",
      titulo: "Em Análise",
      mensagem: "Seu projeto 'Turnê Regional' está em análise pela comissão de cultura",
      data: "2025-02-18 10:15",
      lida: false
    },
    {
      id: "3",
      tipo: "edital",
      titulo: "Novo Edital Disponível",
      mensagem: "Foi publicado um novo edital de fomento ao teatro infantil em Colombo",
      data: "2025-02-15 09:00",
      lida: true
    },
    {
      id: "4",
      tipo: "reuniao",
      titulo: "Reunião Agendada",
      mensagem: "Sua reunião de alinhamento sobre o projeto 'Festival Cultural' foi agendada para dia 25/02",
      data: "2025-02-10 16:45",
      lida: true
    }
  ];

  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case "aprovacao": return "bg-green-100 text-green-800";
      case "analise": return "bg-yellow-100 text-yellow-800";
      case "edital": return "bg-blue-100 text-blue-800";
      case "reuniao": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getTipoIcon = (tipo: string) => {
    switch (tipo) {
      case "aprovacao": return "✅";
      case "analise": return "⏳";
      case "edital": return "📋";
      case "reuniao": return "📅";
      default: return "📢";
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
                  className="text-gray-500 hover:text-gray-700 px-1 pt-1 text-sm font-medium"
                >
                  Novos Editais
                </button>
                <button 
                  onClick={() => navigate('/proponente/notificacoes')}
                  className="text-blue-700 border-b-2 border-blue-700 px-1 pt-1 text-sm font-medium"
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
            <h2 className="text-2xl font-bold text-gray-900">Notificações</h2>
            <p className="mt-1 text-sm text-gray-600">Mensagens e atualizações sobre seus projetos</p>
          </div>

          {/* Filtros */}
          <div className="mb-6 flex space-x-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium">
              Todas ({notificacoes.length})
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200">
              Não Lidas ({notificacoes.filter(n => !n.lida).length})
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200">
              Aprovações ({notificacoes.filter(n => n.tipo === 'aprovacao').length})
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200">
              Análises ({notificacoes.filter(n => n.tipo === 'analise').length})
            </button>
          </div>

          {/* Lista de Notificações */}
          <div className="space-y-4">
            {notificacoes.map((notificacao) => (
              <div 
                key={notificacao.id} 
                className={`border rounded-lg p-4 hover:shadow-md transition-shadow ${!notificacao.lida ? 'bg-blue-50 border-blue-200' : 'bg-white'}`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <span className="text-2xl">{getTipoIcon(notificacao.tipo)}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-semibold text-gray-900">{notificacao.titulo}</h3>
                      <span className="text-xs text-gray-500">{notificacao.data}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{notificacao.mensagem}</p>
                    <div className="flex items-center justify-between">
                      <Badge className={getTipoColor(notificacao.tipo)}>
                        {notificacao.tipo === 'aprovacao' && 'Aprovação'}
                        {notificacao.tipo === 'analise' && 'Em Análise'}
                        {notificacao.tipo === 'edital' && 'Novo Edital'}
                        {notificacao.tipo === 'reuniao' && 'Reunião'}
                      </Badge>
                      <div className="space-x-2">
                        <Button size="sm" variant="outline">
                          Ver Detalhes
                        </Button>
                        {!notificacao.lida && (
                          <Button size="sm" onClick={() => console.log('Marcar como lida')}>
                            Marcar como Lida
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProponenteNotificacoes;