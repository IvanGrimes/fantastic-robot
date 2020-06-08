import React, { FunctionComponent, ReactNode } from 'react';
import {
  Switch as MaterialSwitch,
  SwitchProps as MaterialSwitchProps,
  FormGroup,
  FormControlLabel,
} from '@material-ui/core';
import { Label } from './Switch.styles';

export type SwitchProps = MaterialSwitchProps & { label?: ReactNode };

export const Switch: FunctionComponent<SwitchProps> = ({
  label,
  color = 'primary',
  size = 'small',
  ...props
}) => {
  if (label) {
    return (
      <FormGroup row>
        <FormControlLabel
          control={<MaterialSwitch color={color} size={size} {...props} />}
          label={<Label>{label}</Label>}
        />
      </FormGroup>
    );
  }

  return <MaterialSwitch color={color} size={size} {...props} />;
};
