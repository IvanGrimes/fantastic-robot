import styled, { css } from 'styled-components';
import { ComponentType } from 'react';
import { GridProps } from '@material-ui/core/Grid';
import { Button, Grid } from '@material-ui/core';
import { ButtonProps } from '@material-ui/core/Button';
import { getBreakpoints } from '../../../../theme';

const HEADER_HEIGHT = 60;

export const MapGrid = styled<ComponentType<GridProps>>(Grid)<{
  isFullscreenMap: boolean;
}>`
  ${({ isFullscreenMap, ...props }) => {
    const { down } = getBreakpoints(props);
    const offset = isFullscreenMap ? HEADER_HEIGHT : HEADER_HEIGHT * 2;

    return css`
      && {
        position: relative;
        min-height: calc(100vh - ${isFullscreenMap ? HEADER_HEIGHT : 0}px);
        z-index: 1;
        ${down('md')} {
          margin-top: ${offset}px;
          min-height: calc(40vh + ${HEADER_HEIGHT * 2}px);
        }
        ${down('sm')} {
          min-height: calc(45vh + ${HEADER_HEIGHT * 2}px);
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
  isHeaderVisible: boolean;
}>`
  ${({ isFullscreen, isHeaderVisible, width, ...props }) => {
    const { down } = getBreakpoints(props);
    const fullscreenMobileHeight = `calc(100vh - ${HEADER_HEIGHT}px)`;

    return css`
      position: fixed;
      top: ${`${
        // eslint-disable-next-line no-nested-ternary
        isFullscreen
          ? HEADER_HEIGHT
          : isHeaderVisible
          ? HEADER_HEIGHT * 2
          : HEADER_HEIGHT
      }`}px;
      right: 0;
      height: calc(
        100% - ${isHeaderVisible ? HEADER_HEIGHT * 2 : HEADER_HEIGHT}px
      );
      width: ${isFullscreen ? '100%' : `${width}px`};
      transition: width 300ms linear;
      ${down('md')} {
        position: static;
        height: ${isFullscreen
          ? fullscreenMobileHeight
          : `calc(40vh + ${HEADER_HEIGHT * 2}px)`};
        width: 100%;
        transition: height 300ms linear;
      }
      ${down('sm')} {
        height: ${isFullscreen
          ? fullscreenMobileHeight
          : `calc(45vh + ${HEADER_HEIGHT * 2}px)`};
      }
    `;
  }}
`;

export const CloseButton = styled<ComponentType<ButtonProps>>(Button)`
  ${props => {
    const { down } = getBreakpoints(props);

    return css`
      && {
        position: absolute;
        top: ${HEADER_HEIGHT + 10}px;
        left: calc(-100% + 10px);
        width: 50px;
        height: 50px;
        z-index: 1000;
        padding: 0;
        min-width: auto;
        ${down('md')} {
          top: 10px;
          left: 10px;
        }
      }
    `;
  }}
`;
