export interface Vendor {
  id: string;
  name: string;
  email: string;
  phone: string;
  businessType: string;
  address: string;
  city: string;
  country: string;
  rating: number;
  totalOrders: number;
  totalSpent: number;
  joinedAt: string;
}

export const mockVendors: Vendor[] = [
  {
    id: 'ven-1',
    name: 'BuildRight Hardware Store',
    email: 'info@buildright.com',
    phone: '+977-1-5567890',
    businessType: 'Retail Store',
    address: '123 Main Street',
    city: 'Kathmandu',
    country: 'Nepal',
    rating: 4.7,
    totalOrders: 45,
    totalSpent: 2450000,
    joinedAt: '2025-02-10T00:00:00Z',
  },
  {
    id: 'ven-2',
    name: 'Industrial Supplies Co.',
    email: 'sales@indsupplies.com',
    phone: '+977-1-5567891',
    businessType: 'Wholesale',
    address: '456 Industrial Area',
    city: 'Lalitpur',
    country: 'Nepal',
    rating: 4.9,
    totalOrders: 78,
    totalSpent: 4890000,
    joinedAt: '2024-11-05T00:00:00Z',
  },
  {
    id: 'ven-3',
    name: 'Home Depot Nepal',
    email: 'contact@homedepot.np',
    phone: '+977-1-5567892',
    businessType: 'Retail Chain',
    address: '789 Commercial Complex',
    city: 'Bhaktapur',
    country: 'Nepal',
    rating: 4.5,
    totalOrders: 34,
    totalSpent: 1890000,
    joinedAt: '2025-04-20T00:00:00Z',
  },
  {
    id: 'ven-4',
    name: 'Construction Supplies Ltd.',
    email: 'info@consupplies.com',
    phone: '+977-1-5567893',
    businessType: 'Wholesale',
    address: '321 Builder Lane',
    city: 'Pokhara',
    country: 'Nepal',
    rating: 4.3,
    totalOrders: 23,
    totalSpent: 1250000,
    joinedAt: '2025-06-15T00:00:00Z',
  },
];
