import React, { CSSProperties } from 'react';
import { Loader as StyledLoader } from './Loader.styles';

export type LoaderProps = {
  width: string;
  height: string;
  rx?: number;
  ry?: number;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  className?: string;
  style?: CSSProperties;
};

export const Loader = ({
  width,
  height,
  rx = 0,
  ry = 0,
  top = '0px',
  right = '0px',
  bottom = '0px',
  left = '0px',
  className = '',
  style = {},
}: LoaderProps) => (
  <StyledLoader
    style={style}
    width={width}
    height={height}
    top={top}
    right={right}
    bottom={bottom}
    left={left}
    className={className}
  >
    <rect x="0" y="0" rx={rx} ry={ry} width="100%" height="100%" />
  </StyledLoader>
);
