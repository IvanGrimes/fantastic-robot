import styled, { css } from 'styled-components';
import ContentLoader from 'react-content-loader';
import React, { ComponentType, CSSProperties } from 'react';

export const Loader = styled<
  ComponentType<{
    width: string;
    height: string;
    top: string;
    right: string;
    bottom: string;
    left: string;
    className: string;
    style: CSSProperties;
  }>
>(({ width, height, ...props }) => <ContentLoader {...props} />)`
  ${({ width, height, top, right, bottom, left }) => css`
    position: relative;
    ${css({ width, height, top, right, bottom, left })};
  `}
`;
