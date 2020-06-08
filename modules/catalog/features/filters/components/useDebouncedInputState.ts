import { ChangeEvent, useCallback, useState } from 'react';
import { debounce } from '@utils';

export const useDebouncedInputState = <V, H extends (...args: any[]) => void>(
  value: V,
  onChange: H,
  {
    delay = 1000,
    mapValue = (ev) => (ev.target.value as unknown) as V,
  }: {
    delay?: number;
    mapValue?: (ev: ChangeEvent<HTMLInputElement>) => V;
  } = {}
) => {
  const [_value, setValue] = useState(value);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceHandleChange = useCallback(debounce(onChange, delay), [
    onChange,
  ]);
  const handleChange = useCallback<(ev: ChangeEvent<HTMLInputElement>) => void>(
    (ev) => {
      const nextValue = mapValue(ev);

      setValue(nextValue);
      debounceHandleChange(nextValue);
    },
    [mapValue, debounceHandleChange]
  );

  return {
    value: _value,
    handleChange,
  };
};
