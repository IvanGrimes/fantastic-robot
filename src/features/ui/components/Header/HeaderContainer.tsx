import React, { memo, useCallback } from 'react';
import { connect } from 'react-redux';
import dequal from 'dequal';
import { RootState } from '../../../../model/types';
import { getIsHeaderVisible } from '../../model/selectors';
import { setHeaderVisibility } from '../../model/actions';
import { Header } from './Header';
import { setFilters } from '../../../studioFilters/model/actions';
import { getFilters } from '../../../studioFilters/model/selectors';

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const mapStateToProps = (state: RootState) => ({
  isHeaderVisible: getIsHeaderVisible(state),
  nameFilter: getFilters(state).name,
});

const dispatchProps = {
  handleSetHeaderVisibility: setHeaderVisibility,
  handleSetFilters: setFilters,
};

const _HeaderContainer = ({
  handleSetHeaderVisibility,
  isHeaderVisible,
  handleSetFilters,
  nameFilter,
}: Props) => {
  const handleSearch = useCallback(
    (value: string) => handleSetFilters({ name: value }),
    [handleSetFilters]
  );

  return (
    <Header
      handleSetHeaderVisibility={handleSetHeaderVisibility}
      isHeaderVisible={isHeaderVisible}
      searchValue={nameFilter}
      handleSearch={handleSearch}
    />
  );
};

export const HeaderContainer = connect(
  mapStateToProps,
  dispatchProps
)(memo(_HeaderContainer, dequal));
