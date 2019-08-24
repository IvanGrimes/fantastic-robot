import styled, { css } from 'styled-components';

export const Station = styled.div<{ color: string }>`
  ${({ color }) => css`
    display: flex;
    align-items: center;
    font-size: inherit;
    color: inherit;
    &::before {
      content: '';
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: ${color};
      margin-right: 4px;
    }
  `}
`;
