import React from 'react';
import { useMediaQuery } from '@modules/ui/hooks';
import { Hidden } from '@modules/ui';
import { Grid } from '@material-ui/core';
import { DesktopDateRange } from './DesktopDateRange';

type Props = {
  largeTabletQuery: string;
};

export const DateRange = ({ largeTabletQuery }: Props) => {
  const largeTabletMatches = useMediaQuery(largeTabletQuery);

  if (largeTabletMatches) {
    return null;
  }

  return (
    <Grid container item>
      <Hidden query={largeTabletQuery}>
        <DesktopDateRange />
      </Hidden>
    </Grid>
  );
};
