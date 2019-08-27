import { Grid, Toolbar as DefaultToolbar } from '@material-ui/core';
import styled, { css } from 'styled-components';
import { ComponentType } from 'react';
import { ToolbarProps } from '@material-ui/core/Toolbar';
import { GridProps } from '@material-ui/core/Grid';
import { getBreakpoints } from '../../../../theme';

export const Wrapper = styled.div<{ isHeaderVisible: boolean }>`
  ${({ isHeaderVisible }) => css`
    position: fixed;
    z-index: 200;
    top: 0;
    left: 0;
    width: 100%;
    will-change: transform;
    transform: translate(0, ${isHeaderVisible ? '0px' : '-64px'});
    transition: transform 300ms ${isHeaderVisible ? 'ease-out' : 'ease-in'};
  `}
`;

export const Toolbar = styled<ComponentType<ToolbarProps>>(DefaultToolbar)`
  && {
    padding: 0;
    height: 64px;
  }
`;

export const MenuGrid = styled<ComponentType<GridProps>>(Grid)`
  ${props => {
    const { down } = getBreakpoints(props);

    return css`
      && {
        ${down('sm')} {
          display: none;
        }
      }
    `;
  }}
`;
