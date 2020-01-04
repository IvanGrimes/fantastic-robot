import { createReducer } from 'typesafe-actions';
import { getTime, setHours, setMinutes } from 'date-fns';
import { getDateRange } from '@utils/getDateRange';
import * as colors from '@material-ui/core/colors';
import {
  fetchInformationAsync,
  fetchReservationsAsync,
  fetchRoomAsync,
  fetchRoomsAsync,
} from './actions';
import { RoomsResponse } from './services/fetchRooms';
import { InformationResponse } from './services/fetchInformation';

export type DetailsState = {
  information: InformationResponse;
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

const initialState: DetailsState = {
  workHours: {},
  reservations: {},
  rooms: [],
  information: {
    id: '',
    name: '',
    roomsCount: 0,
    stationIds: [],
    equipmentIds: [],
    photoIds: [],
    interiorIds: [],
    description: '',
    hasOnlinePayment: false,
    location: {
      lat: 0,
      lng: 0,
    },
    cityId: '',
    priceType: '1',
    dressingRoom: {
      has: false,
      calendarId: null,
      capacity: null,
    },
    contacts: {
      site: null,
      instagram: null,
      email: null,
      phone: '',
      vk: '',
    },
    workingHours: {
      from: 0,
      to: 0,
      utc: '+0',
    },
  },
};

const roomColors = Object.entries(colors).reduce<string[]>((acc, [, group]) => {
  if ('black' in group) {
    return acc;
  }

  return [...acc, group['200']];
}, []);

export const reducer = createReducer(initialState)
  .handleAction(fetchReservationsAsync.success, (state, { payload }) => ({
    ...state,
    ...payload.reduce<
      Pick<DetailsState, 'workHours'> & Pick<DetailsState, 'reservations'>
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
  })
  .handleAction(fetchInformationAsync.success, (state, action) => ({
    ...state,
    information: action.payload,
  }))
  .handleAction(fetchRoomAsync.success, (state, action) => ({
    ...state,
    rooms: [{ ...action.payload, color: roomColors[0] }],
  }));
