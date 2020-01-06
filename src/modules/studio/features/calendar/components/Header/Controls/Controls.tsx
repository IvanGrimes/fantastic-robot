import React from 'react';
import { Wrapper } from './Controls.styles';
import { useInjections } from '../../Calendar';

export type ControlsProps = {
  className?: string;
};

export const Controls = ({ className = '' }: ControlsProps) => {
  const { ClearSelected, ViewColumn } = useInjections();

  return (
    <Wrapper className={className}>
      <ClearSelected />
      <ViewColumn />
    </Wrapper>
  );
};
