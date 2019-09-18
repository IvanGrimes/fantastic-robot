import React, { memo } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { StudioListItemPriceSegmentProps } from './index';
import { getPriceSegment } from '../../../../../utils/getPriceSegment';

const _StudioListItemPriceType = ({
  priceType,
}: StudioListItemPriceSegmentProps) => (
  <Grid item>
    <Typography component="span" variant="h6">
      {getPriceSegment(priceType)}
    </Typography>
  </Grid>
);

export const StudioListItemPriceType = memo(_StudioListItemPriceType);
