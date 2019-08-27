import React, { memo, useCallback } from 'react';
import dequal from 'dequal';
import { connect } from 'react-redux';
import debounce from 'lodash/debounce';
import { HeaderBar } from './HeaderBar';
import { RootState } from '../../../../../model/types';
import { getIsMapVisible } from '../../../model/selectors';
import { setFullscreenMap, setMapVisibility } from '../../../model/actions';
import { useRequestAnimationFrame } from '../../../../../hooks/useRequestAnimationFrame';

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const mapStateToProps = (state: RootState) => ({
  isMapVisible: getIsMapVisible(state),
});

const dispatchProps = {
  handleSetMapVisibility: setMapVisibility,
  handleSetFullscreenMap: setFullscreenMap,
};

const _HeaderBarContainer = ({
  isMapVisible,
  handleSetMapVisibility,
  handleSetFullscreenMap,
}: Props) => {
  const handleToggleMapVisibility = useCallback(
    debounce(() => {
      handleSetMapVisibility(!isMapVisible);
      handleSetFullscreenMap(false);
    }, 250),
    [handleSetMapVisibility, isMapVisible]
  );
  const toggleMapVisibility = useRequestAnimationFrame(
    handleToggleMapVisibility
  );

  return (
    <HeaderBar
      isMapVisible={isMapVisible}
      handleToggleMapVisibility={toggleMapVisibility}
    />
  );
};

export const HeaderBarContainer = connect(
  mapStateToProps,
  dispatchProps
)(memo(_HeaderBarContainer, dequal));
