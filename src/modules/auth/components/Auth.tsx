import React from 'react';
import { SignUp } from '../features/sign-up';
import { Popup } from './Popup';
import { AuthView } from '../model/types';

export type AuthProps = {
  isVisible: boolean;
  handleClose: () => void;
  view: AuthView;
};

const getComponent = (view: AuthView) => {
  switch (view) {
    case 'sign-up':
      return SignUp;
    case 'sign-in':
    case 'password-recovery':
    default:
      return () => null;
  }
};

export const Auth = ({ view, isVisible, handleClose }: AuthProps) => {
  const Component = getComponent(view);

  return (
    <Popup isOpen={isVisible} handleClose={handleClose}>
      <Component />
    </Popup>
  );
};
