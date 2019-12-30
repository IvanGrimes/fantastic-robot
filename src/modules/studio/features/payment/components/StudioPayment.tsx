import React, { ChangeEvent, useCallback, useMemo, useState } from 'react';
import * as details from '@modules/studio/features/details';
import { Grid } from '@material-ui/core';
import { Price } from './Price';
import { RoomSelect } from './RoomSelect';
import { DateRange } from './DateRange';
import { Reserve } from './Reserve';

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
    <Grid container spacing={2}>
      <Price
        isLoading={isRoomsLoading}
        pricePerHour={selectedRoom.averagePrice}
      />
      <RoomSelect
        isLoading={isRoomsLoading}
        list={rooms}
        value={roomId}
        handleChange={handleChangeRoomId}
      />
      <DateRange />
      <Reserve
        isLoading={isRoomsLoading}
        pricePerHour={selectedRoom.averagePrice}
      />
    </Grid>
  );
};
