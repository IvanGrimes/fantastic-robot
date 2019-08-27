import { useRef, useCallback, useEffect } from 'react';

const isBrowser = typeof window !== 'undefined';

export const useRequestAnimationFrame = (
  callback: (...args: any[]) => any
): typeof callback => {
  const requestId = useRef<number | null>(null);
  const flush = useCallback(
    () =>
      requestId.current && isBrowser
        ? window.cancelAnimationFrame(requestId.current)
        : undefined,
    []
  );
  const requestCallback = useCallback(
    (...args: any[]) => {
      if (isBrowser) {
        flush();

        requestId.current = window.requestAnimationFrame(() =>
          callback(...args)
        );
      }
    },
    [callback, flush]
  );

  useEffect(() => flush, [flush]);

  return isBrowser ? requestCallback : callback;
};
