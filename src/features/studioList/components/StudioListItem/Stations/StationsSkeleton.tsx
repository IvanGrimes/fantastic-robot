import React from 'react';
import ContentLoader from 'react-content-loader';

export const StationsSkeleton = () => (
  <ContentLoader height={42} style={{ height: '42px' }}>
    <rect x="0" y="20px" rx="0" ry="0" width="35%" height="22px" />
  </ContentLoader>
);
