import { Dialog as DefaultDialog } from '@material-ui/core';
import styled, { css } from 'styled-components';
import React, { ComponentType } from 'react';
import { DialogProps } from '@material-ui/core/Dialog';

export const Dialog = styled<ComponentType<DialogProps>>(props => (
  <DefaultDialog {...props} classes={{ paper: 'paper' }} />
))`
  ${({ theme }) => css`
    && {
      .paper {
        padding: ${theme.spacing(2)}px;
      }
    }
  `};
`;
