import React from 'react';
import ContentLoader from 'react-content-loader';

export const TypesSkeleton = () => (
  <ContentLoader style={{ width: '55%', height: '12px', marginTop: '2px' }}>
    <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
  </ContentLoader>
);
