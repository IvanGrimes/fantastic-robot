import React, { ComponentType, forwardRef } from 'react';
import { Paper } from '@material-ui/core';
import styled, { css } from 'styled-components';
import { PaperProps } from '@material-ui/core/Paper';

type WrapperProps = PaperProps & { isFixed: boolean; top: number };

export const Wrapper = styled<ComponentType<WrapperProps>>(
  forwardRef<any, WrapperProps>(({ isFixed, top, ...props }, ref) => (
    <Paper ref={ref} {...props} />
  ))
)`
  ${({ isFixed, top }) => css`
    && {
      position: ${isFixed ? 'fixed' : 'static'};
      padding: 16px;
      margin: 0 0 -8px 0;
      top: ${top}px;
      width: 338.66px;
    }
  `}
`;
