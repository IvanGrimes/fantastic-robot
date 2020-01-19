import * as services from '@modules/services';
import * as details from '../../../details';
import { RoomId } from '../types';

export type FetchRoomsInput = {
  studioId: details.StudioId;
};

export type RoomsResponse = {
  id: RoomId;
  name: string;
  studioId: details.StudioId;
  calendarUrl: string;
  photoIds: string[];
  photoExamples: string[] | null;
  averagePrice: number;
  interiorIds: string[];
}[];

export const fetchRooms = (params: FetchRoomsInput) =>
  services.service
    .get<RoomsResponse>('/api/room/for-studio', { params })
    .then(({ data }) => data);
