import { FunctionComponent, useEffect } from 'react';
import { renderService } from '../../../model';
import { ListLoading } from './ListLoading';
import { ListFail } from './ListFail';
import { List } from './List';
import { roomListService, studioListService } from '../internal';
import { changeDisabled, filtersStore, updateFilters } from '../../filters';

export const ListContainer: FunctionComponent<{
  variant: 'studio' | 'room';
}> = ({ variant }) => {
  const studioList = studioListService.useService();
  const roomList = roomListService.useService();

  useEffect(
    () =>
      filtersStore.watch((filters) => {
        if (filters.enabled ? filters : true) {
          if (variant === 'studio' && studioList.isInit(studioList)) {
            // @ts-ignore
            studioList.effect(filters);
          }
          if (variant === 'room' && roomList.isInit(roomList)) {
            // @ts-ignore
            roomList.effect(filters);
          }
        }
      }),
    [roomList, studioList, variant]
  );

  useEffect(
    () =>
      filtersStore.watch(updateFilters, (filters) => {
        if (filters.enabled ? filters : true) {
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

  return renderService(variant === 'studio' ? studioList : roomList, {
    Loading: ListLoading,
    Success: List,
    Fail: ListFail,
  });
};
