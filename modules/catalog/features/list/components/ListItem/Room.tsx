import React, { FunctionComponent } from 'react';
import { RoomEntity } from '@model';

export const Room: FunctionComponent<{ entity: RoomEntity }> = ({ entity }) => (
  <div>room id is {entity.getData().id}</div>
);
