import React from 'react';
import {
  TextField as MaterialTextField,
  TextFieldProps as MaterialTextFieldProps,
} from '@material-ui/core';

export type TextFieldProps = MaterialTextFieldProps;

export const TextField: StyleableComponent<TextFieldProps> = ({
  size = 'small',
  ...props
}) => <MaterialTextField size={size} {...props} />;
