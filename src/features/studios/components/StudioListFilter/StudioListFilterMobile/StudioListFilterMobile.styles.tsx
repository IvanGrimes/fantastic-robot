import styled, { css } from 'styled-components';
import { ComponentType } from 'react';
import { PaperProps } from '@material-ui/core/Paper';
import { Grid, Paper } from '@material-ui/core';
import { GridProps } from '@material-ui/core/Grid';
import { em } from 'polished';

export const Wrapper = styled<ComponentType<PaperProps>>(Paper)<{
  isVisible: boolean;
}>`
  ${({ isVisible }) => css`
    && {
      position: absolute;
      box-shadow: none;
      top: 0;
      left: 0;
      width: 100%;
      min-height: 100%;
      z-index: 1600;
      opacity: ${isVisible ? 1 : 0};
      transform: translate(0, ${isVisible ? 0 : '-10000px'});
      transition: transform linear 0ms ${isVisible ? 0 : 300}ms,
        opacity 300ms linear;
    }
  `}
`;

export const FilterGrid = styled<ComponentType<GridProps>>(Grid)`
  && {
    margin-top: ${em(16)};
  }
`;
