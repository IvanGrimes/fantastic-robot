import {
  Toolbar as DefaultToolbar,
  AppBar as DefaultAppBar,
} from '@material-ui/core';
import styled, { css } from 'styled-components';
import { ComponentType } from 'react';
import { ToolbarProps } from '@material-ui/core/Toolbar';
import { AppBarProps } from '@material-ui/core/AppBar';

export const Wrapper = styled.div<{ isVisible: boolean }>`
  ${({ isVisible }) => css`
    position: fixed;
    z-index: 200;
    top: 0;
    left: 0;
    width: 100%;
    will-change: transform;
    transform: translate(0, ${isVisible ? '0px' : '-64px'});
    transition: transform 300ms ${isVisible ? 'ease-in' : 'ease-out'};
  `}
`;

export const AppBar = styled<ComponentType<AppBarProps>>(DefaultAppBar)`
  && {
    box-shadow: none;
  }
`;

export const Toolbar = styled<ComponentType<ToolbarProps>>(DefaultToolbar)`
  && {
    padding: 0;
    height: 64px;
  }
`;
