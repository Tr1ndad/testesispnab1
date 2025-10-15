import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import BarraNavegacaoAdmin from '@/components/navigation/BarraNavegacaoAdmin';

const AdminRelatorios = () => {
  const [tipoRelatorio, setTipoRelatorio] = useState('editais');
  const [dataInicio, setDataInicio] = useState('');
  const [dataFim, setDataFim] = useState('');

  const handleGerarRelatorio = () => {
    console.log('Gerando relatório:', { tipoRelatorio, dataInicio, dataFim });
    // Implementar lógica de geração de relatório
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <BarraNavegacaoAdmin />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Relatórios</h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Gerar Relatório</CardTitle>
            <CardDescription>Selecione o tipo e período do relatório</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Relatório
                  </label>
                  <Select value={tipoRelatorio} onValueChange={setTipoRelatorio}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Tipo de Relatório" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="editais">Editais</SelectItem>
                      <SelectItem value="projetos">Projetos</SelectItem>
                      <SelectItem value="financeiro">Financeiro</SelectItem>
                      <SelectItem value="usuarios">Usuários</SelectItem>
                      <SelectItem value="municipios">Municípios</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Data Início
                  </label>
                  <input
                    type="date"
                    value={dataInicio}
                    onChange={(e) => setDataInicio(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Data Fim
                  </label>
                  <input
                    type="date"
                    value={dataFim}
                    onChange={(e) => setDataFim(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <Button onClick={handleGerarRelatorio} className="bg-green-600 hover:bg-green-700">
                  Gerar Relatório
                </Button>
                <Button variant="outline">
                  Exportar PDF
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Últimos Relatórios</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8 text-gray-500">
              <p>Nenhum relatório gerado ainda</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminRelatorios;