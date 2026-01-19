import { useGetMe } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { User } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const { data } = useGetMe();
  const navigate = useNavigate();

  const handleProfileClick = () => {
    const role = data?.user?.role;
    if (role === 'SUPPLIER') {
      navigate('/supplier/profile');
    } else if (role === 'ADMIN') {
      navigate('/admin/profile');
    }
  };

  return (
    <header className="p-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center bg-white dark:bg-gray-900 shadow-sm dark:shadow-gray-800 transition-colors">
      <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Dashboard</h1>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="cursor-pointer border px-4 py-2 text-sm rounded-2xl">
            {data?.user?.name}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-48 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800"
        >
          <DropdownMenuItem
            onClick={handleProfileClick}
            className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white"
          >
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Header;
