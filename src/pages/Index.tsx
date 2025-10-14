import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            SISPNAB - Transparência Cultural na RMC
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Sistema de Informação da Política Nacional Aldir Blanc
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Explorar Municípios
            </button>
            <button className="bg-white hover:bg-gray-50 text-green-600 border-2 border-green-600 px-8 py-3 rounded-lg font-medium transition-colors">
              Ver Editais Abertos
            </button>
          </div>
        </div>
      </section>

      {/* KPIs Gerais da RMC */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Indicadores Gerais da RMC
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">R$ 1,75M</div>
              <div className="text-gray-600">Investido</div>
              <div className="text-sm text-green-600 font-medium mt-1">+25%</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">127</div>
              <div className="text-gray-600">Propostas</div>
              <div className="text-sm text-green-600 font-medium mt-1">+15%</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">89</div>
              <div className="text-gray-600">Aprovadas</div>
              <div className="text-sm text-green-600 font-medium mt-1">70%</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards dos Municípios */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Municípios da RMC
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pinhais */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pinhais</h3>
              <p className="text-gray-600 mb-4">População: 132.157</p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Recursos:</span>
                  <span className="font-medium">R$ 850K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Editais:</span>
                  <span className="font-medium">8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Projetos:</span>
                  <span className="font-medium">28</span>
                </div>
              </div>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition-colors">
                Ver Detalhes
              </button>
            </div>

            {/* Piraquara */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Piraquara</h3>
              <p className="text-gray-600 mb-4">População: 112.717</p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Recursos:</span>
                  <span className="font-medium">R$ 485K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Editais:</span>
                  <span className="font-medium">6</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Projetos:</span>
                  <span className="font-medium">29</span>
                </div>
              </div>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition-colors">
                Ver Detalhes
              </button>
            </div>

            {/* Colombo */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Colombo</h3>
              <p className="text-gray-600 mb-4">População: 240.977</p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Recursos:</span>
                  <span className="font-medium">R$ 680K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Editais:</span>
                  <span className="font-medium">7</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Projetos:</span>
                  <span className="font-medium">32</span>
                </div>
              </div>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition-colors">
                Ver Detalhes
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Editais em Destaque */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Editais em Destaque
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Edital 1 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  ABERTO
                </span>
                <span className="text-sm text-gray-500">Pinhais</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Prêmio de Música Popular 2025
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Fomento à produção musical na cidade de Pinhais
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>💰 R$ 150K</span>
                <span>📅 15/03/2025</span>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-sm transition-colors">
                  Ver Detalhes
                </button>
                <button className="flex-1 bg-white border border-green-600 text-green-600 hover:bg-green-50 py-2 rounded-md text-sm transition-colors">
                  Baixar PDF
                </button>
              </div>
            </div>

            {/* Edital 2 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  ABERTO
                </span>
                <span className="text-sm text-gray-500">Colombo</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Fomento ao Teatro Infantil
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Apoio a espetáculos teatrais infantis
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>💰 R$ 120K</span>
                <span>📅 20/03/2025</span>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-sm transition-colors">
                  Ver Detalhes
                </button>
                <button className="flex-1 bg-white border border-green-600 text-green-600 hover:bg-green-50 py-2 rounded-md text-sm transition-colors">
                  Baixar PDF
                </button>
              </div>
            </div>

            {/* Edital 3 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  ENCERRADO
                </span>
                <span className="text-sm text-gray-500">Piraquara</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Bolsa de Artes Visuais 2024
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Incentivo a artistas plásticos e visuais
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>💰 R$ 80K</span>
                <span>📅 30/09/2024</span>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2 rounded-md text-sm transition-colors">
                  Ver Detalhes
                </button>
                <button className="flex-1 bg-white border border-gray-600 text-gray-600 hover:bg-gray-50 py-2 rounded-md text-sm transition-colors">
                  Baixar PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gráfico de Distribuição */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Distribuição de Recursos por Área Cultural
          </h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="h-64 flex items-center justify-center text-gray-500">
              <div className="text-center">
                <div className="text-2xl mb-2">📊 Gráfico de Pizza</div>
                <p>Gráfico de distribuição por área cultural</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Últimos Projetos Aprovados */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Últimos Projetos Aprovados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Projeto 1 */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Álbum "Sons de Pinhais"
              </h3>
              <p className="text-gray-600 mb-2">👤 João Santos Artista</p>
              <p className="text-gray-600 mb-2">📍 Pinhais</p>
              <div className="flex items-center justify-between">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  APROVADO
                </span>
                <span className="font-medium text-green-600">R$ 35.000</span>
              </div>
            </div>

            {/* Projeto 2 */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Espetáculo "Memórias Urbanas"
              </h3>
              <p className="text-gray-600 mb-2">👤 Maria Silva Teatro</p>
              <p className="text-gray-600 mb-2">📍 Colombo</p>
              <div className="flex items-center justify-between">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  APROVADO
                </span>
                <span className="font-medium text-green-600">R$ 28.000</span>
              </div>
            </div>

            {/* Projeto 3 */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Oficina de Artes Plásticas
              </h3>
              <p className="text-gray-600 mb-2">👤 Carlos Mendes Artes</p>
              <p className="text-gray-600 mb-2">📍 Piraquara</p>
              <div className="flex items-center justify-between">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  APROVADO
                </span>
                <span className="font-medium text-green-600">R$ 15.000</span>
              </div>
            </div>

            {/* Projeto 4 */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Festival de Dança Contemporânea
              </h3>
              <p className="text-gray-600 mb-2">👅 Grupo Dança Livre</p>
              <p className="text-gray-600 mb-2">📍 Pinhais</p>
              <div className="flex items-center justify-between">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  APROVADO
                </span>
                <span className="font-medium text-green-600">R$ 42.000</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16 px-4 bg-green-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Você é artista? Cadastre-se e participe!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Junte-se a centenas de artistas beneficiados pela PNAB
          </p>
          <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors">
            Criar Conta
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">SISPNAB</h3>
              <p className="text-gray-400 text-sm">
                Sistema de Informação e Transparência da PNAB na RMC
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Institucional</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/sobre" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="/legislacao" className="hover:text-white transition-colors">Legislação</a></li>
                <li><a href="/faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="/contato" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Municípios</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/municipios/pinhais" className="hover:text-white transition-colors">Pinhais</a></li>
                <li><a href="/municipios/piraquara" className="hover:text-white transition-colors">Piraquara</a></li>
                <li><a href="/municipios/colombo" className="hover:text-white transition-colors">Colombo</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  📘
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  📷
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  🐦
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 SISPNAB. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <MadeWithDyad />
    </div>
  );
};

export default Index;