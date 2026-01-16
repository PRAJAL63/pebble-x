import { z } from 'zod';

const reportFilterSchema = z.object({
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  supplierId: z.string().optional(),
});

export default reportFilterSchema;
