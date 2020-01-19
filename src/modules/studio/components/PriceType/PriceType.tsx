import React, { memo } from 'react';
import { Grid } from '@material-ui/core';
import { getPriceType } from '@utils/getPriceType';
import { getSize, Size } from '@modules/studio/utils/size';
import { PriceType as IPriceType } from '@modules/studio/features/data';
import { Typography } from './PriceType.styles';

export type StudioListItemPriceTypeProps = {
  className?: string;
  size?: Size;
  priceType: IPriceType | number;
};

const _StudioListItemPriceType = ({
  className = '',
  size = 'large',
  priceType,
}: StudioListItemPriceTypeProps) => {
  if (typeof priceType !== 'string') {
    return null;
  }

  return (
    <Grid item className={className}>
      <Typography component="span" variant={getSize(size)}>
        {getPriceType(priceType)}
      </Typography>
    </Grid>
  );
};

export const PriceType = memo(_StudioListItemPriceType);
