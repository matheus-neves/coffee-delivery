import { InputHTMLAttributes } from 'react';

export interface CustomInputTypes
  extends InputHTMLAttributes<HTMLInputElement> {
  optional?: boolean;
}

export type CustomInputContainerTypes = Pick<CustomInputTypes, 'optional'>;
