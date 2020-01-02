import React from 'react';
import { Button, Grid } from '@material-ui/core';

export const TabletReserve = () => (
  <Grid item spacing={2}>
    <Grid container>
      <Button variant="contained" color="primary" fullWidth>
        Зарезервировать
      </Button>
    </Grid>
  </Grid>
);
