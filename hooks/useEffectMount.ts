import { useRef, useEffect } from 'react';

export const useEffectMount = <E extends () => void>(effect: E): void => {
  const isMountedRef = useRef(false);

  useEffect(() => {
    if (!isMountedRef.current) {
      effect();

      isMountedRef.current = true;
    }
  }, [effect]);
};
