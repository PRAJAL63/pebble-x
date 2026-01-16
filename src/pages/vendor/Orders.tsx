import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import OrderTable from '@/components/order/OrderTable';
import { useOrders } from '@/hooks/useOrders';
import { Spinner } from '@/components/ui/spinner';

export default function VendorOrders() {
  const { data: orders, isLoading } = useOrders({ vendorId: 'ven-1' }); // TODO: Get from auth

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">My Orders</h1>
            <p className="text-gray-500 mt-1">Track your order history</p>
          </div>

          {isLoading && (
            <div className="flex justify-center items-center h-64">
              <Spinner className="w-8 h-8" />
            </div>
          )}

          {!isLoading && orders && orders.length === 0 && (
            <div className="bg-white rounded-lg shadow p-12 text-center">
              <p className="text-gray-500 mb-4">No orders found</p>
              <p className="text-sm text-gray-400">
                Start browsing products to place your first order
              </p>
            </div>
          )}

          {orders && orders.length > 0 && <OrderTable orders={orders} isSupplier={false} />}
        </main>
      </div>
    </div>
  );
}
