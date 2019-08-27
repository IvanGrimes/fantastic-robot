import styled, { css } from 'styled-components';
import { ComponentType } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { PaperProps } from '@material-ui/core/Paper';
import { em } from 'polished';
import { GridProps } from '@material-ui/core/Grid';
import { TypographyProps } from '@material-ui/core/Typography';
import { getBreakpoints } from '../../../../../theme';

export const BarWrapper = styled<ComponentType<PaperProps>>(Paper)`
  && {
    display: flex;
    width: 100%;
    border-radius: 0;
    min-height: ${em(32)};
    padding: ${em(12)} 0;
  }
`;

export const MapSwitchGrid = styled<ComponentType<GridProps>>(Grid)`
  ${props => {
    const { down } = getBreakpoints(props);

    return css`
      && {
        ${down('sm')} {
          display: none;
        }
      }
    `;
  }}
`;

export const HideableTypography = styled<ComponentType<TypographyProps>>(
  Typography
)<{ isVisible: boolean }>`
  ${({ isVisible }) => css`
    opacity: ${isVisible ? 1 : 0};
    transition: opacity 150ms linear;
  `}
`;
