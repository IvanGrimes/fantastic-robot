import styled from 'styled-components';
import React, { ComponentType } from 'react';
import { GridProps } from '@material-ui/core/Grid';
import { CircularProgress, Grid } from '@material-ui/core';
import { em } from 'polished';
import { CircularProgressProps } from '@material-ui/core/CircularProgress';
import {
  InfiniteScroll as DefaultInfiniteScroll,
  InfiniteScrollProps,
} from '../../../../components/InfiniteScroll';

export const InfiniteScroll = styled<ComponentType<InfiniteScrollProps>>(
  DefaultInfiniteScroll
)`
  && {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    overflow: hidden !important;
    margin-top: ${em(24)};
  }
`;

const LoaderGrid = styled<ComponentType<GridProps>>(props => (
  <Grid container item xs={12} justify="center" {...props} />
))`
  && {
    position: relative;
    margin: ${em(32)} 0;
  }
`;

export const InfiniteScrollLoader = styled<
  ComponentType<CircularProgressProps>
>(props => (
  <LoaderGrid>
    <CircularProgress {...props} />
  </LoaderGrid>
))``;

export const ListGrid = styled<ComponentType<GridProps>>(props => (
  <Grid {...props} component="ul" />
))`
  && {
    position: relative;
    z-index: -1;
    padding: 0 4px;
    margin-top: -12px;
  }
`;

export const ListItemGrid = styled<ComponentType<GridProps>>(props => (
  <Grid {...props} component="li" />
))``;
