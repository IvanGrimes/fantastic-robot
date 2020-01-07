import React from 'react';
import { Wrapper, ProgressTop, ProgressBottom } from './Progress.styles';

export type ProgressProps = {
  className?: string;
  size?: number;
};

export const Progress = ({ className = '', size = 24 }: ProgressProps) => (
  <Wrapper className={className} size={size}>
    <ProgressTop variant="determinate" value={100} size={size} thickness={4} />
    <ProgressBottom
      variant="indeterminate"
      size={size}
      thickness={4}
      disableShrink
    />
  </Wrapper>
);
