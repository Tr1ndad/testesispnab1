import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Save, Plus } from "lucide-react";

const NovoProjeto = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    titulo: '',
    descricao: '',
    area_cultural: '',
    valor_solicitado: '',
    edital_selecionado: '',
    justificativa: '',
    objetivos: '',
    metodologia: '',
    cronograma: ''
  });

  const editaisDisponiveis = [
    { id: '1', titulo: 'Prêmio de Música Popular 2025', municipio: 'Pinhais', valor_total: 150000 },
    { id: '2', titulo: 'Fomento ao Teatro Infantil', municipio: 'Colombo', valor_total: 120000 },
    { id: '3', titulo: 'Bolsa de Artes Visuais 2024', municipio: 'Piraquara', valor_total: 80000 }
  ];

  const areasCulturais = [
    'Música',
    'Teatro',
    'Dança',
    'Artes Visuais',
    'Literatura',
    'Cinema',
    'Artes Cênicas',
    'Artes Integradas',
    'Patrimônio Cultural',
    'Outros'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // Aqui seria a lógica de envio do projeto
    console.log('Projeto enviado:', formData);
    navigate('/projetos');
  };

  const steps = [
    { id: 1, title: 'Informações Básicas' },
    { id: 2, title: 'Detalhes do Projeto' },
    { id: 3, title: 'Orçamento' },
    { id: 4, title: 'Finalizar' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button onClick={() => navigate('/dashboard/proponente')} className="mr-4">
                <ArrowLeft className="h-5 w-5 text-gray-600" />
              </button>
              <h1 className="text-xl font-semibold text-gray-900">SISPNAB</h1>
              <nav className="ml-10 flex space-x-8">
                <button 
                  onClick={() => navigate('/dashboard/proponente')}
                  className="text-gray-500 hover:text-gray-700 px-1 pt-1 text-sm font-medium"
                >
                  Dashboard
                </button>
                <button 
                  onClick={() => navigate('/projetos')}
                  className="text-gray-500 hover:text-gray-700 px-1 pt-1 text-sm font-medium"
                >
                  Meus Projetos
                </button>
                <button 
                  onClick={() => navigate('/novo-projeto')}
                  className="text-blue-700 border-b-2 border-blue-700 px-1 pt-1 text-sm font-medium"
                >
                  Novo Projeto
                </button>
                <button 
                  onClick={() => navigate('/editais')}
                  className="text-gray-500 hover:text-gray-700 px-1 pt-1 text-sm font-medium"
                >
                  Editais
                </button>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
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
            <h2 className="text-2xl font-bold text-gray-900">Novo Projeto Cultural</h2>
            <p className="mt-1 text-sm text-gray-600">Preencha as informações para criar sua proposta</p>
          </div>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {steps.map((step) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      activeStep >= step.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {step.id}
                  </div>
                  <span className={`ml-2 text-sm ${
                    activeStep >= step.id ? 'text-blue-600' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </span>
                  {step.id < steps.length && (
                    <div className={`w-16 h-1 mx-4 ${
                      activeStep > step.id ? 'bg-blue-600' : 'bg-gray-200'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <Card>
            <CardHeader>
              <CardTitle>
                {activeStep === 1 && 'Informações Básicas'}
                {activeStep === 2 && 'Detalhes do Projeto'}
                {activeStep === 3 && 'Orçamento e Cronograma'}
                {activeStep === 4 && 'Revisão e Envio'}
              </CardTitle>
              <CardDescription>
                {activeStep === 1 && 'Dados principais do seu projeto cultural'}
                {activeStep === 2 && 'Descrição completa e objetivos'}
                {activeStep === 3 && 'Valores e plano de execução'}
                {activeStep === 4 && 'Revise e envie sua proposta'}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {activeStep === 1 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="titulo">Título do Projeto *</Label>
                    <Input
                      id="titulo"
                      value={formData.titulo}
                      onChange={(e) => handleInputChange('titulo', e.target.value)}
                      placeholder="Ex: Festival de Música Popular"
                    />
                  </div>

                  <div>
                    <Label htmlFor="area_cultural">Área Cultural *</Label>
                    <Select onValueChange={(value) => handleInputChange('area_cultural', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a área cultural" />
                      </SelectTrigger>
                      <SelectContent>
                        {areasCulturais.map((area) => (
                          <SelectItem key={area} value={area}>
                            {area}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="edital_selecionado">Edital de Destino *</Label>
                    <Select onValueChange={(value) => handleInputChange('edital_selecionado', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um edital" />
                      </SelectTrigger>
                      <SelectContent>
                        {editaisDisponiveis.map((edital) => (
                          <SelectItem key={edital.id} value={edital.id}>
                            {edital.titulo} - {edital.municipio} (R$ {edital.valor_total.toLocaleString()})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="descricao">Breve Descrição *</Label>
                    <Textarea
                      id="descricao"
                      value={formData.descricao}
                      onChange={(e) => handleInputChange('descricao', e.target.value)}
                      rows={3}
                      placeholder="Descreva seu projeto em poucas palavras"
                    />
                  </div>
                </div>
              )}

              {activeStep === 2 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="justificativa">Justificativa *</Label>
                    <Textarea
                      id="justificativa"
                      value={formData.justificativa}
                      onChange={(e) => handleInputChange('justificativa', e.target.value)}
                      rows={4}
                      placeholder="Explique a importância e necessidade do seu projeto"
                    />
                  </div>

                  <div>
                    <Label htmlFor="objetivos">Objetivos *</Label>
                    <Textarea
                      id="objetivos"
                      value={formData.objetivos}
                      onChange={(e) => handleInputChange('objetivos', e.target.value)}
                      rows={4}
                      placeholder="Liste os objetivos principais do seu projeto"
                    />
                  </div>

                  <div>
                    <Label htmlFor="metodologia">Metodologia *</Label>
                    <Textarea
                      id="metodologia"
                      value={formData.metodologia}
                      onChange={(e) => handleInputChange('metodologia', e.target.value)}
                      rows={4}
                      placeholder="Descreva como o projeto será executado"
                    />
                  </div>
                </div>
              )}

              {activeStep === 3 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="valor_solicitado">Valor Solicitado (R$) *</Label>
                    <Input
                      id="valor_solicitado"
                      type="number"
                      value={formData.valor_solicitado}
                      onChange={(e) => handleInputChange('valor_solicitado', e.target.value)}
                      placeholder="10000"
                    />
                  </div>

                  <div>
                    <Label htmlFor="cronograma">Cronograma *</Label>
                    <Textarea
                      id="cronograma"
                      value={formData.cronograma}
                      onChange={(e) => handleInputChange('cronograma', e.target.value)}
                      rows={4}
                      placeholder="Descreva o cronograma de execução do projeto"
                    />
                  </div>
                </div>
              )}

              {activeStep === 4 && (
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">Resumo do Projeto</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Título:</strong> {formData.titulo || 'Não informado'}</p>
                      <p><strong>Área Cultural:</strong> {formData.area_cultural || 'Não informada'}</p>
                      <p><strong>Valor Solicitado:</strong> R$ {formData.valor_solicitado ? Number(formData.valor_solicitado).toLocaleString() : '0,00'}</p>
                      <p><strong>Edital:</strong> {formData.edital_selecionado || 'Não selecionado'}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="termos"
                      className="mt-1 mr-2"
                    />
                    <label htmlFor="termos" className="text-sm text-gray-600">
                      Declaro que as informações fornecidas estão corretas e que aceito os termos de uso do sistema.
                    </label>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                <div>
                  {activeStep > 1 && (
                    <Button
                      variant="outline"
                      onClick={() => setActiveStep(activeStep - 1)}
                    >
                      Anterior
                    </Button>
                  )}
                </div>
                <div className="flex space-x-2">
                  {activeStep < steps.length ? (
                    <Button onClick={() => setActiveStep(activeStep + 1)}>
                      Próximo
                    </Button>
                  ) : (
                    <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700">
                      <Save className="mr-2 h-4 w-4" />
                      Enviar Projeto
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    onClick={() => navigate('/dashboard/proponente')}
                  >
                    Cancelar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default NovoProjeto;