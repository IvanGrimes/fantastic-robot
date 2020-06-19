import React from 'react';
import { DebouncedTextFieldProps } from './types';
import { DebouncedTextField } from './DebouncedTextField';
import { useDebouncedInputState } from '../useDebouncedInputState';

export const DebouncedTextFieldContainer: StyleableComponent<
  {
    onChange: (value: string) => void;
    value: string;
  } & Partial<DebouncedTextFieldProps>
> = ({ value, onChange, className = '', fullWidth, variant, label }) => {
  const debounced = useDebouncedInputState(value, onChange);

  return (
    <DebouncedTextField
      className={className}
      fullWidth={fullWidth}
      variant={variant}
      label={label}
      onChange={debounced.handleChange}
      value={debounced.value}
    />
  );
};
