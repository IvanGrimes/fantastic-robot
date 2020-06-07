import { ChangeEvent } from 'react';
import { TextFieldProps } from '@components';

export type ChangeEventHandler = (ev: ChangeEvent<HTMLInputElement>) => void;

export type DebouncedTextFieldProps = Pick<TextFieldProps, 'variant'> &
  Pick<TextFieldProps, 'fullWidth'> &
  Pick<TextFieldProps, 'label'>;
