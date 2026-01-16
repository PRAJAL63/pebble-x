export type OrderStatus =
  | 'pending'
  | 'approved'
  | 'rejected'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled';

export interface OrderItem {
  productId: string;
  productName: string;
  quantity: number;
  price: number;
  total: number;
}

export interface Order {
  id: string;
  orderNumber: string;
  vendorId: string;
  vendorName: string;
  supplierId: string;
  supplierName: string;
  items: OrderItem[];
  subtotal: number;
  tax: number;
  total: number;
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
  shippingAddress: string;
  notes?: string;
}

export const mockOrders: Order[] = [
  {
    id: '1',
    orderNumber: 'ORD-2026-001',
    vendorId: 'ven-1',
    vendorName: 'BuildRight Hardware Store',
    supplierId: 'sup-1',
    supplierName: 'PowerTools Distributors',
    items: [
      {
        productId: '1',
        productName: 'Electric Drill Professional',
        quantity: 5,
        price: 3500,
        total: 17500,
      },
      {
        productId: '9',
        productName: 'Angle Grinder 2000W',
        quantity: 3,
        price: 3200,
        total: 9600,
      },
    ],
    subtotal: 27100,
    tax: 2710,
    total: 29810,
    status: 'pending',
    createdAt: '2026-01-12T08:30:00Z',
    updatedAt: '2026-01-12T08:30:00Z',
    shippingAddress: '123 Main Street, Kathmandu, Nepal',
    notes: 'Please deliver before Friday',
  },
  {
    id: '2',
    orderNumber: 'ORD-2026-002',
    vendorId: 'ven-2',
    vendorName: 'Industrial Supplies Co.',
    supplierId: 'sup-2',
    supplierName: 'Professional Tools Inc.',
    items: [
      {
        productId: '5',
        productName: 'Tool Set Professional 120pc',
        quantity: 10,
        price: 6800,
        total: 68000,
      },
    ],
    subtotal: 68000,
    tax: 6800,
    total: 74800,
    status: 'approved',
    createdAt: '2026-01-11T14:20:00Z',
    updatedAt: '2026-01-12T09:15:00Z',
    shippingAddress: '456 Industrial Area, Lalitpur, Nepal',
  },
  {
    id: '3',
    orderNumber: 'ORD-2026-003',
    vendorId: 'ven-1',
    vendorName: 'BuildRight Hardware Store',
    supplierId: 'sup-3',
    supplierName: 'Heavy Equipment Solutions',
    items: [
      {
        productId: '7',
        productName: 'Welding Machine MIG 200A',
        quantity: 2,
        price: 15500,
        total: 31000,
      },
      {
        productId: '8',
        productName: 'Air Compressor 50L',
        quantity: 1,
        price: 8900,
        total: 8900,
      },
    ],
    subtotal: 39900,
    tax: 3990,
    total: 43890,
    status: 'processing',
    createdAt: '2026-01-10T10:45:00Z',
    updatedAt: '2026-01-11T16:20:00Z',
    shippingAddress: '123 Main Street, Kathmandu, Nepal',
    notes: 'Urgent order for new workshop setup',
  },
  {
    id: '4',
    orderNumber: 'ORD-2026-004',
    vendorId: 'ven-3',
    vendorName: 'Home Depot Nepal',
    supplierId: 'sup-2',
    supplierName: 'Professional Tools Inc.',
    items: [
      {
        productId: '11',
        productName: 'Measuring Tape 10m',
        quantity: 50,
        price: 450,
        total: 22500,
      },
      {
        productId: '12',
        productName: 'Spirit Level 60cm',
        quantity: 30,
        price: 680,
        total: 20400,
      },
    ],
    subtotal: 42900,
    tax: 4290,
    total: 47190,
    status: 'shipped',
    createdAt: '2026-01-09T09:00:00Z',
    updatedAt: '2026-01-11T14:30:00Z',
    shippingAddress: '789 Commercial Complex, Bhaktapur, Nepal',
  },
  {
    id: '5',
    orderNumber: 'ORD-2026-005',
    vendorId: 'ven-2',
    vendorName: 'Industrial Supplies Co.',
    supplierId: 'sup-3',
    supplierName: 'Heavy Equipment Solutions',
    items: [
      {
        productId: '13',
        productName: 'Safety Helmet with Visor',
        quantity: 100,
        price: 850,
        total: 85000,
      },
      {
        productId: '14',
        productName: 'Work Gloves Leather',
        quantity: 200,
        price: 380,
        total: 76000,
      },
    ],
    subtotal: 161000,
    tax: 16100,
    total: 177100,
    status: 'delivered',
    createdAt: '2026-01-08T11:15:00Z',
    updatedAt: '2026-01-10T17:45:00Z',
    shippingAddress: '456 Industrial Area, Lalitpur, Nepal',
  },
  {
    id: '6',
    orderNumber: 'ORD-2026-006',
    vendorId: 'ven-4',
    vendorName: 'Construction Supplies Ltd.',
    supplierId: 'sup-1',
    supplierName: 'PowerTools Distributors',
    items: [
      {
        productId: '2',
        productName: 'Cordless Impact Wrench',
        quantity: 8,
        price: 4200,
        total: 33600,
      },
      {
        productId: '3',
        productName: 'Circular Saw',
        quantity: 6,
        price: 2800,
        total: 16800,
      },
    ],
    subtotal: 50400,
    tax: 5040,
    total: 55440,
    status: 'rejected',
    createdAt: '2026-01-11T15:30:00Z',
    updatedAt: '2026-01-12T10:00:00Z',
    shippingAddress: '321 Builder Lane, Pokhara, Nepal',
    notes: 'Credit limit exceeded - payment pending',
  },
  {
    id: '7',
    orderNumber: 'ORD-2026-007',
    vendorId: 'ven-1',
    vendorName: 'BuildRight Hardware Store',
    supplierId: 'sup-2',
    supplierName: 'Professional Tools Inc.',
    items: [
      {
        productId: '16',
        productName: 'Toolbox Metal 5-Drawer',
        quantity: 4,
        price: 5200,
        total: 20800,
      },
      {
        productId: '19',
        productName: 'Pliers Set 4-Piece',
        quantity: 15,
        price: 1150,
        total: 17250,
      },
      {
        productId: '20',
        productName: 'Screwdriver Set 30-Piece',
        quantity: 20,
        price: 780,
        total: 15600,
      },
    ],
    subtotal: 53650,
    tax: 5365,
    total: 59015,
    status: 'approved',
    createdAt: '2026-01-10T13:00:00Z',
    updatedAt: '2026-01-11T11:20:00Z',
    shippingAddress: '123 Main Street, Kathmandu, Nepal',
  },
  {
    id: '8',
    orderNumber: 'ORD-2026-008',
    vendorId: 'ven-3',
    vendorName: 'Home Depot Nepal',
    supplierId: 'sup-1',
    supplierName: 'PowerTools Distributors',
    items: [
      {
        productId: '10',
        productName: 'Jigsaw Variable Speed',
        quantity: 12,
        price: 2100,
        total: 25200,
      },
    ],
    subtotal: 25200,
    tax: 2520,
    total: 27720,
    status: 'processing',
    createdAt: '2026-01-09T16:45:00Z',
    updatedAt: '2026-01-10T09:30:00Z',
    shippingAddress: '789 Commercial Complex, Bhaktapur, Nepal',
  },
];
