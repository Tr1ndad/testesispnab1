import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import BarraNavegacaoAnalista from "@/components/navigation/BarraNavegacaoAnalista";

const DashboardAnalista = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    { title: "Editais em Análise", value: "8", change: "+2", icon: "📋" },
    { title: "Projetos Avaliados", value: "24", change: "+5", icon: "📊" },
    { title: "Propostas Pendentes", value: "12", change: "+3", icon: "⏳" },
    { title: "Aprovações Esta Semana", value: "6", change: "+1", icon: "✅" },
  ];

  const recentActivities = [
    { id: 1, action: "Nova proposta recebida", user: "João Almeida", date: "1 hora atrás" },
    { id: 2, action: "Proposta em análise", user: "Ana Costa", date: "2 horas atrás" },
    { id: 3, action: "Avaliação finalizada", user: "Carlos Silva", date: "3 horas atrás" },
    { id: 4, action: "Nova solicitação", user: "Maria Fernandes", date: "5 horas atrás" },
  ];

  const pendingReviews = [
    { id: 1, title: "Prêmio de Música Popular 2025", applicant: "João Almeida", deadline: "15/03/2025", priority: "alta" },
    { id: 2, title: "Fomento ao Teatro Infantil", applicant: "Ana Costa", deadline: "20/03/2025", priority: "média" },
    { id: 3, title: "Bolsa de Artes Visuais 2025", applicant: "Carlos Silva", deadline: "30/04/2025", priority: "baixa" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Nova barra de navegação no topo */}
      <BarraNavegacaoAnalista />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Dashboard do Analista</h2>
            <p className="mt-1 text-sm text-gray-600">Acompanhe suas análises e gerencie propostas</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-sm text-green-600">{stat.change} esta semana</p>
                    </div>
                    <div className="text-3xl">{stat.icon}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Activities */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Atividades Recentes</CardTitle>
                  <CardDescription>Últimas interações com propostas</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                          <p className="text-sm text-gray-500">por {activity.user}</p>
                        </div>
                        <div className="text-sm text-gray-400">{activity.date}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Pending Reviews */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Análises Pendentes</CardTitle>
                  <CardDescription>Propostas que precisam de sua avaliação</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pendingReviews.map((review) => (
                      <div key={review.id} className="border-l-4 pl-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-sm font-medium text-gray-900">{review.title}</p>
                            <p className="text-xs text-gray-500">por {review.applicant}</p>
                            <p className="text-xs text-gray-400">Prazo: {review.deadline}</p>
                          </div>
                          <Badge className={
                            review.priority === "alta" ? "bg-red-100 text-red-800" :
                            review.priority === "média" ? "bg-yellow-100 text-yellow-800" :
                            "bg-green-100 text-green-800"
                          }>
                            {review.priority}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardAnalista;