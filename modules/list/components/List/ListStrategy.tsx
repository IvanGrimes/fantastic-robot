import React, { FunctionComponent } from 'react';
import { studioListService, roomListService } from '../../internal';
import { ListContainer } from './ListContainer';
import { Variant } from './types';

export const ListStrategy: FunctionComponent<{
  variant: Variant;
}> = ({ variant }) => {
  const studioList = studioListService.use();
  const roomList = roomListService.use();

  switch (variant) {
    case 'studio':
      return <ListContainer studioList={studioList} />;
    case 'room':
      return <ListContainer roomList={roomList} />;
    default:
      return null;
  }
};
