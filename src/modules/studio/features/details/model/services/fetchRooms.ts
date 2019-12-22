import { StudioId } from '@modules/studio/features/details';
import { service } from '@modules/services';

export type FetchRoomsInput = {
  studioId: StudioId;
};

export type RoomsResponse = {
  id: string;
  name: string;
  studioId: StudioId;
  calendarUrl: string;
  photoIds: string[] | null;
  photoExamples: string[] | null;
  averagePrice: number;
  interiorIds: string[] | null;
}[];

export const fetchRooms = (params: FetchRoomsInput) =>
  service
    .get<RoomsResponse>('/api/room/for-studio', { params })
    .then(({ data }) => data);
