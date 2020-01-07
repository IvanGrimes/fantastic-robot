import dynamic from 'next/dynamic';
import { FormProps } from './Form';

export * from './TextField';
export * from './PasswordField';

export const Form = dynamic<FormProps>(() =>
  import('./Form').then(m => m.Form)
);
