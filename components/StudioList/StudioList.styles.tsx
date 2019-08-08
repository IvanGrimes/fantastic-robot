import styled from 'styled-components';
import React, { ComponentType } from 'react';
import { GridProps } from '@material-ui/core/Grid';
import { Grid } from '@material-ui/core';
import { em } from 'polished';

export const ListGrid = styled<ComponentType<GridProps>>(props => (
  <Grid {...props} component="ul" container />
))`
  && {
    margin: -${em(16)} 0;
    padding: 0 4px;
  }
`;

export const ListItemGrid = styled<ComponentType<GridProps>>(props => (
  <Grid {...props} component="li" item xs={12} />
))`
  && {
    margin: ${em(16)} 0;
  }
`;
