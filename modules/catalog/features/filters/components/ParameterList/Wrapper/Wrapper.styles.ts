import styled from 'styled-components';
import { Grid, GridProps } from '@components';
import { maxHeight } from '../constants';

export const ListGrid = styled(Grid)<GridProps>`
  && {
    max-height: ${maxHeight}px;
    overflow: auto;
  }
`;
