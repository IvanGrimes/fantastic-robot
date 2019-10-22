import styled, { css } from 'styled-components';

export const Cell = styled.td<{
  selected: boolean;
  reserved: boolean;
  workingHour: boolean;
}>`
  position: relative;
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

export const ColorGroup = styled.div<{
  color: string;
  offsetMultiplier: number;
}>`
  ${({ color, offsetMultiplier }) => {
    const width = 5;

    return css`
      position: absolute;
      top: 0;
      left: ${width * offsetMultiplier}px;
      width: ${width}px;
      height: 100%;
      background-color: ${color};
      z-index: 2;
    `;
  }}
`;
