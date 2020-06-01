import React from 'react';
import { FailComponent } from '@model';
import { Grid } from '@components';
import { ListService } from './types';

export const ListFail: FailComponent<ListService> = ({ service }) => (
  <Grid container item>
    {service.error.message}
  </Grid>
);
