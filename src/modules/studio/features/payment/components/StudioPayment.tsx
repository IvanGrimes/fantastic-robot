import React, { ChangeEvent, useCallback, useMemo, useState } from 'react';
import * as details from '@modules/studio/features/details';
import { Hidden } from '@modules/ui';
import { Price } from './Price';
import { RoomSelect } from './RoomSelect';
import { DateRange } from './DateRange';
import { Reserve } from './Reserve';
import { Separator } from './Payment.styles';

export type StudioPaymentProps = {
  isRoomsLoading: boolean;
  rooms: ReturnType<typeof details.selectors.getRooms>;
  largeTabletQuery: string;
};

export const StudioPayment = ({
  isRoomsLoading,
  rooms,
  largeTabletQuery,
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
    <>
      <Price
        isLoading={isRoomsLoading}
        pricePerHour={selectedRoom.averagePrice}
      />
      <Hidden query={largeTabletQuery}>
        <Separator />
      </Hidden>
      <RoomSelect
        isLoading={isRoomsLoading}
        list={rooms}
        value={roomId}
        handleChange={handleChangeRoomId}
        largeTabletQuery={largeTabletQuery}
      />
      <DateRange largeTabletQuery={largeTabletQuery} />
      <Reserve
        isLoading={isRoomsLoading}
        pricePerHour={selectedRoom.averagePrice}
        largeTabletQuery={largeTabletQuery}
      />
    </>
  );
};
