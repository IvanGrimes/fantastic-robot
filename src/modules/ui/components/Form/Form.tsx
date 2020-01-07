import React from 'react';
import {
  FormProps as FormComponentProps,
  Form as FormComponent,
} from 'react-final-form';

export type FormProps = FormComponentProps;

export const Form = (props: FormProps) => <FormComponent {...props} />;
