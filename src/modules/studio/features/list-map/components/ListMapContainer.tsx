import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import dequal from 'dequal';
import { connect } from 'react-redux';
import { useTheme } from '@material-ui/styles';
import { RootState } from '@model/types';
import { selectors as uiSelectors } from '@features/ui';
import { getBreakpoints } from '@theme/breakpoints';
import { usePrevious } from '@hooks/usePrevious';
import { Theme } from '@theme/types';
import * as list from '../../list';
import { setFullscreen } from '../model/actions';
import { getIsFullscreen } from '../model/selectors';
import { ListMap } from './ListMap';

export type ListMapProps = {};

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const mapStateToProps = (state: RootState) => ({
  isMapListFullscreen: getIsFullscreen(state),
  isHeaderVisible: uiSelectors.getIsHeaderVisible(state),
  studios: list.selectors.getStudios(state),
});

const dispatchProps = {
  handleSetFullscreenMap: setFullscreen,
};

const _ListMapContainer = ({
  isMapListFullscreen,
  handleSetFullscreenMap,
  isHeaderVisible,
  studios,
}: Props) => {
  const prevIsMapListFullscreen = usePrevious(isMapListFullscreen);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const theme = useTheme<Theme>();
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
    if (prevIsMapListFullscreen && !isMapListFullscreen) {
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
    prevIsMapListFullscreen,
    prevScrollY,
  ]);

  return (
    <ListMap
      isMapListFullscreen={isMapListFullscreen}
      handleFullscreenMapOn={handleFullscreenMapOn}
      handleFullscreenMapOff={handleFullscreenMapOff}
      isHeaderVisible={isHeaderVisible}
      studios={studios}
    />
  );
};

export const ListMapContainer = connect(
  mapStateToProps,
  dispatchProps
)(memo(_ListMapContainer, dequal));
