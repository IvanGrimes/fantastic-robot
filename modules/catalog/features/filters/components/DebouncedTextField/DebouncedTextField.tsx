import React, { FunctionComponent } from 'react';
import { TextField } from '@components';
import { ChangeEventHandler, DebouncedTextFieldProps } from './types';

export const DebouncedTextField: FunctionComponent<
  {
    className: string;
    onChange: ChangeEventHandler;
    value: string;
  } & Partial<DebouncedTextFieldProps>
> = ({ onChange, value, className, label = '' }) => (
  <TextField
    className={className}
    label={label}
    variant="outlined"
    onChange={onChange}
    value={value}
    fullWidth
  />
);
