import styled, { css } from 'styled-components';
import { ComponentType } from 'react';
import { GridProps } from '@material-ui/core/Grid';
import { Grid } from '@material-ui/core';

export const MapGrid = styled<ComponentType<GridProps>>(Grid)`
  && {
    position: relative;
    min-height: 100vh;
  }
`;

export const OuterWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

export const InnerWrapper = styled.div<{ width: number }>`
  ${({ width }) => css`
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: ${width}px;
  `}
`;
