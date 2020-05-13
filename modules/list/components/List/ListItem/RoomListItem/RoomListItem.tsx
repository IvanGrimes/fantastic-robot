import React, { FunctionComponent } from 'react';
import { RoomEntity } from '../../../../../../model';

export const RoomListItem: FunctionComponent<{
  entity: RoomEntity;
}> = ({ entity }) => <div>room-list-item id is {entity.getData().id}</div>;
