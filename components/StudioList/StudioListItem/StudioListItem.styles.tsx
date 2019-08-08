import React, { ComponentType } from 'react';
import styled, { css } from 'styled-components';
import { GridProps } from '@material-ui/core/Grid';
import { Chip as DefaultChip, Grid } from '@material-ui/core';
import { em } from 'polished';
import { ChipProps } from '@material-ui/core/Chip';

const chipMargin = em(8);

export const ChipGrid = styled<ComponentType<GridProps>>(props => (
  <Grid component="ul" {...props} />
))`
  && {
    margin: 0 -${chipMargin};
  }
`;

export const Chip = styled<ComponentType<ChipProps>>(DefaultChip)`
  && {
    margin: 0 ${chipMargin};
  }
`;

export const Station = styled.li<{ color: string }>`
  ${({ color }) => css`
    display: flex;
    align-items: center;
    &::before {
      content: '';
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: ${color};
      margin-right: 4px;
    }
  `}
`;
