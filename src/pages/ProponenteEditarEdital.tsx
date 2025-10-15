import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Save, Plus } from "lucide-react";

const ProponenteEditarEdital = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [edital, setEdital] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Dados mockados para demonstração
  const editaisMock = [
    {
      id: "1",
      titulo: "Prêmio de Música Popular 2025",
      municipio: "Pinhais",
      modalidade: "Prêmio",
      area_cultural: "Música",
      descricao: "Fomento à produção musical na cidade de Pinhais",
      justificativa: "Necessidade de incentivar a criação musical local",
      objetivos: ["Premiar artistas locais", "Estimular a criação de novas obras", "Promover a música popular"],
      valor_total: 150000,
      valor_disponivel: 150000,
      data_abertura: "01/02/2025",
      data_encerramento: "15/03/2025",
      vagas: 15,
      documentos_necessarios: ["Proposta Completa", "Orçamento Detalhado", "Currículo Artístico"],
      criterios_avaliacao: [
        { criterio: "Qualidade Artística", peso: 40, descricao: "Avaliação da qualidade técnica e artística da proposta" },
        { criterio: "Viabilidade", peso: 30, descricao: "Análise da execução e viabilidade do projeto" },
        { criterio: "Impacto Cultural", peso: 30, descricao: "Potencial de impacto na cultura local" }
      ],
      informacoes_adicionais: ["O edital é destinado a artistas residentes em Pinhais", "Serão selecionados até 15 projetos", "O valor máximo por projeto é de R$ 10.000"]
    },
    {
      id: "2",
      titulo: "Fomento ao Teatro Infantil",
      municipio: "Colombo",
      modalidade: "Fomento",
      area_cultural: "Teatro",
      descricao: "Apoio a espetáculos teatrais infantis",
      justificativa: "Estimular a cultura teatral para o público infantil",
      objetivos: ["Criar espetáculos infantis", "Formar plateia jovem", "Incentivar grupos teatrais"],
      valor_total: 120000,
      valor_disponivel: 120000,
      data_abertura: "01/02/2025",
      data_encerramento: "20/03/2025",
      vagas: 10,
      documentos_necessarios: ["Roteiro Completo", "Plano de Divulgação", "Currículo da Companhia"],
      criterios_avaliacao: [
        { criterio: "Qualidade do Roteiro", peso: 35, descricao: "Originalidade e qualidade do texto teatral" },
        { criterio: "Viabilidade Técnica", peso: 35, descricao: "Capacidade de execução do espetáculo" },
        { criterio: "Público Alvo", peso: 30, descricao: "Adequação ao público infantil e potencial de público" }
      ],
      informacoes_adicionais: ["O edital é voltado para espetáculos infantis", "Duração mínima de 45 minutos", "Prioridade para grupos locais"]
    }
  ];

  useEffect(() => {
    // Simular carregamento dos dados do edital
    const carregarEdital = () => {
      const editalEncontrado = editaisMock.find(e => e.id === id);
      if (editalEncontrado) {
        setEdital(editalEncontrado);
      }
      setIsLoading(false);
    };

    carregarEdital();
  }, [id]);

  const handleInputChange = (field: string, value: string) => {
    setEdital(prev => ({ ...prev, [field]: value }));
  };

  const handleSalvar = () => {
    console.log('Salvando edital:', edital);
    // Aqui seria a lógica de envio das alterações
    alert('Edital atualizado com sucesso!');
    navigate('/proponente/editais');
  };

  const handleVoltar = () => {
    navigate('/proponente/editais');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando dados do edital...</p>
        </div>
      </div>
    );
  }

  if (!edital) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Edital não encontrado</h2>
          <p className="text-gray-600 mb-4">O edital que você está tentando editar não existe.</p>
          <Button onClick={handleVoltar}>Voltar para Editais</Button>
        </div>
      </div>
    );
  }

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
      <main className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-4">
              <Button onClick={handleVoltar} variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </Button>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Editar Edital</h2>
                <p className="text-sm text-gray-600">Modifique as informações do edital</p>
              </div>
            </div>
          </div>

          {/* Formulário de Edição */}
          <div className="space-y-6">
            {/* Informações Básicas */}
            <Card>
              <CardHeader>
                <CardTitle>Informações Básicas</CardTitle>
                <CardDescription>Dados principais do edital</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="titulo">Título *</Label>
                    <Input
                      id="titulo"
                      value={edital.titulo}
                      onChange={(e) => handleInputChange('titulo', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="municipio">Município *</Label>
                    <Input
                      id="municipio"
                      value={edital.municipio}
                      onChange={(e) => handleInputChange('municipio', e.target.value)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="modalidade">Modalidade *</Label>
                    <Select value={edital.modalidade} onValueChange={(value) => handleInputChange('modalidade', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Prêmio">Prêmio</SelectItem>
                        <SelectItem value="Fomento">Fomento</SelectItem>
                        <SelectItem value="Bolsa">Bolsa</SelectItem>
                        <SelectItem value="Chamada">Chamada</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="area_cultural">Área Cultural *</Label>
                    <Select value={edital.area_cultural} onValueChange={(value) => handleInputChange('area_cultural', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Música">Música</SelectItem>
                        <SelectItem value="Teatro">Teatro</SelectItem>
                        <SelectItem value="Dança">Dança</SelectItem>
                        <SelectItem value="Artes Visuais">Artes Visuais</SelectItem>
                        <SelectItem value="Literatura">Literatura</SelectItem>
                        <SelectItem value="Cinema">Cinema</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="descricao">Descrição *</Label>
                  <Textarea
                    id="descricao"
                    value={edital.descricao}
                    onChange={(e) => handleInputChange('descricao', e.target.value)}
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Detalhes do Edital */}
            <Card>
              <CardHeader>
                <CardTitle>Detalhes do Edital</CardTitle>
                <CardDescription>Informações financeiras e de execução</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="valor_total">Valor Total (R$) *</Label>
                    <Input
                      id="valor_total"
                      type="number"
                      value={edital.valor_total}
                      onChange={(e) => handleInputChange('valor_total', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="vagas">Número de Vagas *</Label>
                    <Input
                      id="vagas"
                      type="number"
                      value={edital.vagas}
                      onChange={(e) => handleInputChange('vagas', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="data_encerramento">Data de Encerramento *</Label>
                    <Input
                      id="data_encerramento"
                      value={edital.data_encerramento}
                      onChange={(e) => handleInputChange('data_encerramento', e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="justificativa">Justificativa *</Label>
                  <Textarea
                    id="justificativa"
                    value={edital.justificativa}
                    onChange={(e) => handleInputChange('justificativa', e.target.value)}
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Objetivos */}
            <Card>
              <CardHeader>
                <CardTitle>Objetivos</CardTitle>
                <CardDescription>Objetivos principais do edital</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {edital.objetivos.map((objetivo: string, index: number) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="text-gray-600">•</span>
                      <Input
                        value={objetivo}
                        onChange={(e) => {
                          const novosObjetivos = [...edital.objetivos];
                          novosObjetivos[index] = e.target.value;
                          handleInputChange('objetivos', novosObjetivos);
                        }}
                      />
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const novosObjetivos = [...edital.objetivos, ''];
                      handleInputChange('objetivos', novosObjetivos);
                    }}
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Adicionar Objetivo
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Botões de Ação */}
            <div className="flex justify-end space-x-4">
              <Button variant="outline" onClick={handleVoltar}>
                Cancelar
              </Button>
              <Button onClick={handleSalvar}>
                <Save className="mr-2 h-4 w-4" />
                Salvar Alterações
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProponenteEditarEdital;