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
    name: 'Proponente do Sistema',
    email: 'proponente@gmail.com',
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
    id: '2',
    name: 'Administrador do Sistema',
    email: 'admin@gmail.com',
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
    id: '3',
    name: 'Analista do Sistema',
    email: 'analista@gmail.com',
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
    name: 'Artista do Sistema',
    email: 'ana.costa.artista@gmail.com',
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
  'proponente@gmail.com': 'senha123',
  'admin@gmail.com': 'admin123',
  'analista@gmail.com': 'senha123',
  'ana.costa.artista@gmail.com': 'senha123'
};

export const useAuthMock = (): AuthReturn => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string): Promise<boolean> => {
    console.log('=== INÍCIO DA FUNÇÃO LOGIN NO useAuthMock ===');
    console.log('Email recebido:', email);
    console.log('Senha recebida:', password);
    console.log('Credenciais disponíveis:', Object.keys(TEST_CREDENTIALS));

    // Simular delay de rede
    await new Promise(resolve => setTimeout(resolve, 500));

    const validPassword = TEST_CREDENTIALS[email as keyof typeof TEST_CREDENTIALS];
    
    console.log('Senha válida para este email:', validPassword);
    console.log('Senhas coincidem?', validPassword === password);
    
    if (validPassword && validPassword === password) {
      const foundUser = TEST_USERS.find(u => u.email === email);
      console.log('Usuário encontrado:', foundUser);
      
      if (foundUser) {
        setUser(foundUser);
        localStorage.setItem('mockUser', JSON.stringify(foundUser));
        console.log('Login bem-sucedido para:', email);
        console.log('=== FIM DA FUNÇÃO LOGIN NO useAuthMock ===');
        return true;
      }
    }
    
    console.log('Login falhou para:', email);
    console.log('=== FIM DA FUNÇÃO LOGIN NO useAuthMock ===');
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