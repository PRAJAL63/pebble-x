import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import OrderDetails from '@/components/order/OrderDetails';
import { useOrder, useUpdateOrderStatus } from '@/hooks/useOrders';
import { Spinner } from '@/components/ui/spinner';
import { Button } from '@/components/ui/button';
import { Check, X, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
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

export default function SupplierOrderDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: order, isLoading } = useOrder(id || '');
  const updateStatus = useUpdateOrderStatus();
  const [action, setAction] = useState<'approve' | 'reject' | null>(null);

  const handleStatusUpdate = async (newStatus: 'approved' | 'rejected') => {
    if (!id) return;
    await updateStatus.mutateAsync({ id, status: newStatus });
    setAction(null);
  };

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner className="w-8 h-8" />
      </div>
    );
  }

  if (!order) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-4">Order not found</p>
          <Button onClick={() => navigate('/supplier/orders')}>Back to Orders</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          <div className="mb-6 flex justify-between items-center">
            <Button variant="ghost" onClick={() => navigate('/supplier/orders')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Orders
            </Button>

            {order.status === 'pending' && (
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="text-red-600 border-red-300 hover:bg-red-50"
                  onClick={() => setAction('reject')}
                  disabled={updateStatus.isPending}
                >
                  <X className="w-4 h-4 mr-2" />
                  Reject
                </Button>
                <Button onClick={() => setAction('approve')} disabled={updateStatus.isPending}>
                  <Check className="w-4 h-4 mr-2" />
                  Approve
                </Button>
              </div>
            )}
          </div>

          <OrderDetails order={order} />
        </main>
      </div>

      <AlertDialog open={action === 'approve'} onOpenChange={() => setAction(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Approve Order?</AlertDialogTitle>
            <AlertDialogDescription>
              This will approve the order and notify the vendor. The order will move to processing
              status.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => handleStatusUpdate('approved')}>
              Approve Order
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={action === 'reject'} onOpenChange={() => setAction(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Reject Order?</AlertDialogTitle>
            <AlertDialogDescription>
              This will reject the order and notify the vendor. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => handleStatusUpdate('rejected')}
              className="bg-red-600 hover:bg-red-700"
            >
              Reject Order
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
