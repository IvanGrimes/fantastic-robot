import styled, { css } from 'styled-components';
import { ComponentType } from 'react';
import { GridProps } from '@material-ui/core/Grid';
import { Button, Grid } from '@material-ui/core';
import { ButtonProps } from '@material-ui/core/Button';
import { getBreakpoints } from '../../../theme';

const HEADER_HEIGHT = 60;

export const MapGrid = styled<ComponentType<GridProps>>(Grid)`
  ${props => {
    const { down } = getBreakpoints(props);

    return css`
      && {
        position: relative;
        height: 100vh;
        z-index: 1;
        ${down('md')} {
          height: 40vh;
        }
        ${down('sm')} {
          height: 55vh;
        }
      }
    `;
  }}
`;

export const OuterWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

export const InnerWrapper = styled.div<{
  isFullscreen: boolean;
  isHeaderVisible: boolean;
}>`
  ${({ isFullscreen, isHeaderVisible, ...props }) => {
    const { down } = getBreakpoints(props);

    return css`
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: calc(100% + 50vw);
      ${down('md')} {
        top: -40vh;
        height: 140vh;
        width: 100%;
      }
      ${down('sm')} {
        top: -55vh;
        height: 155vh;
        width: 100%;
      }
    `;
  }}
`;

export const CloseButton = styled<ComponentType<ButtonProps>>(Button)`
  && {
    position: fixed;
    top: ${HEADER_HEIGHT + 10}px;
    left: 10px;
    width: 50px;
    height: 50px;
    z-index: 1000;
    padding: 0;
    min-width: auto;
  }
`;
