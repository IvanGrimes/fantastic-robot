import dynamic from 'next/dynamic';
import { InputProps } from '../types';
import { TextFieldProps as DefaultTextFieldProps } from '@material-ui/core/TextField/TextField';
import { FieldProps } from 'react-final-form';

export type TextFieldProps = InputProps &
  Omit<Omit<DefaultTextFieldProps, 'label'>, 'variant'> &
  Pick<FieldProps<string, any>, 'validate'>;

export const TextField = dynamic<TextFieldProps>(() =>
  import('./TextField').then(m => m.TextField)
);
