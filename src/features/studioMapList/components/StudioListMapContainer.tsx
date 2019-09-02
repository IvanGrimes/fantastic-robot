import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import dequal from 'dequal';
import { connect } from 'react-redux';
import { useTheme } from '@material-ui/core';
import { StudioListMap } from './StudioListMap';
import { RootState } from '../../../model/types';
import { getIsHeaderVisible } from '../../ui/model/selectors';
import { getBreakpoints } from '../../../theme';
import { usePrevious } from '../../../hooks/usePrevious';
import { getStudios } from '../../studioList/model/selectors';
import { setFullscreen } from '../model/actions';
import { getIsFullscreen } from '../model/selectors';

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const mapStateToProps = (state: RootState) => ({
  isMapListFullscreen: getIsFullscreen(state),
  isHeaderVisible: getIsHeaderVisible(state),
  studios: getStudios(state).list,
});

const dispatchProps = {
  handleSetFullscreenMap: setFullscreen,
};

const _StudioListMapContainer = ({
  isMapListFullscreen,
  handleSetFullscreenMap,
  isHeaderVisible,
  studios,
}: Props) => {
  const previsMapListFullscreen = usePrevious(isMapListFullscreen);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const theme = useTheme();
  const breakpoints = getBreakpoints({ theme });
  const html = useMemo(
    () =>
      typeof window !== 'undefined' ? document.querySelector('html') : null,
    []
  );
  const body = useMemo(
    () => (typeof window !== 'undefined' ? document.body : null),
    []
  );
  const handleFullscreenMapOn = useCallback(
    () => handleSetFullscreenMap(true),
    [handleSetFullscreenMap]
  );
  const handleFullscreenMapOff = useCallback(
    () => handleSetFullscreenMap(false),
    [handleSetFullscreenMap]
  );

  useEffect(() => {
    if (isMapListFullscreen) {
      if (window.innerWidth < breakpoints.values.lg) {
        setPrevScrollY(window.pageYOffset);
        window.scrollTo({ top: 0 });
      }

      if (body && html) {
        html.style.overflow = 'hidden';
        body.style.overflow = 'hidden';
      }
    }
  }, [body, breakpoints.values.lg, html, isMapListFullscreen]);

  useEffect(() => {
    if (previsMapListFullscreen && !isMapListFullscreen) {
      if (window.innerWidth < breakpoints.values.lg) {
        window.scrollTo({ top: prevScrollY });
      }

      if (body && html) {
        html.style.overflow = 'visible';
        body.style.overflow = 'visible';
      }
    }
  }, [
    body,
    breakpoints.values.lg,
    html,
    isMapListFullscreen,
    previsMapListFullscreen,
    prevScrollY,
  ]);

  return (
    <StudioListMap
      isMapListFullscreen={isMapListFullscreen}
      handleFullscreenMapOn={handleFullscreenMapOn}
      handleFullscreenMapOff={handleFullscreenMapOff}
      isHeaderVisible={isHeaderVisible}
      studios={studios}
    />
  );
};

export const StudioListMapContainer = connect(
  mapStateToProps,
  dispatchProps
)(memo(_StudioListMapContainer, dequal));
