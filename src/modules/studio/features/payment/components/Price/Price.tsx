import React from 'react';
import { Grid } from '@material-ui/core';
import * as ui from '@modules/ui';
import * as details from '../../../details';
import { Typography, Amount } from './Price.styles';

export type PriceProps = {
  isLoading: boolean;
  room?: ReturnType<typeof details.selectors.getRooms>[number];
};

const { Loader } = ui;

export const Price = (props: PriceProps) => {
  if (
    props.isLoading ||
    !props.room ||
    (props.room && !props.room.averagePrice)
  ) {
    return (
      <Grid item>
        <Grid container>
          <Loader
            style={{ marginTop: '-2px', marginBottom: '-3px' }}
            width="120px"
            height="20px"
          />
        </Grid>
      </Grid>
    );
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
