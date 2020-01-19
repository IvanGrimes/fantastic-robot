import styled, { css } from 'styled-components';
import { ComponentType } from 'react';
import { Grid } from '@material-ui/core';
import {
  Stations as DefaultStations,
  StationsProps,
} from '@modules/studio/components/Stations';
import { GridProps } from '@material-ui/core/Grid';
import { getBreakpoints } from '@theme/breakpoints';

export const StationsGrid = styled<ComponentType<GridProps>>(Grid)`
  ${props => {
    const { down } = getBreakpoints(props);

    return css`
      && {
        ${down('sm')} {
          justify-content: flex-start;
        }
      }
    `;
  }}
`;

export const Stations = styled<ComponentType<StationsProps>>(DefaultStations)`
  && {
    width: auto;
  }
`;
