import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import BarraNavegacaoProponente from "@/components/navigation/BarraNavegacaoProponente";

const ProponenteNotificacoes = () => {
  const [activeTab, setActiveTab] = useState("all");

  const notificacoes = [
    {
      id: 1,
      tipo: "aprovação",
      titulo: "Proposta Aprovada",
      mensagem: "Sua proposta 'Álbum Sons de Pinhais' foi aprovada pelo comitê de avaliação",
      data: "2 horas atrás",
      lida: false,
      projeto: "Álbum Sons de Pinhais",
      edital: "Prêmio de Música Popular 2025"
    },
    {
      id: 2,
      tipo: "analise",
      titulo: "Nova Proposta em Análise",
      mensagem: "Sua proposta 'Turnê Regional' está em análise pela equipe de avaliação",
      data: "1 dia atrás",
      lida: true,
      projeto: "Turnê Regional",
      edital: "Prêmio de Música Popular 2025"
    },
    {
      id: 3,
      tipo: "rejeicao",
      titulo: "Proposta Rejeitada",
      mensagem: "Sua proposta 'Workshop de Música' não foi selecionada para este edital",
      data: "3 dias atrás",
      lida: true,
      projeto: "Workshop de Música",
      edital: "Fomento ao Teatro Infantil"
    },
    {
      id: 4,
      tipo: "prazo",
      titulo: "Prazo de Inscrição Próximo",
      mensagem: "O edital 'Bolsa de Artes Visuais 2025' encerra em 5 dias. Inscreva-se agora!",
      data: "1 semana atrás",
      lida: true,
      edital: "Bolsa de Artes Visuais 2025"
    },
    {
      id: 5,
      tipo: "sistema",
      titulo: "Atualização do Sistema",
      mensagem: "Nova versão do sistema disponível com melhorias na interface de projetos",
      data: "2 semanas atrás",
      lida: true
    }
  ];

  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case "aprovação":
        return "bg-green-100 text-green-800";
      case "analise":
        return "bg-yellow-100 text-yellow-800";
      case "rejeicao":
        return "bg-red-100 text-red-800";
      case "prazo":
        return "bg-orange-100 text-orange-800";
      case "sistema":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTipoIcon = (tipo: string) => {
    switch (tipo) {
      case "aprovação":
        return "✅";
      case "analise":
        return "📝";
      case "rejeicao":
        return "❌";
      case "prazo":
        return "⏰";
      case "sistema":
        return "🔧";
      default:
        return "📢";
    }
  };

  const getTipoText = (tipo: string) => {
    switch (tipo) {
      case "aprovação":
        return "Aprovação";
      case "analise":
        return "Análise";
      case "rejeicao":
        return "Rejeição";
      case "prazo":
        return "Prazo";
      case "sistema":
        return "Sistema";
      default:
        return tipo;
    }
  };

  const notificacoesFiltradas = notificacoes.filter(notif => {
    if (activeTab === "all") return true;
    return notif.tipo === activeTab;
  });

  const naoLidas = notificacoes.filter(n => !n.lida).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Nova barra de navegação no topo */}
      <BarraNavegacaoProponente />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Header */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Notificações</h2>
                <p className="mt-1 text-sm text-gray-600">
                  {naoLidas > 0 ? `${naoLidas} notificações não lidas` : "Todas as notificações"}
                </p>
              </div>
              {naoLidas > 0 && (
                <Button variant="outline" size="sm">
                  Marcar todas como lidas
                </Button>
              )}
            </div>
          </div>

          {/* Filtros */}
          <div className="mb-6">
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  activeTab === "all"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Todas ({notificacoes.length})
              </button>
              <button
                onClick={() => setActiveTab("aprovação")}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  activeTab === "aprovação"
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Aprovações (1)
              </button>
              <button
                onClick={() => setActiveTab("analise")}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  activeTab === "analise"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Análises (1)
              </button>
              <button
                onClick={() => setActiveTab("prazo")}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  activeTab === "prazo"
                    ? "bg-orange-100 text-orange-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Prazos (1)
              </button>
            </div>
          </div>

          {/* Lista de Notificações */}
          <div className="space-y-4">
            {notificacoesFiltradas.map((notificacao) => (
              <Card 
                key={notificacao.id} 
                className={`hover:shadow-md transition-shadow ${!notificacao.lida ? 'bg-blue-50 border-blue-200' : ''}`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <span className="text-2xl">{getTipoIcon(notificacao.tipo)}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-sm font-semibold text-gray-900">{notificacao.titulo}</h3>
                          {!notificacao.lida && (
                            <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-1"></span>
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={getTipoColor(notificacao.tipo)}>
                            {getTipoText(notificacao.tipo)}
                          </Badge>
                          <span className="text-xs text-gray-500">{notificacao.data}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{notificacao.mensagem}</p>
                      <div className="flex justify-between items-center">
                        <div className="text-xs text-gray-500">
                          {notificacao.projeto && (
                            <span>Projeto: {notificacao.projeto}</span>
                          )}
                          {notificacao.edital && (
                            <span>Edital: {notificacao.edital}</span>
                          )}
                        </div>
                        {!notificacao.lida && (
                          <Button size="sm" variant="outline">
                            Marcar como lida
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {notificacoesFiltradas.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">Nenhuma notificação encontrada com o filtro selecionado.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ProponenteNotificacoes;