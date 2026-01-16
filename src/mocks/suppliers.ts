export interface Supplier {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  rating: number;
  totalProducts: number;
  totalOrders: number;
  joinedAt: string;
}

export const mockSuppliers: Supplier[] = [
  {
    id: 'sup-1',
    name: 'PowerTools Distributors',
    email: 'contact@powertools.com',
    phone: '+977-1-4567890',
    address: 'Industrial Estate, Balaju',
    city: 'Kathmandu',
    country: 'Nepal',
    rating: 4.8,
    totalProducts: 45,
    totalOrders: 156,
    joinedAt: '2024-03-15T00:00:00Z',
  },
  {
    id: 'sup-2',
    name: 'Professional Tools Inc.',
    email: 'sales@protools.com',
    phone: '+977-1-4567891',
    address: 'Commercial Complex, Patan',
    city: 'Lalitpur',
    country: 'Nepal',
    rating: 4.6,
    totalProducts: 78,
    totalOrders: 203,
    joinedAt: '2024-01-20T00:00:00Z',
  },
  {
    id: 'sup-3',
    name: 'Heavy Equipment Solutions',
    email: 'info@heavyequip.com',
    phone: '+977-1-4567892',
    address: 'Industrial Zone, Bhaktapur',
    city: 'Bhaktapur',
    country: 'Nepal',
    rating: 4.9,
    totalProducts: 32,
    totalOrders: 98,
    joinedAt: '2024-06-10T00:00:00Z',
  },
];
