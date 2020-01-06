import React, { ComponentType } from 'react';
import styled, { css } from 'styled-components';
import { PaperProps } from '@material-ui/core/Paper';
import { Grid, Paper } from '@material-ui/core';
import { getShadows } from '@theme/shadows';
import { GridProps } from '@material-ui/core/Grid';

export const Wrapper = styled<ComponentType<PaperProps>>(
  ({ className, ...props }) => (
    <div className={className}>
      <Paper {...props} />
    </div>
  )
)`
  ${props => {
    const shadows = getShadows(props);

    return css`
      padding: 5px 10px;
      & > div {
        overflow: hidden;
      }
      &:hover {
        & > div {
          box-shadow: ${shadows[3]};
        }
      }
    `;
  }}
`;

export const ContentGrid = styled<ComponentType<GridProps & { color: string }>>(
  ({ color, ...props }) => <Grid {...props} />
)`
  ${({ color }) => css`
    && {
      padding: 5px 10px 10px 10px;
      color: #000;
      border-bottom: 4px solid ${color};
      margin-bottom: 0;
      &:hover {
        text-decoration: none !important;
      }
    }
  `}
`;
