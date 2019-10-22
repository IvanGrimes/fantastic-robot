import { createAsyncAction } from 'typesafe-actions';
import {
  fetchReservations,
  FetchReservationsInput,
} from './services/fetchReservations';
import { Await } from '../../../utils/Await';
import { fetchRooms, FetchRoomsInput } from './services/fetchRooms';

export const fetchReservationsAsync = createAsyncAction(
  '@@studioDetails/FETCH_RESERVATIONS_REQUEST',
  '@@studioDetails/FETCH_RESERVATIONS_SUCCESS',
  '@@studioDetails/FETCH_RESERVATIONS_FAIL'
)<FetchReservationsInput, Await<ReturnType<typeof fetchReservations>>, any>();

export const fetchRoomsAsync = createAsyncAction(
  '@@studioDetails/FETCH_ROOMS_REQUEST',
  '@@studioDetails/FETCH_ROOMS_SUCCESS',
  '@@studioDetails/FETCH_ROOMS_FAIL'
)<FetchRoomsInput, Await<ReturnType<typeof fetchRooms>>, any>();
