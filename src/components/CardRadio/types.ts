import { IFormInput } from '@src/pages/Checkout/types';
import { UseFormRegister } from 'react-hook-form';

export interface CardRadioTypes {
  value: string;
  id: string;
  name: string;
  label: string;
  Icon: React.ReactNode;
  register: UseFormRegister<IFormInput>;
}
