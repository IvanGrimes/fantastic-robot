import React from 'react';
import ContentLoader from 'react-content-loader';

export const PhotosSkeleton = () => (
  <ContentLoader height={200} style={{ height: '200px', width: '100%' }}>
    <rect x="0" y="0" rx="0" ry="0" width="100%" height="200px" />
  </ContentLoader>
);
