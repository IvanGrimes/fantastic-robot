import React, { FunctionComponent } from 'react';
import { RoomList, StudioList } from '../model';
import { ListItem } from './ListItem';

export const ListSuccess: FunctionComponent<{
  list: StudioList | RoomList;
}> = ({ list }) =>
  // @ts-ignore
  list.map(({ studio }) => <ListItem key={studio.id} entity={studio} />);
