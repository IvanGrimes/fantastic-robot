import React, { memo } from 'react';
import dequal from 'dequal';
import { Wrapper } from './Header.styles';
import { useInjections } from '../Calendar';

const _Header = () => {
  const { RangeNavigation, Controls } = useInjections();

  return (
    <Wrapper>
      <RangeNavigation />
      <Controls />
    </Wrapper>
  );
};

export const Header = memo(_Header, dequal);
