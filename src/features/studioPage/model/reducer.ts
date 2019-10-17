import { createReducer } from 'typesafe-actions';
import { getTime, setHours, setMinutes } from 'date-fns';
import { fetchReservationsAsync } from './actions';
import { getDateRange } from '../../../utils/getDateRange';

export type StudioDetailsState = {
  reservations: number[];
};

const initialState: StudioDetailsState = {
  reservations: [],
};

export const studioDetailsReducer = createReducer(initialState).handleAction(
  fetchReservationsAsync.success,
  (state, { payload }) => ({
    ...state,
    reservations: payload.reduce<number[]>(
      (acc, { year, month, day, reservations }) => {
        const today = new Date(year, month, day);

        return [
          ...acc,
          ...reservations.reduce<number[]>((acc2, reservation) => {
            const from = getTime(
              setMinutes(
                setHours(today, reservation.from.hours),
                reservation.from.minutes
              )
            );
            const to = getTime(
              setMinutes(
                setHours(today, reservation.to.hours),
                reservation.from.minutes
              )
            );

            return [...acc2, ...getDateRange(from, to, 'hours')];
          }, []),
        ];
      },
      []
    ),
  })
);
