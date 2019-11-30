import React from 'react';
import { Wrapper } from './Controls.styles';
import { ColumnMenu } from './ColumnMenu';

export type ControlsProps = {
  className?: string;
};

export const Controls = ({ className = '' }: ControlsProps) => {
  return (
    <Wrapper className={className}>
      <ColumnMenu />
    </Wrapper>
  );
};
