import React, { FunctionComponent } from 'react';
import { Switch, SwitchProps } from '@components';
import { useDebouncedInputState } from '../useDebouncedInputState';

export const DebouncedSwitchContainer: FunctionComponent<
  {
    onChange: (value: boolean) => void;
    value: boolean;
  } & Omit<SwitchProps, 'onChange'>
> = ({ value, onChange, label }) => {
  const debounced = useDebouncedInputState(value, onChange, {
    delay: 250,
    mapValue: (ev) => ev.target.checked,
  });

  return (
    <Switch
      checked={debounced.value}
      onChange={debounced.handleChange}
      label={label}
    />
  );
};
