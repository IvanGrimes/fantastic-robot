import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ isVisible: boolean }>`
  ${({ isVisible }) => css`
    position: absolute;
    display: ${isVisible ? 'flex' : 'none'};
    top: 100%;
    left: 0;
    width: 100%;
    z-index: 5;
  `};
`;
