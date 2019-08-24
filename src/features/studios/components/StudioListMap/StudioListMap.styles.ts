import styled, { css } from 'styled-components';
import { ComponentType } from 'react';
import { GridProps } from '@material-ui/core/Grid';
import { Grid } from '@material-ui/core';
import { getBreakpoints } from '../../../../theme';

export const MapGrid = styled<ComponentType<GridProps>>(Grid)`
  ${props => {
    const { down } = getBreakpoints(props);

    return css`
      && {
        position: relative;
        min-height: 100vh;
        z-index: 1;
        ${down('md')} {
          min-height: 40vh;
        }
        ${down('sm')} {
          min-height: 45vh;
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
        height: 40vh;
        width: 100%;
      }
      ${down('sm')} {
        min-height: 45vh;
      }
    `;
  }}
`;
