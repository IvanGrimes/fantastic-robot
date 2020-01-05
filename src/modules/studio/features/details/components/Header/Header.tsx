import React, { useMemo } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { PriceType as PriceTypeComponent } from '@modules/studio/components/PriceType';
import { Loader } from '@modules/ui';
import { useDetails } from '../DetailsContext';

export const Header = () => {
  const {
    variant,
    isStudioLoading,
    studio,
    isRoomLoading,
    room,
  } = useDetails();
  const { isLoading, title, price } = useMemo(() => {
    switch (variant) {
      case 'studio':
        return {
          isLoading: isStudioLoading,
          title: studio.name,
          price: studio.priceType,
        };
      case 'room':
        return {
          isLoading: isRoomLoading,
          title: room.name,
          price: room.averagePrice,
        };
      default:
        throw new Error();
    }
  }, [
    isRoomLoading,
    isStudioLoading,
    room.averagePrice,
    room.name,
    studio.name,
    studio.priceType,
    variant,
  ]);

  if (!title || isLoading) {
    return <Loader height="36px" width="320px" />;
  }

  return (
    <Grid container alignItems="center" justify="space-between" spacing={1}>
      <Grid item xs={10}>
        <Typography variant="h4" component="h1">
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <PriceTypeComponent size="extraLarge" priceType={price} />
      </Grid>
    </Grid>
  );
};
