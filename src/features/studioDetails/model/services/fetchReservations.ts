import { ReservationId, RoomId, StudioId } from '../../../../model/types';
import { axiosClient } from '../../../../lib/axios.client';

export type FetchReservationsInput = {
  studioId: StudioId;
};

export type ReservationsResponse = {
  day: number;
  weekDay: number;
  month: number;
  year: number;
  openTime: { hours: number; minutes: number };
  closeTime: { hours: number; minutes: number };
  reservations: {
    id: ReservationId;
    from: { hours: number; minutes: number; timestamp: number };
    to: { hours: number; minutes: number; timestamp: number };
    roomId: RoomId;
  }[];
}[];

export const fetchReservations = (params: FetchReservationsInput) =>
  axiosClient
    .get<ReservationsResponse>('/api/calendar/for-studio/list', { params })
    .then(({ data }) => data);
