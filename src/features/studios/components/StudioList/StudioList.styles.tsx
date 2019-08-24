import styled from 'styled-components';
import React, { ComponentType } from 'react';
import { GridProps } from '@material-ui/core/Grid';
import { Grid } from '@material-ui/core';

export const ListGrid = styled<ComponentType<GridProps>>(props => (
  <Grid {...props} component="ul" />
))`
  && {
    padding: 0 4px;
    margin-top: -12px;
  }
`;

export const ListItemGrid = styled<ComponentType<GridProps>>(props => (
  <Grid {...props} component="li" />
))``;
