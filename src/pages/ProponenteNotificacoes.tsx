Todas as notificações`}
                </p>
              </div>
              {naoLidas > 0 && (
                <Button variant="outline" size="sm">
                  Marcar todas como lidas
                </Button>
              )}
            </div>
          </div>

          {/* Filtros */}
          <div className="mb-6">
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  activeTab === "all"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Todas ({notificacoes.length})
              </button>
              <button
                onClick={() => setActiveTab("aprovacao")}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  activeTab === "aprovacao"
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Aprovações (1)
              </button>
              <button
                onClick={() => setActiveTab("analise")}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  activeTab === "analise"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Análises (1)
              </button>
              <button
                onClick={() => setActiveTab("rejeicao")}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  activeTab === "rejeicao"
                    ? "bg-red-100 text-red-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Rejeições (1)
              </button>
              <button
                onClick={() => setActiveTab("prazo")}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  activeTab === "prazo"
                    ? "bg-orange-100 text-orange-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Prazos (1)
              </button>
            </div>
          </div>

          {/* Lista de Notificações */}
          <div className="space-y-4">
            {notificacoesFiltradas.map((notificacao) => (
              <Card 
                key={notificacao.id} 
                className={`hover:shadow-md transition-shadow ${!notificacao.lida ? 'bg-blue-50 border-blue-200' : ''}`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <span className="text-2xl">{getTipoIcon(notificacao.tipo)}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-sm font-semibold text-gray-900">{notificacao.titulo}</h3>
                          {!notificacao.lida && (
                            <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-1"></span>
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={getTipoColor(notificacao.tipo)}>
                            {getTipoText(notificacao.tipo)}
                          </Badge>
                          <span className="text-xs text-gray-500">{notificacao.data}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{notificacao.mensagem}</p>
                      <div className="flex justify-between items-center">
                        <div className="text-xs text-gray-500">
                          {notificacao.projeto && (
                            <span>Projeto: {notificacao.projeto}</span>
                          )}
                          {notificacao.edital && (
                            <span>Edital: {notificacao.edital}</span>
                          )}
                        </div>
                        {!notificacao.lida && (
                          <Button size="sm" variant="outline">
                            Marcar como lida
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {notificacoesFiltradas.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">Nenhuma notificação encontrada com o filtro selecionado.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ProponenteNotificacoes;