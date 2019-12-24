import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { PriceType as PriceTypeComponent } from '@modules/studio/components/PriceType';
import { PriceType } from '@modules/studio/features/data';

export type HeaderProps = {
  title: string;
  isLoading: boolean;
  priceType: PriceType;
};

export const Header = ({ title, isLoading, priceType }: HeaderProps) => (
  <Grid container alignItems="center" justify="space-between" spacing={1}>
    <Grid item xs={10}>
      <Typography variant="h4" component="h1">
        {title}
      </Typography>
    </Grid>
    <Grid item>
      <PriceTypeComponent
        size="extraLarge"
        loading={isLoading}
        priceType={priceType}
      />
    </Grid>
  </Grid>
);
