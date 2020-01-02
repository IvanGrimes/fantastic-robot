import React from 'react';
import { Hidden } from '@modules/ui';
import { useMediaQuery } from '@modules/ui/hooks';
import { Grid } from '@material-ui/core';
import { RoomSelectDesktop, RoomSelectDesktopProps } from './RoomSelectDesktop';

export type RoomSelectProps = RoomSelectDesktopProps;

export const RoomSelect = ({ largeTabletQuery, ...props }: RoomSelectProps) => {
  const largeTableMatches = useMediaQuery(largeTabletQuery);

  if (largeTableMatches) {
    return null;
  }

  return (
    <Grid container item>
      <Hidden query={largeTabletQuery}>
        <RoomSelectDesktop largeTabletQuery={largeTabletQuery} {...props} />
      </Hidden>
    </Grid>
  );
};
