import styled, { css } from 'styled-components';
import { animated } from 'react-spring';
import { Paper as DefaultPaper } from '@material-ui/core';
import { ComponentType } from 'react';
import { PaperProps } from '@material-ui/core/Paper';

export const FilterWrapper = styled(animated.div)<{
  isVisible: boolean;
  top: number;
  left: number;
}>`
  ${({ top, left, isVisible }) => css`
    position: absolute;
    top: ${top + 8}px;
    left: ${left}px;
    z-index: 2000;
    transform: translate(${isVisible ? 0 : '-10000px'}, 0);
    transition: transform 0ms ${isVisible ? 0 : 200}ms;
  `}
`;

export const Paper = styled<ComponentType<PaperProps>>(DefaultPaper)`
  && {
    padding: 16px;
  }
`;
