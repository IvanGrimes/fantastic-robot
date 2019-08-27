import { useRef, useCallback, useEffect } from 'react';

const isBrowser = typeof window !== 'undefined';

export const useRequestIdleCallback = (
  callback: (...args: any[]) => any
): typeof callback => {
  const requestId = useRef<number | null>(null);
  const flush = useCallback(
    () =>
      requestId.current && isBrowser
        ? // @ts-ignore
          window.cancelIdleCallback(requestId.current)
        : undefined,
    []
  );
  const requestCallback = useCallback(
    (...args: any[]) => {
      if (isBrowser) {
        flush();

        // @ts-ignore
        requestId.current = window.requestIdleCallback(() => callback(...args));
      }
    },
    [callback, flush]
  );

  useEffect(() => flush, [flush]);

  return isBrowser ? requestCallback : callback;
};
