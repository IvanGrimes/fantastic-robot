import styled from 'styled-components';
import { ComponentType } from 'react';
import {
  Stations as DefaultStations,
  StationsProps,
} from '@modules/studio/components/Stations';

export const Stations = styled<ComponentType<StationsProps>>(DefaultStations)`
  && {
    width: auto;
  }
`;
