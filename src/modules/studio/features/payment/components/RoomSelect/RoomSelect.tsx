import React from 'react';
import { useMediaQuery } from '@modules/ui/hooks';
import { Grid } from '@material-ui/core';
import { RoomSelectDesktop, RoomSelectDesktopProps } from './RoomSelectDesktop';

export type RoomSelectProps = RoomSelectDesktopProps &
  Required<Pick<RoomSelectDesktopProps, 'largeTabletQuery'>>;

export const RoomSelect = ({ largeTabletQuery, ...props }: RoomSelectProps) => {
  const largeTableMatches = useMediaQuery(largeTabletQuery);

  if (largeTableMatches) {
    return null;
  }

  return (
    <Grid container item>
      <RoomSelectDesktop largeTabletQuery={largeTabletQuery} {...props} />
    </Grid>
  );
};
