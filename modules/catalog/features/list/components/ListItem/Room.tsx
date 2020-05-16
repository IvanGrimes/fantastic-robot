import React, { FunctionComponent } from 'react';
import { RoomEntity } from '../../../../../../model';

export const Room: FunctionComponent<{ entity: RoomEntity }> = ({ entity }) => (
  <li>room id is {entity.getData().id}</li>
);
