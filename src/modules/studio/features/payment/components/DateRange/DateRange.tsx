import React from 'react';
import { useMediaQuery } from '@modules/ui/hooks';
import { Hidden } from '@modules/ui';
import { Grid } from '@material-ui/core';
import { DesktopDateRange, DesktopDateRangeProps } from './DesktopDateRange';

type Props = DesktopDateRangeProps & {
  largeTabletQuery: string;
};

export const DateRange = ({ isLoading, largeTabletQuery }: Props) => {
  const largeTabletMatches = useMediaQuery(largeTabletQuery);

  if (largeTabletMatches) {
    return null;
  }

  return (
    <Grid container item>
      <Hidden query={largeTabletQuery}>
        <DesktopDateRange isLoading={isLoading} />
      </Hidden>
    </Grid>
  );
};
