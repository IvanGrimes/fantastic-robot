import styled, { css } from 'styled-components';
import { ComponentType } from 'react';
import { Grid } from '@material-ui/core';
import { GridProps } from '@material-ui/core/Grid';
import { getBreakpoints } from '../../../../theme';

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

export const StudioListGrid = styled<ComponentType<GridProps>>(Grid)<{
  isMapListEnabled: boolean;
}>`
  ${({ isMapListEnabled }) => {
    return css`
      && {
      margin-top: 120px;
      ${!isMapListEnabled &&
        css`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: calc(100% + 40px);
          max-width: 100%;
          flex-basis: 100%;
        `}

        }
      }
    `;
  }}
`;
