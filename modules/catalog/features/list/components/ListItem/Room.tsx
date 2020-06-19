import React, { FunctionComponent } from 'react';
import { Room as RoomType } from '../../../../model';

export const Room: FunctionComponent<{ entity: RoomType }> = ({ entity }) => (
  <div>room id is {entity.id}</div>
);
