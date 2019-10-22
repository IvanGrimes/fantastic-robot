import { RootState } from '../../../model/types';
import { createDeepEqualSelector } from '../../../lib/createDeepEqualSelector';

const getState = (state: RootState) => state.studioDetails;

export const getStudioReservations = createDeepEqualSelector(
  [getState],
  state => state.reservations
);

export const getStudioWorkHours = createDeepEqualSelector(
  [getState],
  state => state.workHours
);

export const getStudioRooms = createDeepEqualSelector(
  [getState],
  state => state.rooms
);

export const getStudioReservationsWithColor = createDeepEqualSelector(
  [getStudioReservations, getStudioRooms],
  (reservations, rooms) =>
    Object.fromEntries(
      Object.entries(reservations).map(([key, value]) => {
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
    )
);
