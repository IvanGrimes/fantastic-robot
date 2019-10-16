import styled, { css } from 'styled-components';

export const Cell = styled.td<{ selected: boolean }>`
  ${({ selected }) =>
    selected &&
    css`
      background-color: red;
    `}
`;
