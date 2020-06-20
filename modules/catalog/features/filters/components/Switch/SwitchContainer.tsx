import React, { ChangeEvent, FunctionComponent, useCallback } from 'react';
import { Switch as MaterialSwitch, SwitchProps, Skeleton } from '@components';
import { debounce } from '@utils';

export const SwitchContainer: FunctionComponent<
  {
    onChange: (value: boolean) => void;
    value: boolean;
    isLoading: boolean;
  } & Omit<SwitchProps, 'onChange'>
> = ({ value, onChange, label, isLoading }) => {
  const handleChange = useCallback<
    (ev: ChangeEvent<HTMLInputElement>, checked: boolean) => void
  >(
    debounce((_ev, checked) => {
      onChange(checked);
    }, 250),
    [onChange]
  );

  if (isLoading) {
    return <Skeleton width="100%" height="34px" />;
  }

  return (
    <MaterialSwitch checked={value} onChange={handleChange} label={label} />
  );
};
