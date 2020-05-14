import React, { FunctionComponent } from 'react';
import { studioListService, roomListService } from '../../internal';
import { Variant } from './types';
import { StudioList } from './StudioList';
import { RoomList } from './RoomList';

export const ListStrategy: FunctionComponent<{
  variant: Variant;
}> = ({ variant }) => {
  const studioList = studioListService.useService();
  const roomList = roomListService.useService();

  switch (variant) {
    case 'studio':
      return <StudioList service={studioList} />;
    case 'room':
      return <RoomList service={roomList} />;
    default:
      return null;
  }
};
