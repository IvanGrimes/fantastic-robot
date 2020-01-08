import React, { ComponentType } from 'react';
import styled from 'styled-components';
import { GridProps } from '@material-ui/core/Grid';
import { Grid as DefaultGrid, Grid } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

export type FormGridProps = GridProps;

export const ContentGrid = styled<ComponentType<GridProps>>(DefaultGrid)`
  && {
    min-height: 100%;
    overflow: hidden;
  }
`;

export const FormGrid = styled<ComponentType<FormGridProps>>(props => (
  <Grid
    {...props}
    container
    item
    justify="center"
    component="form"
    spacing={3}
  />
))``;

export const Separator = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${grey.A100};
`;
