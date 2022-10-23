import { IFormInput } from '@src/pages/Checkout/types';
import { Path, UseFormRegister } from 'react-hook-form';

export interface CardRadioTypes {
  value: string;
  id: string;
  name: Path<IFormInput>;
  label: string;
  Icon: React.ReactNode;
  register: UseFormRegister<IFormInput>;
}
