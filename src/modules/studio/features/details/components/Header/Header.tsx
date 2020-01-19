import React, { useMemo } from 'react';
import { Grid, Typography } from '@material-ui/core';
import * as ui from '@modules/ui';
import { PriceType as PriceTypeComponent } from '../../../../components/PriceType';
import { useDetails } from '../DetailsContext';

const { Loader, Hidden } = ui

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
      <Grid item xs={12} sm={10}>
        <Typography variant="h4" component="h1">
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <Hidden xsDown>
          <PriceTypeComponent size="extraLarge" priceType={price} />
        </Hidden>
      </Grid>
    </Grid>
  );
};
