import React, { useCallback, ChangeEvent, useState, useEffect } from 'react';
import {
  NativeSelect as MaterialSelect,
  FormControl,
  OutlinedInput,
} from '@material-ui/core';
import { Label } from './Select.styles';

type OptionValue = string | number;

export type SelectProps = {
  isLoading?: boolean;
  options: {
    value: OptionValue;
    label: string;
  }[];
  label: string;
  defaultOption?: number;
  value?: OptionValue;
  handleChange?: (ev: ChangeEvent<{ value: unknown }>) => void;
};

export const Select = ({
  isLoading,
  options,
  defaultOption,
  value,
  handleChange,
}: SelectProps) => {
  const [ownValue, setOwnValue] = useState<OptionValue>('');
  const ownHandleChange = useCallback((ev: ChangeEvent<{ value: unknown }>) => {
    setOwnValue(ev.target.value as OptionValue);
  }, []);
  const currentValue = value || ownValue;
  const currentHandleChange = handleChange || ownHandleChange;

  useEffect(() => {
    if (typeof defaultOption === 'number' && !isLoading && !value) {
      const option = options[defaultOption];

      if (option) {
        currentHandleChange({
          target: { value: option.value as unknown },
        } as any);
      }
    }
  }, [currentHandleChange, defaultOption, isLoading, options, value]);

  if (isLoading) {
    return <span>loading</span>;
  }

  return (
    <FormControl variant="outlined" fullWidth>
      <Label>Зал</Label>
      <MaterialSelect
        value={currentValue}
        onChange={currentHandleChange}
        input={<OutlinedInput labelWidth={28} />}
      >
        {options.map(({ value: optionValue, label: optionLabel }) => (
          <option key={optionValue} value={optionValue}>
            {optionLabel}
          </option>
        ))}
      </MaterialSelect>
    </FormControl>
  );
};
