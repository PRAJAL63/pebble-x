import React from 'react';
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
} from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white h-screen shadow p-4 hidden md:block sticky top-0">
      <div className="text-2xl font-bold mb-10">VACUUM</div>
      <nav className="space-y-4">
        <div className="text-gray-500 font-semibold">MARKETING</div>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2 text-green-600 font-medium rounded-sm mr-20 px-3 hover:bg-emerald-50">
            <Home size={18} /> <span>Dashboard</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-500 rounded-sm mr-20 px-3 hover:bg-emerald-50">
            <ShoppingCart size={18} /> <span>Marketplace</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-500 rounded-sm mr-20 px-3 hover:bg-emerald-50">
            <ShoppingCart size={18} /> <span>Orders</span>
          </li>
          <li className="flex items-center spaxe-x-2 text-gray-500 rounded-sm mr-20 px-3 hover:bg-emerald-50">
            <ShieldAlert size={18} /> <span>Tracking</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-500 rounded-sm mr-20 px-3 hover:bg-emerald-50">
            <Users size={18} /> <span>Customers</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-500 rounded-sm mr-20 px-3 hover:bg-emerald-50">
            <Tag size={18} /> <span>Discounts</span>
          </li>
        </ul>
        <div className="text-gray-500 font-semibold mt-6">PAYMENTS</div>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2 text-gray-500 rounded-sm mr-20 px-3 hover:bg-emerald-50">
            <Book size={18} /> <span>Ledger</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-500 rounded-sm mr-20 px-3 hover:bg-emerald-50">
            <DollarSign size={18} /> <span>Taxes</span>
          </li>
        </ul>
        <div className="text-gray-500 font-semibold mt-6">SYSTEM</div>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2 text-gray-500 rounded-sm mr-20 px-3 hover:bg-emerald-50">
            <Settings size={18} /> <span>Settings</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-500 rounded-sm mr-20 px-3 hover:bg-emerald-50">
            <Sun size={18} /> <span>Dark Mode</span>
          </li>
        </ul>
        <div className="text-gray-500 font-semibold mt-6">Log out</div>
      </nav>
    </aside>
  );
};

export default Sidebar;
