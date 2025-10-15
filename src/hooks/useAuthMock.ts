import { useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'gestor' | 'proponente' | 'analista' | 'artista';
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
    name: 'Fernanda Santos',
    email: 'fernanda.santos@pinhais.pr.gov.br',
    role: 'gestor',
    municipio: 'Pinhais',
    permissions: [
      'dashboard',
      'municipios',
      'editais',
      'projetos',
      'indicadores',
      'sobre',
      'faq',
      'contato',
      'gestor'
    ]
  },
  {
    id: '4',
    name: 'Carlos Silva',
    email: 'carlos.silva@colombo.pr.gov.br',
    role: 'gestor',
    municipio: 'Colombo',
    permissions: [
      'dashboard',
      'municipios',
      'editais',
      'projetos',
      'indicadores',
      'sobre',
      'faq',
      'contato',
      'gestor'
    ]
  },
  {
    id: '5',
    name: 'Roberto Lima',
    email: 'roberto.lima@piraquara.pr.gov.br',
    role: 'gestor',
    municipio: 'Piraquara',
    permissions: [
      'dashboard',
      'municipios',
      'editais',
      'projetos',
      'indicadores',
      'sobre',
      'faq',
      'contato',
      'gestor'
    ]
  },
  {
    id: '6',
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
    id: '7',
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
  'fernanda.santos@pinhais.pr.gov.br': 'senha123',
  'carlos.silva@colombo.pr.gov.br': 'senha123',
  'roberto.lima@piraquara.pr.gov.br': 'senha123',
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
        return true;
      }
    }
    
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('mockUser');
  };

  const isAuthenticated = !!user;

  const hasPermission = (permission: string): boolean => {
    return user?.permissions.includes(permission) || false;
  };

  // Restaurar sessão do localStorage ao carregar
  useEffect(() => {
    const savedUser = localStorage.getItem('mockUser');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('mockUser');
      }
    }
  }, []);

  return {
    user,
    login,
    logout,
    isAuthenticated,
    hasPermission
  };
};