import React, { ComponentType } from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { GridProps } from '@material-ui/core/Grid';
import { grey } from '@material-ui/core/colors';

export const List = styled<ComponentType<GridProps>>(props => (
  <Grid {...props} component="ul" container item spacing={1} />
))``;

export const ListItem = styled<ComponentType<GridProps>>(props => (
  <Grid {...props} component="li" container item justify="space-between" />
))`
  && {
    &:not(:last-child) {
      border-bottom: 1px solid ${grey.A100};
    }
  }
`;
