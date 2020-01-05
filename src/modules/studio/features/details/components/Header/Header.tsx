import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { PriceType as PriceTypeComponent } from '@modules/studio/components/PriceType';
import { PriceType } from '@modules/studio/features/data';
import { Loader } from '@modules/ui';

export type HeaderProps = {
  title: string;
  isLoading: boolean;
  priceType: PriceType | number;
};

export const Header = ({ title, isLoading, ...props }: HeaderProps) => {
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
        <PriceTypeComponent size="extraLarge" priceType={props.priceType} />
      </Grid>
    </Grid>
  );
};
