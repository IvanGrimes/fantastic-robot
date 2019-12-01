import React from 'react';
import ContentLoader from 'react-content-loader';

export const CalendarSkeleton = () => (
  <ContentLoader height={215}>
    <rect x="50%" y="0" rx="0" ry="0" width="100px" height="20px" />
  </ContentLoader>
);
