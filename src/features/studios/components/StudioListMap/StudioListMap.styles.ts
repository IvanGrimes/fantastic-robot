import styled, { css } from 'styled-components';
import { ComponentType } from 'react';
import { GridProps } from '@material-ui/core/Grid';
import { Grid } from '@material-ui/core';
import { getBreakpoints } from '../../../../theme';

const HEADER_HEIGHT = 68;

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

export const InnerWrapper = styled.div<{ width: number }>`
  ${({ width, ...props }) => {
    const { down } = getBreakpoints(props);

    return css`
      position: fixed;
      top: 0;
      right: 0;
      height: 100%;
      width: ${width}px;
      ${down('md')} {
        position: static;
        min-height: calc(40vh + ${HEADER_HEIGHT}px);
        width: 100%;
      }
      ${down('sm')} {
        min-height: calc(45vh + ${HEADER_HEIGHT}px);
      }
    `;
  }}
`;
