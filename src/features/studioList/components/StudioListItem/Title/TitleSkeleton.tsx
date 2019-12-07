import React from 'react';
import ContentLoader from 'react-content-loader';

export const TitleSkeleton = () => (
  <ContentLoader style={{ width: '220px', height: '18px', marginTop: '8px' }}>
    <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
  </ContentLoader>
);
