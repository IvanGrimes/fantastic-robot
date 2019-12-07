import React, { memo } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { StudioListItemRoomsProps } from './index';
import { getDeclension } from '../../../../../utils/getDeclension';
import { StudioListItemProps } from '../index';
import { RoomsSkeleton } from './RoomsSkeleton';

export type StudioListItemRoomsProps = { loading: boolean } & Pick<
  StudioListItemProps,
  'roomsCount'
>;

const _StudioListItemRooms = ({
  loading,
  roomsCount = 0,
}: StudioListItemRoomsProps) =>
  loading ? (
    <RoomsSkeleton />
  ) : (
    <Grid container>
      <Typography component="span" variant="caption">
        {roomsCount} {getDeclension(roomsCount, ['зал', 'зала', 'залов'])}
      </Typography>
    </Grid>
  );

export const Rooms = memo(_StudioListItemRooms);
