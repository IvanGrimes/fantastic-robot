import { TextFieldProps } from '@material-ui/core/TextField';
import { DebounceSettings } from 'lodash';
import dynamic from 'next/dynamic';

export type ClearableInputProps = Pick<TextFieldProps, 'variant'> &
  Pick<TextFieldProps, 'InputLabelProps'> &
  Pick<TextFieldProps, 'InputProps'> & {
    label?: string;
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    debounce?: DebounceSettings & { wait: number };
  };

export const ClearableInput = dynamic<ClearableInputProps>(() =>
  import('./ClearableInput').then(module => module.ClearableInput)
);
