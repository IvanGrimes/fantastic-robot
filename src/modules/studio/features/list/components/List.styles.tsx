import styled, { css } from 'styled-components';
import React, { ComponentType } from 'react';
import { GridProps } from '@material-ui/core/Grid';
import { CircularProgress, Grid } from '@material-ui/core';
import { em } from 'polished';
import { CircularProgressProps } from '@material-ui/core/CircularProgress';
import { getBreakpoints } from '@theme/breakpoints';
import {
  InfiniteScroll as DefaultInfiniteScroll,
  InfiniteScrollProps,
} from '@modules/ui/components';
import { ListItemProps } from './ListItem';

export const InfiniteScroll = styled<ComponentType<InfiniteScrollProps>>(
  DefaultInfiniteScroll
)`
  && {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    overflow: hidden !important;
    padding-bottom: 10px;
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
      min-height: 100%;
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
))<{ isMapListEnabled: boolean }>`
  ${({ isMapListEnabled, ...props }) => {
    const { down } = getBreakpoints(props);

    return css`
      && {
        max-width: 100%;
        position: relative;
        z-index: 1;
        padding: 0 4px;
        margin: -8px 0 0 0;
        ${isMapListEnabled &&
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
))<{ variant: ListItemProps['variant'] }>`
  ${({ variant }) => css`
    && {
      ${variant === 'wide' &&
        css`
          padding-left: 0 !important;
          padding-right: 0 !important;
        `}
    }
  `}
`;
