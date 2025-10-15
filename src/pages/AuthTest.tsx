import { AuthTest } from "@/components/auth/AuthTest";

const AuthTestPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Teste de Sistema de Login Mockado</h1>
        <AuthTest />
      </div>
    </div>
  );
};

export default AuthTestPage;