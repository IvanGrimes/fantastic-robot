import React, { FunctionComponent, useEffect } from 'react';
import { RoomListServiceProps } from '../../../internal';
import { RoomList } from './RoomList';

export const RoomListContainer: FunctionComponent<{
  service: RoomListServiceProps;
}> = ({ service }) => {
  useEffect(() => {
    if (service.isInit(service)) {
      service.effect([]);
    }
  }, [service]);

  return <RoomList service={service} />;
};
