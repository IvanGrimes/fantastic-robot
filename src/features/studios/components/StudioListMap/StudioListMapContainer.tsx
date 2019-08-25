import React, { memo, useCallback, useEffect, useMemo } from 'react';
import dequal from 'dequal';
import { connect } from 'react-redux';
import { StudioListMap } from './StudioListMap';
import { RootState } from '../../../../model/types';
import {
  setFullscreenMap,
  setHeaderVisibility,
} from '../../../ui/model/actions';
import { getIsFullscreenMap } from '../../../ui/model/selectors';

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const mapStateToProps = (state: RootState) => ({
  isFullscreenMap: getIsFullscreenMap(state),
});

const dispatchProps = {
  handleSetHeaderVisibility: setHeaderVisibility,
  handleSetFullscreenMap: setFullscreenMap,
};

const _StudioListMapContainer = ({
  isFullscreenMap,
  handleSetHeaderVisibility,
  handleSetFullscreenMap,
}: Props) => {
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
    if (isFullscreenMap) {
      handleSetHeaderVisibility(false);

      if (body && html) {
        html.style.overflow = 'hidden';
        body.style.overflow = 'hidden';
      }
    } else {
      handleSetHeaderVisibility(true);

      if (body && html) {
        html.style.overflow = 'visible';
        body.style.overflow = 'visible';
      }
    }
  }, [body, handleSetHeaderVisibility, html, isFullscreenMap]);

  return (
    <StudioListMap
      isFullscreenMap={isFullscreenMap}
      handleFullscreenMapOn={handleFullscreenMapOn}
      handleFullscreenMapOff={handleFullscreenMapOff}
    />
  );
};

export const StudioListMapContainer = connect(
  mapStateToProps,
  dispatchProps
)(memo(_StudioListMapContainer, dequal));
