import React, { memo } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../../model/types';
import { getIsHeaderVisible, getIsMapVisible } from '../../model/selectors';
import { setHeaderVisibility, toggleMapVisibility } from '../../model/actions';
import { Header } from './Header';

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const mapStateToProps = (state: RootState) => ({
  isMapVisible: getIsMapVisible(state),
  isHeaderVisible: getIsHeaderVisible(state),
});

const dispatchProps = {
  handleToggleMap: toggleMapVisibility,
  handleSetHeaderVisibility: setHeaderVisibility,
};

const _HeaderContainer = ({
  isMapVisible,
  handleToggleMap,
  handleSetHeaderVisibility,
  isHeaderVisible,
}: Props) => {
  return (
    <Header
      isMapVisible={isMapVisible}
      handleToggleMap={handleToggleMap}
      handleSetHeaderVisibility={handleSetHeaderVisibility}
      isHeaderVisible={isHeaderVisible}
    />
  );
};

export const HeaderContainer = connect(
  mapStateToProps,
  dispatchProps
)(memo(_HeaderContainer));
