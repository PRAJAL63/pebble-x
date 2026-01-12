import { Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3 cursor-pointer">
      <div className="bg-gradient-to-br from-indigo-600 to-teal-500 p-2.5 rounded-xl shadow-lg shadow-indigo-200">
        <Cpu className="h-6 w-6 text-white" />
      </div>
      <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 tracking-tight">
        PebbleX
      </span>
    </Link>
  );
}
