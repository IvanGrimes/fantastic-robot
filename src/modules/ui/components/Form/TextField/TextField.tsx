import React from 'react';
import { useField } from 'react-final-form';
import { TextField as StyledTextField } from './TextField.styles';
import { TextFieldProps } from './index';

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
