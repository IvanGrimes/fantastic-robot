import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '@material-ui/styles';
import debounce from 'lodash/throttle';
import { useRequestAnimationFrame } from '@hooks/useRequestAnimationFrame';
import { usePrevious } from '@hooks/usePrevious';
import { getBreakpoints } from '@theme/index';
import { Theme } from '@theme/types';
import * as studio from '@modules/studio';

export const useHideOnScroll = ({
  isVisible,
  handleSetVisibility,
}: {
  isVisible: boolean;
  handleSetVisibility: (visibility: boolean) => void;
}) => {
  const theme = useTheme<Theme>();
  const breakpoints = getBreakpoints({ theme });
  const isMapListFullscreen = useSelector(
    studio.listMap.selectors.getIsFullscreen
  );
  const prevIsMapListFullscreen = usePrevious(isMapListFullscreen);
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
          const shouldVisible = prevScrollY > scrollY;

          setVisibilityAndPrevScroll(
            prevIsMapListFullscreen || shouldVisible,
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
      prevIsMapListFullscreen,
      isMapListFullscreen,
    ]
  );
  const handleResize = useCallback(
    debounce(() => {
      if (window.innerWidth > breakpoints.values.md && !isVisible) {
        setVisibilityAndPrevScroll(true, 0);
      }
    }, 150),
    [breakpoints.values.md, isVisible, setVisibilityAndPrevScroll]
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize, handleScroll]);

  useEffect(() => {
    if (isMapListFullscreen) {
      handleSetVisibility(false);
    } else {
      handleSetVisibility(true);
    }
  }, [handleSetVisibility, isMapListFullscreen]);
};
