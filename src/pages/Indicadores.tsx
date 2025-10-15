'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

const indicadoresGerais = {
  total_propostas: 127,
  propostas_aprovadas: 89,
  taxa_aprovacao: 70,
  total_artistas: 201,
  total_investido: 1750000
};

const dadosAreaCultural = [
  { area: 'Música', valor: 560000, percentual: 32 },
  { area: 'Teatro', valor: 385000, percentual: 22 },
  { area: 'Artes Visuais', valor: 315000, percentual: 18 },
  { area: 'Dança', valor: 262500, percentual: 15 },
  { area: 'Literatura', valor: 140000, percentual: 8 },
  { area: 'Outros', valor: 87500, percentual: 5 }
];

const dadosMunicipios = [
  { municipio: 'Pinhais', propostas: 40, aprovadas: 28, investimento: 620000 },
  { municipio: 'Colombo', propostas: 50, aprovadas: 32, investimento: 680000 },
  { municipio: 'Piraquara', propostas: 37, aprovadas: 29, investimento: 485000 }
];

const dadosTendencia = [
  { mes: 'Jan', propostas: 8, aprovadas: 6 },
  { mes: 'Fev', propostas: 12, aprovadas: 9 },
  { mes: 'Mar', propostas: 18, aprovadas: 14 },
  { mes: 'Abr', propostas: 15, aprovadas: 11 },
  { mes: 'Mai', propostas: 10, aprovadas: 7 },
  { mes: 'Jun', propostas: 14, aprovadas: 10 },
  { mes: 'Jul', propostas: 16, aprovadas: 12 },
  { mes: 'Ago', propostas: 13, aprovadas: 9 },
  { mes: 'Set', propostas: 11, aprovadas: 8 },
  { mes: 'Out', propostas: 9, aprovadas: 6 },
  { mes: 'Nov', propostas: 7, aprovadas: 5 },
  { mes: 'Dez', propostas: 4, aprovadas: 2 }
];

const COLORS = ['#10b981', '#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444', '#6b7280'];

