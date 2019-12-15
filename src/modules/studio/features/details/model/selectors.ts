import { RootState } from '@model/types';
import { createDeepEqualSelector } from '@lib/createDeepEqualSelector';
import { createRequestLoadingSelector } from '@model/api/loading/selectors';
import { fetchInformationAsync } from '@modules/studio/features/details/model/actions';
import { getType } from 'typesafe-actions';

const getState = (state: RootState) => state.studio.details;

export const getReservations = createDeepEqualSelector(
  [getState],
  state => state.reservations
);

export const getWorkHours = createDeepEqualSelector(
  [getState],
  state => state.workHours
);

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

export const getInformation = createDeepEqualSelector(
  [getState],
  state => state.information
);

export const getInformationLoading = createRequestLoadingSelector([
  getType(fetchInformationAsync.request),
]);
