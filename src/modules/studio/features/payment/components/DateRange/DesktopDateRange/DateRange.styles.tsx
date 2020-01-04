import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import React, { ComponentType } from 'react';
import { GridProps } from '@material-ui/core/Grid';

export const List = styled<ComponentType<GridProps>>(props => (
  <Grid {...props} container component="ul" />
))`
  && {
    padding: 0;
    margin: -8px 0 16px 0;
  }
`;

export const ListItem = styled<ComponentType<GridProps>>(props => (
  <Grid {...props} container item component="li" />
))`
  && {
    margin: 8px 0;
  }
`;
