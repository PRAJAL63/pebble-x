import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgetPassword from './pages/ForgetPassword';
import ResetPassword from './pages/ResetPassword';
import Dashboard from './pages/dashboard';
// import ProtectedRoute from './components/ProtectedRoute';

// Supplier Pages
import SupplierProducts from './pages/supplier/Products';
import ProductForm from './pages/supplier/ProductForm';
import SupplierOrders from './pages/supplier/Orders';
import SupplierOrderDetails from './pages/supplier/OrderDetails';
import SupplierReports from './pages/supplier/Reports';

// Vendor Pages
import VendorHome from './pages/vendor/Home';
import VendorProducts from './pages/vendor/Products';
import VendorProductDetails from './pages/vendor/ProductDetails';
import VendorOrders from './pages/vendor/Orders';
import VendorOrderDetails from './pages/vendor/OrderDetails';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Supplier Routes */}
        <Route
          path="/supplier/products"
          element={
            // <ProtectedRoute requiredRole="supplier">
            <SupplierProducts />
            // </ProtectedRoute>
          }
        />
        <Route
          path="/supplier/products/new"
          element={
            // <ProtectedRoute requiredRole="supplier">
            <ProductForm />
            // </ProtectedRoute>
          }
        />
        <Route
          path="/supplier/products/:id/edit"
          element={
            // <ProtectedRoute requiredRole="supplier">
            <ProductForm />
            // </ProtectedRoute>
          }
        />
        <Route
          path="/supplier/orders"
          element={
            // <ProtectedRoute requiredRole="supplier">
            <SupplierOrders />
            // </ProtectedRoute>
          }
        />
        <Route
          path="/supplier/orders/:id"
          element={
            // <ProtectedRoute requiredRole="supplier">
            <SupplierOrderDetails />
            // </ProtectedRoute>
          }
        />
        <Route
          path="/supplier/reports"
          element={
            // <ProtectedRoute requiredRole="supplier">
            <SupplierReports />
            // </ProtectedRoute>
          }
        />

        {/* Vendor Routes */}
        <Route
          path="/vendor/home"
          element={
            // <ProtectedRoute requiredRole="vendor">
            <VendorHome />
            // </ProtectedRoute>
          }
        />
        <Route
          path="/vendor/products"
          element={
            // <ProtectedRoute requiredRole="vendor">
            <VendorProducts />
            // </ProtectedRoute>
          }
        />
        <Route
          path="/vendor/products/:id"
          element={
            // <ProtectedRoute requiredRole="vendor">
            <VendorProductDetails />
            // </ProtectedRoute>
          }
        />
        <Route
          path="/vendor/orders"
          element={
            // <ProtectedRoute requiredRole="vendor">
            <VendorOrders />
            // </ProtectedRoute>
          }
        />
        <Route
          path="/vendor/orders/:id"
          element={
            // <ProtectedRoute requiredRole="vendor">
            <VendorOrderDetails />
            // </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
