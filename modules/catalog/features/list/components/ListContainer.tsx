import React, { FunctionComponent, useEffect, useRef } from 'react';
import { roomListService, studioListService } from '../internal';
import { changeDisabled, filtersStore, updateFilters } from '../../../internal';
import { List } from './List';

export const ListContainer: FunctionComponent<{
  variant: 'studio' | 'room';
}> = ({ variant }) => {
  const initFetchRef = useRef(false);
  const studioList = studioListService.useService();
  const roomList = roomListService.useService();

  useEffect(() => {
    if (!initFetchRef.current) {
      return filtersStore.watch((filters) => {
        if (variant === 'studio' && studioList.isInit(studioList)) {
          // @ts-ignore
          studioList.effect(filters || {});

          initFetchRef.current = true;
        }
        if (variant === 'room' && roomList.isInit(roomList)) {
          // @ts-ignore
          roomList.effect(filters || {});

          initFetchRef.current = true;
        }
      });
    }
  }, [roomList, studioList, variant]);

  useEffect(
    () =>
      filtersStore.watch(updateFilters, (filters) => {
        if (filters.enabled) {
          changeDisabled(true);

          if (variant === 'studio') {
            // @ts-ignore
            studioList.effect(filters).finally(() => changeDisabled(false));
          }
          if (variant === 'room') {
            // @ts-ignore
            roomList.effect(filters).finally(() => changeDisabled(false));
          }
        }
      }),
    [roomList, studioList, variant]
  );

  return <List service={variant === 'studio' ? studioList : roomList} />;
};
