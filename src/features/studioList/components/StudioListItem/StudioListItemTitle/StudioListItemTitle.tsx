import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { StudioListItemTitleProps } from './index';

export const StudioListItemTitle = ({ name }: StudioListItemTitleProps) => {
  if (!name) {
    return null;
  }

  return (
    <Grid container>
      <Typography variant="h5" component="h2">
        {name}
      </Typography>
    </Grid>
  );
};
