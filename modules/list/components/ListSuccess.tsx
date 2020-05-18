import React from 'react';
import { SuccessComponent, RoomEntity, StudioEntity } from '@model';
import { ListService } from './types';
import { ListItem } from './ListItem';

export const ListSuccess: SuccessComponent<ListService> = ({ service }) => (
  <ul style={{ padding: 0, margin: 0 }}>
    {
      // @ts-ignore
      service.data.map((entity: StudioEntity | RoomEntity) => (
        <ListItem key={entity.getId()} entity={entity} />
      ))
    }
  </ul>
);
