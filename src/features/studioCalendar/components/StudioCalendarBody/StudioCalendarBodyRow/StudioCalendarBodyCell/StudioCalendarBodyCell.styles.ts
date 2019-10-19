import styled, { css } from 'styled-components';

export const Cell = styled.td<{
  selected: boolean;
  canReserve: boolean;
  reserved: boolean;
}>`
  ${({ selected }) =>
    selected &&
    css`
      background-color: gray;
    `};
  ${({ canReserve }) =>
    !canReserve &&
    css`
      opacity: 0.25;
    `};
  ${({ reserved }) =>
    reserved &&
    css`
      background-color: red;
    `}
`;
