import React from 'react';
import { SuccessComponent } from '../../../../../model';
import { RoomListServiceProps } from '../../../internal';
import { RoomListItem } from './RoomListItem';

export const RoomListSuccess: SuccessComponent<RoomListServiceProps> = ({
  service,
}) => (
  <ul>
    {service.data.map((entity) => (
      <RoomListItem entity={entity} />
    ))}
  </ul>
);
