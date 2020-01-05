import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Hidden } from '@modules/ui';
import { DetailsVariant } from '@modules/studio/features/details';
import { details } from '@modules/studio';
import { Price } from './Price';
import { Separator, ScrollableWrapper, Scrollable } from './Payment.styles';
import { RoomSelect } from './RoomSelect';
import { DateRange } from './DateRange';
import { Reserve } from './Reserve';

export type PaymentProps = {
  largeTabletQuery: string;
  variant: DetailsVariant;
  isRoomsLoading: boolean;
  rooms: ReturnType<typeof details.selectors.getRooms>;
  isRoomLoading: boolean;
  room: ReturnType<typeof details.selectors.getRoomById>;
};

export const Payment = ({
  variant,
  isRoomsLoading,
  rooms,
  isRoomLoading,
  room: roomObject,
  largeTabletQuery,
}: PaymentProps) => {
  const [roomId, setRoomId] = useState('');
  const { isLoading, room } = useMemo(() => {
    switch (variant) {
      case 'studio':
        return {
          isLoading: isRoomsLoading,
          room: rooms.filter(roomItem => roomItem.id === roomId)[0],
        };
      case 'room':
        return { isLoading: isRoomLoading, room: roomObject };
      default:
        throw new Error();
    }
  }, [isRoomLoading, isRoomsLoading, roomId, roomObject, rooms, variant]);
  const handleChangeRoomId = useCallback(
    (ev: ChangeEvent<{ value: unknown }>) =>
      setRoomId(ev.target.value as string),
    []
  );

  useEffect(() => {
    if (variant === 'studio' && rooms.length) {
      setRoomId(rooms[0].id);
    }
  }, [rooms, variant]);

  return (
    <>
      <Price isLoading={isLoading} room={room} />
      <Hidden query={largeTabletQuery}>
        <Separator />
      </Hidden>
      <RoomSelect
        isLoading={isLoading}
        list={rooms}
        value={roomId}
        handleChange={handleChangeRoomId}
        largeTabletQuery={largeTabletQuery}
      />
      <ScrollableWrapper>
        <Scrollable>
          <DateRange largeTabletQuery={largeTabletQuery} />
          <Reserve
            isLoading={isLoading}
            room={room}
            rooms={rooms}
            largeTabletQuery={largeTabletQuery}
          />
        </Scrollable>
      </ScrollableWrapper>
    </>
  );
};
