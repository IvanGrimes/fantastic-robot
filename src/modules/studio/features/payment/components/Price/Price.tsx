import React from 'react';
import { Grid } from '@material-ui/core';
import * as details from '@modules/studio/features/details';
import { Typography, Amount } from './Price.styles';

export type PriceProps = {
  isLoading: boolean;
  room?: ReturnType<typeof details.selectors.getRooms>[number];
};

export const Price = (props: PriceProps) => {
  if (
    props.isLoading ||
    !props.room ||
    (props.room && !props.room.averagePrice)
  ) {
    return <span>loading</span>;
  }

  return (
    <Grid item>
      <Grid container alignItems="flex-end">
        <Typography variant="h6">{props.room.averagePrice}&#8381;</Typography>
        <Amount variant="caption">в час</Amount>
      </Grid>
    </Grid>
  );
};
