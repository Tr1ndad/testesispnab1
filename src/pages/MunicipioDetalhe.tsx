import { useParams, Link } from "react-router-dom";

const municipioData = {
  pinhais: {
    nome: "Pinhais",
    codigo_ibge: "4119152",
    populacao: 132157,
    recursos_totais_recebidos: 850000,
    recursos_executados: 620000,
    percentual_execucao: 73,
    editais: [
      {
        id: "1",
        titulo: "Prêmio de Música Popular 2025",
        modalidade: "Prêmio",
        area_cultural: "Música",
        valor_total: 150000,
        valor_disponivel: 150000,
        status: "aberto",
        data_encerramento: "2025-03-15",
        vagas: 15
      },
      {
        id: "2",
        titulo: "Fomento ao Teatro Infantil",
        modalidade: "Fomento",
        area_cultural: "Teatro",
        valor_total: 120000,
        valor_disponivel: 120000,
        status: "aberto",
        data_encerramento: "2025-03-20",
        vagas: 10
      }
    ],
    projetos_aprovados: [
      {
        id: "1",
        titulo: "Álbum 'Sons de Pinhais'",
        proponente: "João Santos",
        area_cultural: "Música",
        valor_aprovado: 35000,
        edital: "001/2025-PINHAIS",
        status: "aprovado"
      },
      {
        id: "2",
        titulo: "Festival de Dança Contemporânea",
        proponente: "Grupo Dança Livre",
        area_cultural: "Dança",
        valor_aprovado: 42000,
        edital: "002/2025-PINHAIS",
        status: "aprovado"
      }
    ],
    indicadores: {
      total_projetos: 40,
      projetos_aprovados: 28,
      projetos_em_execucao: 12,
      projetos_concluidos: 8,
      total_beneficiados: 67,
      total_investido: 620000,
      total_executado: 452000,
      areas_culturais: {
        "Música": 35,
        "Teatro": 30,
        "Artes Visuais": 20,
        "Dança": 15
      }
    }
  },
  piraquara: {
    nome: "Piraquara",
    codigo_ibge: "4119301",
    populacao: 112717,
    recursos_totais_recebidos: 485000,
    recursos_executados: 350000,
    percentual_execucao: 72,
    editais: [
      {
        id: "3",
        titulo: "Bolsa de Artes Visuais 2025",
        modalidade: "Bolsa",
        area_cultural: "Artes Visuais",
        valor_total: 80000,
        valor_disponivel: 0,
        status: "encerrado",
        data_encerramento: "2024-09-30",
        vagas: 8
      }
    ],
    projetos_aprovados: [
      {
        id: "3",
        titulo: "Oficina de Artes Plásticas",
        proponente: "Carlos Mendes",
        area_cultural: "Artes Visuais",
        valor_aprovado: 15000,
        edital: "003/2024-PIRAQUARA",
        status: "aprovado"
      }
    ],
    indicadores: {
      total_projetos: 37,
      projetos_aprovados: 29,
      projetos_em_execucao: 15,
      projetos_concluidos: 10,
      total_beneficiados: 45,
      total_investido: 350000,
      total_executado: 252000,
      areas_culturais: {
        "Artes Visuais": 40,
        "Música": 25,
        "Teatro": 20,
        "Literatura": 15
      }
    }
  },
  colombo: {
    nome: "Colombo",
    codigo_ibge: "4118204",
    populacao: 240977,
    recursos_totais_recebidos: 680000,
    recursos_executados: 500000,
    percentual_execucao: 74,
    editais: [
      {
        id: "4",
        titulo: "Fomento à Literatura 2025",
        modalidade: "Fomento",
        area_cultural: "Literatura",
        valor_total: 100000,
        valor_disponivel: 100000,
        status: "aberto",
        data_encerramento: "2025-04-10",
        vagas: 12
      }
    ],
    projetos_aprovados: [
      {
        id: "4",
        titulo: "Espetáculo 'Memórias Urbanas'",
        proponente: "Maria Silva",
        area_cultural: "Teatro",
        valor_aprovado: 28000,
        edital: "004/2025-COLOMBO",
        status: "aprovado"
      }
    ],
    indicadores: {
      total_projetos: 50,
      projetos_aprovados: 32,
      projetos_em_execucao: 18,
      projetos_concluidos: 12,
      total_beneficiados: 89,
      total_investido: 500000,
      total_executado: 370000,
      areas_culturais: {
        "Teatro": 35,
        "Literatura": 30,
        "Música": 20,
        "Artes Visuais": 15
      }
    }
  }
};

