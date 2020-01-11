import React, { memo, useCallback, useState } from 'react';
import { RootState } from '@model/types';
import { connect } from 'react-redux';
import { SignUp } from './SignUp';
import { getSignUpLoading } from '../model/selectors';
import { signUpAsync } from '../model/actions';
import { FormFields } from './Form';

export type SignUpProps = ReturnType<typeof mapState> & typeof mapDispatch;

const mapState = (state: RootState) => ({
  isLoading: getSignUpLoading(state),
});

const mapDispatch = {
  handleSignUp: signUpAsync.request,
};

const _SignUpContainer = ({ handleSignUp, isLoading }: SignUpProps) => {
  const [showForm, setForm] = useState(false);
  const handleShowForm = useCallback(() => setForm(true), []);
  const handleSignUpEmail = useCallback(
    ({ email, name, password, phone }: FormFields) =>
      handleSignUp({
        mail: email,
        mobile: phone,
        name,
        password,
        smsCode: '1111',
      }),
    [handleSignUp]
  );

  return (
    <SignUp
      showForm={showForm}
      handleShowForm={handleShowForm}
      handleSubmit={handleSignUpEmail}
      isLoading={isLoading}
    />
  );
};

export const SignUpContainer = connect(
  mapState,
  mapDispatch
)(memo(_SignUpContainer));
