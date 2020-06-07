import { http, createService, GetPropsFromService } from '@model';
import { Room, RoomEntity } from '../entities';

const fetchRoomList = () =>
  http
    .get<{ rooms: Room[] }>('/api/room/filter', {
      params: { city: 1, page: 1, size: 8 },
    })
    .then(({ data }) => data.rooms.map((studio) => new RoomEntity(studio)));

export type RoomListServiceProps = GetPropsFromService<typeof fetchRoomList>;

export const roomListService = createService('roomList', fetchRoomList);
