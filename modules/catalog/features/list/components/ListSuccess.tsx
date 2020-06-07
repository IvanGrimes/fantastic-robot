import React from 'react';
import { SuccessComponent } from '@model';
import { RoomEntity, StudioEntity } from '../internal';
import { ListService } from './types';
import { ListItem } from './ListItem';

export const ListSuccess: SuccessComponent<ListService> = ({ service }) =>
  // @ts-ignore
  service.data.map((entity: StudioEntity | RoomEntity) => (
    <ListItem key={entity.getId()} entity={entity} />
  ));
