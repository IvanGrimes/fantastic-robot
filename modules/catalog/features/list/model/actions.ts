import { createAsyncAction } from 'typesafe-actions';
import { ServiceError } from '@shared';
import {
  StudioListParameters,
  StudioListService,
  RoomListParameters,
  RoomListService,
} from './services';

export const fetchStudioListAsync = createAsyncAction(
  'CATALOG/LIST/FETCH_STUDIO_LIST_REQUEST',
  'CATALOG/LIST/FETCH_STUDIO_LIST_SUCCESS',
  'CATALOG/LIST/FETCH_STUDIO_LIST_FAIL'
)<StudioListParameters, StudioListService, ServiceError>();

export const fetchRoomListAsync = createAsyncAction(
  'CATALOG/LIST/FETCH_ROOM_LIST_REQUEST',
  'CATALOG/LIST/FETCH_ROOM_LIST_SUCCESS',
  'CATALOG/LIST/FETCH_ROOM_LIST_FAIL'
)<RoomListParameters, RoomListService, ServiceError>();
