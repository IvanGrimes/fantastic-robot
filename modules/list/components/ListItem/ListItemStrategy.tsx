import React, { FunctionComponent } from 'react';
import { RoomEntity, StudioEntity } from '../../../../model';
import { Studio } from './Studio';
import { Room } from './Room';

export const ListItemStrategy: FunctionComponent<{
  entity: RoomEntity | StudioEntity;
}> = ({ entity }) => {
  if (entity instanceof StudioEntity) {
    return <Studio entity={entity} />;
  }

  return <Room entity={entity} />;
};
