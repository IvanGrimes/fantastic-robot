import React from 'react';
import { Wrapper } from './Controls.styles';
import { ViewColumn } from './ViewColumn';

export type ControlsProps = {
  className?: string;
};

export const Controls = ({ className = '' }: ControlsProps) => {
  return (
    <Wrapper className={className}>
      <ViewColumn />
    </Wrapper>
  );
};
