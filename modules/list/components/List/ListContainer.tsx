import React, { useEffect } from 'react';
import { listService } from '../../internal';
import { List } from './List';

// TODO: configure pre-commit

export const ListContainer = () => {
  const service = listService.use();

  useEffect(() => {
    if (service.isInit(service)) {
      service.effect([]);
    }
  }, [service]);

  return <List list={service} />;
};
