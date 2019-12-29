import React, { ChangeEvent, useCallback, useMemo, useState } from 'react';
import * as details from '@modules/studio/features/details';
import { Grid } from '@material-ui/core';
import { Price } from './Price';
import { RoomSelect } from './RoomSelect';

export type StudioPaymentProps = {
  isRoomsLoading: boolean;
  rooms: ReturnType<typeof details.selectors.getRooms>;
};

export const StudioPayment = ({
  isRoomsLoading,
  rooms,
}: StudioPaymentProps) => {
  const [roomId, setRoomId] = useState<string>('');
  const handleChangeRoomId = useCallback(
    (ev: ChangeEvent<{ value: unknown }>) =>
      setRoomId(ev.target.value as string),
    []
  );
  const selectedRoom = useMemo(
    () => rooms.filter(room => room.id === roomId)[0] || {},
    [roomId, rooms]
  );

  if (isRoomsLoading) {
    return <span>loading...</span>;
  }

  return (
    <Grid container>
      <Grid container alignItems="flex-end">
        <Price isLoading={isRoomsLoading} price={selectedRoom.averagePrice} />
      </Grid>
      <Grid container>
        <RoomSelect
          isLoading={isRoomsLoading}
          list={rooms}
          value={roomId}
          handleChange={handleChangeRoomId}
        />
      </Grid>
    </Grid>
  );
};
