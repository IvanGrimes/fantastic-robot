import { createReducer } from 'typesafe-actions';
import { getTime, setHours, setMinutes } from 'date-fns';
import { fetchReservationsAsync } from './actions';
import { getDateRange } from '../../../utils/getDateRange';

export type StudioDetailsState = {
  workHours: { [key: string]: { from: number; to: number } };
  reservations: { [key: string]: number[] };
};

const initialState: StudioDetailsState = {
  workHours: {},
  reservations: {},
};

export const studioDetailsReducer = createReducer(initialState).handleAction(
  fetchReservationsAsync.success,
  (state, { payload }) => ({
    ...state,
    ...payload.reduce<
      Pick<StudioDetailsState, 'workHours'> &
        Pick<StudioDetailsState, 'reservations'>
    >(
      (acc, { year, month, day, reservations, openTime, closeTime }) => {
        const today = new Date(year, month - 1, day);
        const key = getTime(today).toString();

        return {
          ...acc,
          workHours: {
            ...acc.workHours,
            [key]:
              openTime.hours === closeTime.hours
                ? {
                    from: getTime(setMinutes(setHours(today, 0), 0)),
                    to: getTime(setMinutes(setHours(today, 23), 0)),
                  }
                : {
                    from: getTime(
                      setMinutes(setHours(today, openTime.hours), 0)
                    ),
                    to: getTime(
                      setMinutes(setHours(today, closeTime.hours), 0)
                    ),
                  },
          },
          reservations: {
            ...acc.reservations,
            [key]: reservations.reduce<number[]>((acc2, reservation) => {
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

              console.log(getDateRange(from, to, 'hours'));

              return [...acc2, ...getDateRange(from, to, 'hours')];
            }, []),
          },
        };
      },
      {
        reservations: {},
        workHours: {},
      }
    ),
  })
);
