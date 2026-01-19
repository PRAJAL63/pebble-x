import { z } from 'zod';

const RegisterSchema = z
  .object({
    name: z
      .string()
      .min(1, 'Full Name is required')
      .min(2, 'Minimum name length should be more than 2')
      .max(50, 'Maximum name length should be less than 50'),
    email: z.string().email('Email is required'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Minimum password length should be more than 8')
      .max(50, 'Maximum password length should be less than 50'),
    confirmPassword: z
      .string()
      .min(1, 'Confirm Password is required')
      .min(8, 'Minimum password length should be more than 8')
      .max(50, 'Maximum password length should be less than 50'),
    role: z.enum(['SUPPLIER', 'ADMIN']),
    phone: z
      .number({
        message: 'Phone number is required',
      })
      .min(1000000000, 'Phone number must be at least 10 digits')
      .max(9999999999, 'Phone number must be at most 10 digits'),
    address: z
      .string()
      .min(1, 'Address is required')
      .max(100, 'Maximum address length should be less than 100'),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match.',
    path: ['confirmPassword'],
  });

export default RegisterSchema;
