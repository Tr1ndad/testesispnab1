'use client';

import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Clock, MapPin, DollarSign, FileText, Users, Download, Eye } from 'lucide-react';

const editalData = {
  id: '1',
  titulo: 'Prêmio de Música Popular 2025',
  municipio: 'Pinhais',
  descricao: 'Fomento à produção musical na cidade de Pinhais, visando valorizar e apoiar artistas e produtores musicais locais na criação, gravação e divulgação de obras musicais.',
  numero_edital: '001/2025-PINHAIS',
  modalidade: 'Prêmio',
  area_cultural: 'Música',
  valor_total: 150000,
  valor_disponivel: 150000,
  status: 'aberto',
  data_abertura: '2025-01-15',
  data_encerramento: '2025-03-15',
  vagas: 15,
  documentos_necessarios: [
    'RG e CPF',
    'Comprovante de Residência em Pinhais',
    'Currículo Artístico',
    'Proposta de Projeto',
    'Orçamento Detalhado',
    'Portfólio de Trabalhos (opcional)'
  ],
  criterios_avaliacao: [
    {
      criterio: 'Qualidade Artística',
      peso: 40,
      descricao: 'Avaliação da qualidade técnica e artística da proposta'
    },
    {
      criterio: 'Viabilidade Executiva',
      peso: 25,
      descricao: 'Análise da capacidade de execução do projeto proposto'
    },
    {
      criterio: 'Impacto Cultural',
      peso: 20,
      descricao: 'Potencial de impacto na cultura local e regional'
    },
    {
      criterio: 'Orçamento',
      peso: 15,
      descricao: 'Razoabilidade e adequação do orçamento apresentado'
    }
  ],
  informacoes_adicionais: [
    'Os projetos devem ser executidos exclusivamente no município de Pinhais',
    'Serão contemplados artistas e grupos musicais com residência comprovada em Pinhais',
    'O valor máximo por projeto é de R$ 15.000,00',
    'Os projetos devem ser finalizados até 31 de dezembro de 2025'
  ]
};

