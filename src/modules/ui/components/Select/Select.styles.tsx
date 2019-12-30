import styled from 'styled-components';
import { InputLabel } from '@material-ui/core';
import React, { ComponentType } from 'react';
import { InputLabelProps } from '@material-ui/core/InputLabel';

export const Label = styled<ComponentType<InputLabelProps>>(props => (
  <InputLabel {...props} classes={{ filled: 'filled', shrink: 'shrink' }} />
))`
  && {
    &.filled.shrink {
      transform: translate(0, 4px) scale(0.75);
    }
  }
`;
