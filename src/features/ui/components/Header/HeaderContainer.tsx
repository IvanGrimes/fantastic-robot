import React, { memo } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../../model/types';
import {
  getIsFullscreenMap,
  getIsHeaderVisible,
  getIsMapVisible,
} from '../../model/selectors';
import {
  setFullscreenMap,
  setHeaderVisibility,
  setMapVisibility,
} from '../../model/actions';
import { Header } from './Header';

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const mapStateToProps = (state: RootState) => ({
  isMapVisible: getIsMapVisible(state),
  isHeaderVisible: getIsHeaderVisible(state),
  isFullscreenMap: getIsFullscreenMap(state),
});

const dispatchProps = {
  handleSetMapVisibility: setMapVisibility,
  handleSetHeaderVisibility: setHeaderVisibility,
  handleSetFullscreenMap: setFullscreenMap,
};

const _HeaderContainer = ({
  isMapVisible,
  handleSetMapVisibility,
  handleSetHeaderVisibility,
  isHeaderVisible,
  handleSetFullscreenMap,
  isFullscreenMap,
}: Props) => {
  return (
    <Header
      isMapVisible={isMapVisible}
      handleSetMapVisibility={handleSetMapVisibility}
      handleSetHeaderVisibility={handleSetHeaderVisibility}
      isHeaderVisible={isHeaderVisible}
      handleSetFullscreenMap={handleSetFullscreenMap}
      isFullscreenMap={isFullscreenMap}
    />
  );
};

export const HeaderContainer = connect(
  mapStateToProps,
  dispatchProps
)(memo(_HeaderContainer));
