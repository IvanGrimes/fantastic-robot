import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '@material-ui/core';
import debounce from 'lodash/debounce';
import { getIsFullscreenMap } from '../model/selectors';
import { useRequestAnimationFrame } from '../../../hooks/useRequestAnimationFrame';
import { getBreakpoints } from '../../../theme';
import { usePrevious } from '../../../hooks/usePrevious';

export const useHideOnScroll = ({
  handleSetVisibility,
}: {
  handleSetVisibility: (visibility: boolean) => void;
}) => {
  const theme = useTheme();
  const breakpoints = getBreakpoints({ theme });
  const isFullscreenMap = useSelector(getIsFullscreenMap);
  const prevIsFullscreenMap = usePrevious(isFullscreenMap);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const handleSetVisibilityAndPrevScroll = useCallback(
    (visibility, scrollY) => {
      handleSetVisibility(visibility);
      setPrevScrollY(scrollY);
    },
    [handleSetVisibility]
  );
  const setVisibilityAndPrevScroll = useRequestAnimationFrame(
    handleSetVisibilityAndPrevScroll
  );
  const handleScroll = useCallback(
    debounce(() => {
      const scrollY = window.pageYOffset;

      if (window.innerWidth < breakpoints.values.md) {
        if (scrollY > 100) {
          const isVisible = prevScrollY > scrollY;

          setVisibilityAndPrevScroll(prevIsFullscreenMap || isVisible, scrollY);
          setPrevScrollY(scrollY);
        } else {
          setVisibilityAndPrevScroll(!isFullscreenMap, 0);
        }
      }
    }, 100),
    [
      breakpoints.values.md,
      prevScrollY,
      setVisibilityAndPrevScroll,
      prevIsFullscreenMap,
      isFullscreenMap,
    ]
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
};
