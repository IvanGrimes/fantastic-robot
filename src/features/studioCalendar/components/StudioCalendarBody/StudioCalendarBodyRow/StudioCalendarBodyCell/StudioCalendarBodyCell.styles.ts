import styled, { css } from 'styled-components';

export const Cell = styled.td<{
  selected: boolean;
  reserved: boolean;
  workingHour: boolean;
}>`
  ${({ selected }) =>
    selected &&
    css`
      background-color: gray;
    `};
  ${({ workingHour }) =>
    !workingHour &&
    css`
      opacity: 0.25;
    `};
  ${({ reserved }) =>
    reserved &&
    css`
      background-color: red;
    `}
`;
