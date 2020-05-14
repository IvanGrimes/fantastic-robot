import React, { FunctionComponent } from 'react';
import { RoomEntity } from '../../../../../../model';

export const RoomListItem: FunctionComponent<{ entity: RoomEntity }> = ({
  entity,
}) => <li>{entity.getData().id}</li>;
