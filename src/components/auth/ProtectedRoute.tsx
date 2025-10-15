import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: string;
  redirectTo?: string;
}

export function ProtectedRoute({ 
  children, 
  requiredRole, 
  redirectTo = '/login' 
}: ProtectedRouteProps) {
  const { user } = useAuth();
  
  console.log('ProtectedRoute - User:', user);
  console.log('ProtectedRoute - Required Role:', requiredRole);
  console.log('ProtectedRoute - User Role:', user?.role);
  
  if (!user) {
    console.log('Sem user, redirecionando para login');
    return <Navigate to={redirectTo} replace />;
  }
  
  if (requiredRole && user.role !== requiredRole) {
    console.log(`Role mismatch: ${user.role} !== ${requiredRole}, redirecionando para /dashboard/${user.role}`);
    return <Navigate to={`/dashboard/${user.role}`} replace />;
  }
  
  console.log('ProtectedRoute - Permitindo acesso');
  return <>{children}</>;
}