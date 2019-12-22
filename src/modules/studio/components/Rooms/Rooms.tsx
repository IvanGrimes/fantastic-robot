import React, { memo } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { getDeclension } from '@utils/getDeclension';
import { ListItemProps } from '@modules/studio/features/list';
import { getSize, Size } from '@modules/studio/utils/size';
import { RoomsSkeleton } from './RoomsSkeleton';

export type StudioListItemRoomsProps = {
  loading: boolean;
  className?: string;
  size?: Size;
} & Pick<ListItemProps, 'roomsCount'>;

const _StudioListItemRooms = ({
  className = '',
  loading,
  roomsCount = 0,
  size = 'small',
}: StudioListItemRoomsProps) =>
  loading ? (
    <RoomsSkeleton />
  ) : (
    <Grid container className={className}>
      <Typography component="span" variant={getSize(size)}>
        {roomsCount} {getDeclension(roomsCount, ['зал', 'зала', 'залов'])}
      </Typography>
    </Grid>
  );

export const Rooms = memo(_StudioListItemRooms);
