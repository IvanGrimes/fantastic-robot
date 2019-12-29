import styled from 'styled-components';
import { ComponentType } from 'react';
import { GridProps } from '@material-ui/core/Grid';
import { Grid } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

export const MainGrid = styled<ComponentType<GridProps>>(Grid)`
  && {
    margin-top: 48px;
    padding-bottom: 400px;
  }
`;

export const Separator = styled.div<{ marginTop: number }>`
  display: flex;
  width: 100%;
  height: 1px;
  background-color: ${grey.A100};
  margin-top: ${({ marginTop }) => marginTop}px;
`;
