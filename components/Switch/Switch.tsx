import React, { FunctionComponent } from 'react';
import {
  Switch as MaterialSwitch,
  SwitchProps as MaterialSwitchProps,
  FormGroup,
  FormControlLabel,
} from '@material-ui/core';

export type SwitchProps = MaterialSwitchProps & { label?: string };

export const Switch: FunctionComponent<SwitchProps> = ({
  label,
  color = 'primary',
  ...props
}) => {
  if (label) {
    return (
      <FormGroup row>
        <FormControlLabel
          control={<MaterialSwitch color={color} {...props} />}
          label={label}
        />
      </FormGroup>
    );
  }

  return <MaterialSwitch color={color} {...props} />;
};
