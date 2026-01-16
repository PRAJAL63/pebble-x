import { useNavigate, useLocation } from 'react-router-dom';
import {
  Home,
  ShoppingCart,
  Users,
  Settings,
  Sun,
  Book,
  DollarSign,
  ShieldAlert,
  Tag,
  Package,
  FileText,
  Search,
  ShoppingBag,
} from 'lucide-react';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userRole = localStorage.getItem('userRole') || 'supplier'; // TODO: Get from auth context

  const isActive = (path: string) => location.pathname === path;

  const navItemClass = (path: string) => {
    return `flex items-center space-x-2 rounded-sm mr-20 px-3 py-2 cursor-pointer ${
      isActive(path)
        ? 'text-green-600 font-medium bg-emerald-50'
        : 'text-gray-500 hover:bg-emerald-50'
    }`;
  };

  return (
    <aside className="w-64 bg-white h-screen shadow p-4 hidden md:block sticky top-0 overflow-y-auto">
      <div className="text-2xl font-bold mb-10">PebbleX</div>
      <nav className="space-y-4">
        {/* Supplier Navigation */}
        {userRole === 'supplier' && (
          <>
            <div className="text-gray-500 font-semibold text-sm uppercase">Supplier</div>
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

        {/* Vendor Navigation */}
        {userRole === 'vendor' && (
          <>
            <div className="text-gray-500 font-semibold text-sm uppercase">Vendor</div>
            <ul className="space-y-2">
              <li className={navItemClass('/vendor/home')} onClick={() => navigate('/vendor/home')}>
                <Home size={18} /> <span>Home</span>
              </li>
              <li
                className={navItemClass('/vendor/products')}
                onClick={() => navigate('/vendor/products')}
              >
                <Search size={18} /> <span>Browse Products</span>
              </li>
              <li
                className={navItemClass('/vendor/orders')}
                onClick={() => navigate('/vendor/orders')}
              >
                <ShoppingBag size={18} /> <span>My Orders</span>
              </li>
            </ul>
          </>
        )}

        {/* Default Navigation (Admin/Dashboard) */}
        {!userRole || userRole === 'admin' ? (
          <>
            <div className="text-gray-500 font-semibold text-sm uppercase">Marketing</div>
            <ul className="space-y-2">
              <li className={navItemClass('/dashboard')} onClick={() => navigate('/dashboard')}>
                <Home size={18} /> <span>Dashboard</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-500 rounded-sm mr-20 px-3 py-2 hover:bg-emerald-50 cursor-pointer">
                <ShoppingCart size={18} /> <span>Marketplace</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-500 rounded-sm mr-20 px-3 py-2 hover:bg-emerald-50 cursor-pointer">
                <ShoppingCart size={18} /> <span>Orders</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-500 rounded-sm mr-20 px-3 py-2 hover:bg-emerald-50 cursor-pointer">
                <ShieldAlert size={18} /> <span>Tracking</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-500 rounded-sm mr-20 px-3 py-2 hover:bg-emerald-50 cursor-pointer">
                <Users size={18} /> <span>Customers</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-500 rounded-sm mr-20 px-3 py-2 hover:bg-emerald-50 cursor-pointer">
                <Tag size={18} /> <span>Discounts</span>
              </li>
            </ul>
            <div className="text-gray-500 font-semibold text-sm uppercase mt-6">Payments</div>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-500 rounded-sm mr-20 px-3 py-2 hover:bg-emerald-50 cursor-pointer">
                <Book size={18} /> <span>Ledger</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-500 rounded-sm mr-20 px-3 py-2 hover:bg-emerald-50 cursor-pointer">
                <DollarSign size={18} /> <span>Taxes</span>
              </li>
            </ul>
          </>
        ) : null}

        {/* System Settings */}
        <div className="text-gray-500 font-semibold text-sm uppercase mt-6">System</div>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2 text-gray-500 rounded-sm mr-20 px-3 py-2 hover:bg-emerald-50 cursor-pointer">
            <Settings size={18} /> <span>Settings</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-500 rounded-sm mr-20 px-3 py-2 hover:bg-emerald-50 cursor-pointer">
            <Sun size={18} /> <span>Dark Mode</span>
          </li>
        </ul>
        <div
          className="text-gray-500 font-semibold text-sm uppercase mt-6 cursor-pointer hover:text-red-600"
          onClick={() => {
            localStorage.removeItem('authToken');
            localStorage.removeItem('userRole');
            navigate('/login');
          }}
        >
          Log out
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
