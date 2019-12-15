import { createReducer } from 'typesafe-actions';
import { getTime, setHours, setMinutes } from 'date-fns';
import { fetchReservationsAsync, fetchRoomsAsync } from './actions';
import { getDateRange } from '../../../../../utils/getDateRange';
import { RoomsResponse } from './services/fetchRooms';

export type StudioDetailsState = {
  workHours: { [key: string]: { from: number; to: number } };
  reservations: {
    [key: string]: {
      id: string;
      range: number[];
    }[];
  };
  rooms: (RoomsResponse[number] & {
    color: string;
  })[];
};

const initialState: StudioDetailsState = {
  workHours: {},
  reservations: {},
  rooms: [],
};

const roomColors = [
  '#61bd4f',
  '#c377e0',
  '#ff9f1a',
  '#00c2e0',
  '#eb5a46',
  '#b3bac5',
  '#0079bf',
  '#51e898',
  '#ff78cb',
  '#344563',
];

export const studioDetailsReducer = createReducer(initialState)
  .handleAction(fetchReservationsAsync.success, (state, { payload }) => ({
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
            [key]: reservations.reduce<{ range: number[]; id: string }[]>(
              (acc2, reservation) => {
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

                return [
                  ...acc2,
                  {
                    id: reservation.roomId,
                    range: getDateRange(from, to, 'hours'),
                  },
                ];
              },
              []
            ),
          },
        };
      },
      {
        reservations: {},
        workHours: {},
      }
    ),
  }))
  .handleAction(fetchRoomsAsync.success, (state, action) => {
    return {
      ...state,
      rooms: action.payload.map((room, index) => ({
        ...room,
        color: roomColors[index],
      })),
    };
  });
