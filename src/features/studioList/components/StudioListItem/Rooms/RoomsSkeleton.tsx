import React from 'react';
import ContentLoader from 'react-content-loader';

export const RoomsSkeleton = () => (
  <ContentLoader style={{ width: '20%', height: '12px', marginTop: '4px' }}>
    <rect x="0" y="0" rx="0" ry="0" width="100%" height="1005" />
  </ContentLoader>
);
