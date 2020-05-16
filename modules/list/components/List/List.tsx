import React from 'react';
import { ListService } from './types';
import { SuccessComponent } from '../../../../model/renderService';
import { ListItem } from './ListItem';
import { RoomEntity, StudioEntity } from '../../../../model/entities';

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
