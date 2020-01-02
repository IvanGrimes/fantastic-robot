import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Hidden } from '@modules/ui';
import * as details from '@modules/studio/features/details';
import { Price } from './Price';
import { Separator } from './Payment.styles';
import { RoomSelect } from './RoomSelect';
import { DateRange } from './DateRange';
import { Reserve } from './Reserve';

export type PaymentProps = {
  isLoading: boolean;
  rooms: ReturnType<typeof details.selectors.getRooms>;
  room?: ReturnType<typeof details.selectors.getRooms>[number];
  largeTabletQuery: string;
};

const getNode = ({
  isLoading,
  room,
  largeTabletQuery,
  rooms,
  roomId,
  handleChangeRoomId,
}: {
  isLoading: boolean;
  room?: ReturnType<typeof details.selectors.getRooms>[number];
  rooms: ReturnType<typeof details.selectors.getRooms>;
  largeTabletQuery: string;
  roomId: string;
  handleChangeRoomId: (ev: ChangeEvent<{ value: unknown }>) => void;
}) => {
  if (isLoading || !room) {
    return <span>loading</span>;
  }

  return (
    <>
      <Price isLoading={isLoading} room={room} />
      <Hidden query={largeTabletQuery}>
        <Separator />
      </Hidden>
      {rooms.length ? (
        <RoomSelect
          isLoading={isLoading}
          list={rooms}
          value={roomId}
          handleChange={handleChangeRoomId}
          largeTabletQuery={largeTabletQuery}
        />
      ) : null}
      <DateRange largeTabletQuery={largeTabletQuery} />
      <Reserve
        isLoading={isLoading}
        room={room}
        rooms={rooms}
        largeTabletQuery={largeTabletQuery}
      />
    </>
  );
};

export const Payment = ({
  isLoading,
  rooms,
  largeTabletQuery,
  room,
}: PaymentProps) => {
  const [roomId, setRoomId] = useState('');
  const handleChangeRoomId = useCallback(
    (ev: ChangeEvent<{ value: unknown }>) =>
      setRoomId(ev.target.value as string),
    []
  );
  const selectedRoom = useMemo(
    () =>
      rooms.length
        ? rooms.filter(roomItem => roomItem.id === roomId)[0]
        : undefined,
    [roomId, rooms]
  );

  useEffect(() => {
    if (rooms.length) {
      setRoomId(rooms[0].id);
    }
  }, [rooms]);

  return getNode({
    roomId,
    largeTabletQuery,
    isLoading,
    rooms,
    room: selectedRoom || room,
    handleChangeRoomId,
  });
};
