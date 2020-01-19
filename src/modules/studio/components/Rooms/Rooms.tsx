import React, { memo, ReactNode } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { getDeclension } from '@utils/getDeclension';
import { ListItemProps } from '@modules/studio/features/list';
import { getSize, Size } from '@modules/studio/utils/size';
import { Loader } from '@modules/ui';

export type StudioListItemRoomsProps = {
  loading: boolean;
  className?: string;
  size?: Size;
  skeleton?: ReactNode;
} & Partial<Pick<ListItemProps, 'roomsCount'>>;

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
