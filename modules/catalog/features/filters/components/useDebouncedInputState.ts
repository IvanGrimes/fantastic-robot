import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import { debounce } from '@utils';

export const useDebouncedInputState = <V, H extends (...args: any[]) => void>(
  value: V,
  onChange: H,
  {
    delay = 1000,
    mapValue = (ev) => (ev.target.value as unknown) as V,
    isLoading = false,
  }: {
    delay?: number;
    mapValue?: (ev: ChangeEvent<HTMLInputElement>) => V;
    isLoading?: boolean;
  } = {}
) => {
  const wasValueUpdated = useRef(false);
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

  useEffect(() => {
    if (!wasValueUpdated.current && !isLoading && _value !== value) {
      wasValueUpdated.current = true;

      setValue(value);
    }
  }, [_value, isLoading, value]);

  return {
    value: _value,
    handleChange,
  };
};
