import React, { memo, ReactNode } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { getDeclension } from '@utils/getDeclension';
import * as ui from '@modules/ui';
import * as list from '../../features/list';
import { getSize, Size } from '../../utils/size';

export type StudioListItemRoomsProps = {
  loading: boolean;
  className?: string;
  size?: Size;
  skeleton?: ReactNode;
} & Partial<Pick<list.ListItemProps, 'roomsCount'>>;

const { Loader } = ui

const _StudioListItemRooms = ({
  className = '',
  loading,
  roomsCount,
  size = 'small',
  skeleton = <Loader width="20%" height="10px" top="5px" />,
}: StudioListItemRoomsProps) => (
  <Grid container className={className}>
    {loading || !roomsCount ? (
      skeleton
    ) : (
      <Typography component="span" variant={getSize(size)}>
        {roomsCount} {getDeclension(roomsCount, ['зал', 'зала', 'залов'])}
      </Typography>
    )}
  </Grid>
);

export const Rooms = memo(_StudioListItemRooms);
