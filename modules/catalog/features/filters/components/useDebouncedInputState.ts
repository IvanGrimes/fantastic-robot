import {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { debounce } from '@utils';

export const useDebouncedInputState = <V, H extends (...args: any[]) => void>(
  value: V,
  onChange: H,
  {
    delay = 1000,
    mapValue = (ev) => (ev.target.value as unknown) as V,
    isLoading = false,
    validateValue = undefined,
  }: {
    delay?: number;
    mapValue?: (ev: ChangeEvent<HTMLInputElement>) => V;
    isLoading?: boolean;
    validateValue?: (value: V) => boolean;
  } = {}
) => {
  const wasValueUpdated = useRef(false);
  const cancelChangeInFlight = useRef<() => void>(() => {});
  const [_value, setValue] = useState(value);
  const debounceHandleChange = useCallback(
    (nextValue: V) => {
      const debouncedHandler = debounce(onChange, delay);

      cancelChangeInFlight.current();
      cancelChangeInFlight.current = debouncedHandler.clear;

      debouncedHandler(nextValue);
    },
    [delay, onChange]
  );
  const handleChange = useCallback<(ev: ChangeEvent<HTMLInputElement>) => void>(
    (ev) => {
      const nextValue = mapValue(ev);

      if (validateValue ? validateValue(nextValue) : true) {
        setValue(nextValue);
        debounceHandleChange(nextValue);
      }
    },
    [mapValue, validateValue, debounceHandleChange]
  );
  const clearWith = useCallback(
    (v: V) =>
      setValue((previousValue) => {
        cancelChangeInFlight.current();

        if (validateValue ? validateValue(v) : true) {
          return v;
        }

        return previousValue;
      }),
    [validateValue]
  );

  useEffect(() => {
    if (!wasValueUpdated.current && !isLoading) {
      wasValueUpdated.current = true;

      if (_value !== value) {
        setValue(value);
      }
    }
  }, [_value, isLoading, value]);

  useEffect(() => cancelChangeInFlight.current);

  return useMemo(
    () => ({
      value: _value,
      handleChange,
      clearWith,
    }),
    [_value, clearWith, handleChange]
  );
};
