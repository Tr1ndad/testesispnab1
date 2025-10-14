import { useState } from "react";
import { Link } from "react-router-dom";

const municipios = [
  {
    id: "pinhais",
    nome: "Pinhais",
    populacao: 132157,
    recursos_totais_recebidos: 850000,
    recursos_executados: 620000,
    editais_ativos: 2,
    projetos_aprovados: 28,
    percentual_execucao: 73
  },
  {
    id: "piraquara",
    nome: "Piraquara",
    populacao: 112717,
    recursos_totais_recebidos: 485000,
    recursos_executados: 350000,
    editais_ativos: 1,
    projetos_aprovados: 29,
    percentual_execucao: 72
  },
  {
    id: "colombo",
    nome: "Colombo",
    populacao: 240977,
    recursos_totais_recebidos: 680000,
    recursos_executados: 500000,
    editais_ativos: 2,
    projetos_aprovados: 32,
    percentual_execucao: 74
  }
];

const Municipios = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMunicipios = municipios.filter(municipio =>
    municipio.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Municípios da RMC
          </h1>
          <p className="text-xl text-gray-600">
            Conheça os municípios participantes da PNAB
          </p>
        </div>

        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Buscar município..."
              className="w-full px-4 py-3 pl-12 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredMunicipios.map((municipio) => (
            <div key={municipio.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{municipio.nome}</h3>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Ativo
                </span>
              </div>
              
              <p className="text-gray-600 mb-6">
                População: {municipio.populacao.toLocaleString()}
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Recursos Totais:</span>
                  <span className="font-semibold text-green-600">
                    R$ {municipio.recursos_totais_recebidos.toLocaleString()}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Recursos Executados:</span>
                  <span className="font-semibold text-blue-600">
                    R$ {municipio.recursos_executados.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">% Execução:</span>
                  <span className="font-semibold text-purple-600">
                    {municipio.percentual_execucao}%
                  </span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${municipio.percentual_execucao}%` }}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{municipio.editais_ativos}</div>
                  <div className="text-sm text-gray-600">Editais Ativos</div>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{municipio.projetos_aprovados}</div>
                  <div className="text-sm text-gray-600">Projetos Aprovados</div>
                </div>
              </div>

              <Link
                to={`/municipios/${municipio.id}`}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors text-center"
              >
                Ver Detalhes
              </Link>
            </div>
          ))}
        </div>

        {filteredMunicipios.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Nenhum município encontrado
            </h3>
            <p className="text-gray-600">
              Tente ajustar sua busca ou explore todos os municípios disponíveis.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Municipios;