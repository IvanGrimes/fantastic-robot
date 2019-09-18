import React, { memo } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { StudioListItemRoomsProps } from './index';
import { getDeclension } from '../../../../../utils/getDeclension';

const _StudioListItemRooms = ({ stationIds }: StudioListItemRoomsProps) => (
  <Grid container>
    <Typography component="span" variant="caption">
      {stationIds.length}{' '}
      {getDeclension(stationIds.length, ['зал', 'зала', 'залов'])}
    </Typography>
  </Grid>
);

export const StudioListItemRooms = memo(_StudioListItemRooms);
