import { http } from '@shared';
import { Room } from '../../../../model';

export type RoomList = Room[];

export const fetchRoomList = () =>
  http
    .get<{
      rooms: RoomList;
    }>('/api/room/filter', {
      params: { city: 1, page: 1, size: 8 },
    })
    .then(({ data }) => data.rooms);

export type RoomListService = Await<ReturnType<typeof fetchRoomList>>;
