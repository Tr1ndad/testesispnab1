import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Users, TrendingUp, Award, BookOpen, Lightbulb } from 'lucide-react';

const Sobre = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero */}
      <div className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sobre a Plataforma
            </h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Fortalecendo a cultura paranaense através da transparência e gestão eficiente
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Missão, Visão e Valores */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Target className="h-12 w-12 text-green-600 mx-auto mb-2" />
                <CardTitle>Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Democratizar o acesso aos editais culturais e facilitar a gestão dos projetos aprovados no Paraná.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Eye className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                <CardTitle>Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ser a principal plataforma de gestão cultural do Paraná, reconhecida pela transparência e eficiência.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Heart className="h-12 w-12 text-purple-600 mx-auto mb-2" />
                <CardTitle>Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Transparência, inclusão, inovação e compromisso com a cultura paranaense.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sobre a Plataforma */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">O que é a Plataforma</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                A Plataforma de Gestão de Editais Culturais é uma iniciativa que visa modernizar e tornar mais 
                transparente o processo de gestão dos editais culturais no Estado do Paraná. Desenvolvida com 
                foco na experiência do usuário, a plataforma oferece ferramentas completas para proponentes, 
                gestores públicos e cidadãos.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Através de uma interface intuitiva e funcionalidades avançadas, facilitamos todo o processo: 
                desde a consulta de editais disponíveis até o acompanhamento da execução dos projetos aprovados, 
                incluindo prestação de contas e indicadores de impacto.
              </p>
            </CardContent>
          </Card>

          {/* Funcionalidades */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Principais Funcionalidades</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <BookOpen className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Consulta de Editais</h3>
                    <p className="text-sm text-gray-600">
                      Busque e filtre editais abertos por município, área cultural e valor
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Submissão de Projetos</h3>
                    <p className="text-sm text-gray-600">
                      Interface simples e guiada para envio de propostas culturais
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <TrendingUp className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Acompanhamento</h3>
                    <p className="text-sm text-gray-600">
                      Monitore o status e a execução de projetos em tempo real
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Indicadores</h3>
                    <p className="text-sm text-gray-600">
                      Visualize dados e estatísticas sobre a cultura no Paraná
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Lightbulb className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Transparência</h3>
                    <p className="text-sm text-gray-600">
                      Acesso público a informações sobre editais e projetos
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Suporte</h3>
                    <p className="text-sm text-gray-600">
                      Equipe dedicada para auxiliar proponentes e gestores
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Benefícios */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Benefícios</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-green-600 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Para Proponentes</h3>
                  <p className="text-gray-600">
                    Processo simplificado de submissão, acompanhamento em tempo real e suporte dedicado
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Para Gestores Públicos</h3>
                  <p className="text-gray-600">
                    Gestão eficiente de editais, avaliação facilitada e relatórios automatizados
                  </p>
                </div>

                <div className="border-l-4 border-purple-600 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Para a Sociedade</h3>
                  <p className="text-gray-600">
                    Transparência total, acesso facilitado à informação e fortalecimento da cultura local
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Equipe e Contato */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Tecnologia e Desenvolvimento</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                A plataforma foi desenvolvida utilizando tecnologias modernas e seguras, garantindo 
                performance, escalabilidade e proteção de dados. Seguimos as melhores práticas de 
                desenvolvimento e as diretrizes da Lei Geral de Proteção de Dados (LGPD).
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button asChild className="bg-green-600 hover:bg-green-700">
                  <Link to="/contato">Entre em Contato</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/faq">Perguntas Frequentes</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Sobre;