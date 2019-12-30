import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ isVisible: boolean }>`
  ${({ isVisible }) => css`
    position: absolute;
    display: ${isVisible ? 'flex' : 'none'};
    top: 100%;
    left: -24px;
    width: calc(100% + 48px);
    z-index: 5;
  `};
`;
