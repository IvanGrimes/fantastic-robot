import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

export const Overlay = styled.div<{ isVisible: boolean }>`
  ${({ isVisible }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 150;
    background-color: ${transparentize(0.3, '#fff')};
    opacity: ${isVisible ? 1 : 0};
    transform: translate(${isVisible ? '0px, 0' : '-10000px, 0'});
    transition: transform 0ms linear ${isVisible ? 0 : 300}ms,
      opacity 300ms linear;
  `}
`;
