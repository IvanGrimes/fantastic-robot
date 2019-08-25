import styled, { css } from 'styled-components';
import { ComponentType } from 'react';
import { Grid } from '@material-ui/core';
import { GridProps } from '@material-ui/core/Grid';
import { getBreakpoints } from '../../theme';

export const ContentGrid = styled<ComponentType<GridProps>>(Grid)`
  ${props => {
    const { down } = getBreakpoints(props);

    return css`
      ${down('md')} {
        && {
          flex-wrap: wrap-reverse;
        }
      }
    `;
  }}
`;
