import { createAsyncAction } from 'typesafe-actions';
import { Await } from '@utils/Await';
import * as details from '../../details';
import {
  fetchReservations,
  FetchReservationsInput,
} from './services/fetchReservations';
import { fetchRooms, FetchRoomsInput } from './services/fetchRooms';
import { fetchRoom, FetchRoomInput } from './services/fetchRoom';

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

export const fetchInformationAsync = createAsyncAction(
  'studio/details/FETCH_INFORMATION_REQUEST',
  'studio/details/FETCH_INFORMATION_SUCCESS',
  'studio/details/FETCH_INFORMATION_FAIL'
)<
  details.services.FetchInformationInput,
  Await<ReturnType<typeof details.services.fetchInformation>>,
  any
>();

export const fetchRoomAsync = createAsyncAction(
  'studio/details/FETCH_ROOM_REQUEST',
  'studio/details/FETCH_ROOM_SUCCESS',
  'studio/details/FETCH_ROOM_FAIL'
)<FetchRoomInput, Await<ReturnType<typeof fetchRoom>>, any>();
