import React from 'react';
import * as ui from '@modules/ui';
import { Grid } from '@material-ui/core';
import { RoomSelectDesktop, RoomSelectDesktopProps } from './RoomSelectDesktop';
import { useDetails } from '../../../details/components/DetailsContext';

export type RoomSelectProps = RoomSelectDesktopProps &
  Required<Pick<RoomSelectDesktopProps, 'largeTabletQuery'>>;

export const RoomSelect = ({ largeTabletQuery, ...props }: RoomSelectProps) => {
  const { variant } = useDetails();
  const largeTableMatches = ui.hooks.useMediaQuery(largeTabletQuery);

  if (variant !== 'studio') {
    return null;
  }

  if (largeTableMatches) {
    return null;
  }

  return (
    <Grid container item>
      <RoomSelectDesktop largeTabletQuery={largeTabletQuery} {...props} />
    </Grid>
  );
};
