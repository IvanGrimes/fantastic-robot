import styled, { css } from 'styled-components';

export const Figure = styled.figure<{ ratio: number; isLoaded: boolean }>`
  ${({ isLoaded, ratio }) => css`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    margin: 0;
    ${!isLoaded &&
      css`
        padding-bottom: calc(100% / (${ratio}));
        padding-right: 100%;
      `};
  `}
`;

type ImageProps = { isVisible: boolean; isHide?: boolean };

export const Image = styled.img<ImageProps>`
  ${({ isVisible, isHide = false }) => css`
    width: 100%;
    height: auto;
    max-height: 100%;
    transition: opacity 150ms linear;
    ${isHide &&
      css`
        display: none;
      `}
    ${isVisible
      ? css`
          opacity: 1;
        `
      : css`
          position: absolute;
          opacity: 0;
        `}
  `};
`;
