import React from 'react';
import { ListService } from './types';
import { SuccessComponent, RoomEntity, StudioEntity } from '../../../model';
import { ListItem } from './ListItem';

export const List: SuccessComponent<ListService> = ({ service }) => (
  <ul>
    {
      // @ts-ignore
      service.data.map((entity: StudioEntity | RoomEntity) => (
        <ListItem entity={entity} />
      ))
    }
  </ul>
);
