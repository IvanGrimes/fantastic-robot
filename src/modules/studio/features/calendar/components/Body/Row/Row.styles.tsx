import styled from 'styled-components';
import { StyledCell } from './Cell';

export const Row = styled.tr`
  &:not(:first-of-type) > ${StyledCell} {
    border-top: none;
  }
  &:last-child > ${StyledCell} {
    border-bottom: none;
  }
`;
