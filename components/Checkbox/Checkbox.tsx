import React, { FunctionComponent, ReactNode } from 'react';
import {
  Checkbox as MaterialCheckbox,
  CheckboxProps as MaterialCheckboxProps,
  FormControlLabel,
  FormGroup,
} from '@material-ui/core';
import { Label } from './Checkbox.styles';

export type CheckboxProps = MaterialCheckboxProps & { label?: ReactNode };

export const Checkbox: FunctionComponent<CheckboxProps> & {
  Label: typeof Label;
} = ({
  color = 'primary',
  label,
  onChange,
  checked,
  size = 'small',
  ...props
}) => {
  if (label) {
    return (
      <FormGroup row>
        <FormControlLabel
          control={
            <MaterialCheckbox
              color={color}
              onChange={onChange}
              checked={checked}
              size={size}
              {...props}
            />
          }
          label={<Label>{label}</Label>}
        />
      </FormGroup>
    );
  }

  return (
    <MaterialCheckbox
      color={color}
      onChange={onChange}
      checked={checked}
      size={size}
      {...props}
    />
  );
};

Checkbox.Label = Label;
