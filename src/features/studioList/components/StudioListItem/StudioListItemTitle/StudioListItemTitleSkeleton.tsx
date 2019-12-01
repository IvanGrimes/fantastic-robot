import React from 'react';
import ContentLoader from 'react-content-loader';

export const StudioListItemTitleSkeleton = () => (
  <ContentLoader width={220} height={20} style={{ height: '20px' }}>
    <rect x="0" y="0" rx="0" ry="0" width="100%" height="20px" />
  </ContentLoader>
);
