import { CircularProgress } from '@material-ui/core';
import styled, { css } from 'styled-components';
import { ComponentType } from 'react';
import { CircularProgressProps } from '@material-ui/core/CircularProgress';
import { indigo } from '@material-ui/core/colors';

export const Wrapper = styled.div<{ size: number }>`
  ${({ size }) => css`
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -${size / 2}px 0 0 -${size / 2}px;
  `};
`;

export const ProgressTop = styled<ComponentType<CircularProgressProps>>(
  CircularProgress
)`
  && {
    color: ${indigo['200']};
  }
`;

export const ProgressBottom = styled<ComponentType<CircularProgressProps>>(
  CircularProgress
)`
  && {
    position: absolute;
    left: 0;
    color: ${indigo['500']};
    animation-duration: 550ms;
  }
`;
