import ContentLoader from 'react-content-loader';
import React from 'react';

export const PriceTypeSkeleton = () => (
  <ContentLoader width={45} height={42} style={{ height: '42px' }}>
    <rect x="0" y="20px" rx="0" ry="0" width="100%" height="22px" />
  </ContentLoader>
);
