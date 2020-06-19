import React, { FunctionComponent } from 'react';
import { TextField } from '@components';
import { ChangeEventHandler, DebouncedTextFieldProps } from './types';

export const DebouncedTextField: FunctionComponent<
  {
    className: string;
    onChange: ChangeEventHandler;
    value: string;
  } & Partial<DebouncedTextFieldProps>
> = ({
  onChange,
  value,
  className,
  variant = 'outlined',
  fullWidth = false,
  label = '',
}) => (
  <TextField
    className={className}
    label={label}
    variant={variant}
    onChange={onChange}
    value={value}
    size="small"
    fullWidth={fullWidth}
  />
);
