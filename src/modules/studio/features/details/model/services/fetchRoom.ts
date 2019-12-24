import { service } from '@modules/services';
import { RoomsResponse } from './fetchRooms';
import { RoomId } from '../types';

export type FetchRoomInput = { roomId: RoomId };

export type RoomResponse = RoomsResponse[number];

export const fetchRoom = ({ roomId }: FetchRoomInput) =>
  service
    .get<RoomResponse>('/api/room/get', { params: { id: roomId } })
    .then(({ data }) => data);
