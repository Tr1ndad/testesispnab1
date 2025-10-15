import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import BarraNavegacaoAdmin from "@/components/navigation/BarraNavegacaoAdmin";

const AdminUsuarios = () => {
  const [roleFilter, setRoleFilter] = useState("todos");
  const [statusFilter, setStatusFilter] = useState("todos");

  const usuarios = [
    {
      id: "1",
      nome: "João Almeida",
      email: "joao.almeida@email.com",
      role: "proponente",
      municipio: "Pinhais",
      status: "ativo",
      dataCadastro: "10/01/2025"
    },
    {
      id: "2",
      nome: "Maria Fernandes",
      email: "maria.fernandes@sispnab.gov.br",
      role: "analista",
      municipio: "Curitiba",
      status: "ativo",
      dataCadastro: "15/01/2025"
    },
    {
      id: "3",
      nome: "Carlos Silva",
      email: "carlos.silva@email.com",
      role: "proponente",
      municipio: "Colombo",
      status: "ativo",
      dataCadastro: "20/01/2025"
    },
    {
      id: "4",
      nome: "Ana Costa",
      email: "ana.costa.artista@email.com",
      role: "artista",
      municipio: "Piraquara",
      status: "inativo",
      dataCadastro: "25/01/2025"
    },
    {
      id: "5",
      nome: "Pedro Oliveira",
      email: "pedro.oliveira@sispnab.gov.br",
      role: "admin",
      municipio: "Curitiba",
      status: "ativo",
      dataCadastro: "01/02/2025"
    }
  ];

  const getRoleColor = (role: string) => {
    switch (role) {
      case "admin":
        return "bg-purple-100 text-purple-800";
      case "analista":
        return "bg-green-100 text-green-800";
      case "proponente":
        return "bg-blue-100 text-blue-800";
      case "artista":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getRoleText = (role: string) => {
    switch (role) {
      case "admin":
        return "Administrador";
      case "analista":
        return "Analista";
      case "proponente":
        return "Proponente";
      case "artista":
        return "Artista";
      default:
        return role;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ativo":
        return "bg-green-100 text-green-800";
      case "inativo":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "ativo":
        return "Ativo";
      case "inativo":
        return "Inativo";
      default:
        return status;
    }
  };

  const usuariosFiltrados = usuarios.filter(usuario => {
    const matchesRole = roleFilter === "todos" || usuario.role === roleFilter;
    const matchesStatus = statusFilter === "todos" || usuario.status === statusFilter;
    return matchesRole && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Nova barra de navegação no topo */}
      <BarraNavegacaoAdmin />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Header */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Gerenciamento de Usuários</h2>
                <p className="mt-1 text-sm text-gray-600">Gerencie todos os usuários do sistema</p>
              </div>
              <Button className="bg-green-600 hover:bg-green-700">
                Novo Usuário
              </Button>
            </div>
          </div>

          {/* Filtros */}
          <div className="mb-6 flex space-x-4">
            <Select value={roleFilter} onValueChange={setRoleFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Cargo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos os Cargos</SelectItem>
                <SelectItem value="admin">Administrador</SelectItem>
                <SelectItem value="analista">Analista</SelectItem>
                <SelectItem value="proponente">Proponente</SelectItem>
                <SelectItem value="artista">Artista</SelectItem>
              </SelectContent>
            </Select>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos os Status</SelectItem>
                <SelectItem value="ativo">Ativo</SelectItem>
                <SelectItem value="inativo">Inativo</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Lista de Usuários */}
          <div className="space-y-4">
            {usuariosFiltrados.map((usuario) => (
              <Card key={usuario.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{usuario.nome}</CardTitle>
                      <CardDescription>{usuario.email}</CardDescription>
                    </div>
                    <div className="flex space-x-2">
                      <Badge className={getRoleColor(usuario.role)}>
                        {getRoleText(usuario.role)}
                      </Badge>
                      <Badge className={getStatusColor(usuario.status)}>
                        {getStatusText(usuario.status)}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <span className="text-sm text-gray-600">Município:</span>
                      <div className="font-medium">{usuario.municipio}</div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Data Cadastro:</span>
                      <div className="font-medium">{usuario.dataCadastro}</div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Status:</span>
                      <div className="font-medium">{getStatusText(usuario.status)}</div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Cargo:</span>
                      <div className="font-medium">{getRoleText(usuario.role)}</div>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" size="sm">
                      Editar
                    </Button>
                    <Button variant="outline" size="sm">
                      Ver Detalhes
                    </Button>
                    {usuario.status === "ativo" ? (
                      <Button variant="outline" size="sm">
                        Desativar
                      </Button>
                    ) : (
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        Ativar
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {usuariosFiltrados.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">Nenhum usuário encontrado com os filtros selecionados.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminUsuarios;