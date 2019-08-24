import styled, { css } from 'styled-components';
import { animated } from 'react-spring';
import { transparentize } from 'polished';

export const Overlay = styled(animated.div)<{ isVisible: boolean }>`
  ${({ isVisible }) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${transparentize(0.6, '#000')};
    transform: translate(${isVisible ? 0 : '-10000px'}, 0);
    transition: transform 0ms ${isVisible ? 0 : 200}ms;
  `}
`;
