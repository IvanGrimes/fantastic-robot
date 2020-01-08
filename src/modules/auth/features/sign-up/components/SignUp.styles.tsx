import { Grid as DefaultGrid } from '@material-ui/core';
import styled, { css } from 'styled-components';
import React, { ComponentType } from 'react';
import { GridProps } from '@material-ui/core/Grid';

export const MainGrid = styled<ComponentType<GridProps>>(DefaultGrid)`
  && {
    min-height: 100%;
    overflow: hidden;
  }
`;

export const WrapperGrid = styled<
  ComponentType<GridProps & { isFormVisible: boolean }>
>(({ isFormVisible, ...props }) => <DefaultGrid {...props} />)`
  ${({ isFormVisible }) =>
    !isFormVisible &&
    css`
      && {
        margin-top: -412px;
      }
    `};
`;
