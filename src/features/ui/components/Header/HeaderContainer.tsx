import React, { memo, useCallback } from 'react';
import { connect } from 'react-redux';
import dequal from 'dequal';
import { RootState } from '@model/types';
import { setFilters } from '@modules/studio/features/filters/model/actions';
import { getFilters } from '@modules/studio/features/filters/model/selectors';
import { getIsHeaderVisible } from '../../model/selectors';
import { setHeaderVisibility } from '../../model/actions';
import { Header } from './Header';
import { HeaderProps } from './index';

type StoreProps = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

type Props = HeaderProps & StoreProps;

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
  withBar,
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
      showBar={withBar}
    />
  );
};

export const HeaderContainer = connect(
  mapStateToProps,
  dispatchProps
)(memo(_HeaderContainer, dequal));
