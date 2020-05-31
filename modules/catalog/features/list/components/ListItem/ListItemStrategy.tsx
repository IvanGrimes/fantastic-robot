import React, { FunctionComponent } from 'react';
import { RoomEntity, StudioEntity } from '@model';
import { Studio } from './Studio';
import { Room } from './Room';
import { Sizes } from './types';

export const ListItemStrategy: FunctionComponent<
  {
    entity: RoomEntity | StudioEntity;
  } & Sizes
> = ({ entity, xs = 4, ...sizes }) => {
  if (entity instanceof StudioEntity) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Studio entity={entity} xs={xs} {...sizes} />;
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Room entity={entity} xs={xs} {...sizes} />;
};
