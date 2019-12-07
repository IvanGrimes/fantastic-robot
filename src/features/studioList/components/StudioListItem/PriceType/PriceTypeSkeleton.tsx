import ContentLoader from 'react-content-loader';
import React from 'react';

export const PriceTypeSkeleton = () => (
  <ContentLoader
    style={{ position: 'relative', top: '2px', width: '45px', height: '18px' }}
  >
    <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
  </ContentLoader>
);
