'use client';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Calendar, MapPin, DollarSign, User, Eye, Plus } from 'lucide-react';

const projetos = [
  {
    id: '1',
    titulo: 'Álbum "Sons de Pinhais"',
    proponente: 'João Santos',
    municipio: 'Pinhais',
    area_cultural: 'Música',
    status: 'aprovado',
    valor_aprovado: 35000,
    edital: '001/2025-PINHAIS',
    data_fim: '2025-09-30'
  },
  {
    id: '2',
    titulo: 'Exposição "Cores do Paraná"',
    proponente: 'Maria Silva',
    municipio: 'Curitiba',
    area_cultural: 'Artes Visuais',
    status: 'em_analise',
    valor_aprovado: 45000,
    edital: '002/2025-CURITIBA',
    data_fim: '2025-11-15'
  },
  {
    id: '3',
    titulo: 'Festival de Teatro Popular',
    proponente: 'Carlos Oliveira',
    municipio: 'Londrina',
    area_cultural: 'Teatro',
    status: 'concluido',
    valor_aprovado: 52000,
    edital: '003/2025-LONDRINA',
    data_fim: '2025-08-20'
  },
  {
    id: '4',
    titulo: 'Oficinas de Dança Contemporânea',
    proponente: 'Ana Costa',
    municipio: 'Maringá',
    area_cultural: 'Dança',
    status: 'aprovado',
    valor_aprovado: 28000,
    edital: '001/2025-MARINGA',
    data_fim: '2025-10-30'
  },
  {
    id: '5',
    titulo: 'Documentário "Histórias do Interior"',
    proponente: 'Pedro Almeida',
    municipio: 'Ponta Grossa',
    area_cultural: 'Audiovisual',
    status: 'rascunho',
    valor_aprovado: 0,
    edital: '004/2025-PONTAGROSSA',
    data_fim: '2025-12-31'
  },
  {
    id: '6',
    titulo: 'Sarau Literário nas Escolas',
    proponente: 'Beatriz Santos',
    municipio: 'Cascavel',
    area_cultural: 'Literatura',
    status: 'aprovado',
    valor_aprovado: 18000,
    edital: '001/2025-CASCAVEL',
    data_fim: '2025-11-30'
  }
];

const ProjetosPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('todos');
  const [municipioFilter, setMunicipioFilter] = useState('todos');
  const [areaFilter, setAreaFilter] = useState('todos');

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

  const filteredProjetos = projetos.filter(projeto => {
    const matchesSearch = projeto.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         projeto.proponente.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'todos' || projeto.status === statusFilter;
    const matchesMunicipio = municipioFilter === 'todos' || projeto.municipio === municipioFilter;
    const matchesArea = areaFilter === 'todos' || projeto.area_cultural === areaFilter;
    
    return matchesSearch && matchesStatus && matchesMunicipio && matchesArea;
  });

  const municipios = [...new Set(projetos.map(p => p.municipio))];
  const areas = [...new Set(projetos.map(p => p.area_cultural))];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero */}
      <div className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Projetos Culturais
            </h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Explore e acompanhe os projetos culturais aprovados e em execução
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold text-green-600">{projetos.length}</div>
                <div className="text-sm text-gray-600">Total de Projetos</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold text-blue-600">
                  {projetos.filter(p => p.status === 'aprovado').length}
                </div>
                <div className="text-sm text-gray-600">Aprovados</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold text-yellow-600">
                  {projetos.filter(p => p.status === 'em_analise').length}
                </div>
                <div className="text-sm text-gray-600">Em Análise</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold text-purple-600">
                  {projetos.filter(p => p.status === 'concluido').length}
                </div>
                <div className="text-sm text-gray-600">Concluídos</div>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Filter className="mr-2 h-5 w-5" />
                Filtros
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Buscar projetos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos os Status</SelectItem>
                    <SelectItem value="aprovado">Aprovado</SelectItem>
                    <SelectItem value="em_analise">Em Análise</SelectItem>
                    <SelectItem value="concluido">Concluído</SelectItem>
                    <SelectItem value="rascunho">Rascunho</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={municipioFilter} onValueChange={setMunicipioFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Município" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos os Municípios</SelectItem>
                    {municipios.map(m => (
                      <SelectItem key={m} value={m}>{m}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={areaFilter} onValueChange={setAreaFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Área Cultural" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todas as Áreas</SelectItem>
                    {areas.map(a => (
                      <SelectItem key={a} value={a}>{a}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="mb-4 flex justify-between items-center">
            <p className="text-gray-600">
              Mostrando <span className="font-semibold">{filteredProjetos.length}</span> de{' '}
              <span className="font-semibold">{projetos.length}</span> projetos
            </p>
            <Button className="bg-green-600 hover:bg-green-700">
              <Plus className="mr-2 h-4 w-4" />
              Novo Projeto
            </Button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjetos.map((projeto) => (
              <Card key={projeto.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={getStatusColor(projeto.status)}>
                      {getStatusText(projeto.status)}
                    </Badge>
                    <span className="text-sm text-gray-500">{projeto.edital}</span>
                  </div>
                  <CardTitle className="text-xl">{projeto.titulo}</CardTitle>
                  <CardDescription className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    {projeto.municipio}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <User className="h-4 w-4 mr-2 text-green-600" />
                      <span className="font-medium">Proponente:</span>
                      <span className="ml-2">{projeto.proponente}</span>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                      <span className="font-medium">Área:</span>
                      <span className="ml-2">{projeto.area_cultural}</span>
                    </div>
                    
                    {projeto.valor_aprovado > 0 && (
                      <div className="flex items-center text-sm">
                        <DollarSign className="h-4 w-4 mr-2 text-green-600" />
                        <span className="font-medium text-gray-600">Valor:</span>
                        <span className="ml-2 font-bold text-green-600">
                          R$ {projeto.valor_aprovado.toLocaleString()}
                        </span>
                      </div>
                    )}
                    
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-purple-600" />
                      <span className="font-medium">Conclusão:</span>
                      <span className="ml-2">
                        {new Date(projeto.data_fim).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex gap-2">
                    <Button asChild className="flex-1 bg-green-600 hover:bg-green-700">
                      <Link to={`/projetos/${projeto.id}`}>
                        <Eye className="mr-2 h-4 w-4" />
                        Ver Detalhes
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjetos.length === 0 && (
            <Card className="p-12 text-center">
              <p className="text-gray-500 text-lg">
                Nenhum projeto encontrado com os filtros selecionados.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchTerm('');
                  setStatusFilter('todos');
                  setMunicipioFilter('todos');
                  setAreaFilter('todos');
                }}
              >
                Limpar Filtros
              </Button>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjetosPage;