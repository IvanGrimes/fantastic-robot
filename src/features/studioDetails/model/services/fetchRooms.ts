import { StudioId } from '../../../../model/types';
import { axiosClient } from '../../../../lib/axios.client';

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
}[];

export const fetchRooms = (params: FetchRoomsInput) =>
  axiosClient
    .get<RoomsResponse>('/api/room/for-studio', { params })
    .then(({ data }) => data);