const MunicipioDetalhe = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug || !municipioData[slug as keyof typeof municipioData]) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Município não encontrado</h1>
          <Link to="/municipios" className="text-green-600 hover:text-green-500 underline">
            Voltar para lista de municípios
          </Link>
        </div>
      </div>
    );
  }

  const municipio = municipioData[slug as keyof typeof municipioData];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header do Município */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <Link to="/municipios" className="text-green-600 hover:text-green-500 mb-2 inline-block">
                ← Voltar para municípios
              </Link>
              <h1 className="text-4xl font-bold text-gray-900">{municipio.nome}</h1>
              <p className="text-gray-600 mt-2">
                Código IBGE: {municipio.codigo_ibge} | População: {municipio.populacao.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Resumo Financeiro */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Resumo Financeiro</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">
                R$ {municipio.recursos_totais_recebidos.toLocaleString()}
              </div>
              <div className="text-gray-600">Recursos Totais</div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                R$ {municipio.recursos_executados.toLocaleString()}
              </div>
              <div className="text-gray-600">Recursos Executados</div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {municipio.percentual_execucao}%
              </div>
              <div className="text-gray-600">% Execução</div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {municipio.indicadores.total_beneficiados}
              </div>
              <div className="text-gray-600">Artistas Beneficiados</div>
            </div>
          </div>
        </section>

        {/* Editais do Município */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Editais do Município</h2>
          <div className="grid grid-cols-1 gap-6">
            {municipio.editais.map((edital) => (
              <div key={edital.id} className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    edital.status === 'aberto' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {edital.status === 'aberto' ? 'ABERTO' : 'ENCERRADO'}
                  </span>
                  <span className="text-sm text-gray-500">
                    Encerra em: {new Date(edital.data_encerramento).toLocaleDateString('pt-BR')}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{edital.titulo}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <span className="text-gray-600">Modalidade:</span>
                    <div className="font-medium">{edital.modalidade}</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Área:</span>
                    <div className="font-medium">{edital.area_cultural}</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Valor Total:</span>
                    <div className="font-medium text-green-600">
                      R$ {edital.valor_total.toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-600">Vagas:</span>
                    <div className="font-medium">{edital.vagas}</div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Link
                    to={`/editais/${edital.id}`}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors"
                  >
                    Ver Detalhes
                  </Link>
                  <button className="flex-1 bg-white border border-green-600 text-green-600 hover:bg-green-50 py-2 px-4 rounded-md text-sm font-medium transition-colors">
                    Baixar Edital
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projetos Aprovados */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Projetos Aprovados</h2>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Título
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Proponente
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Área Cultural
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Valor Aprovado
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Edital
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {municipio.projetos_aprovados.map((projeto) => (
                  <tr key={projeto.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {projeto.titulo}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {projeto.proponente}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {projeto.area_cultural}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">
                      R$ {projeto.valor_aprovado.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {projeto.edital}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <Link
                        to={`/projetos/${projeto.id}`}
                        className="text-green-600 hover:text-green-500"
                      >
                        Ver Detalhes
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Indicadores Culturais */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Indicadores Culturais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Distribuição por Área Cultural</h3>
              <div className="space-y-3">
                {Object.entries(municipio.indicadores.areas_culturais).map(([area, percentual]) => (
                  <div key={area}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">{area}</span>
                      <span className="text-sm font-medium text-gray-700">{percentual}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full"
                        style={{ width: `${percentual}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Estatísticas Gerais</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total de Projetos:</span>
                  <span className="font-semibold">{municipio.indicadores.total_projetos}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Projetos Aprovados:</span>
                  <span className="font-semibold text-green-600">{municipio.indicadores.projetos_aprovados}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Em Execução:</span>
                  <span className="font-semibold text-blue-600">{municipio.indicadores.projetos_em_execucao}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Concluídos:</span>
                  <span className="font-semibold text-purple-600">{municipio.indicadores.projetos_concluidos}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Investido:</span>
                  <span className="font-semibold text-orange-600">
                    R$ {municipio.indicadores.total_investido.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MunicipioDetalhe;