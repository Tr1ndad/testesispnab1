import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface LogoutButtonProps {
  className?: string;
  children?: React.ReactNode;
}

const LogoutButton = ({ className = "", children = "Sair" }: LogoutButtonProps) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <button 
      onClick={handleLogout}
      className={className}
    >
      {children}
    </button>
  );
};

export default LogoutButton;