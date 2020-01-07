import React from 'react';
import { TextField as DefaultTextField } from '@material-ui/core';
import { TextFieldProps as DefaultTextFieldProps } from '@material-ui/core/TextField';
import { FieldProps, useField } from 'react-final-form';
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
  const hasError = meta.touched && meta.error;

  return (
    <DefaultTextField
      {...input}
      {...props}
      variant="outlined"
      label={placeholder}
      error={hasError}
      helperText={hasError ? meta.error : undefined}
      disabled={meta.validating}
    />
  );
};
