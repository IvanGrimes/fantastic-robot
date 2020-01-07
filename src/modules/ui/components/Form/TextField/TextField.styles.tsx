import React, { ComponentType } from 'react';
import { TextField as DefaultTextField } from '@material-ui/core';
import { TextFieldProps as DefaultTextFieldProps } from '@material-ui/core/TextField';
import styled, { css } from 'styled-components';

export const TextField = styled<ComponentType<DefaultTextFieldProps>>(props => (
  <DefaultTextField
    {...props}
    FormHelperTextProps={{ classes: { root: 'error' } }}
  />
))`
  ${({ error }) => css`
    && {
      .error {
        opacity: ${error ? 1 : 0};
        transition: opacity 150ms linear;
      }
    }
  `}
`;
