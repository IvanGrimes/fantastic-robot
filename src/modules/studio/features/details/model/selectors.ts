import { RootState } from '@model/types';
import * as services from '@modules/services';
import { getType } from 'typesafe-actions';
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

export const getReservations = services.createDeepEqualSelector(
  [getState],
  state => state.reservations
);

export const getWorkHours = services.createDeepEqualSelector(
  [getState],
  state => state.workHours
);

export const getRoomsLoading = services.createRequestLoadingSelector([
  getType(fetchRoomsAsync.request),
]);

export const getRooms = services.createDeepEqualSelector(
  [getState],
  state => state.rooms
);

export const getReservationsWithColor = services.createDeepEqualSelector(
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

export const getReservationsLoading = services.createRequestLoadingSelector([
  getType(fetchReservationsAsync.request),
]);

export const getInformation = services.createDeepEqualSelector(
  [getState],
  state => state.information
);

export const getInformationLoading = services.createRequestLoadingSelector([
  getType(fetchInformationAsync.request),
]);

export const getRoomById = (state: RootState, { roomId }: { roomId: RoomId }) =>
  createSelector(
    [getState],
    ({ rooms }) => rooms.filter(({ id }) => id === roomId)[0] || defaultRoom
  )(state);

const getIsRoomLoading = services.createRequestLoadingSelector([
  getType(fetchRoomAsync.request),
]);

export const getRoomLoading = createSelector(
  [getRoomById, getIsRoomLoading],
  (room, isLoading) => (room.id.length ? false : isLoading)
);
