import React from 'react';
import { Grid, Typography } from '@material-ui/core';

export type PriceProps =
  | {
      isLoading: true;
      price: undefined;
    }
  | {
      isLoading: false;
      price: number;
    };

export const Price = (props: PriceProps) => {
  if (props.isLoading) {
    return <span>loading</span>;
  }

  return (
    <Grid item>
      <Typography variant="h6">{props.price}</Typography>
      <Typography variant="caption">в час</Typography>
    </Grid>
  );
};
