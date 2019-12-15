import styled from 'styled-components';
import React from 'react';
import { StyledCell } from '../Row/Cell';

export const Row = styled.thead``;

export const Cell = styled(props => (
  <StyledCell
    {...props}
    canSelect={false}
    selected={false}
    workingHour
    highlightReserve={false}
    as="th"
  />
))`
  && {
    border-bottom: none;
    cursor: default;
  }
`;
