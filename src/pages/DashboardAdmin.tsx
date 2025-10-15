import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
      {/* Header com barra de navegação do admin */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">SISPNAB</h1>
              <nav className="ml-10 flex space-x-8">
                <button 
                  className="text-blue-700 border-b-2 border-blue-700 px-1 pt-1 text-sm font-medium"
                >
                  Visão Geral
                </button>
                <button 
                  className="text-gray-500 hover:text-gray-700 px-1 pt-1 text-sm font-medium"
                >
                  Editais
                </button>
                <button 
                  className="text-gray-500 hover:text-gray-700 px-1 pt-1 text-sm font-medium"
                >
                  Projetos
                </button>
                <button 
                  className="text-gray-500 hover:text-gray-700 px-1 pt-1 text-sm font-medium"
                >
                  Usuários
                </button>
                <button 
                  className="text-gray-500 hover:text-gray-700 px-1 pt-1 text-sm font-medium"
                >
                  Relatórios
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
                  <p className="text-sm font-medium text-gray-900">Administrador</p>
                  <p className="text-xs text-gray-500">Admin</p>
                </div>
                <div className="h-8 w-8 rounded-full bg-purple-400 flex items-center justify-center text-white text-sm font-medium">
                  AD
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
            <h2 className="text-2xl font-bold text-gray-900">Dashboard do Administrador</h2>
            <p className="mt-1 text-sm text-gray-600">Visão geral completa do sistema e controle total</p>
          </div>

          {/* Tabs */}
          <div className="mb-6 border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab("overview")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "overview"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Visão Geral
              </button>
              <button
                onClick={() => setActiveTab("editais")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "editais"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Editais
              </button>
              <button
                onClick={() => setActiveTab("projetos")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "projetos"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Projetos
              </button>
              <button
                onClick={() => setActiveTab("usuarios")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "usuarios"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Usuários
              </button>
            </nav>
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
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
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