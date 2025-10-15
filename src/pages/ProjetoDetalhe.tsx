'use client';

import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, MapPin, DollarSign, User, FileText, Download, Eye, Edit, Share } from 'lucide-react';

const projetoData = {
  id: '1',
  titulo: 'Álbum "Sons de Pinhais"',
  proponente: 'João Santos',
  municipio: 'Pinhais',
  area_cultural: 'Música',
  status: 'aprovado',
  valor_aprovado: 35000,
  valor_solicitado: 35000,
  edital: '001/2025-PINHAIS',
  data_submissao: '2025-02-15',
  data_avaliacao: '2025-03-01',
  data_inicio: '2025-04-01',
  data_fim: '2025-09-30',
  descricao: 'Produção de um álbum com 10 faixas originais inspiradas na cultura local de Pinhais, com objetivo de registrar e difundir a música produzida na cidade.',
  justificativa: 'Necessidade de registrar e difundir a música produzida em Pinhais, valorizando os artistas locais e criando um registro histórico-cultural da cidade.',
  objetivos: [
    'Produzir e lançar um álbum profissional com músicas autorais',
    'Valorizar a cultura musical local',
    'Criar um produto cultural de qualidade',
    'Promover os artistas envolvidos',
    'Gerar conteúdo audiovisual para divulgação'
  ],
  metodologia: [
    'Gravação estúdio profissional',
    'Produção musical especializada',
    'Mixagem e masterização de alta qualidade',
    'Captação de imagens para videoclipes',
    'Divulgação nas plataformas digitais'
  ],
  cronograma: [
    { fase: 'Pré-produção', inicio: '01/04/2025', fim: '15/04/2025' },
    { fase: 'Gravação', inicio: '16/04/2025', fim: '30/06/2025' },
    { fase: 'Mixagem', inicio: '01/07/2025', fim: '15/07/2025' },
    { fase: 'Masterização', inicio: '16/07/2025', fim: '31/07/2025' },
    { fase: 'Lançamento', inicio: '01/09/2025', fim: '30/09/2025' }
  ],
  orcamento: [
    { item: 'Gravação estúdio', valor: 15000 },
    { item: 'Produção musical', valor: 8000 },
    { item: 'Mixagem e masterização', valor: 6000 },
    { item: 'Captação de imagens', valor: 4000 },
    { item: 'Divulgação e marketing', valor: 2000 }
  ],
  documentos: [
    { nome: 'Proposta Completa', tipo: 'PDF', tamanho: '2.5 MB' },
    { nome: 'Orçamento Detalhado', tipo: 'PDF', tamanho: '1.2 MB' },
    { nome: 'Currículo Artístico', tipo: 'PDF', tamanho: '856 KB' },
    { nome: 'Portfólio de Trabalhos', tipo: 'PDF', tamanho: '3.1 MB' }
  ],
  publico_alvo: 'Jovens e adultos interessados em música regional, fãs de música popular brasileira e público geral da cidade de Pinhais.',
  impacto_esperado: 'O projeto espera gerar um produto cultural de qualidade que valorize a música local, promova os artistas envolvidos e crie um registro histórico-cultural importante para Pinhais.'
};

