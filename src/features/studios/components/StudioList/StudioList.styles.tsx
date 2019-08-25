import styled, { css } from 'styled-components';
import React, { ComponentType } from 'react';
import { GridProps } from '@material-ui/core/Grid';
import { CircularProgress, Grid } from '@material-ui/core';
import { em } from 'polished';
import { CircularProgressProps } from '@material-ui/core/CircularProgress';
import {
  InfiniteScroll as DefaultInfiniteScroll,
  InfiniteScrollProps,
} from '../../../../components/InfiniteScroll';
import { getBreakpoints } from '../../../../theme';

export const InfiniteScroll = styled<ComponentType<InfiniteScrollProps>>(
  DefaultInfiniteScroll
)`
  && {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    overflow: hidden !important;
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

export const Wrapper = styled.div<{ isVisible: boolean }>`
  ${({ isVisible, ...props }) => {
    const { down } = getBreakpoints(props);

    return css`
      width: 100%;
      background-color: #fff;
      position: relative;
      z-index: 2;
      padding-top: ${em(24)};
      min-height: 100vh;
      transform: translate(${isVisible ? '0px, 0' : '-4000px, 0'});
      transition: transform 300ms ${isVisible ? 'ease-out' : 'ease-in'};
      ${down('md')} {
        transform: translate(${isVisible ? '0, 0px' : '0, 1000px'});
      }
    `;
  }}
`;

export const ListGrid = styled<ComponentType<GridProps>>(props => (
  <Grid {...props} component="ul" />
))<{ isMapVisible: boolean }>`
  ${({ isMapVisible, ...props }) => {
    const { down } = getBreakpoints(props);

    return css`
      && {
        max-width: 100%;
        margin-top: 102px;
        position: relative;
        z-index: 1;
        padding: 0 4px;
        ${isMapVisible &&
          css`
            ${down('md')} {
              margin-top: -8px;
            }
          `}
      }
    `;
  }}
`;

export const ListItemGrid = styled<ComponentType<GridProps>>(props => (
  <Grid {...props} component="li" />
))``;
