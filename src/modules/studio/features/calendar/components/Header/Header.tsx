import React from 'react';
import { Wrapper, Controls } from './Header.styles';
import { RangeNavigation } from './RangeNavigation';

export const Header = () => (
  <Wrapper>
    <RangeNavigation />
    <Controls />
  </Wrapper>
);
