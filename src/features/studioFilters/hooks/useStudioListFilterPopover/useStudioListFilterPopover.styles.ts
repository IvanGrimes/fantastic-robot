import styled, { css } from 'styled-components';
import { Paper as DefaultPaper } from '@material-ui/core';
import { ComponentType } from 'react';
import { PaperProps } from '@material-ui/core/Paper';
import { getBreakpoints } from '../../../../theme';

export const FilterWrapper = styled.div<{
  isVisible: boolean;
  top: number;
  left: number;
}>`
  ${({ top, left, isVisible, ...props }) => {
    const { down } = getBreakpoints(props);

    return css`
      position: absolute;
      top: ${top + 8}px;
      left: ${left}px;
      z-index: 2000;
      opacity: ${isVisible ? 1 : 0};
      transform: translate(${isVisible ? 0 : '-10000px'}, 0);
      transition: transform linear 0ms ${isVisible ? 0 : 300}ms,
        opacity 300ms linear;
      max-width: 70%;
      ${down('md')} {
        max-width: 85%;
      }
      ${down('sm')} {
        max-width: calc(100% - ${left * 2}px);
      }
    `;
  }};
`;

export const Paper = styled<ComponentType<PaperProps>>(DefaultPaper)`
  && {
    padding: 16px;
  }
`;
