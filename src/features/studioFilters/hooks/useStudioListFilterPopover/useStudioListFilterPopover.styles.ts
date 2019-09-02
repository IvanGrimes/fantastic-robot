import styled, { css } from 'styled-components';
import { Paper as DefaultPaper } from '@material-ui/core';
import { ComponentType } from 'react';
import { PaperProps } from '@material-ui/core/Paper';

export const FilterWrapper = styled.div<{
  isVisible: boolean;
  top: number;
  left: number;
}>`
  ${({ top, left, isVisible }) => css`
    position: absolute;
    top: ${top + 8}px;
    left: ${left}px;
    z-index: 2000;
    opacity: ${isVisible ? 1 : 0};
    transform: translate(${isVisible ? 0 : '-10000px'}, 0);
    transition: transform linear 0ms ${isVisible ? 0 : 300}ms,
      opacity 300ms linear;
  `}
`;

export const Paper = styled<ComponentType<PaperProps>>(DefaultPaper)`
  && {
    padding: 16px;
  }
`;
