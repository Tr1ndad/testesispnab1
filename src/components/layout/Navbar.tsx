'use client';

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Início' },
    { path: '/municipios', label: 'Municípios' },
    { path: '/editais', label: 'Editais' },
    { path: '/projetos', label: 'Projetos' },
    { path: '/indicadores', label: 'Indicadores' },
    { path: '/sobre', label: 'Sobre' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  console.log('Navbar renderizado - isOpen:', isOpen);

  return (
    <nav className="bg-green-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-white text-xl font-bold">
                SP SISPNAB
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'bg-green-700 text-white'
                      : 'text-green-100 hover:bg-green-700 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-white hover:bg-green-700">
                Entrar
              </Button>
            </Link>
            <Link to="/cadastro">
              <Button className="bg-white text-green-600 hover:bg-gray-100">
                Cadastrar
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-green-100 hover:text-white focus:outline-none focus:text-white"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-green-700">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.path)
                    ? 'bg-green-800 text-white'
                    : 'text-green-100 hover:bg-green-600 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-4 border-t border-green-600">
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="w-full text-white hover:bg-green-600">
                  Entrar
                </Button>
              </Link>
              <Link to="/cadastro" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-white text-green-600 hover:bg-gray-100">
                  Cadastrar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;