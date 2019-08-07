import styled from 'styled-components';
import DefaultInfiniteScroll, { InfiniteScrollProps } from "react-infinite-scroll-component";
import React, { ComponentType } from "react";
import { CircularProgress, Grid } from "@material-ui/core";
import { CircularProgressProps } from "@material-ui/core/CircularProgress";
import { em } from "polished";
import { GridProps } from "@material-ui/core/Grid";

export const InfiniteScrollGrid = styled<ComponentType<GridProps>>(Grid)`
  && {
    & > div {
      display: flex;
      width: 100%;
    }
  }
`

export const InfiniteScroll = styled<ComponentType<InfiniteScrollProps>>(DefaultInfiniteScroll)`
  && {
      overflow: hidden !important;

  }
`;

const LoaderGrid = styled<ComponentType<GridProps>>(props => <Grid container item justify="center" {...props} />)`
  && {
      position: relative;
    margin: ${em(32)} 0;
  }
`;

export const InfiniteScrollLoader = styled<ComponentType<CircularProgressProps>>(props => <LoaderGrid><CircularProgress {...props} /></LoaderGrid>)``;
