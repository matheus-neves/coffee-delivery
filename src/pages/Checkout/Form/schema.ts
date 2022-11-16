import { z } from 'zod';

export const validationSchema = z.object({
  city: z.string().min(1, 'City is required'),
  complement: z.string(),
  district: z.string().min(1, 'District is required'),
  number: z.string().min(1, 'Number is required'),
  payment: z.string().min(1, 'Payment is required'),
  state: z.string().min(1, 'State is required'),
  street: z.string().min(1, 'Street is required'),
  zipCode: z.string().min(1, 'Zip Code is required')
});

export type ValidationSchema = z.infer<typeof validationSchema>;
