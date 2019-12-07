import styled, { css } from 'styled-components';
import { ComponentType } from 'react';
import { TypographyProps } from '@material-ui/core/Typography';
import { Grid, Typography } from '@material-ui/core';
import { GridProps } from '@material-ui/core/Grid';
import { getBreakpoints } from '../../../../../../theme';

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
