import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: 'supplier' | 'vendor' | 'admin';
}

export const ProtectedRoute = ({ children, requiredRole }: ProtectedRouteProps) => {
  const token = localStorage.getItem('authToken');

  // TODO: When backend is ready, fetch and verify user role from token/API
  // For now, mock role from localStorage
  const userRole = localStorage.getItem('userRole') as 'supplier' | 'vendor' | 'admin' | null;

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && userRole !== requiredRole) {
    // Redirect to appropriate dashboard based on role
    if (userRole === 'supplier') return <Navigate to="/supplier/products" replace />;
    if (userRole === 'vendor') return <Navigate to="/vendor/home" replace />;
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};
