import { useCallback, useEffect, useState } from 'react';
import throttle from 'lodash/debounce';

export const useHideOnScroll = ({
  handleSetVisibility,
}: {
  handleSetVisibility: (visibility: boolean) => void;
}) => {
  const [prevScrollY, setPrevScrollY] = useState(0);
  const handleScroll = useCallback(
    throttle(() => {
      const scrollY = window.pageYOffset;

      if (scrollY > 100) {
        const isVisible = prevScrollY > scrollY;

        handleSetVisibility(isVisible);
        setPrevScrollY(scrollY);
      } else {
        handleSetVisibility(true);
        setPrevScrollY(0);
      }
    }, 60),
    [handleSetVisibility, prevScrollY]
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
};
