import React from 'react';
import { Form as FormComponent } from 'react-final-form';
import { FormProps } from './index';

export const Form = (props: FormProps) => <FormComponent {...props} />;
