import { RootState } from '@model/types';
import { createDeepEqualSelector } from '@lib/createDeepEqualSelector';

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
