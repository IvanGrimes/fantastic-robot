import React from 'react';
import ContentLoader from 'react-content-loader';

export const StationsSkeleton = () => (
  <ContentLoader
    style={{ position: 'relative', top: '2px', width: '40%', height: '12px' }}
  >
    <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
  </ContentLoader>
);
