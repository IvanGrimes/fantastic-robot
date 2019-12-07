import React, { memo } from 'react';
import { Grid } from '@material-ui/core';
import { StudioListItemPriceTypeProps } from './index';
import { getPriceType } from '../../../../../utils/getPriceType';
import { StudioListItemProps } from '../index';
import { PriceTypeSkeleton } from './PriceTypeSkeleton';
import { Typography } from './PriceType.styles';

export type StudioListItemPriceTypeProps = { loading: boolean } & Pick<
  StudioListItemProps,
  'priceType'
>;

const _StudioListItemPriceType = ({
  loading,
  priceType,
}: StudioListItemPriceTypeProps) =>
  loading ? (
    <PriceTypeSkeleton />
  ) : (
    <Grid item>
      <Typography component="span" variant="h6">
        {getPriceType(priceType)}
      </Typography>
    </Grid>
  );

export const PriceType = memo(_StudioListItemPriceType);
