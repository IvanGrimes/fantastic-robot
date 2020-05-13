import React, { FunctionComponent } from 'react';
import { RoomEntity, StudioEntity } from '../../../../../model';
import { StudioListItem } from './StudioListItem';
import { RoomListItem } from './RoomListItem';

export const ListItem: FunctionComponent<{
  entity: RoomEntity | StudioEntity;
}> = ({ entity }) => {
  if (entity instanceof StudioEntity) {
    return <StudioListItem entity={entity} />;
  }

  return <RoomListItem entity={entity} />;
};
