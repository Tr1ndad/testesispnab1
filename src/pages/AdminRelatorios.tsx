onValueChange={setTipoRelatorio}>
              <SelectTrigger className="w-48">
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
                      <h4 className="font-medium">Relatório de Editais - {periodo}</h4>
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
                      <h4 className="font-medium">Relatório Financeiro - {periodo}</h4>
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

export default AdminRelatorios;