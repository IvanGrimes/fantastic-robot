import styled from 'styled-components';
import React, { ComponentType } from 'react';
import { CircularProgress, Grid } from '@material-ui/core';
import { CircularProgressProps } from '@material-ui/core/CircularProgress';
import { em } from 'polished';
import { GridProps } from '@material-ui/core/Grid';
import {
  InfiniteScrollProps,
  InfiniteScroll as DefaultInfiniteScroll,
} from '../../components/InfiniteScroll';

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
