import { createContext, useContext, ReactNode } from 'react';
import { useAuthMock } from '@/hooks/useAuthMock';

interface AuthContextType {
  user: any;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  hasPermission: (permission: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const auth = useAuthMock();

  console.log('AuthProvider renderizado - isAuthenticated:', auth.isAuthenticated);
  console.log('AuthProvider renderizado - user:', auth.user);

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  console.log('useAuth chamado - isAuthenticated:', context.isAuthenticated);
  return context;
};

// Hook para proteger rotas
export const useProtectedRoute = () => {
  const { isAuthenticated, user } = useAuth();
  
  console.log('useProtectedRoute - isAuthenticated:', isAuthenticated);
  
  if (!isAuthenticated) {
    // Em um app real, redirecionaria para login
    return { isAuthenticated: false, user: null };
  }
  
  return { isAuthenticated: true, user };
};

// Hierarquia de cargos
export const ROLES = {
  ADMIN: 'admin',           // Cargo mais alto
  ANALISTA: 'analista',
  PROPONENTE: 'proponente',
  ARTISTA: 'artista',
  VISITANTE: 'visitante'    // Cargo mais baixo
};

// Função para verificar se um usuário tem um cargo específico
export const hasRole = (user: any, role: string): boolean => {
  return user?.role === role;
};

// Função para verificar se um usuário tem um cargo superior ou igual
export const hasRoleOrHigher = (user: any, role: string): boolean => {
  const roleHierarchy = {
    [ROLES.ADMIN]: 4,
    [ROLES.ANALISTA]: 3,
    [ROLES.PROPONENTE]: 2,
    [ROLES.ARTISTA]: 1,
    [ROLES.VISITANTE]: 0
  };
  
  const userRoleLevel = roleHierarchy[user?.role] || 0;
  const requiredRoleLevel = roleHierarchy[role] || 0;
  
  return userRoleLevel >= requiredRoleLevel;
};