import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import BarraNavegacaoAdmin from "@/components/navigation/BarraNavegacaoAdmin";

const DashboardAdmin = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    { title: "Total de Editais", value: "45", change: "+5", icon: "📋" },
    { title: "Projetos Ativos", value: "128", change: "+12", icon: "🚀" },
    { title: "Usuários Cadastrados", value: "1,234", change: "+45", icon: "👥" },
    { title: "Municípios Ativos", value: "18", change: "+2", icon: "🏛️" },
  ];

  const recentActivities = [
    { id: 1, action: "Novo edital criado", user: "Maria Fernandes", date: "1 hora atrás" },
    { id: 2, action: "Projeto aprovado", user: "João Almeida", date: "2 horas atrás" },
    { id: 3, action: "Novo usuário cadastrado", user: "Ana Costa", date: "3 horas atrás" },
    { id: 4, action: "Edital atualizado", user: "Carlos Silva", date: "5 horas atrás" },
  ];

  const systemAlerts = [
    { id: 1, type: "warning", message: "3 editais encerrando esta semana", date: "2 horas atrás" },
    { id: 2, type: "info", message: "Backup do sistema realizado com sucesso", date: "1 dia atrás" },
    { id: 3, type: "error", message: "Falha na notificação de 2 usuários", date: "2 dias atrás" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Nova barra de navegação no topo */}
      <BarraNavegacaoAdmin />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Dashboard do Administrador</h2>
            <p className="mt-1 text-sm text-gray-600">Visão geral completa do sistema e controle total</p>
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
                  <CardDescription>Últimas ações no sistema</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
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

            {/* System Alerts */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Alertas do Sistema</CardTitle>
                  <CardDescription>Notificações importantes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {systemAlerts.map((alert) => (
                      <div key={alert.id} className="border-l-4 pl-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                            <p className="text-xs text-gray-500">{alert.date}</p>
                          </div>
                          <Badge className={
                            alert.type === "warning" ? "bg-yellow-100 text-yellow-800" :
                            alert.type === "error" ? "bg-red-100 text-red-800" :
                            "bg-blue-100 text-blue-800"
                          }>
                            {alert.type}
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

export default DashboardAdmin;