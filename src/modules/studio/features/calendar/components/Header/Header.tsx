import React from 'react';
import { Wrapper } from './Header.styles';
import { useInjections } from '../Calendar';

export const Header = () => {
  const { RangeNavigation, Controls } = useInjections();

  return (
    <Wrapper>
      <RangeNavigation />
      <Controls />
    </Wrapper>
  );
};
