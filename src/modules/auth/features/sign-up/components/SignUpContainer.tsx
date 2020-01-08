import React, { useCallback, useState } from 'react';
import { SignUp } from './SignUp';

export type SignUpProps = {};

export const SignUpContainer = (_props: SignUpProps) => {
  const [showForm, setForm] = useState(false);
  const handleShowForm = useCallback(() => setForm(true), []);

  return <SignUp showForm={showForm} handleShowForm={handleShowForm} />;
};
