import React, { memo, useCallback } from 'react';
import { connect } from 'react-redux';
import dequal from 'dequal';
import { RootState } from '../../../../model/types';
import { getIsHeaderVisible, getIsMapVisible } from '../../model/selectors';
import {
  setFullscreenMap,
  setHeaderVisibility,
  setMapVisibility,
} from '../../model/actions';
import { Header } from './Header';
import { setFilters } from '../../../studios/model/actions';
import { getAppliedFilters } from '../../../studios/model/selectors';

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const mapStateToProps = (state: RootState) => ({
  isMapVisible: getIsMapVisible(state),
  isHeaderVisible: getIsHeaderVisible(state),
  nameFilter: getAppliedFilters(state).name,
});

const dispatchProps = {
  handleSetMapVisibility: setMapVisibility,
  handleSetHeaderVisibility: setHeaderVisibility,
  handleSetFullscreenMap: setFullscreenMap,
  handleSetFilters: setFilters,
};

const _HeaderContainer = ({
  isMapVisible,
  handleSetMapVisibility,
  handleSetHeaderVisibility,
  isHeaderVisible,
  handleSetFullscreenMap,
  handleSetFilters,
  nameFilter,
}: Props) => {
  const handleSearch = useCallback(
    (value: string) => handleSetFilters({ name: value }),
    [handleSetFilters]
  );

  return (
    <Header
      isMapVisible={isMapVisible}
      handleSetMapVisibility={handleSetMapVisibility}
      handleSetHeaderVisibility={handleSetHeaderVisibility}
      isHeaderVisible={isHeaderVisible}
      handleSetFullscreenMap={handleSetFullscreenMap}
      searchValue={nameFilter}
      handleSearch={handleSearch}
    />
  );
};

export const HeaderContainer = connect(
  mapStateToProps,
  dispatchProps
)(memo(_HeaderContainer, dequal));
