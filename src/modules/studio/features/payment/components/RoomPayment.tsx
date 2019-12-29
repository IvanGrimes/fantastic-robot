import React from 'react';
import * as details from '@modules/studio/features/details';

export type RoomPaymentProps = {
  isRoomLoading: boolean;
  room: ReturnType<typeof details.selectors.getRooms>[number];
};

export const RoomPayment = ({ isRoomLoading }: RoomPaymentProps) => {
  if (isRoomLoading) {
    return <span>loading</span>;
  }

  return <span>room payment</span>;
};
