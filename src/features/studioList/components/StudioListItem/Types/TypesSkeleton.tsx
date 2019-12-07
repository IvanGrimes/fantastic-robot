import React from 'react';
import ContentLoader from 'react-content-loader';

export const TypesSkeleton = () => (
  <ContentLoader height={18} style={{ height: '18px' }}>
    <rect x="0" y="0" rx="0" ry="0" width="40%" height="18px" />
  </ContentLoader>
);
