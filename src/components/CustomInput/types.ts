import { InputHTMLAttributes } from 'react';

export interface CustomInputTypes
  extends InputHTMLAttributes<HTMLInputElement> {
  maxwidth?: number;
  optional?: boolean;
}
