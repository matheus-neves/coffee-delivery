import { IFormInput } from '@src/pages/Checkout/types';
import { InputHTMLAttributes } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';

export interface CustomInputTypes
  extends InputHTMLAttributes<HTMLInputElement> {
  name: Path<IFormInput>;
  register: UseFormRegister<IFormInput>;
  $maxWidth?: number;
  optional?: boolean;
}

export type CustomInputContainerTypes = Omit<
  CustomInputTypes,
  'name' | 'register'
>;
