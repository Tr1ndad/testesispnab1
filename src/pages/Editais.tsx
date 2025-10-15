import { useState } from "react";
import { Link } from "react-router-dom";

const editais = [
  {
    id: "1",
    titulo: "Prêmio de Música Popular 2025",
    municipio: "Pinhais",
    modalidade: "Prêmio",
    area_cultural: "Música",
    valor_total: 150000,
    valor_disponivel: 150000,
    status: "aberto",
    data_encerramento: "2025-03-15",
    vagas: 15,
    propostas: 8,
    visualizacoes: 234
  },
  {
    id: "2",
    titulo: "Fomento ao Teatro Infantil",
    municipio: "Colombo",
    modalidade: "Fomento",
    area_cultural: "Teatro",
    valor_total: 120000,
    valor_disponivel: 120000,
    status: "aberto",
    data_encerramento: "2025-03-20",
    vagas: 10,
    propostas: 6,
    visualizacoes: 189
  },
  {
    id: "3",
    titulo: "Bolsa de Artes Visuais 2024",
    municipio: "Piraquara",
    modalidade: "Bolsa",
    area_cultural: "Artes Visuais",
    valor_total: 80000,
    valor_disponivel: 0,
    status: "encerrado",
    data_encerramento: "2024-09-30",
    vagas: 8,
    propostas: 12,
    visualizacoes: 156
  }
];

const Editais = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("todos");

  const filteredEditais = editais.filter(edital => {
    const matchesSearch = edital.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         edital.municipio.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "todos" || edital.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

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

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Editais da PNAB
          </h1>
          <p className="text-xl text-gray-600">
            Chamadas públicas para projetos culturais
          </p>
        </div>

        {/* Filtros */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div className="relative max-w-md w-full">
            <input
              type="text"
              placeholder="Buscar edital..."
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
          
          <select
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="todos">Todos os Status</option>
            <option value="aberto">Abertos</option>
            <option value="encerrado">Encerrados</option>
          </select>
        </div>

        {/* Grid de Editais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEditais.map((edital) => (
            <div key={edital.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <span className={getStatusColor(edital.status)}>
                  {getStatusText(edital.status)}
                </span>
                <span className="text-sm text-gray-500">{edital.municipio}</span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{edital.titulo}</h3>
              <p className="text-gray-600 text-sm mb-4">
                {edital.modalidade} • {edital.area_cultural}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
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
                <div>
                  <span className="text-gray-600">Propostas:</span>
                  <div className="font-medium">{edital.propostas}</div>
                </div>
                <div>
                  <span className="text-gray-600">Encerra:</span>
                  <div className="font-medium">{edital.data_encerramento}</div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Link
                  to={`/editais/${edital.id}`}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors text-center"
                >
                  Ver Detalhes
                </Link>
                <a
                  href={`/editais/${edital.id}`}
                  className="flex-1 bg-white border border-green-600 text-green-600 hover:bg-green-50 py-2 px-4 rounded-md text-sm font-medium transition-colors text-center"
                >
                  Baixar PDF
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredEditais.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Nenhum edital encontrado
            </h3>
            <p className="text-gray-600">
              Tente ajustar sua busca ou explore todos os editais disponíveis.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Editais;