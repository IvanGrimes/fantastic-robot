import React, { memo } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { StudioListItemRoomsProps } from './index';
import { getDeclension } from '../../../../../utils/getDeclension';

const _StudioListItemRooms = ({ roomsCount }: StudioListItemRoomsProps) => (
  <Grid container>
    <Typography component="span" variant="caption">
      {roomsCount} {getDeclension(roomsCount, ['зал', 'зала', 'залов'])}
    </Typography>
  </Grid>
);

export const StudioListItemRooms = memo(_StudioListItemRooms);
