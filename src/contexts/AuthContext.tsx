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