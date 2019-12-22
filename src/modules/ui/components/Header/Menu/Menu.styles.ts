import styled, { css } from 'styled-components';
import { ComponentType } from 'react';
import { GridProps } from '@material-ui/core/Grid';
import { Grid } from '@material-ui/core';
import { getBreakpoints } from '@theme/breakpoints';

export const MenuGrid = styled<ComponentType<GridProps>>(Grid)`
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
