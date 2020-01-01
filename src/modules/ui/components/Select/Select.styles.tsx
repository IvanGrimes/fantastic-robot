import styled from 'styled-components';
import { InputLabel, OutlinedInput } from '@material-ui/core';
import React, { ComponentType } from 'react';
import { InputLabelProps } from '@material-ui/core/InputLabel';
import { OutlinedInputProps } from '@material-ui/core/OutlinedInput';

export const Label = styled<ComponentType<InputLabelProps>>(props => (
  <InputLabel {...props} classes={{ filled: 'filled', shrink: 'shrink' }} />
))`
  && {
    &.filled.shrink {
      transform: translate(0, 4px) scale(0.75);
    }
  }
`;

export const Input = styled<ComponentType<OutlinedInputProps>>(props => (
  <OutlinedInput {...props} classes={{ input: 'input' }} />
))`
  && {
    .input {
      padding-top: 11.5px;
      padding-bottom: 11.5px;
    }
  }
`;
