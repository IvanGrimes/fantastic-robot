import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import dequal from 'dequal';
import { connect } from 'react-redux';
import { useTheme } from '@material-ui/core';
import { StudioListMap } from './StudioListMap';
import { RootState } from '../../../../model/types';
import { setFullscreenMap } from '../../../ui/model/actions';
import {
  getIsFullscreenMap,
  getIsHeaderVisible,
} from '../../../ui/model/selectors';
import { getBreakpoints } from '../../../../theme';
import { usePrevious } from '../../../../hooks/usePrevious';
import { useRequestAnimationFrame } from '../../../../hooks/useRequestAnimationFrame';

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const mapStateToProps = (state: RootState) => ({
  isFullscreenMap: getIsFullscreenMap(state),
  isHeaderVisible: getIsHeaderVisible(state),
});

const dispatchProps = {
  handleSetFullscreenMap: setFullscreenMap,
};

const _StudioListMapContainer = ({
  isFullscreenMap,
  handleSetFullscreenMap,
  isHeaderVisible,
}: Props) => {
  const prevIsFullscreenMap = usePrevious(isFullscreenMap);
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
  const scrollToTop = useRequestAnimationFrame(() =>
    window.scrollTo({ top: 0 })
  );

  useEffect(() => {
    if (isFullscreenMap) {
      if (window.innerWidth < breakpoints.values.lg) {
        setPrevScrollY(window.pageYOffset);
        scrollToTop();
      }

      if (body && html) {
        html.style.overflow = 'hidden';
        body.style.overflow = 'hidden';
      }
    }
  }, [body, breakpoints.values.lg, html, isFullscreenMap, scrollToTop]);

  useEffect(() => {
    if (prevIsFullscreenMap && !isFullscreenMap) {
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
    isFullscreenMap,
    prevIsFullscreenMap,
    prevScrollY,
  ]);

  return (
    <StudioListMap
      isFullscreenMap={isFullscreenMap}
      handleFullscreenMapOn={handleFullscreenMapOn}
      handleFullscreenMapOff={handleFullscreenMapOff}
      isHeaderVisible={isHeaderVisible}
    />
  );
};

export const StudioListMapContainer = connect(
  mapStateToProps,
  dispatchProps
)(memo(_StudioListMapContainer, dequal));
