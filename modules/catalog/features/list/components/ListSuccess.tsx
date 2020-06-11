import React, { FunctionComponent } from 'react';
import { StudioList } from '../model';
import { ListItem } from './ListItem';

export const ListSuccess: FunctionComponent<{
  list: StudioList;
}> = ({ list }) => (
  <>
    {list.map(({ studio }) => (
      <ListItem key={studio.id} entity={studio} />
    ))}
  </>
);
