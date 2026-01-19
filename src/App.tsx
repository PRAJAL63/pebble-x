import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Public pages
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgetPassword from './pages/ForgetPassword';
import ResetPassword from './pages/ResetPassword';

// Shared
import Dashboard from './pages/dashboard';
import ProtectedRoute from './components/ProtectedRoute';

// Supplier pages
import SupplierProducts from './pages/supplier/Products';
import ProductForm from './pages/supplier/ProductForm';
import SupplierOrders from './pages/supplier/Orders';
import SupplierOrderDetails from './pages/supplier/OrderDetails';
import SupplierReports from './pages/supplier/Reports';
import SupplierProfile from './pages/supplier/Profile';

// Admin pages
import AdminHome from './pages/admin/Home';
import AdminProducts from './pages/admin/Products';
import AdminProductDetails from './pages/admin/ProductDetails';
import AdminOrders from './pages/admin/Orders';
import AdminOrderDetails from './pages/admin/OrderDetails';
import EditProductForm from './pages/supplier/EditProductForm';
import UserTable from './pages/admin/UserTable';
import UserDetails from './pages/admin/UserDetails';
import Profile from './pages/admin/Profile';

export default function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* General protected */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* Supplier routes */}
      <Route
        path="/supplier/products"
        element={
          <ProtectedRoute allowedRoles={['SUPPLIER']}>
            <SupplierProducts />
          </ProtectedRoute>
        }
      />
      <Route
        path="/supplier/products/new"
        element={
          <ProtectedRoute allowedRoles={['SUPPLIER']}>
            <ProductForm />
          </ProtectedRoute>
        }
      />
      <Route
        path="/supplier/products/:id/edit"
        element={
          <ProtectedRoute allowedRoles={['SUPPLIER']}>
            <EditProductForm />
          </ProtectedRoute>
        }
      />
      <Route
        path="/supplier/orders"
        element={
          <ProtectedRoute allowedRoles={['SUPPLIER']}>
            <SupplierOrders />
          </ProtectedRoute>
        }
      />
      <Route
        path="/supplier/orders/:id"
        element={
          <ProtectedRoute allowedRoles={['SUPPLIER']}>
            <SupplierOrderDetails />
          </ProtectedRoute>
        }
      />
      <Route
        path="/supplier/reports"
        element={
          <ProtectedRoute allowedRoles={['SUPPLIER']}>
            <SupplierReports />
          </ProtectedRoute>
        }
      />
      <Route
        path="/supplier/profile"
        element={
          <ProtectedRoute allowedRoles={['SUPPLIER']}>
            <SupplierProfile />
          </ProtectedRoute>
        }
      />

      {/* Admin routes */}
      <Route
        path="/admin/home"
        element={
          <ProtectedRoute allowedRoles={['ADMIN']}>
            <AdminHome />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/products"
        element={
          <ProtectedRoute allowedRoles={['ADMIN']}>
            <AdminProducts />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/products/:id"
        element={
          <ProtectedRoute allowedRoles={['ADMIN']}>
            <AdminProductDetails />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/orders"
        element={
          <ProtectedRoute allowedRoles={['ADMIN']}>
            <AdminOrders />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/orders/:id"
        element={
          <ProtectedRoute allowedRoles={['ADMIN']}>
            <AdminOrderDetails />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/users"
        element={
          <ProtectedRoute allowedRoles={['ADMIN']}>
            <UserTable />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/users/:id"
        element={
          <ProtectedRoute allowedRoles={['ADMIN']}>
            <UserDetails />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/profile"
        element={
          <ProtectedRoute allowedRoles={['ADMIN']}>
            <Profile />
          </ProtectedRoute>
        }
      />

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
