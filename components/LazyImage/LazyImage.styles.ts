import styled, { css } from 'styled-components';

export const Figure = styled.figure<{ height: number }>`
  ${({ height }) => css`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: ${height}px;
  margin: 0;
`}
`;

type ImageProps = { isVisible: boolean; isLQIP?: boolean; isHide?: boolean };

const imageDefaultProps: Partial<ImageProps> = {
  isLQIP: false,
  isHide: false,
};

export const Image = styled.img<ImageProps>`
  ${({ isVisible, isLQIP, isHide }) => css`
    width: 100%;
    height: auto;
    max-height: 100%;
    transition: opacity 150ms linear;
    ${isHide &&
      css`
        display: none;
      `}
    ${isLQIP &&
      css`
        filter: blur(5px);
      `}
    ${
      isVisible
        ? css`
            opacity: 1;
          `
        : css`
            position: absolute;
            opacity: 0;
          `
    }
  `};
`;

Image.defaultProps = imageDefaultProps;

