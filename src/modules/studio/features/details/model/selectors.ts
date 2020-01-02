import { RootState } from '@model/types';
import { createDeepEqualSelector } from '@modules/services/utils/createDeepEqualSelector';
import { getType } from 'typesafe-actions';
import { createRequestLoadingSelector } from '@modules/services';
import { createSelector } from 'reselect';
import {
  fetchInformationAsync,
  fetchReservationsAsync,
  fetchRoomAsync,
  fetchRoomsAsync,
} from './actions';
import { RoomId } from './types';

const defaultRoom = {
  photoIds: [],
  interiorIds: [],
  name: '',
  id: '',
  averagePrice: 0,
  calendarUrl: '',
  photoExamples: [],
  studioId: '',
};

const getState = (state: RootState) => state.studio.details;

export const getReservations = createDeepEqualSelector(
  [getState],
  state => state.reservations
);

export const getWorkHours = createDeepEqualSelector(
  [getState],
  state => state.workHours
);

export const getRoomsLoading = createRequestLoadingSelector([
  getType(fetchRoomsAsync.request),
]);

export const getRooms = createDeepEqualSelector(
  [getState],
  state => state.rooms
);

export const getReservationsWithColor = createDeepEqualSelector(
  [getReservations, getRooms],
  (reservations, rooms) =>
    Object.entries(reservations)
      .map(([key, value]) => {
        return [
          key,
          value.map(reservation => {
            const currentRoom = rooms.find(room => room.id === reservation.id);

            return {
              ...reservation,
              color: currentRoom ? currentRoom.color : undefined,
            };
          }),
        ];
      })
      .reduce((acc, [key, value]) => ({ ...acc, [key.toString()]: value }), {})
);

export const getReservationsLoading = createRequestLoadingSelector([
  getType(fetchReservationsAsync.request),
]);

export const getInformation = createDeepEqualSelector(
  [getState],
  state => state.information
);

export const getInformationLoading = createRequestLoadingSelector([
  getType(fetchInformationAsync.request),
]);

export const getRoomById = (state: RootState, { roomId }: { roomId: RoomId }) =>
  createSelector(
    [getState],
    ({ rooms }) => rooms.filter(({ id }) => id === roomId)[0] || defaultRoom
  )(state);

const getIsRoomLoading = createRequestLoadingSelector([
  getType(fetchRoomAsync.request),
]);

export const getRoomLoading = createSelector(
  [getRoomById, getIsRoomLoading],
  (room, isLoading) => (room.id.length ? false : isLoading)
);
