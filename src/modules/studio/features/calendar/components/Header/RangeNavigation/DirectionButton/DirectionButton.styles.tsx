import styled, { css } from 'styled-components';
import React, { ComponentType } from 'react';
import { IconButton } from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';
import { Direction } from './DirectionButton';

export const Button = styled(IconButton)`
  && {
    position: relative;
  }
`;

export const Arrow = styled<
  ComponentType<{
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
    direction: Direction;
  }>
>(({ top, right, bottom, left, direction, ...props }) => (
  <ChevronLeft {...props} />
))`
  ${({ top = 0, right = 0, bottom = 0, left = 0, direction }) => css`
    && {
      position: absolute;
      top: ${top}px;
      right: ${right}px;
      bottom: ${bottom}px;
      left: ${left}px;
      transform: rotate(
        ${() => {
          switch (direction) {
            case 'left':
              return 0;
            case 'right':
              return 180;
            default:
              return 0;
          }
        }}deg
      );
    }
  `};
`;
