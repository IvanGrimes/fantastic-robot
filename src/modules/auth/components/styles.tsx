import React, { ComponentType } from 'react';
import styled from 'styled-components';
import { GridProps } from '@material-ui/core/Grid';
import { Grid } from '@material-ui/core';

export const FormGrid = styled<ComponentType<GridProps>>(props => (
  <Grid
    {...props}
    container
    item
    justify="center"
    component="form"
    spacing={3}
  />
))`
  && {
    width: 100%;
    margin: 0;
  }
`;
