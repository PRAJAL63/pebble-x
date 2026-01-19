import { useNavigate } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Order } from '@/services/order.service';

interface OrderTableProps {
  orders: Order[];
  isSupplier?: boolean;
}

export default function OrderTable({ orders, isSupplier = false }: OrderTableProps) {
  const navigate = useNavigate();

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
      approved: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      rejected: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
      processing: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      shipped: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
      delivered: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      cancelled: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200',
    };
    return colors[status] || 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NP', {
      style: 'currency',
      currency: 'NPR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const handleViewOrder = (orderId: string) => {
    const basePath = isSupplier ? '/supplier' : '/admin';
    navigate(`${basePath}/orders/${orderId}`);
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow dark:shadow-gray-800 border border-gray-200 dark:border-gray-800">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order-Id</TableHead>
            <TableHead>{isSupplier ? 'Vendor' : 'Supplier'}</TableHead>
            <TableHead>Items</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map(order => (
            <TableRow key={order._id}>
              <TableCell className="font-medium">{order._id}</TableCell>
              <TableCell>{isSupplier ? order.vendor.email : order.supplier.email}</TableCell>
              <TableCell>{order.items.length} items</TableCell>
              <TableCell>
                {formatCurrency(
                  order.items.reduce(
                    (total, item) => total + (item.product?.price ?? 0) * item.quantity,
                    0,
                  ),
                )}
              </TableCell>
              <TableCell>
                <Badge className={getStatusColor(order.status)}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </Badge>
              </TableCell>
              <TableCell>{formatDate(order.createdAt)}</TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="sm" onClick={() => handleViewOrder(order._id)}>
                  <Eye className="w-4 h-4 mr-1" />
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
