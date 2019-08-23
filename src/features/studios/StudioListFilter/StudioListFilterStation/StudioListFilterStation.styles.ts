import styled, { css } from 'styled-components';

export const ColorCircle = styled.i<{ color: string }>`
  ${({ color }) => css`
    display: flex;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${color};
  `}
`;
