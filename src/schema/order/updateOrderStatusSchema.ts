import { z } from 'zod';

const updateOrderStatusSchema = z.object({
  status: z.enum([
    'pending',
    'approved',
    'rejected',
    'processing',
    'shipped',
    'delivered',
    'cancelled',
  ]),
  notes: z.string().optional(),
});

export default updateOrderStatusSchema;
