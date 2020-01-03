import styled, { css } from 'styled-components';
import { ComponentType } from 'react';
import {
  BottomNavigation as DefaultBottomNavigation,
  BottomNavigationAction as DefaultBottomNavigationAction,
} from '@material-ui/core';
import { BottomNavigationProps } from '@material-ui/core/BottomNavigation';
import { getShadows } from '@theme/shadows';
import { getBreakpoints, getPrimaryPalette } from '@theme/index';

export const BottomNavigation = styled<ComponentType<BottomNavigationProps>>(
  DefaultBottomNavigation
)<{
  isVisible: boolean;
}>`
  ${({ isVisible, ...props }) => {
    const { down } = getBreakpoints(props);
    const shadows = getShadows(props);

    return css`
      && {
        display: none;
        position: fixed;
        border-top: 1px solid rgba(0, 0, 0, 0.05);
        max-width: 100%;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50px;
        z-index: 6;
        will-change: transform;
        transform: translate(${isVisible ? '0, 0px' : '0, 100px'});
        transition: transform 300ms ${isVisible ? 'ease-in' : 'ease-out'};
        box-shadow: ${shadows[2]};
        ${down('sm')} {
          display: flex;
        }
      }
    `;
  }}}
`;

export const BottomNavigationAction = styled(DefaultBottomNavigationAction)<{
  isActive: boolean;
}>`
  ${({ isActive, ...props }) => {
    const { main } = getPrimaryPalette(props);

    return (
      isActive &&
      css`
        && {
          color: ${main};
          opacity: 0.85;
        }
      `
    );
  }}
`;
