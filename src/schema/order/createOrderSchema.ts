import { z } from 'zod';

const createOrderSchema = z.object({
  vendorId: z.string().min(1, 'Vendor is required'),
  vendorName: z.string().min(1, 'Vendor name is required'),
  supplierId: z.string().min(1, 'Supplier is required'),
  supplierName: z.string().min(1, 'Supplier name is required'),
  items: z
    .array(
      z.object({
        productId: z.string(),
        productName: z.string(),
        quantity: z.coerce.number().int().min(1, 'Quantity must be at least 1'),
        price: z.coerce.number().min(0),
        total: z.coerce.number().min(0),
      }),
    )
    .min(1, 'Order must have at least one item'),
  subtotal: z.coerce.number().min(0),
  tax: z.coerce.number().min(0),
  total: z.coerce.number().min(0),
  shippingAddress: z.string().min(10, 'Shipping address is required'),
  notes: z.string().optional(),
});

export default createOrderSchema;
