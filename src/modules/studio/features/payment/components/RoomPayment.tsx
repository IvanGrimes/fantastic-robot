import React from 'react';
import * as details from '@modules/studio/features/details';
import { Hidden } from '@modules/ui';
import { DateRange } from './DateRange';
import { Reserve } from './Reserve';
import { Price } from './Price';
import { Separator } from './Payment.styles';

export type RoomPaymentProps = {
  isRoomLoading: boolean;
  room: ReturnType<typeof details.selectors.getRooms>[number];
  largeTabletQuery: string;
};

export const RoomPayment = ({
  isRoomLoading,
  room,
  largeTabletQuery,
}: RoomPaymentProps) => {
  if (isRoomLoading) {
    return <span>loading</span>;
  }

  return (
    <>
      <Price isLoading={isRoomLoading} pricePerHour={room.averagePrice} />
      <Hidden query={largeTabletQuery}>
        <Separator />
      </Hidden>
      <DateRange largeTabletQuery={largeTabletQuery} />
      <Reserve
        isLoading={isRoomLoading}
        pricePerHour={room.averagePrice}
        largeTabletQuery={largeTabletQuery}
      />
    </>
  );
};
