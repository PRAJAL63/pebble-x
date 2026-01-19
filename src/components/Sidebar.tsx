import { useNavigate, useLocation } from 'react-router-dom';
import {
  Home,
  ShoppingCart,
  Users,
  Settings,
  ShieldAlert,
  Package,
  FileText,
  LogOut,
  User,
} from 'lucide-react';
import { useGetMe } from '@/hooks/useAuth';
import { ModeToggle } from './mode-toggle';
import { Profiler, useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data } = useGetMe();
  const userRole = data?.user.role || '';
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  console.log('Sidebar Render - userRole:', data?.user.role, 'path:', location.pathname);
  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
    navigate('/login');
    setShowLogoutDialog(false);
  };

  const navItemClass = (path: string) => {
    return `flex items-center space-x-2 rounded-sm mr-20 px-3 py-2 cursor-pointer transition-colors ${
      isActive(path)
        ? 'text-green-600 dark:text-green-500 font-medium bg-emerald-50 dark:bg-gray-800'
        : 'text-gray-500 dark:text-gray-400 hover:bg-emerald-50 dark:hover:bg-gray-800'
    }`;
  };

  return (
    <aside className="w-64 bg-white dark:bg-gray-900 h-screen shadow dark:shadow-gray-800 p-4 hidden md:block sticky top-0 overflow-y-auto border-r border-gray-200 dark:border-gray-800">
      <div className="text-2xl font-bold mb-10 text-gray-900 dark:text-white">PebbleX</div>
      <nav className="space-y-4">
        {/* Supplier Navigation */}
        {userRole === 'SUPPLIER' && (
          <>
            <div className="text-gray-500 dark:text-gray-400 font-semibold text-sm uppercase">
              Supplier
            </div>
            <ul className="space-y-2">
              <li
                className={navItemClass('/supplier/products')}
                onClick={() => navigate('/supplier/products')}
              >
                <Package size={18} /> <span>Products</span>
              </li>
              <li
                className={navItemClass('/supplier/orders')}
                onClick={() => navigate('/supplier/orders')}
              >
                <ShoppingCart size={18} /> <span>Orders</span>
              </li>
              <li
                className={navItemClass('/supplier/reports')}
                onClick={() => navigate('/supplier/reports')}
              >
                <FileText size={18} /> <span>Reports</span>
              </li>
            </ul>
          </>
        )}

        {/* Default Navigation (Admin/Dashboard) */}
        {userRole === 'ADMIN' ? (
          <>
            <div className="text-gray-500 dark:text-gray-400 font-semibold text-sm uppercase">
              Marketing
            </div>
            <ul className="space-y-2">
              <li className={navItemClass('/dashboard')} onClick={() => navigate('/admin/home')}>
                <Home size={18} /> <span>Dashboard</span>
              </li>
              {/* <li
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 rounded-sm mr-20 px-3 py-2 hover:bg-emerald-50 dark:hover:bg-gray-800 cursor-pointer"
                onClick={() => navigate('/admin/home')}
              >
                <ShoppingCart size={18} /> <span>Marketplace</span>
              </li> */}
              <li
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 rounded-sm mr-20 px-3 py-2 hover:bg-emerald-50 dark:hover:bg-gray-800 cursor-pointer transition-colors"
                onClick={() => navigate('/admin/products')}
              >
                <ShoppingCart size={18} /> <span>Products</span>
              </li>
              <li
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 rounded-sm mr-20 px-3 py-2 hover:bg-emerald-50 dark:hover:bg-gray-800 cursor-pointer transition-colors"
                onClick={() => navigate('/admin/orders')}
              >
                <ShieldAlert size={18} /> <span>Orders</span>
              </li>
              <li
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 rounded-sm mr-20 px-3 py-2 hover:bg-emerald-50 dark:hover:bg-gray-800 cursor-pointer transition-colors"
                onClick={() => navigate('/admin/users')}
              >
                <Users size={18} /> <span>Customers</span>
              </li>
            </ul>
          </>
        ) : null}

        {/* System Settings */}
        <div className="text-gray-500 dark:text-gray-400 font-semibold text-sm uppercase mt-6">
          System
        </div>
        <ul className="space-y-2">
          <li
            className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 rounded-sm mr-20 px-3 py-2 hover:bg-emerald-50 dark:hover:bg-gray-800 cursor-pointer transition-colors"
            onClick={() =>
              navigate(userRole === 'SUPPLIER' ? '/supplier/profile' : '/admin/profile')
            }
          >
            <User size={18} /> <span>Profile</span>
          </li>
          <li className="text-gray-500 dark:text-gray-400 rounded-sm mr-20 px-3 py-2 hover:bg-emerald-50 dark:hover:bg-gray-800 transition-colors">
            <ModeToggle />
          </li>
        </ul>
        <ul className="space-y-2 mt-6">
          <li
            className="flex items-center space-x-2 text-red-600 dark:text-red-500 rounded-sm mr-20 px-3 py-2 hover:bg-red-50 dark:hover:bg-red-900/20 cursor-pointer transition-colors font-medium"
            onClick={() => setShowLogoutDialog(true)}
          >
            <LogOut size={18} />
            <span>Log out</span>
          </li>
        </ul>
      </nav>

      <AlertDialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
        <AlertDialogContent className="bg-white dark:bg-gray-800">
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure you want to logout?</AlertDialogTitle>
            <AlertDialogDescription>
              You will be signed out of your account and redirected to the login page.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 cursor-pointer"
            >
              Logout
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </aside>
  );
};

export default Sidebar;
