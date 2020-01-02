import React from 'react';
import { useMediaQuery } from '@modules/ui/hooks';
import { DesktopReserve, DesktopReserveProps } from './DesktopReserve';
import { TabletReserve } from './TabletReserve';

export type Reserve = DesktopReserveProps & { largeTabletQuery: string };

export const Reserve = (props: Reserve) => {
  const largeTabletQuery = useMediaQuery(props.largeTabletQuery);

  if (largeTabletQuery) {
    return <TabletReserve />;
  }

  return <DesktopReserve {...props} />;
};
