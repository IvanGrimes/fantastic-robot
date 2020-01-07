import React, { memo, useCallback } from 'react';
import { connect } from 'react-redux';
import dequal from 'dequal';
import { RootState } from '@model/types';
import { setFilters } from '@modules/studio/features/filters/model/actions';
import { getFilters } from '@modules/studio/features/filters/model/selectors';
import * as auth from '@modules/auth';
import { getIsHeaderVisible } from '../../../model/selectors';
import { setHeaderVisibility } from '../../../model/actions';
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
  handleChangeAuthForm: auth.actions.changeForm,
};

const _HeaderContainer = ({
  handleSetHeaderVisibility,
  isHeaderVisible,
  handleSetFilters,
  nameFilter,
  withBar,
  handleChangeAuthForm,
}: Props) => {
  const handleSearch = useCallback(
    (value: string) => handleSetFilters({ name: value }),
    [handleSetFilters]
  );
  const handleOpenSignUp = useCallback(
    () => handleChangeAuthForm({ visibility: true, view: 'sign-up' }),
    [handleChangeAuthForm]
  );
  const handleOpenSignIn = useCallback(
    () => handleChangeAuthForm({ visibility: true, view: 'sign-in' }),
    [handleChangeAuthForm]
  );

  return (
    <Header
      handleSetHeaderVisibility={handleSetHeaderVisibility}
      isHeaderVisible={isHeaderVisible}
      searchValue={nameFilter}
      handleSearch={handleSearch}
      showBar={withBar}
      handleOpenSignUp={handleOpenSignUp}
      handleOpenSignIn={handleOpenSignIn}
    />
  );
};

export const HeaderContainer = connect(
  mapStateToProps,
  dispatchProps
)(memo(_HeaderContainer, dequal));
