import React, { FunctionComponent } from 'react';
import { Switch, SwitchProps, Skeleton } from '@components';
import { useDebouncedInputState } from '../useDebouncedInputState';

export const DebouncedSwitchContainer: FunctionComponent<
  {
    onChange: (value: boolean) => void;
    value: boolean;
    isLoading: boolean;
  } & Omit<SwitchProps, 'onChange'>
> = ({ value, onChange, label, isLoading }) => {
  const debounced = useDebouncedInputState(value, onChange, {
    delay: 250,
    mapValue: (ev) => ev.target.checked,
  });

  if (isLoading) {
    return <Skeleton width="100%" height="34px" />;
  }

  return (
    <Switch
      checked={debounced.value}
      onChange={debounced.handleChange}
      label={label}
    />
  );
};
