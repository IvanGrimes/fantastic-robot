import React, { ChangeEvent } from 'react';
import * as ui from '@modules/ui';
import * as details from '../../details';
import { Price } from './Price';
import { Separator, ScrollableWrapper, Scrollable } from './Payment.styles';
import { RoomSelect } from './RoomSelect';
import { DateRange } from './DateRange';
import { Reserve } from './Reserve';

export type PaymentProps = {
  largeTabletQuery: string;
  rooms: ReturnType<typeof details.selectors.getRooms>;
  room: ReturnType<typeof details.selectors.getRoomById>;
  isLoading: boolean;
  roomId: string;
  handleChangeRoomId: (ev: ChangeEvent<{ value: unknown }>) => void;
};

const { Hidden } = ui

export const Payment = ({
  room,
  largeTabletQuery,
  isLoading,
  rooms,
  roomId,
  handleChangeRoomId,
}: PaymentProps) => (
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
        <DateRange isLoading={isLoading} largeTabletQuery={largeTabletQuery} />
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
