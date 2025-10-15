import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import BarraNavegacaoAnalista from "@/components/navigation/BarraNavegacaoAnalista";

const AnalistaRelatorios = () => {
  const [tipoRelatorio, setTipoRelatorio] = useState("avaliacoes");
  const [periodo, setPeriodo] = useState("2024");

  const relatoriosDisponiveis = [
    { id: "1", nome: "Relatório de Avaliações", descricao: "Estatísticas das avaliações realizadas", tipo: "avaliacoes" },
    { id: "2", nome: "Relatório de Aprovações", descricao: "Análise das propostas aprovadas", tipo: "aprovacoes" },
    { id: "3", nome: "Relatório de Rejeições", descricao: "Motivos de rejeição das propostas", tipo: "rejeicoes" },
    { id: "4", nome: "Relatório de Produtividade", descricao: "Desempenho individual do analista", tipo: "produtividade" }
  ];

  const gerarRelatorio = (tipo: string) => {
    console.log(`Gerando relatório ${tipo} para o período ${periodo}`);
    // Aqui seria a lógica de geração do relatório
    alert(`Relatório ${tipo} gerado com sucesso!`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Nova barra de navegação no topo */}
      <BarraNavegacaoAnalista />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Relatórios</h2>
            <p className="mt-1 text-sm text-gray-600">Gere e acesse relatórios de análise</p>
          </div>

          {/* Filtros */}
          <div className="mb-6 flex space-x-4">
            <Select value={tipoRelatorio} onValueChange={setTipoRelatorio}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Tipo de Relatório" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="avaliacoes">Avaliações</SelectItem>
                <SelectItem value="aprovacoes">Aprovações</SelectItem>
                <SelectItem value="rejeicoes">Rejeições</SelectItem>
                <SelectItem value="produtividade">Produtividade</SelectItem>
              </SelectContent>
            </Select>

            <Select value={periodo} onValueChange={setPeriodo}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Período" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
              </SelectContent>
            </Select>

            <Button onClick={() => gerarRelatorio(tipoRelatorio)}>
              Gerar Relatório
            </Button>
          </div>

          {/* Lista de Relatórios Disponíveis */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatoriosDisponiveis.map((relatorio) => (
              <Card key={relatorio.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{relatorio.nome}</CardTitle>
                  <CardDescription>{relatorio.descricao}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Período: {periodo}</span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => gerarRelatorio(relatorio.tipo)}
                    >
                      Gerar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Relatórios Gerados */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Relatórios Gerados</h3>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">Relatório de Avaliações - {periodo}</h4>
                      <p className="text-sm text-gray-500">Gerado em 15/03/2025 às 14:30</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        Visualizar
                      </Button>
                      <Button variant="outline" size="sm">
                        Baixar PDF
                      </Button>
                      <Button variant="outline" size="sm">
                        Baixar Excel
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">Relatório de Aprovações - {periodo}</h4>
                      <p className="text-sm text-gray-500">Gerado em 10/03/2025 às 09:15</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        Visualizar
                      </Button>
                      <Button variant="outline" size="sm">
                        Baixar PDF
                      </Button>
                      <Button variant="outline" size="sm">
                        Baixar Excel
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AnalistaRelatorios;