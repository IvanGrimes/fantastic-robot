import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ isVisible: boolean }>`
  ${({ isVisible }) => css`
    position: fixed;
    left: 16px;
    bottom: 16px;
    width: calc(100% - 32px);
    opacity: ${isVisible ? 1 : 0};
    transition: opacity 300ms linear;
  `}
`;
