import React, { FunctionComponent } from 'react';
import { RoomEntity } from '@model';
import { Sizes } from './types';

export const Room: FunctionComponent<{ entity: RoomEntity } & Sizes> = ({
  entity,
}) => (
  <li style={{ listStyleType: 'none' }}>room id is {entity.getData().id}</li>
);
