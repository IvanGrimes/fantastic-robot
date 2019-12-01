import { CalendarState } from '../types';
import { UpdateReservationsAction } from '../actions';

const mockMultiReservation = false;

export const updateReservations = (
  state: CalendarState,
  { payload: { reservations } }: UpdateReservationsAction
): CalendarState => ({
  ...state,
  reservations: mockMultiReservation
    ? {
        ...reservations,
        1574283600000: [
          ...(reservations[1574283600000] || []),
          {
            id: '4d4f51ff-0ec7-4044-a274-556780f71f8f',
            color: '#c377e0',
            range: [
              1574344800000,
              1574348400000,
              1574352000000,
              1574355600000,
              1574359200000,
            ],
          },
          {
            id: '4d4f51ff-0ec7-4044-a274-556780f71f8f',
            color: '#4fe0bc',
            range: [
              1574344800000,
              1574348400000,
              1574352000000,
              1574355600000,
              1574359200000,
            ],
          },
          {
            id: '4d4f51ff-0ec7-4044-a274-556780f71f8f',
            color: '#e0bc0e',
            range: [
              1574344800000,
              1574348400000,
              1574352000000,
              1574355600000,
              1574359200000,
            ],
          },
          {
            id: '4d4f51ff-0ec7-4044-a274-556780f71f8f',
            color: '#e0351c',
            range: [
              1574344800000,
              1574348400000,
              1574352000000,
              1574355600000,
              1574359200000,
            ],
          },
        ],
      }
    : reservations,
});
