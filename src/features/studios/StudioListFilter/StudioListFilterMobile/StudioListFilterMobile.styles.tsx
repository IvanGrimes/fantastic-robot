import styled, { css } from 'styled-components';
import React, { ComponentType } from 'react';
import { PaperProps } from '@material-ui/core/Paper';
import { Grid, Paper } from '@material-ui/core';
import { GridProps } from '@material-ui/core/Grid';
import { em } from 'polished';
import { animated } from 'react-spring';

export const Wrapper = styled<ComponentType<PaperProps>>(props => (
  <Paper {...props} component={animated.div} />
))<{ isVisible: boolean }>`
  ${({ isVisible }) => css`
    && {
      position: fixed;
      box-shadow: none;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1600;
      transform: translate(0, ${isVisible ? 0 : '-10000px'});
      transition: transform 0ms ${isVisible ? 0 : 400}ms;
    }
  `}
`;

export const BarGrid = styled<ComponentType<GridProps>>(Grid)`
  && {
    margin-top: -${em(32)};
    margin-left: -24px;
    width: calc(100% + 48px);
  }
`;

export const BarWrapper = styled<ComponentType<PaperProps>>(Paper)`
  && {
    display: flex;
    width: 100%;
    border-radius: 0;
    min-height: ${em(32)};
    padding: ${em(12)} 0;
  }
`;

export const FilterGrid = styled<ComponentType<GridProps>>(Grid)`
  && {
    margin-top: ${em(16)};
  }
`;
