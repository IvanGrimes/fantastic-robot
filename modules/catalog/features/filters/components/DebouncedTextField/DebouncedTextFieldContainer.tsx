import React, { useCallback, useState } from 'react';
import { debounce } from '@utils';
import { ChangeEventHandler, DebouncedTextFieldProps } from './types';
import { DebouncedTextField } from './DebouncedTextField';

export const DebouncedTextFieldContainer: StyleableComponent<
  {
    onChange: (value: string) => void;
    value: string;
  } & Partial<DebouncedTextFieldProps>
> = ({ value, onChange, className = '', fullWidth, variant, label }) => {
  const [_value, setValue] = useState(value);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedOnChange = useCallback(debounce(onChange, 1000), [onChange]);
  const handleChange = useCallback<ChangeEventHandler>(
    (ev) => {
      const nextValue = ev.target.value;

      setValue(nextValue);
      debouncedOnChange(nextValue);
    },
    [debouncedOnChange]
  );

  return (
    <DebouncedTextField
      className={className}
      fullWidth={fullWidth}
      variant={variant}
      label={label}
      onChange={handleChange}
      value={_value}
    />
  );
};
