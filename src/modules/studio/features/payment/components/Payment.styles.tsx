import React, { ComponentType, forwardRef } from 'react';
import { Paper, Grid, Dialog as DefaultDialog } from '@material-ui/core';
import styled, { css } from 'styled-components';
import { PaperProps } from '@material-ui/core/Paper';
import { grey } from '@material-ui/core/colors';
import { GridProps } from '@material-ui/core/Grid';
import { DialogProps } from '@material-ui/core/Dialog';
import { getBreakpoints } from '@theme/breakpoints';

type WrapperProps = PaperProps & { isFixed: boolean; top: number };

export const Wrapper = styled<ComponentType<WrapperProps>>(
  forwardRef<any, WrapperProps>(({ isFixed, top, ...props }, ref) => (
    <Paper ref={ref} {...props} />
  ))
)`
  ${({ isFixed, top }) => css`
    && {
      position: ${isFixed ? 'fixed' : 'static'};
      padding: 16px;
      margin: 0 0 -8px 0;
      top: ${top}px;
      width: 338.66px;
      z-index: 1000;
      @media screen and (max-width: 1100px) {
        position: fixed;
        top: unset;
        bottom: 0;
        left: 0;
        width: 100%;
        margin: 0;
        border-radius: 0;
      }
    }
  `};
`;

export const Separator = styled.div`
  display: flex;
  width: calc(100% + 16px);
  height: 1px;
  background-color: ${grey.A100};
  margin: 8px -8px;
`;

export const FormGrid = styled<ComponentType<GridProps>>(Grid)`
  && {
    margin-top: 16px;
  }
`;

export const Dialog = styled<ComponentType<DialogProps>>(props => (
  <DefaultDialog {...props} classes={{ paper: 'paper' }} />
))`
  ${props => {
    const breakpoints = getBreakpoints(props);

    return css`
      && {
        .paper {
          overflow-x: hidden;
          min-height: 770px;
          width: calc(100% + 24px);
          @media screen and (max-width: ${breakpoints.values.sm}px) {
            padding: 0;
          }
        }
      }
    `;
  }};
`;

export const ScrollableWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  max-height: 300px;
  margin-left: 8px;
  margin-bottom: 16px;
  mask-image: linear-gradient(
    to bottom,
    transparent,
    black 20px,
    black 90%,
    transparent
  );
  @media screen and (max-width: 1100px) {
    overflow: auto;
    max-height: unset;
    margin-left: 0;
    mask-image: none;
    display: flex;
    width: auto;
    margin-bottom: 0;
  }
`;

export const Scrollable = styled.div`
  width: calc(100% + 6px);
  max-height: 300px;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-right: 14px;
  box-sizing: content-box;
  @media screen and (max-width: 1100px) {
    width: 100%;
    max-height: unset;
    overflow: auto;
    padding-right: 0;
    box-sizing: border-box;
  }
`;
