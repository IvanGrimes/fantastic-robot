import React, { memo } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { StudioListItemPriceSegmentProps } from './index';
import { getPriceSegment } from '../../../../../../utils/getPriceSegment';

const _StudioListItemPriceSegment = ({
  priceSegment,
}: StudioListItemPriceSegmentProps) => {
  if (!priceSegment) {
    return null;
  }

  return (
    <Grid item>
      <Typography component="span" variant="h6">
        {getPriceSegment(priceSegment)}
      </Typography>
    </Grid>
  );
};

export const StudioListItemPriceSegment = memo(_StudioListItemPriceSegment);
