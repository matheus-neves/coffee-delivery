import { ValidationSchema } from '@src/pages/Checkout/Form/schema';
import { InputHTMLAttributes } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';

export interface CustomInputTypes
  extends InputHTMLAttributes<HTMLInputElement> {
  name: Path<ValidationSchema>;
  register: UseFormRegister<ValidationSchema>;
  $maxWidth?: number;
  optional?: boolean;
  error?: string;
}

export type CustomInputContainerTypes = Omit<
  CustomInputTypes,
  'name' | 'register'
>;
