import React from 'react';
import { DebouncedTextFieldProps } from './types';
import { DebouncedTextField } from './DebouncedTextField';
import { useDebouncedInputState } from '../useDebouncedInputState';
import { Skeleton } from '@components';
export const DebouncedTextFieldContainer: StyleableComponent<
  {
    onChange: (value: string) => void;
    value: string;
    isLoading?: boolean;
  } & Partial<DebouncedTextFieldProps>
> = ({
  value,
  onChange,
  className = '',
  fullWidth,
  variant,
  label,
  isLoading,
}) => {
  const debounced = useDebouncedInputState(value, onChange);

  if (isLoading) {
    return <Skeleton variant="rect" height="40px" width="100%" />;
  }

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
