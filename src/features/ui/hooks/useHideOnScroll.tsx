import { useCallback, useEffect, useState } from 'react';
import throttle from 'lodash/throttle';
import { useSelector } from 'react-redux';
import { getIsFullscreenMap } from '../model/selectors';
import { useRequestAnimationFrame } from '../../../hooks/useRequestAnimationFrame';

export const useHideOnScroll = ({
  handleSetVisibility,
}: {
  handleSetVisibility: (visibility: boolean) => void;
}) => {
  const isFullscreenMap = useSelector(getIsFullscreenMap);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const setVisibility = useRequestAnimationFrame(handleSetVisibility);
  const handleScroll = useCallback(
    throttle(() => {
      const scrollY = window.pageYOffset;

      if (!isFullscreenMap) {
        if (scrollY > 100) {
          const isVisible = prevScrollY > scrollY;

          setVisibility(isVisible);
          setPrevScrollY(scrollY);
        } else {
          setVisibility(true);
          setPrevScrollY(0);
        }
      }
    }, 60),
    [handleSetVisibility, prevScrollY, isFullscreenMap]
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
};
