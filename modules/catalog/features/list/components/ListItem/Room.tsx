import React, { FunctionComponent } from 'react';
import { RoomEntity } from '@model';

export const Room: FunctionComponent<{ entity: RoomEntity }> = ({ entity }) => (
  <li style={{ listStyleType: 'none' }}>room id is {entity.getData().id}</li>
);
