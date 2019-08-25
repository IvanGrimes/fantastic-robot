import styled, { css } from 'styled-components';
import { ComponentType } from 'react';
import { GridProps } from '@material-ui/core/Grid';
import { Grid } from '@material-ui/core';
import { getBreakpoints } from '../../../../theme';

const HEADER_HEIGHT = 60;

export const MapGrid = styled<ComponentType<GridProps>>(Grid)`
  ${props => {
    const { down } = getBreakpoints(props);

    return css`
      && {
        position: relative;
        min-height: 100vh;
        z-index: 1;
        ${down('md')} {
          margin-top: ${HEADER_HEIGHT}px;
          min-height: calc(40vh + ${HEADER_HEIGHT}px);
        }
        ${down('sm')} {
          min-height: calc(45vh + ${HEADER_HEIGHT}px);
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
  width: number;
  isFullscreen: boolean;
}>`
  ${({ isFullscreen, width, ...props }) => {
    const { down } = getBreakpoints(props);

    return css`
      position: fixed;
      top: 0;
      right: 0;
      height: 100%;
      width: ${isFullscreen ? '100%' : `${width}px`};
      transition: width 300ms linear;
      ${down('md')} {
        position: static;
        height: ${isFullscreen ? '100vh' : `calc(40vh + ${HEADER_HEIGHT}px)`};
        width: 100%;
        transition: height 300ms linear;
      }
      ${down('sm')} {
        height: ${isFullscreen ? '100vh' : `calc(45vh + ${HEADER_HEIGHT}px)`};
      }
    `;
  }}
`;
