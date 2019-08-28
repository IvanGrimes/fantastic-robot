import { useRef, useCallback, useEffect } from 'react';

type RequestIdleCallbackHandle = any;

type RequestIdleCallbackOptions = {
  timeout: number;
};

type RequestIdleCallbackDeadline = {
  readonly didTimeout: boolean;
  timeRemaining: () => number;
};

declare global {
  interface Window {
    requestIdleCallback: (
      callback: (deadline: RequestIdleCallbackDeadline) => void,
      opts?: RequestIdleCallbackOptions
    ) => RequestIdleCallbackHandle;
    cancelIdleCallback: (handle: RequestIdleCallbackHandle) => void;
  }
}

const isBrowser = typeof window !== 'undefined';

export const useRequestIdleCallback = (
  callback: (...args: any[]) => any
): typeof callback => {
  const requestId = useRef<number | null>(null);
  const flush = useCallback(
    () =>
      requestId.current && isBrowser
        ? window.cancelIdleCallback(requestId.current)
        : undefined,
    []
  );
  const requestCallback = useCallback(
    (...args: any[]) => {
      if (isBrowser) {
        flush();

        requestId.current = window.requestIdleCallback(() => callback(...args));
      }
    },
    [callback, flush]
  );

  useEffect(() => flush, [flush]);

  return isBrowser ? requestCallback : callback;
};
