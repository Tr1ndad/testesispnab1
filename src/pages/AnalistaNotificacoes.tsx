import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import BarraNavegacaoAnalista from "@/components/navigation/BarraNavegacaoAnalista";

const AnalistaNotificacoes = () => {
  const [activeTab, setActiveTab] = useState("all");

  const notificacoes = [
    {
      id: 1,
      tipo: "nova_proposta",
      titulo: "Nova Proposta Recebida",
      mensagem: "Nova proposta submetida por João Almeida para o edital Prêmio de Música Popular 2025",
      data: "2 horas atrás",
      lida: false,
      projeto: "Orquestra Sinfônica Juvenil",
      proponente: "João Almeida"
    },
    {
      id: 2,
      tipo: "prazo_perto",
      titulo: "Prazo de Avaliação Próximo",
      mensagem: "O edital Fomento ao Teatro Infantil encerra em 3 dias. Avalie as propostas pendentes.",
      data: "5 horas atrás",
      lida: true,
      edital: "Fomento ao Teatro Infantil"
    },
    {
      id: 3,
      tipo: "aprovação",
      titulo: "Proposta Aprovada",
      mensagem: "Sua avaliação resultou na aprovação do projeto 'Exposição de Arte Digital'",
      data: "1 dia atrás",
      lida: true,
      projeto: "Exposição de Arte Digital",
      proponente: "Carlos Mendes"
    },
    {
      id: 4,
      tipo: "sistema",
      titulo: "Atualização do Sistema",
      mensagem: "Nova versão do sistema disponível com melhorias na interface de avaliação",
      data: "2 dias atrás",
      lida: true
    },
    {
      id: 5,
      tipo: "rejeicao",
      titulo: "Proposta Rejeitada",
      mensagem: "O projeto 'Festival de Dança Contemporânea' foi rejeitado após análise",
      data: "3 dias atrás",
      lida: true,
      projeto: "Festival de Dança Contemporânea",
      proponente: "Maria Silva"
    }
  ];

  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case "nova_proposta":
        return "bg-blue-100 text-blue-800";
      case "prazo_perto":
        return "bg-orange-100 text-orange-800";
      case "aprovação":
        return "bg-green-100 text-green-800";
      case "rejeicao":
        return "bg-red-100 text-red-800";
      case "sistema":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTipoIcon = (tipo: string) => {
    switch (tipo) {
      case "nova_proposta":
        return "📝";
      case "prazo_perto":
        return "⏰";
      case "aprovação":
        return "✅";
      case "rejeicao":
        return "❌";
      case "sistema":
        return "🔧";
      default:
        return "📢";
    }
  };

  const getTipoText = (tipo: string) => {
    switch (tipo) {
      case "nova_proposta":
        return "Nova Proposta";
      case "prazo_perto":
        return "Prazo Próximo";
      case "aprovação":
        return "Aprovação";
      case "rejeicao":
        return "Rejeição";
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
      <BarraNavegacaoAnalista />

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
                onClick={() => setActiveTab("nova_proposta")}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  activeTab === "nova_proposta"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Novas Propostas (1)
              </button>
              <button
                onClick={() => setActiveTab("prazo_perto")}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  activeTab === "prazo_perto"
                    ? "bg-orange-100 text-orange-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Prazos (1)
              </button>
              <button
                onClick={() => setActiveTab("sistema")}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  activeTab === "sistema"
                    ? "bg-purple-100 text-purple-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Sistema (1)
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
                          {notificacao.proponente && (
                            <span>Proponente: {notificacao.proponente}</span>
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

export default AnalistaNotificacoes;