const IndicadoresPage = () => {
  const [anoSelecionado, setAnoSelecionado] = useState('2024');
  const [trimestreSelecionado, setTrimestreSelecionado] = useState('4');
  const [indicadores, setIndicadores] = useState(indicadoresGerais);
  const [dadosArea, setDadosArea] = useState(dadosAreaCultural);
  const [dadosMunicipio, setDadosMunicipio] = useState(dadosMunicipios);
  const [dadosTendencia, setDadosTendencia] = useState(dadosTendencia);

  // Simulação de busca de dados com base nos filtros
  useEffect(() => {
    // Aqui você faria uma chamada à API para buscar os dados filtrados
    // Por enquanto, vamos simular com dados diferentes para cada filtro
    
    const buscarDadosFiltrados = () => {
      // Simulando diferentes dados para cada ano/trimestre
      let novosIndicadores = { ...indicadoresGerais };
      let novosDadosArea = [...dadosAreaCultural];
      let novosDadosMunicipio = [...dadosMunicipios];
      let novosDadosTendencia = [...dadosTendencia];

      // Modificar dados baseado no ano selecionado
      if (anoSelecionado === '2023') {
        novosIndicadores = {
          ...novosIndicadores,
          total_propostas: Math.floor(novosIndicadores.total_propostas * 0.85),
          propostas_aprovadas: Math.floor(novosIndicadores.propostas_aprovadas * 0.85),
          total_artistas: Math.floor(novosIndicadores.total_artistas * 0.85),
          total_investido: Math.floor(novosIndicadores.total_investido * 0.85)
        };
      } else if (anoSelecionado === '2022') {
        novosIndicadores = {
          ...novosIndicadores,
          total_propostas: Math.floor(novosIndicadores.total_propostas * 0.7),
          propostas_aprovadas: Math.floor(novosIndicadores.propostas_aprovadas * 0.7),
          total_artistas: Math.floor(novosIndicadores.total_artistas * 0.7),
          total_investido: Math.floor(novosIndicadores.total_investido * 0.7)
        };
      }

      // Modificar dados baseado no trimestre
      if (trimestreSelecionado === '1') {
        // Primeiro trimestre - dados mais baixos
        novosIndicadores.total_propostas = Math.floor(novosIndicadores.total_propostas * 0.25);
        novosIndicadores.propostas_aprovadas = Math.floor(novosIndicadores.propostas_aprovadas * 0.25);
      } else if (trimestreSelecionado === '2') {
        // Segundo trimestre
        novosIndicadores.total_propostas = Math.floor(novosIndicadores.total_propostas * 0.5);
        novosIndicadores.propostas_aprovadas = Math.floor(novosIndicadores.propostas_aprovadas * 0.5);
      } else if (trimestreSelecionado === '3') {
        // Terceiro trimestre
        novosIndicadores.total_propostas = Math.floor(novosIndicadores.total_propostas * 0.75);
        novosIndicadores.propostas_aprovadas = Math.floor(novosIndicadores.propostas_aprovadas * 0.75);
      }

      // Atualizar os dados
      setIndicadores(novosIndicadores);
      setDadosArea(novosDadosArea);
      setDadosMunicipio(novosDadosMunicipio);
      setDadosTendencia(novosDadosTendencia);
    };

    buscarDadosFiltrados();
  }, [anoSelecionado, trimestreSelecionado]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero */}
      <div className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Indicadores Culturais
            </h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Análise completa dos dados culturais e financeiros da RMC
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ano
              </label>
              <Select value={anoSelecionado} onValueChange={setAnoSelecionado}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Trimestre
              </label>
              <Select value={trimestreSelecionado} onValueChange={setTrimestreSelecionado}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1º Trimestre</SelectItem>
                  <SelectItem value="2">2º Trimestre</SelectItem>
                  <SelectItem value="3">3º Trimestre</SelectItem>
                  <SelectItem value="4">4º Trimestre</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end">
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Atualizar Dados
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="container mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Propostas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{indicadores.total_propostas}</div>
              <p className="text-xs text-muted-foreground">+15% ano anterior</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Propostas Aprovadas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{indicadores.propostas_aprovadas}</div>
              <p className="text-xs text-muted-foreground">+12% ano anterior</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Taxa de Aprovação</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{indicadores.taxa_aprovacao}%</div>
              <p className="text-xs text-muted-foreground">+5% ano anterior</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Artistas Beneficiados</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">{indicadores.total_artistas}</div>
              <p className="text-xs text-muted-foreground">+18% ano anterior</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Investimento Total</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">R$ {indicadores.total_investido.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+25% ano anterior</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Charts */}
      <div className="container mx-auto px-4 pb-12">
        <Tabs defaultValue="areas" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="areas">Áreas Culturais</TabsTrigger>
            <TabsTrigger value="municipios">Municípios</TabsTrigger>
            <TabsTrigger value="tendencia">Tendência</TabsTrigger>
            <TabsTrigger value="comparativo">Comparativo</TabsTrigger>
          </TabsList>

          <TabsContent value="areas" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Distribuição por Área Cultural</CardTitle>
                  <CardDescription>Investimento por tipo de cultura</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={dadosArea}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ area, percentual }) => `${area} ${percentual}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="valor"
                      >
                        {dadosArea.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`R$ ${Number(value).toLocaleString()}`, 'Investimento']} />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Investimento por Área</CardTitle>
                  <CardDescription>Valores absolutos por área cultural</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={dadosArea}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="area" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`R$ ${Number(value).toLocaleString()}`, 'Investimento']} />
                      <Bar dataKey="valor" fill="#10b981" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="municipios" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Comparativo Municipal</CardTitle>
                <CardDescription>Performance dos municípios da RMC</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={dadosMunicipio}>
                   

<dyad-write path="src/pages/Indicadores.tsx" description="Implementing filter functionality for Indicadores page">
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

const indicadoresGerais = {
  total_propostas: 127,
  propostas_aprovadas: 89,
  taxa_aprovacao: 70,
  total_artistas: 201,
  total_investido: 1750000
};

const dadosAreaCultural = [
  { area: 'Música', valor: 560000, percentual: 32 },
  { area: 'Teatro', valor: 385000, percentual: 22 },
  { area: 'Artes Visuais', valor: 315000, percentual: 18 },
  { area: 'Dança', valor: 262500, percentual: 15 },
  { area: 'Literatura', valor: 140000, percentual: 8 },
  { area: 'Outros', valor: 87500, percentual: 5 }
];

const dadosMunicipios = [
  { municipio: 'Pinhais', propostas: 40, aprovadas: 28, investimento: 620000 },
  { municipio: 'Colombo', propostas: 50, aprovadas: 32, investimento: 680000 },
  { municipio: 'Piraquara', propostas: 37, aprovadas: 29, investimento: 485000 }
];

const dadosTendencia = [
  { mes: 'Jan', propostas: 8, aprovadas: 6 },
  { mes: 'Fev', propostas: 12, aprovadas: 9 },
  { mes: 'Mar', propostas: 18, aprovadas: 14 },
  { mes: 'Abr', propostas: 15, aprovadas: 11 },
  { mes: 'Mai', propostas: 10, aprovadas: 7 },
  { mes: 'Jun', propostas: 14, aprovadas: 10 },
  { mes: 'Jul', propostas: 16, aprovadas: 12 },
  { mes: 'Ago', propostas: 13, aprovadas: 9 },
  { mes: 'Set', propostas: 11, aprovadas: 8 },
  { mes: 'Out', propostas: 9, aprovadas: 6 },
  { mes: 'Nov', propostas: 7, aprovadas: 5 },
  { mes: 'Dez', propostas: 4, aprovadas: 2 }
];

const COLORS = ['#10b981', '#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444', '#6b7280'];

const IndicadoresPage = () => {
  const [anoSelecionado, setAnoSelecionado] = useState('2024');
  const [trimestreSelecionado, setTrimestreSelecionado] = useState('4');
  const [indicadores, setIndicadores] = useState(indicadoresGerais);
  const [dadosArea, setDadosArea] = useState(dadosAreaCultural);
  const [dadosMunicipio, setDadosMunicipio] = useState(dadosMunicipios);
  const [dadosTendencia, setDadosTendencia] = useState(dadosTendencia);

  // Simulação de busca de dados com base nos filtros
  useEffect(() => {
    // Aqui você faria uma chamada à API para buscar os dados filtrados
    // Por enquanto, vamos simular com dados diferentes para cada filtro
    
    const buscarDadosFiltrados = () => {
      // Simulando diferentes dados para cada ano/trimestre
      let novosIndicadores = { ...indicadoresGerais };
      let novosDadosArea = [...dadosAreaCultural];
      let novosDadosMunicipio = [...dadosMunicipios];
      let novosDadosTendencia = [...dadosTendencia];

      // Modificar dados baseado no ano selecionado
      if (anoSelecionado === '2023') {
        novosIndicadores = {
          ...novosIndicadores,
          total_propostas: Math.floor(novosIndicadores.total_propostas * 0.85),
          propostas_aprovadas: Math.floor(novosIndicadores.propostas_aprovadas * 0.85),
          total_artistas: Math.floor(novosIndicadores.total_artistas * 0.85),
          total_investido: Math.floor(novosIndicadores.total_investido * 0.85)
        };
      } else if (anoSelecionado === '2022') {
        novosIndicadores = {
          ...novosIndicadores,
          total_propostas: Math.floor(novosIndicadores.total_propostas * 0.7),
          propostas_aprovadas: Math.floor(novosIndicadores.propostas_aprovadas * 0.7),
          total_artistas: Math.floor(novosIndicadores.total_artistas * 0.7),
          total_investido: Math.floor(novosIndicadores.total_investido * 0.7)
        };
      }

      // Modificar dados baseado no trimestre
      if (trimestreSelecionado === '1') {
        // Primeiro trimestre - dados mais baixos
        novosIndicadores.total_propostas = Math.floor(novosIndicadores.total_propostas * 0.25);
        novosIndicadores.propostas_aprovadas = Math.floor(novosIndicadores.propostas_aprovadas * 0.25);
      } else if (trimestreSelecionado === '2') {
        // Segundo trimestre
        novosIndicadores.total_propostas = Math.floor(novosIndicadores.total_propostas * 0.5);
        novosIndicadores.propostas_aprovadas = Math.floor(novosIndicadores.propostas_aprovadas * 0.5);
      } else if (trimestreSelecionado === '3') {
        // Terceiro trimestre
        novosIndicadores.total_propostas = Math.floor(novosIndicadores.total_propostas * 0.75);
        novosIndicadores.propostas_aprovadas = Math.floor(novosIndicadores.propostas_aprovadas * 0.75);
      }

      // Atualizar os dados
      setIndicadores(novosIndicadores);
      setDadosArea(novosDadosArea);
      setDadosMunicipio(novosDadosMunicipio);
      setDadosTendencia(novosDadosTendencia);
    };

    buscarDadosFiltrados();
  }, [anoSelecionado, trimestreSelecionado]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero */}
      <div className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Indicadores Culturais
            </h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Análise completa dos dados culturais e financeiros da RMC
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ano
              </label>
              <Select value={anoSelecionado} onValueChange={setAnoSelecionado}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Trimestre
              </label>
              <Select value={trimestreSelecionado} onValueChange={setTrimestreSelecionado}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1º Trimestre</SelectItem>
                  <SelectItem value="2">2º Trimestre</SelectItem>
                  <SelectItem value="3">3º Trimestre</SelectItem>
                  <SelectItem value="4">4º Trimestre</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end">
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Atualizar Dados
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="container mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Propostas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{indicadores.total_propostas}</div>
              <p className="text-xs text-muted-foreground">+15% ano anterior</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Propostas Aprovadas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{indicadores.propostas_aprovadas}</div>
              <p className="text-xs text-muted-foreground">+12% ano anterior</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Taxa de Aprovação</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{indicadores.taxa_aprovacao}%</div>
              <p className="text-xs text-muted-foreground">+5% ano anterior</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Artistas Beneficiados</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">{indicadores.total_artistas}</div>
              <p className="text-xs text-muted-foreground">+18% ano anterior</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Investimento Total</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">R$ {indicadores.total_investido.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+25% ano anterior</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Charts */}
      <div className="container mx-auto px-4 pb-12">
        <Tabs defaultValue="areas" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="areas">Áreas Culturais</TabsTrigger>
            <TabsTrigger value="municipios">Municípios</TabsTrigger>
            <TabsTrigger value="tendencia">Tendência</TabsTrigger>
            <TabsTrigger value="comparativo">Comparativo</TabsTrigger>
          </TabsList>

          <TabsContent value="areas" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Distribuição por Área Cultural</CardTitle>
                  <CardDescription>Investimento por tipo de cultura</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={dadosArea}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ area, percentual }) => `${area} ${percentual}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="valor"
                      >
                        {dadosArea.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`R$ ${Number(value).toLocaleString()}`, 'Investimento']} />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Investimento por Área</CardTitle>
                  <CardDescription>Valores absolutos por área cultural</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={dadosArea}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="area" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`R$ ${Number(value).toLocaleString()}`, 'Investimento']} />
                      <Bar dataKey="valor" fill="#10b981" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="municipios" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Comparativo Municipal</CardTitle>
                <CardDescription>Performance dos municípios da RMC</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={dadosMunicipio}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="municipio" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="propostas" fill="#3b82f6" name="Propostas" />
                    <Bar dataKey="aprovadas" fill="#10b981" name="Aprovadas" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tendencia" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Tendência Mensal</CardTitle>
                <CardDescription>Evolução de propostas ao longo do ano</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={dadosTendencia}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="mes" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="propostas" stroke="#3b82f6" name="Propostas" strokeWidth={2} />
                    <Line type="monotone" dataKey="aprovadas" stroke="#10b981" name="Aprovadas" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="comparativo" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Análise Comparativa</CardTitle>
                <CardDescription>Comparativo entre períodos e métricas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">📊</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Análise Comparativa
                  </h3>
                  <p className="text-gray-600">
                    Selecione os períodos acima para gerar o comparativo detalhado
                  </p>
                  <div className="mt-6">
                    <Button>Gerar Relatório Completo</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default IndicadoresPage;