const EditalDetalhePage = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('informacoes');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'aberto': return 'bg-green-100 text-green-800';
      case 'encerrado': return 'bg-gray-100 text-gray-800';
      case 'em_analise': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'aberto': return 'ABERTO';
      case 'encerrado': return 'ENCERRADO';
      case 'em_analise': return 'EM ANÁLISE';
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
              <Badge className={getStatusColor(editalData.status)}>
                {getStatusText(editalData.status)}
              </Badge>
              <span className="text-green-100">{editalData.municipio}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {editalData.titulo}
            </h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              {editalData.descricao}
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
                <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">
                  R$ {editalData.valor_total.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Valor Total</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 text-center">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{editalData.vagas}</div>
                <div className="text-sm text-gray-600">Vagas Disponíveis</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 text-center">
                <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-gray-900">
                  {new Date(editalData.data_encerramento).toLocaleDateString('pt-BR')}
                </div>
                <div className="text-sm text-gray-600">Data Encerramento</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 text-center">
                <FileText className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-gray-900">{editalData.modalidade}</div>
                <div className="text-sm text-gray-600">Modalidade</div>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button className="flex-1 bg-green-600 hover:bg-green-700">
              <Eye className="mr-2 h-4 w-4" />
              Submeter Projeto
            </Button>
            <Button variant="outline" className="flex-1">
              <Download className="mr-2 h-4 w-4" />
              Baixar Edital Completo
            </Button>
            <Button variant="outline" asChild>
              <Link to="/editais">Voltar para Editais</Link>
            </Button>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="informacoes">Informações</TabsTrigger>
              <TabsTrigger value="documentos">Documentos</TabsTrigger>
              <TabsTrigger value="criterios">Critérios</TabsTrigger>
              <TabsTrigger value="contato">Contato</TabsTrigger>
            </TabsList>

            <TabsContent value="informacoes" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Detalhes do Edital</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Informações Gerais</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Número do Edital:</span>
                          <span className="font-medium">{editalData.numero_edital}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Área Cultural:</span>
                          <span className="font-medium">{editalData.area_cultural}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Município:</span>
                          <span className="font-medium">{editalData.municipio}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Data de Abertura:</span>
                          <span className="font-medium">{new Date(editalData.data_abertura).toLocaleDateString('pt-BR')}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Data de Encerramento:</span>
                          <span className="font-medium text-red-600">{new Date(editalData.data_encerramento).toLocaleDateString('pt-BR')}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Valores</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Valor Total:</span>
                          <span className="font-medium text-green-600">R$ {editalData.valor_total.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Valor Disponível:</span>
                          <span className="font-medium text-blue-600">R$ {editalData.valor_disponivel.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Valor Máximo por Projeto:</span>
                          <span className="font-medium">R$ 15.000,00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Número de Vagas:</span>
                          <span className="font-medium">{editalData.vagas}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Descrição</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {editalData.descricao}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Informações Adicionais</h3>
                    <ul className="space-y-2">
                      {editalData.informacoes_adicionais.map((info, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-green-600 mt-1">•</span>
                          <span className="text-gray-600">{info}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="documentos" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Documentos Necessários</CardTitle>
                  <CardDescription>
                    Todos os documentos abaixo são obrigatórios para a inscrição
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {editalData.documentos_necessarios.map((documento, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <FileText className="h-5 w-5 text-green-600" />
                        <span className="text-gray-700">{documento}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Importante:</h4>
                    <p className="text-blue-800 text-sm">
                      Todos os documentos devem estar em formato PDF, com tamanho máximo de 10MB cada. 
                      Documentos com formato ou tamanho inadequados serão desconsiderados.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="criterios" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Critérios de Avaliação</CardTitle>
                  <CardDescription>
                    Os projetos serão avaliados com base nos seguintes critérios
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {editalData.criterios_avaliacao.map((criterio, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900">{criterio.criterio}</h3>
                          <Badge className="bg-blue-100 text-blue-800">
                            {criterio.peso}%
                          </Badge>
                        </div>
                        <p className="text-gray-600 text-sm">{criterio.descricao}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-yellow-900 mb-2">Nota:</h4>
                    <p className="text-yellow-800 text-sm">
                      A soma dos pesos dos critérios totaliza 100%. Projetos que não atingirem a pontuação mínima de 60 pontos não serão contemplados.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="contato" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contato para Dúvidas</CardTitle>
                  <CardDescription>
                    Em caso de dúvidas sobre este edital, entre em contato com nossa equipe
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Coordenação do Edital</h3>
                      <div className="space-y-3">
                        <div>
                          <span className="text-gray-600">Responsável:</span>
                          <p className="font-medium">Fernanda Santos</p>
                        </div>
                        <div>
                          <span className="text-gray-600">Email:</span>
                          <p className="font-medium text-blue-600">fernanda.santos@pinhais.pr.gov.br</p>
                        </div>
                        <div>
                          <span className="text-gray-600">Telefone:</span>
                          <p className="font-medium">(41) 3232-1000 ramal 1234</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Horário de Atendimento</h3>
                      <div className="space-y-3">
                        <div>
                          <span className="text-gray-600">Segunda a Sexta:</span>
                          <p className="font-medium">9h - 12h e 14h - 18h</p>
                        </div>
                        <div>
                          <span className="text-gray-600">Local:</span>
                          <p className="font-medium">Secretaria de Cultura - Pinhais</p>
                        </div>
                        <div>
                          <span className="text-gray-600">Reuniões:</span>
                          <p className="font-medium">Agendamento prévio necessário</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Canais de Atendimento:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Button variant="outline" className="justify-start">
                        📧 Email
                      </Button>
                      <Button variant="outline" className="justify-start">
                        📞 Telefone
                      </Button>
                      <Button variant="outline" className="justify-start">
                        💬 Chat Online
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

export default EditalDetalhePage;