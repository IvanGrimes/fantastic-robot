import React from 'react';
import { Loader, Wrapper } from './PhotosSkeleton.styles';

export const PhotosSkeleton = () => (
  <Wrapper>
    <Loader width="100%" height="100%" />
  </Wrapper>
);
