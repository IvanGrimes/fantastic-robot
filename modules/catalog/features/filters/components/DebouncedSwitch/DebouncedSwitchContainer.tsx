import React, {
  FunctionComponent,
  useCallback,
  useState,
  ChangeEvent,
} from 'react';
import { Switch, SwitchProps } from '@components';
import { debounce } from '@utils';

export const DebouncedSwitchContainer: FunctionComponent<
  {
    onChange: (value: boolean) => void;
    value: boolean;
  } & Omit<SwitchProps, 'onChange'>
> = ({ value, onChange, label }) => {
  const [_value, setValue] = useState(value);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceHandleChange = useCallback(debounce(onChange, 250), [onChange]);
  const handleChange = useCallback<(ev: ChangeEvent<HTMLInputElement>) => void>(
    (ev) => {
      const nextValue = ev.target.checked;

      setValue(nextValue);
      debounceHandleChange(nextValue);
    },
    [debounceHandleChange]
  );

  return <Switch checked={_value} onChange={handleChange} label={label} />;
};
