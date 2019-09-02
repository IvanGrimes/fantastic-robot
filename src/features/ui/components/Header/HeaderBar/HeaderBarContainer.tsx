import React, { memo, useCallback } from 'react';
import dequal from 'dequal';
import { connect } from 'react-redux';
import debounce from 'lodash/debounce';
import { HeaderBar } from './HeaderBar';
import { RootState } from '../../../../../model/types';
import { useRequestAnimationFrame } from '../../../../../hooks/useRequestAnimationFrame';
import {
  setFullscreen,
  setIsEnable,
} from '../../../../studioMapList/model/actions';
import { getIsEnabled } from '../../../../studioMapList/model/selectors';

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const mapStateToProps = (state: RootState) => ({
  isMapListEnabled: getIsEnabled(state),
});

const dispatchProps = {
  handleSetMapVisibility: setIsEnable,
  handleSetFullscreenMap: setFullscreen,
};

const _HeaderBarContainer = ({
  isMapListEnabled,
  handleSetMapVisibility,
  handleSetFullscreenMap,
}: Props) => {
  const handleToggleMapVisibility = useCallback(
    debounce(() => {
      handleSetMapVisibility(!isMapListEnabled);
      handleSetFullscreenMap(false);
    }, 250),
    [handleSetMapVisibility, isMapListEnabled]
  );
  const toggleMapVisibility = useRequestAnimationFrame(
    handleToggleMapVisibility
  );

  return (
    <HeaderBar
      isMapListEnabled={isMapListEnabled}
      handleToggleMapVisibility={toggleMapVisibility}
    />
  );
};

export const HeaderBarContainer = connect(
  mapStateToProps,
  dispatchProps
)(memo(_HeaderBarContainer, dequal));
