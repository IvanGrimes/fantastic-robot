import React, { forwardRef, useImperativeHandle } from 'react';
import { Skeleton } from '@components';
import { DebouncedTextFieldProps } from './types';
import { DebouncedTextField } from './DebouncedTextField';
import { useDebouncedInputState } from '../useDebouncedInputState';

export type DebouncedTextFieldApi = {
  clearWith: (v: string) => void;
};

export const DebouncedTextFieldContainer = forwardRef<
  DebouncedTextFieldApi,
  {
    className?: string;
    onChange: (value: string) => void;
    value: string;
    isLoading?: boolean;
    validateValue?: (value: string) => boolean;
  } & Partial<DebouncedTextFieldProps>
>(
  (
    { value, onChange, className = '', label, isLoading, validateValue },
    ref
  ) => {
    const debounced = useDebouncedInputState(value, onChange, {
      isLoading,
      validateValue,
    });

    useImperativeHandle(
      ref,
      () => ({
        clearWith: debounced.clearWith,
      }),
      [debounced.clearWith]
    );

    if (isLoading) {
      return <Skeleton variant="rect" height="40px" width="100%" />;
    }

    return (
      <DebouncedTextField
        className={className}
        label={label}
        onChange={debounced.handleChange}
        value={debounced.value}
      />
    );
  }
);
