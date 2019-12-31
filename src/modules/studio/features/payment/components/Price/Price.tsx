import React from 'react';
import { Grid } from '@material-ui/core';
import { Typography, Amount } from './Price.styles';

export type PriceProps =
  | {
      isLoading: true;
      pricePerHour: undefined;
    }
  | {
      isLoading: false;
      pricePerHour: number;
    };

export const Price = (props: PriceProps) => {
  if (props.isLoading) {
    return <span>loading</span>;
  }

  return (
    <Grid container item alignItems="flex-end">
      <Typography variant="h6">{props.pricePerHour}&#8381;</Typography>
      <Amount variant="caption">в час</Amount>
    </Grid>
  );
};
