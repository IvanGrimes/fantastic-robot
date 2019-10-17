import { createAsyncAction } from 'typesafe-actions';
import {
  fetchReservations,
  FetchReservationsInput,
} from './services/fetchReservations';
import { Await } from '../../../utils/Await';

export const fetchReservationsAsync = createAsyncAction(
  '@@studioDetails/FETCH_RESERVATIONS_REQUEST',
  '@@studioDetails/FETCH_RESERVATIONS_SUCCESS',
  '@@studioDetails/FETCH_RESERVATIONS_FAIL'
)<FetchReservationsInput, Await<ReturnType<typeof fetchReservations>>, any>();
