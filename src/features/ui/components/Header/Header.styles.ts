import { Grid, Toolbar as DefaultToolbar } from '@material-ui/core';
import styled, { css } from 'styled-components';
import { ComponentType } from 'react';
import { ToolbarProps } from '@material-ui/core/Toolbar';
import { animated } from 'react-spring';
import { GridProps } from '@material-ui/core/Grid';
import { getBreakpoints } from '../../../../theme';

export const Wrapper = styled(animated.div)`
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  width: 100%;
`;

export const Toolbar = styled<ComponentType<ToolbarProps>>(DefaultToolbar)`
  && {
    padding: 0;
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

export const MapSwitchGrid = styled<ComponentType<GridProps>>(Grid)`
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
