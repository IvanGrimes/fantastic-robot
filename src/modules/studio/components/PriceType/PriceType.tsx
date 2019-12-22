import React, { memo } from 'react';
import { Grid } from '@material-ui/core';
import { getPriceType } from '@utils/getPriceType';
import { ListItemProps } from '@modules/studio/features/list';
import { getSize, Size } from '@modules/studio/utils/size';
import { PriceTypeSkeleton } from './PriceTypeSkeleton';
import { Typography } from './PriceType.styles';

export type StudioListItemPriceTypeProps = {
  loading: boolean;
  className?: string;
  size?: Size;
} &
  Pick<ListItemProps, 'priceType'>;

const _StudioListItemPriceType = ({
  className = '',
  loading,
  priceType,
  size = 'large',
}: StudioListItemPriceTypeProps) =>
  loading ? (
    <PriceTypeSkeleton />
  ) : (
    <Grid item className={className}>
      <Typography component="span" variant={getSize(size)}>
        {getPriceType(priceType)}
      </Typography>
    </Grid>
  );

export const PriceType = memo(_StudioListItemPriceType);
