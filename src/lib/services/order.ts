import type { Order, OrderStatus } from '@/mocks/orders';
import { mockOrders } from '@/mocks/orders';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const getOrders = async (filters?: {
  status?: OrderStatus;
  supplierId?: string;
  vendorId?: string;
}): Promise<Order[]> => {
  // TODO: Replace with real API when backend is ready
  // const response = await axiosInstance.get<OrderListResponse>('/orders', { params: filters });
  // return response.data.body.data;

  await delay(500);
  let filteredOrders = [...mockOrders];

  if (filters?.status) {
    filteredOrders = filteredOrders.filter(o => o.status === filters.status);
  }
  if (filters?.supplierId) {
    filteredOrders = filteredOrders.filter(o => o.supplierId === filters.supplierId);
  }
  if (filters?.vendorId) {
    filteredOrders = filteredOrders.filter(o => o.vendorId === filters.vendorId);
  }

  return filteredOrders;
};

export const getOrder = async (id: string): Promise<Order> => {
  // TODO: Replace with real API when backend is ready
  // const response = await axiosInstance.get<OrderResponse>(`/orders/${id}`);
  // return response.data.body.data;

  await delay(300);
  const order = mockOrders.find(o => o.id === id);
  if (!order) throw new Error('Order not found');
  return { ...order };
};

export const createOrder = async (
  data: Omit<Order, 'id' | 'orderNumber' | 'createdAt' | 'updatedAt'>,
): Promise<Order> => {
  // TODO: Replace with real API when backend is ready
  // const response = await axiosInstance.post<OrderResponse>('/orders', data);
  // return response.data.body.data;

  await delay(800);
  const orderNumber = `ORD-${new Date().getFullYear()}-${String(mockOrders.length + 1).padStart(3, '0')}`;
  const newOrder: Order = {
    ...data,
    id: `ord-${Date.now()}`,
    orderNumber,
    status: 'pending',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  mockOrders.push(newOrder);
  return newOrder;
};

export const updateOrderStatus = async (
  id: string,
  status: OrderStatus,
  notes?: string,
): Promise<Order> => {
  // TODO: Replace with real API when backend is ready
  // const response = await axiosInstance.put<OrderResponse>(`/orders/${id}/status`, { status, notes });
  // return response.data.body.data;

  await delay(600);
  const index = mockOrders.findIndex(o => o.id === id);
  if (index === -1) throw new Error('Order not found');

  const updatedOrder = {
    ...mockOrders[index],
    status,
    notes: notes || mockOrders[index].notes,
    updatedAt: new Date().toISOString(),
  };
  mockOrders[index] = updatedOrder;
  return updatedOrder;
};
