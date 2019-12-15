import { createAsyncAction } from 'typesafe-actions';
import { Await } from '@utils/Await';
import {
  fetchReservations,
  FetchReservationsInput,
} from './services/fetchReservations';
import { fetchRooms, FetchRoomsInput } from './services/fetchRooms';

export const fetchReservationsAsync = createAsyncAction(
  'studio/details/FETCH_RESERVATIONS_REQUEST',
  'studio/details/FETCH_RESERVATIONS_SUCCESS',
  'studio/details/FETCH_RESERVATIONS_FAIL'
)<FetchReservationsInput, Await<ReturnType<typeof fetchReservations>>, any>();

export const fetchRoomsAsync = createAsyncAction(
  'studio/details/FETCH_ROOMS_REQUEST',
  'studio/details/FETCH_ROOMS_SUCCESS',
  'studio/details/FETCH_ROOMS_FAIL'
)<FetchRoomsInput, Await<ReturnType<typeof fetchRooms>>, any>();
