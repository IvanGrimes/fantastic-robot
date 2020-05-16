import { FunctionComponent, useEffect } from 'react';
import { useStore } from 'effector-react';
import { renderService } from '../../../../../model';
import { ListLoading } from './ListLoading';
import { ListFail } from './ListFail';
import { List } from './List';
import { roomListService, studioListService } from '../internal';
import { filtersStore } from '../../../internal';

export const ListContainer: FunctionComponent<{
  variant: 'studio' | 'room';
}> = ({ variant }) => {
  const studioList = studioListService.useService();
  const roomList = roomListService.useService();
  const filters = useStore(filtersStore);

  useEffect(() => {
    if (filters) {
      if (variant === 'studio' && studioList.isInit(studioList)) {
        studioList.effect([]);
      }
      if (variant === 'room' && roomList.isInit(roomList)) {
        roomList.effect([]);
      }
    }
  }, [filters, roomList, studioList, variant]);

  return renderService(variant === 'studio' ? studioList : roomList, {
    Loading: ListLoading,
    Success: List,
    Fail: ListFail,
  });
};
