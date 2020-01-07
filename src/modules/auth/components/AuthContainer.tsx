import React, { memo, useCallback } from 'react';
import { RootState } from '@model/types';
import { connect } from 'react-redux';
import { getView, getVisibility } from '../model/selectors';
import { changeForm } from '../model/actions';
import { Auth } from './Auth';

export type AuthProps = ReturnType<typeof mapState> & typeof mapDispatch;

const mapState = (state: RootState) => ({
  isVisible: getVisibility(state),
  view: getView(state),
});

const mapDispatch = {
  handleChangeForm: changeForm,
};

const _AuthContainer = ({ handleChangeForm, ...props }: AuthProps) => {
  const handleClose = useCallback(
    () => handleChangeForm({ visibility: false }),
    [handleChangeForm]
  );

  return <Auth handleClose={handleClose} {...props} />;
};

export const AuthContainer = connect(
  mapState,
  mapDispatch
)(memo(_AuthContainer));
