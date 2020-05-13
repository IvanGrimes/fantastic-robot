import React, { FunctionComponent } from 'react';
import { ServiceProps } from './types';
import { ListItem } from './ListItem';

export const List: FunctionComponent<ServiceProps> = ({
  studioList,
  roomList,
}) => {
  if (studioList) {
    if (studioList.isInit(studioList) || studioList.isLoading(studioList)) {
      return <div>studio list is loading</div>;
    }
    if (studioList.isFail(studioList)) {
      return <div>studio list has error</div>;
    }

    return (
      <ul>
        {studioList.data.map((entity) => (
          <ListItem key={entity.getKey()} entity={entity} />
        ))}
      </ul>
    );
  }

  if (roomList) {
    if (roomList.isInit(roomList) || roomList.isLoading(roomList)) {
      return <div>room list is loading</div>;
    }
    if (roomList.isFail(roomList)) {
      return <div> room list has error</div>;
    }

    return (
      <ul>
        {roomList.data.map((entity) => (
          <ListItem key={entity.getData().id} entity={entity} />
        ))}
      </ul>
    );
  }

  return null;
};
