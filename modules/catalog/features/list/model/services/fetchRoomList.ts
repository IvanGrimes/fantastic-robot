import { http, ServiceError } from '@shared';
import { Room } from '../../../../model';
import { FiltersState } from '../../../filters/model';
import { transformFilters } from './transformFilters';

export type RoomList = Room[];

export const fetchRoomList = ({
  page,
  ...filters
}: { page?: number } & FiltersState['values']) => {
  const f = transformFilters(filters);

  return http
    .post<{
      rooms: RoomList;
    }>('/api/room/filter', { city: 1, page, size: 15, ...f })
    .then(({ data }) => data.rooms)
    .catch(() => {
      throw new ServiceError(
        'При загрузке списка студий произошла ошибка, пожалуйста, попробуйте позднее.'
      );
    });
};

export type RoomListParameters = Parameters<typeof fetchRoomList>[number];

export type RoomListService = Await<ReturnType<typeof fetchRoomList>>;
