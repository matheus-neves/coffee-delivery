import { ValidationSchema } from '@src/pages/Checkout/Form/schema';
import { Path, UseFormRegister } from 'react-hook-form';

export interface CardRadioTypes {
  value: string;
  id: string;
  name: Path<ValidationSchema>;
  label: string;
  Icon: React.ReactNode;
  register: UseFormRegister<ValidationSchema>;
  error?: string;
}

export type CardRadioContainerTypes = Pick<CardRadioTypes, 'error'>;
