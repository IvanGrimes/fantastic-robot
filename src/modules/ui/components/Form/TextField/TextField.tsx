import React from 'react';
import { TextFieldProps as DefaultTextFieldProps } from '@material-ui/core/TextField';
import { FieldProps, useField } from 'react-final-form';
import { TextField as StyledTextField } from './TextField.styles';
import { InputProps } from '../types';

export type TextFieldProps = InputProps &
  Omit<Omit<DefaultTextFieldProps, 'label'>, 'variant'> &
  Pick<FieldProps<string, any>, 'validate'>;

export const TextField = ({
  name,
  validate,
  placeholder,
  fullWidth = true,
  ...props
}: TextFieldProps) => {
  const { input, meta } = useField(name, { validate });

  return (
    <StyledTextField
      {...input}
      {...props}
      variant="outlined"
      label={placeholder}
      error={meta.touched && meta.error}
      helperText={meta.error || ' '}
      disabled={meta.validating}
      fullWidth={fullWidth}
    />
  );
};
