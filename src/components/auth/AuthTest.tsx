import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function AuthTest() {
  const { user, logout, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="p-4">
        <Card>
          <CardHeader>
            <CardTitle>Sistema de Login Mockado</CardTitle>
            <CardDescription>
              Faça login com as credenciais de teste para acessar o sistema
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Você não está logado. Use o formulário de login para acessar o sistema.
            </p>
            <Button asChild>
              <a href="/login">Fazer Login</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>Usuário Logado</CardTitle>
          <CardDescription>
            Informações do usuário atual no sistema mockado
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <strong>Nome:</strong> {user?.name}
          </div>
          <div>
            <strong>Email:</strong> {user?.email}
          </div>
          <div>
            <strong>Papel:</strong> {user?.role}
          </div>
          {user?.municipio && (
            <div>
              <strong>Município:</strong> {user.municipio}
            </div>
          )}
          <div>
            <strong>Permissões:</strong>
            <div className="mt-2 flex flex-wrap gap-2">
              {user?.permissions.map((permission: string) => (
                <span
                  key={permission}
                  className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded"
                >
                  {permission}
                </span>
              ))}
            </div>
          </div>
          <Button onClick={logout} variant="outline" className="mt-4">
            Sair
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}