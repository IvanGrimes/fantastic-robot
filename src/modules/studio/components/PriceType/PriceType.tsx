import React, { memo } from 'react';
import { Grid } from '@material-ui/core';
import { getPriceType } from '@utils/getPriceType';
import { getSize, Size } from '@modules/studio/utils/size';
import { PriceType as IPriceType } from '@modules/studio/features/data';
import { PriceTypeSkeleton } from './PriceTypeSkeleton';
import { Typography } from './PriceType.styles';

export type StudioListItemPriceTypeProps = {
  loading: boolean;
  className?: string;
  size?: Size;
  priceType: IPriceType | number;
};

const _StudioListItemPriceType = ({
  className = '',
  loading,
  size = 'large',
  priceType,
}: StudioListItemPriceTypeProps) => {
  if (loading) {
    return <PriceTypeSkeleton />;
  }

  console.log(priceType);

  return (
    <Grid item className={className}>
      <Typography component="span" variant={getSize(size)}>
        {typeof priceType === 'string' ? (
          getPriceType(priceType)
        ) : (
          <>{priceType} &#8381;</>
        )}
      </Typography>
    </Grid>
  );
};

export const PriceType = memo(_StudioListItemPriceType);
