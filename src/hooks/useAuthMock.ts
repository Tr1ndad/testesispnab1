import { useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'analista' | 'proponente' | 'artista';
  municipio?: string;
  permissions: string[];
}

interface AuthReturn {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  hasPermission: (permission: string) => boolean;
}

// Usuários de teste em memória
const TEST_USERS: User[] = [
  {
    id: '1',
    name: 'Administrador do Sistema',
    email: 'admin@sispnab.gov.br',
    role: 'admin',
    permissions: [
      'dashboard',
      'municipios',
      'editais',
      'projetos',
      'indicadores',
      'sobre',
      'faq',
      'contato',
      'gestor',
      'analista',
      'proponente',
      'admin'
    ]
  },
  {
    id: '2',
    name: 'João Almeida',
    email: 'joao.almeida@email.com',
    role: 'proponente',
    permissions: [
      'dashboard',
      'editais',
      'projetos',
      'indicadores',
      'sobre',
      'faq',
      'contato'
    ]
  },
  {
    id: '3',
    name: 'Maria Fernandes',
    email: 'analista@sispnab.gov.br',
    role: 'analista',
    permissions: [
      'dashboard',
      'municipios',
      'editais',
      'projetos',
      'indicadores',
      'sobre',
      'faq',
      'contato',
      'analista'
    ]
  },
  {
    id: '4',
    name: 'Ana Costa',
    email: 'ana.costa.artista@email.com',
    role: 'artista',
    permissions: [
      'dashboard',
      'editais',
      'projetos',
      'indicadores',
      'sobre',
      'faq',
      'contato'
    ]
  }
];

// Credenciais de teste
const TEST_CREDENTIALS = {
  'admin@sispnab.gov.br': 'admin123',
  'joao.almeida@email.com': 'senha123',
  'analista@sispnab.gov.br': 'senha123',
  'ana.costa.artista@email.com': 'senha123'
};

export const useAuthMock = (): AuthReturn => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simular delay de rede
    await new Promise(resolve => setTimeout(resolve, 500));

    const validPassword = TEST_CREDENTIALS[email as keyof typeof TEST_CREDENTIALS];
    
    if (validPassword && validPassword === password) {
      const foundUser = TEST_USERS.find(u => u.email === email);
      if (foundUser) {
        setUser(foundUser);
        localStorage.setItem('mockUser', JSON.stringify(foundUser));
        console.log('Login bem-sucedido para:', email);
        return true;
      }
    }
    
    console.log('Login falhou para:', email);
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('mockUser');
    console.log('Logout realizado');
  };

  const isAuthenticated = !!user;

  const hasPermission = (permission: string): boolean => {
    const hasPerm = user?.permissions.includes(permission) || false;
    console.log(`Verificando permissão "${permission}" para usuário ${user?.email}:`, hasPerm);
    return hasPerm;
  };

  // Restaurar sessão do localStorage ao carregar
  useEffect(() => {
    const savedUser = localStorage.getItem('mockUser');
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
        console.log('Usuário restaurado do localStorage:', parsedUser.email);
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('mockUser');
      }
    } else {
      console.log('Nenhum usuário salvo no localStorage');
    }
  }, []);

  // Debug: sempre logar o estado atual
  console.log('useAuthMock - user:', user);
  console.log('useAuthMock - isAuthenticated:', isAuthenticated);

  return {
    user,
    login,
    logout,
    isAuthenticated,
    hasPermission
  };
};