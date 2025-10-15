import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, MapPin, DollarSign, Users, Clock } from "lucide-react";

const ProponenteEditalDetalhes = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [edital, setEdital] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isInscrito, setIsInscrito] = useState(false);

  // Dados mockados para demonstração
  const editaisMock = [
    {
      id: "1",
      titulo: "Prêmio de Música Popular 2025",
      municipio: "Pinhais",
      modalidade: "Prêmio",
      area_cultural: "Música",
      descricao: "Fomento à produção musical na cidade de Pinhais. Este edital tem como objetivo premiar e incentivar a criação de novas obras musicais por artistas locais, promovendo a cultura musical da cidade.",
      justificativa: "Necessidade de incentivar a criação musical local e valorizar os artistas de Pinhais. A música é uma expressão cultural fundamental que merece apoio e reconhecimento.",
      objetivos: [
        "Premiar artistas locais com talento excepcional",
        "Estimular a criação de novas obras musicais",
        "Promover a música popular de Pinhais",
        "Criar oportunidades para músicos da cidade",
        "Fomentar a cultura musical local"
      ],
      valor_total: 150000,
      valor_disponivel: 150000,
      data_abertura: "01/02/2025",
      data_encerramento: "15/03/2025",
      vagas: 15,
      propostas: 8,
      documentos_necessarios: [
        "Proposta Completa",
        "Orçamento Detalhado",
        "Currículo Artístico",
        "Portfólio de Trabalhos",
        "Comprovante de Residência em Pinhais"
      ],
      criterios_avaliacao: [
        { criterio: "Qualidade Artística", peso: 40, descricao: "Avaliação da qualidade técnica e artística da proposta" },
        { criterio: "Viabilidade", peso: 30, descricao: "Análise da execução e viabilidade do projeto" },
        { criterio: "Impacto Cultural", peso: 30, descricao: "Potencial de impacto na cultura local" }
      ],
      informacoes_adicionais: [
        "O edital é destinado a artistas residentes em Pinhais",
        "Serão selecionados até 15 projetos",
        "O valor máximo por projeto é de R$ 10.000",
        "Os projetos devem ser executados exclusivamente em Pinhais",
        "Prazo máximo de execução: 12 meses"
      ]
    },
    {
      id: "2",
      titulo: "Fomento ao Teatro Infantil",
      municipio: "Colombo",
      modalidade: "Fomento",
      area_cultural: "Teatro",
      descricao: "Apoio a espetáculos teatrais infantis. Este edital busca incentivar a criação de espetáculos de teatro para crianças, promovendo a cultura teatral e formando plateia jovem.",
      justificativa: "Estimular a cultura teatral para o público infantil, contribuindo para a formação cultural das crianças e incentivando a criação de conteúdo de qualidade.",
      objetivos: [
        "Criar espetáculos infantis de qualidade",
        "Formar plateia jovem",
        "Incentivar grupos teatrais locais",
        "Promover o teatro como ferramenta educativa",
        "Difundir a cultura teatral infantil"
      ],
      valor_total: 120000,
      valor_disponivel: 120000,
      data_abertura: "01/02/2025",
      data_encerramento: "20/03/2025",
      vagas: 10,
      propostas: 6,
      documentos_necessarios: [
        "Roteiro Completo",
        "Plano de Divulgação",
        "Currículo da Companhia",
        "Orçamento Detalhado",
        "Fotos de Espetáculos Anteriores"
      ],
      criterios_avaliacao: [
        { criterio: "Qualidade do Roteiro", peso: 35, descricao: "Originalidade e qualidade do texto teatral" },
        { criterio: "Viabilidade Técnica", peso: 35, descricao: "Capacidade de execução do espetáculo" },
        { criterio: "Público Alvo", peso: 30, descricao: "Adequação ao público infantil e potencial de público" }
      ],
      informacoes_adicionais: [
        "O edital é voltado para espetáculos infantis",
        "Duração mínima de 45 minutos",
        "Prioridade para grupos locais",
        "Os espetáculos devem ser apresentados em escolas e teatros de Colombo",
        "Prazo de execução: 6 meses"
      ]
    }
  ];

  useEffect(() => {
    // Simular carregamento dos dados do edital
    const carregarEdital = () => {
      const editalEncontrado = editaisMock.find(e => e.id === id);
      if (editalEncontrado) {
        setEdital(editalEncontrado);
        // Simular verificação de inscrição
        setIsInscrito(false); // Em um app real, verificaria se o proponente já está inscrito
      }
      setIsLoading(false);
    };

    carregarEdital();
  }, [id]);

  const handleInscrever = () => {
    console.log('Inscrição no edital:', edital.id);
    // Aqui seria a lógica de inscrição
    setIsInscrito(true);
    alert('Inscrição realizada com sucesso!');
  };

  const handleVoltar = () => {
    navigate('/proponente/editais');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "aberto": return "bg-green-100 text-green-800";
      case "encerrado": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "aberto": return "ABERTO";
      case "encerrado": return "ENCERRADO";
      default: return status.toUpperCase();
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando detalhes do edital...</p>
        </div>
      </div>
    );
  }

  if (!edital) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Edital não encontrado</h2>
          <p className="text-gray-600 mb-4">O edital que você está tentando acessar não existe.</p>
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
                <h2 className="text-2xl font-bold text-gray-900">{edital.titulo}</h2>
                <p className="text-sm text-gray-600">Detalhes do edital para inscrição</p>
              </div>
            </div>
          </div>

          {/* Status e Informações Básicas */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-4 text-center">
                <Badge className={getStatusColor("aberto")}>
                  {getStatusText("aberto")}
                </Badge>
                <p className="text-sm text-gray-600 mt-2">Status</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <MapPin className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <p className="font-medium">{edital.municipio}</p>
                <p className="text-sm text-gray-600">Município</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <DollarSign className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <p className="font-medium">R$ {edital.valor_total.toLocaleString()}</p>
                <p className="text-sm text-gray-600">Valor Total</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Users className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                <p className="font-medium">{edital.vagas} vagas</p>
                <p className="text-sm text-gray-600">Vagas Disponíveis</p>
              </CardContent>
            </Card>
          </div>

          {/* Botão de Inscrição */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Inscrição no Edital</h3>
                <p className="text-sm text-gray-600">
                  {isInscrito 
                    ? "Você já está inscrito neste edital" 
                    : "Clique no botão abaixo para se inscrever"
                  }
                </p>
              </div>
              <div>
                {isInscrito ? (
                  <Badge className="bg-green-100 text-green-800">Inscrito</Badge>
                ) : (
                  <Button 
                    onClick={handleInscrever}
                    className="bg-green-600 hover:bg-green-700"
                    disabled={edital.data_encerramento < new Date().toISOString().split('T')[0]}
                  >
                    Se Inscrever
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Detalhes do Edital */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Descrição</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{edital.descricao}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Justificativa</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{edital.justificativa}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Objetivos</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {edital.objetivos.map((objetivo: string, index: number) => (
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
                <CardTitle>Informações Importantes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <div>
                      <p className="text-sm font-medium">Data de Abertura</p>
                      <p className="text-sm text-gray-600">{edital.data_abertura}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-red-500" />
                    <div>
                      <p className="text-sm font-medium">Data de Encerramento</p>
                      <p className="text-sm text-red-600">{edital.data_encerramento}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  {edital.informacoes_adicionais.map((info: string, index: number) => (
                    <div key={index} className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span className="text-gray-600">{info}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Documentos Necessários</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {edital.documentos_necessarios.map((documento: string, index: number) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-orange-600 mt-1">📄</span>
                      <span className="text-gray-600">{documento}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Critérios de Avaliação</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {edital.criterios_avaliacao.map((criterio: any, index: number) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-medium text-gray-900">{criterio.criterio}</h4>
                        <Badge className="bg-blue-100 text-blue-800">{criterio.peso}%</Badge>
                      </div>
                      <p className="text-sm text-gray-600">{criterio.descricao}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProponenteEditalDetalhes;