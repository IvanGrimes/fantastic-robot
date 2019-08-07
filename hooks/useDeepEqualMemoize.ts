import { useRef } from 'react';
import isEqual from 'dequal';

type Value = ReadonlyArray<any>;

export const useDeepEqualMemoize = (value: Value): Value => {
  const ref = useRef<Value>([]);

  if (!isEqual(value, ref.current)) {
    ref.current = value;
  }

  return ref.current;
};