const ProjetoDetalhePage = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('informacoes');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'aprovado': return 'bg-green-100 text-green-800';
      case 'em_analise': return 'bg-yellow-100 text-yellow-800';
      case 'concluido': return 'bg-purple-100 text-purple-800';
      case 'rascunho': return 'bg-gray-100 text-gray-800';
      case 'reprovado': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'aprovado': return 'APROVADO';
      case 'em_analise': return 'EM ANÁLISE';
      case 'concluido': return 'CONCLUÍDO';
      case 'rascunho': return 'RASCUNHO';
      case 'reprovado': return 'REPROVADO';
      default: return status.toUpperCase();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero */}
      <div className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <Badge className={getStatusColor(projetoData.status)}>
                {getStatusText(projetoData.status)}
              </Badge>
              <span className="text-green-100">{projetoData.municipio}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {projetoData.titulo}
            </h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              {projetoData.descricao}
            </p>
          </div>
        </div>
      </div>

      {/* Quick Info */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-4 text-center">
                <User className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-gray-900 line-clamp-1">
                  {projetoData.proponente}
                </div>
                <div className="text-sm text-gray-600">Proponente</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 text-center">
                <DollarSign className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">
                  R$ {projetoData.valor_aprovado.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Valor Aprovado</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 text-center">
                <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-gray-900">
                  {new Date(projetoData.data_fim).toLocaleDateString('pt-BR')}
                </div>
                <div className="text-sm text-gray-600">Data Final</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 text-center">
                <FileText className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-gray-900">{projetoData.area_cultural}</div>
                <div className="text-sm text-gray-600">Área Cultural</div>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button className="flex-1 bg-green-600 hover:bg-green-700">
              <Eye className="mr-2 h-4 w-4" />
              Ver Relatório
            </Button>
            <Button variant="outline" className="flex-1">
              <Download className="mr-2 h-4 w-4" />
              Baixar Documentos
            </Button>
            <Button variant="outline" asChild>
              <Link to="/projetos">Voltar para Projetos</Link>
            </Button>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="informacoes">Informações</TabsTrigger>
              <TabsTrigger value="detalhes">Detalhes</TabsTrigger>
              <TabsTrigger value="cronograma">Cronograma</TabsTrigger>
              <TabsTrigger value="orcamento">Orçamento</TabsTrigger>
              <TabsTrigger value="documentos">Documentos</TabsTrigger>
            </TabsList>

            <TabsContent value="informacoes" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Informações do Projeto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Dados Principais</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Edital:</span>
                          <span className="font-medium">{projetoData.edital}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Status:</span>
                          <span className="font-medium">{getStatusText(projetoData.status)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Data de Submissão:</span>
                          <span className="font-medium">{new Date(projetoData.data_submissao).toLocaleDateString('pt-BR')}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Data de Avaliação:</span>
                          <span className="font-medium">{new Date(projetoData.data_avaliacao).toLocaleDateString('pt-BR')}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Período de Execução:</span>
                          <span className="font-medium">
                            {new Date(projetoData.data_inicio).toLocaleDateString('pt-BR')} - {new Date(projetoData.data_fim).toLocaleDateString('pt-BR')}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Valores</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Valor Solicitado:</span>
                          <span className="font-medium">R$ {projetoData.valor_solicitado.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Valor Aprovado:</span>
                          <span className="font-medium text-green-600">R$ {projetoData.valor_aprovado.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Diferença:</span>
                          <span className="font-medium text-blue-600">R$ 0,00</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Descrição</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {projetoData.descricao}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Justificativa</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {projetoData.justificativa}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Público Alvo</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {projetoData.publico_alvo}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Impacto Esperado</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {projetoData.impacto_esperado}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="detalhes" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Objetivos do Projeto</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {projetoData.objetivos.map((objetivo, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span className="text-gray-600">{objetivo}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Metodologia</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {projetoData.metodologia.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="cronograma" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Cronograma de Execução</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {projetoData.cronograma.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                            <span className="text-sm font-bold text-green-600">{index + 1}</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{item.fase}</h4>
                            <p className="text-sm text-gray-600">
                              {new Date(item.inicio).toLocaleDateString('pt-BR')} - {new Date(item.fim).toLocaleDateString('pt-BR')}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-500">
                            {Math.ceil((new Date(item.fim).getTime() - new Date(item.inicio).getTime()) / (1000 * 60 * 60 * 24))} dias
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="orcamento" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Orçamento Detalhado</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {projetoData.orcamento.map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                        <span className="font-medium text-gray-900">{item.item}</span>
                        <span className="font-semibold text-green-600">R$ {item.valor.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-900">Total:</span>
                      <span className="font-bold text-xl text-green-600">R$ {projetoData.valor_aprovado.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="documentos" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Documentos do Projeto</CardTitle>
                  <CardDescription>
                    Documentos relacionados ao projeto e sua execução
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projetoData.documentos.map((documento, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <FileText className="h-5 w-5 text-green-600" />
                          <div>
                            <div className="font-medium text-gray-900">{documento.nome}</div>
                            <div className="text-sm text-gray-500">{documento.tipo} • {documento.tamanho}</div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Documentos Adicionais:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <Button variant="ghost" className="justify-start">
                        📄 Relatório de Execução
                      </Button>
                      <Button variant="ghost" className="justify-start">
                        📊 Comprovantes de Gastos
                      </Button>
                      <Button variant="ghost" className="justify-start">
                        📹 Fotos e Vídeos do Projeto
                      </Button>
                      <Button variant="ghost" className="justify-start">
                        📋 Atas de Reuniões
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProjetoDetalhePage;