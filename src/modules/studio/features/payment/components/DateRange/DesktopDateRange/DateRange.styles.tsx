import styled, { css } from 'styled-components';
import { Grid } from '@material-ui/core';
import React, { ComponentType } from 'react';
import { GridProps } from '@material-ui/core/Grid';

export const List = styled<ComponentType<GridProps & { fill: boolean }>>(
  ({ fill, ...props }) => <Grid {...props} container component="ul" />
)`
  ${({ fill }) => css`
    && {
      padding: 0;
      margin: 0 0 16px 0;
      ${fill &&
        css`
          padding-bottom: 178px;
        `};
    }
  `};
`;

export const ListItem = styled<ComponentType<GridProps>>(props => (
  <Grid {...props} container item component="li" />
))`
  && {
    margin: 8px 0;
  }
`;
