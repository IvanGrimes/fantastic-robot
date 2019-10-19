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
