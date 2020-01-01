import React from 'react';
import * as details from '@modules/studio/features/details';
import { DateRange } from './DateRange';
import { Reserve } from './Reserve';
import { Price } from './Price';
import { Separator } from './Payment.styles';

export type RoomPaymentProps = {
  isRoomLoading: boolean;
  room: ReturnType<typeof details.selectors.getRooms>[number];
};

export const RoomPayment = ({ isRoomLoading, room }: RoomPaymentProps) => {
  if (isRoomLoading) {
    return <span>loading</span>;
  }

  return (
    <>
      <Price isLoading={isRoomLoading} pricePerHour={room.averagePrice} />
      <Separator />
      <DateRange />
      <Reserve isLoading={isRoomLoading} pricePerHour={room.averagePrice} />
    </>
  );
};
