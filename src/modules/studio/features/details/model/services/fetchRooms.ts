import { StudioId } from '@modules/studio/features/details';
import { service } from '@modules/services';
import { RoomId } from '../types';

export type FetchRoomsInput = {
  studioId: StudioId;
};

export type RoomsResponse = {
  id: RoomId;
  name: string;
  studioId: StudioId;
  calendarUrl: string;
  photoIds: string[];
  photoExamples: string[] | null;
  averagePrice: number;
  interiorIds: string[];
}[];

export const fetchRooms = (params: FetchRoomsInput) =>
  service
    .get<RoomsResponse>('/api/room/for-studio', { params })
    .then(({ data }) => data);
