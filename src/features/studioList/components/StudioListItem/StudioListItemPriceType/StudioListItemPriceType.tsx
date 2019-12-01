import React, { memo } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { StudioListItemPriceTypeProps } from './index';
import { getPriceType } from '../../../../../utils/getPriceType';
import { StudioListItemProps } from '../index';
import { StudioListItemPriceTypeSkeleton } from './StudioListItemPriceTypeSkeleton';

export type StudioListItemPriceTypeProps = { loading: boolean } & Pick<
  StudioListItemProps,
  'priceType'
>;

const _StudioListItemPriceType = ({
  loading,
  priceType,
}: StudioListItemPriceTypeProps) =>
  loading ? (
    <StudioListItemPriceTypeSkeleton />
  ) : (
    <Grid item>
      <Typography component="span" variant="h6">
        {getPriceType(priceType)}
      </Typography>
    </Grid>
  );

export const StudioListItemPriceType = memo(_StudioListItemPriceType);
