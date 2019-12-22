import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { GridProps } from '@material-ui/core/Grid';
import { ComponentType } from 'react';
import {
  Stations as DefaultStations,
  StationsProps,
} from '@modules/studio/components/Stations';

export const MainGrid = styled<ComponentType<GridProps>>(Grid)`
  && {
    margin-top: 48px;
  }
`;

export const Stations = styled<ComponentType<StationsProps>>(DefaultStations)`
  && {
    width: auto;
  }
`;

export const DescriptionGrid = styled<ComponentType<GridProps>>(Grid)`
  && {
    margin-top: 24px;
  }
`;
