import { useCallback, useEffect, useState } from 'react';
import throttle from 'lodash/throttle';
import { useSelector } from 'react-redux';
import { useTheme } from '@material-ui/core';
import { getIsFullscreenMap } from '../model/selectors';
import { useRequestAnimationFrame } from '../../../hooks/useRequestAnimationFrame';
import { getBreakpoints } from '../../../theme';

export const useHideOnScroll = ({
  handleSetVisibility,
}: {
  handleSetVisibility: (visibility: boolean) => void;
}) => {
  const theme = useTheme();
  const breakpoints = getBreakpoints({ theme });
  const isFullscreenMap = useSelector(getIsFullscreenMap);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const setVisibility = useRequestAnimationFrame(handleSetVisibility);
  const handleScroll = useCallback(
    throttle(() => {
      const scrollY = window.pageYOffset;

      if (!isFullscreenMap && window.innerWidth < breakpoints.values.md) {
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
    [handleSetVisibility, prevScrollY, isFullscreenMap, breakpoints.values.md]
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
};
