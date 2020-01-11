import React, { memo } from 'react';
import { withTypes, FormProps } from 'react-final-form';

export const getForm = <V extends {}>() => {
  const { Form } = withTypes<V>();

  return memo((props: FormProps<V>) => <Form {...props} />);
};
