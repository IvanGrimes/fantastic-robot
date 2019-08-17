import styled, { css } from 'styled-components';
import { Paper, Grid } from '@material-ui/core';
import { em } from 'polished';
import { ComponentType } from 'react';
import { GridProps } from '@material-ui/core/Grid';

export const ColorCircle = styled.i<{ color: string }>`
  ${({ color }) => css`
    display: flex;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${color};
  `}
`;

export const Wrapper = styled(Paper)`
  && {
    padding: ${em(16)};
  }
`;

export const FilterGrid = styled<ComponentType<GridProps>>(Grid)`
  && {
    margin-bottom: 0;
    overflow: hidden;
  }
`;
