import React, { memo, useCallback, useEffect } from 'react';
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
    } else {
      handleSetHeaderVisibility(true);
    }
  }, [handleSetHeaderVisibility, isFullscreenMap]);

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
