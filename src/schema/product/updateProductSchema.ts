import { z } from 'zod';

const updateProductSchema = z.object({
  name: z
    .string()
    .min(3, 'Product name must be at least 3 characters')
    .max(100, 'Product name must be less than 100 characters')
    .optional(),
  category: z.string().min(1, 'Category is required').optional(),
  price: z.coerce
    .number({ message: 'Price must be a number' })
    .min(0, 'Price must be a positive number')
    .optional(),
  stock: z.coerce
    .number({ message: 'Stock must be a number' })
    .int('Stock must be a whole number')
    .min(0, 'Stock cannot be negative')
    .optional(),
  description: z
    .string()
    .min(10, 'Description must be at least 10 characters')
    .max(1000, 'Description must be less than 1000 characters')
    .optional(),
  image: z.string().url('Must be a valid URL').optional().or(z.literal('')),
});

export default updateProductSchema;
