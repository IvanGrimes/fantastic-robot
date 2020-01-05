import styled, { css } from 'styled-components';
import { getSpacing } from '@theme/spacing';
import { getGreyPalette } from '@theme/palette';

export const Cell = styled.td<{
  selected: boolean;
  highlightReserve: boolean;
  workingHour: boolean;
  canSelect: boolean;
  columns: number;
}>`
  ${({
    workingHour,
    highlightReserve,
    selected,
    canSelect,
    columns,
    ...props
  }) => {
    const spacing = getSpacing(props);
    const palette = getGreyPalette(props);

    return css`
      position: relative;
      width: ${100 / columns}%;
      text-align: center;
      vertical-align: middle;
      border: 1px solid ${palette.A100};
      border-left: none;
      opacity: ${workingHour ? 1 : 0.25};
      background-color: ${highlightReserve ? 'red' : 'white'};
      padding: ${spacing}px 0;
      cursor: ${canSelect ? 'pointer' : 'not-allowed'};
      &:last-child {
        border-right: none;
      }
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${palette.A200};
        opacity: ${selected ? 0.25 : 0};
        transition: opacity 150ms linear;
      }
    `;
  }};
`;

export const ColorGroup = styled.div<{
  color: string;
  offsetMultiplier: number;
}>`
  ${({ color, offsetMultiplier }) => {
    const width = 8;

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
