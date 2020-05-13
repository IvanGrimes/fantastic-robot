import React, { FunctionComponent, useEffect } from 'react';
import { List } from './List';
import { ServiceProps } from './types';

// TODO: configure pre-commit

export const ListContainer: FunctionComponent<ServiceProps> = (props) => {
  const { studioList, roomList } = props;

  useEffect(() => {
    if (studioList && studioList.isInit(studioList)) {
      studioList.effect([]);
    }
    if (roomList && roomList.isInit(roomList)) {
      roomList.effect([]);
    }
  }, [roomList, studioList]);

  if (props.studioList) {
    return <List studioList={props.studioList} />;
  }

  return <List roomList={props.roomList} />;
};
