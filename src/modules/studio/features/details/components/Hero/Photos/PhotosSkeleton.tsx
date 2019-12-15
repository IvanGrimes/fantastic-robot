import React from 'react';
import { Loader, Wrapper, InnerWrapper } from './PhotosSkeleton.styles';

export const PhotosSkeleton = () => (
  <Wrapper>
    <InnerWrapper>
      <Loader width="100%" height="100%" />
    </InnerWrapper>
  </Wrapper>
);
