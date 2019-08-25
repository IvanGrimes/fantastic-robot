import { TextFieldProps } from '@material-ui/core/TextField';

export type ClearableInputProps = Pick<TextFieldProps, 'variant'> &
  Pick<TextFieldProps, 'InputLabelProps'> &
  Pick<TextFieldProps, 'InputProps'> & {
    label?: string;
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
  };

export { ClearableInput } from './ClearableInput';
