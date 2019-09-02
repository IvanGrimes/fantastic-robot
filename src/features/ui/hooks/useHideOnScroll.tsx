import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '@material-ui/core';
import debounce from 'lodash/debounce';
import { useRequestAnimationFrame } from '../../../hooks/useRequestAnimationFrame';
import { getBreakpoints } from '../../../theme';
import { usePrevious } from '../../../hooks/usePrevious';
import { getIsFullscreen } from '../../studioMapList/model/selectors';

export const useHideOnScroll = ({
  handleSetVisibility,
}: {
  handleSetVisibility: (visibility: boolean) => void;
}) => {
  const theme = useTheme();
  const breakpoints = getBreakpoints({ theme });
  const isMapListFullscreen = useSelector(getIsFullscreen);
  const previsMapListFullscreen = usePrevious(isMapListFullscreen);
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

          setVisibilityAndPrevScroll(
            previsMapListFullscreen || isVisible,
            scrollY
          );
          setPrevScrollY(scrollY);
        } else {
          setVisibilityAndPrevScroll(!isMapListFullscreen, 0);
        }
      }
    }, 100),
    [
      breakpoints.values.md,
      prevScrollY,
      setVisibilityAndPrevScroll,
      previsMapListFullscreen,
      isMapListFullscreen,
    ]
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (isMapListFullscreen) {
      handleSetVisibility(false);
    } else {
      handleSetVisibility(true);
    }
  }, [handleSetVisibility, isMapListFullscreen]);
};
