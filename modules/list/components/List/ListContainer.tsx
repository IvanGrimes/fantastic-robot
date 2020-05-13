import React, { useEffect } from 'react';
import { listService } from '../../internal';
import { List } from './List';

// TODO: configure pre-commit

export const ListContainer = () => {
  const list = listService.use();

  useEffect(() => {
    if (list.isInit(list)) {
      list.effect([]);
    }
  }, [list]);

  return <List list={list} />;
};
