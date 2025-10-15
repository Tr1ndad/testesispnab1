import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import BarraNavegacaoAdmin from "@/components/navigation/BarraNavegacaoAdmin";

const AdminConfiguracoes = () => {
  const [configuracoes, setConfiguracoes] = useState({
    sistema: {
      nome: "SISPNAB",
      versao: "2.0.0",
      emailSuporte: "suporte@sispnab.gov.br",
      telefoneSuporte: "(41) 3232-1000"
    },
    edital: {
      prazoMaximoDias: 90,
      valorMaximoProjeto: 100000,
      areasCulturais: ["Música", "Teatro", "Dança", "Artes Visuais", "Literatura", "Cinema"]
    },
    notificacoes: {
      email: true,
      sms: false,
      push: true
    }
  });

  const handleInputChange = (section: string, field: string, value: string | boolean) => {
    setConfiguracoes(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value
      }
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Nova barra de navegação no topo */}
      <BarraNavegacaoAdmin />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Configurações do Sistema</h2>
            <p className="mt-1 text-sm text-gray-600">Gerencie as configurações gerais do sistema</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Configurações do Sistema */}
            <Card>
              <CardHeader>
                <CardTitle>Configurações do Sistema</CardTitle>
                <CardDescription>Informações básicas e de contato do sistema</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="nome">Nome do Sistema</Label>
                  <Input
                    id="nome"
                    value={configuracoes.sistema.nome}
                    onChange={(e) => handleInputChange('sistema', 'nome', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="versao">Versão</Label>
                  <Input
                    id="versao"
                    value={configuracoes.sistema.versao}
                    onChange={(e) => handleInputChange('sistema', 'versao', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="emailSuporte">Email de Suporte</Label>
                  <Input
                    id="emailSuporte"
                    type="email"
                    value={configuracoes.sistema.emailSuporte}
                    onChange={(e) => handleInputChange('sistema', 'emailSuporte', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="telefoneSuporte">Telefone de Suporte</Label>
                  <Input
                    id="telefoneSuporte"
                    value={configuracoes.sistema.telefoneSuporte}
                    onChange={(e) => handleInputChange('sistema', 'telefoneSuporte', e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Configurações de Editais */}
            <Card>
              <CardHeader>
                <CardTitle>Configurações de Editais</CardTitle>
                <CardDescription>Regras e limites para editais e projetos</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="prazoMaximo">Prazo Máximo (dias)</Label>
                  <Input
                    id="prazoMaximo"
                    type="number"
                    value={configuracoes.edital.prazoMaximoDias}
                    onChange={(e) => handleInputChange('edital', 'prazoMaximoDias', parseInt(e.target.value))}
                  />
                </div>
                <div>
                  <Label htmlFor="valorMaximo">Valor Máximo por Projeto (R$)</Label>
                  <Input
                    id="valorMaximo"
                    type="number"
                    value={configuracoes.edital.valorMaximoProjeto}
                    onChange={(e) => handleInputChange('edital', 'valorMaximoProjeto', parseInt(e.target.value))}
                  />
                </div>
                <div>
                  <Label>Áreas Culturais</Label>
                  <div className="mt-2 space-y-2">
                    {configuracoes.edital.areasCulturais.map((area, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id={`area-${index}`}
                          checked={true}
                          onChange={() => {}}
                          className="rounded"
                        />
                        <Label htmlFor={`area-${index}`} className="text-sm">{area}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Configurações de Notificações */}
            <Card>
              <CardHeader>
                <CardTitle>Configurações de Notificações</CardTitle>
                <CardDescription>Canais de notificação disponíveis</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="notificacaoEmail"
                    checked={configuracoes.notificacoes.email}
                    onChange={(e) => handleInputChange('notificacoes', 'email', e.target.checked)}
                    className="rounded"
                  />
                  <Label htmlFor="notificacaoEmail" className="text-sm">Notificações por Email</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="notificacaoSms"
                    checked={configuracoes.notificacoes.sms}
                    onChange={(e) => handleInputChange('notificacoes', 'sms', e.target.checked)}
                    className="rounded"
                  />
                  <Label htmlFor="notificacaoSms" className="text-sm">Notificações por SMS</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="notificacaoPush"
                    checked={configuracoes.notificacoes.push}
                    onChange={(e) => handleInputChange('notificacoes', 'push', e.target.checked)}
                    className="rounded"
                  />
                  <Label htmlFor="notificacaoPush" className="text-sm">Notificações Push</Label>
                </div>
              </CardContent>
            </Card>

            {/* Ações */}
            <Card>
              <CardHeader>
                <CardTitle>Ações</CardTitle>
                <CardDescription>Operações de sistema</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Salvar Configurações
                </Button>
                <Button variant="outline" className="w-full">
                  Exportar Configurações
                </Button>
                <Button variant="outline" className="w-full">
                  Restaurar Padrão
                </Button>
                <Button variant="destructive" className="w-full">
                  Limpar Cache
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminConfiguracoes;