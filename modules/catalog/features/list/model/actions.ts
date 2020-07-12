import { createAsyncAction } from 'typesafe-actions';
import { ServiceError } from '@shared';
import {
  StudioListService,
  StudioNextListParameters,
  StudioNextListService,
} from './services';

export const fetchStudioListAsync = createAsyncAction(
  'CATALOG/LIST/FETCH_STUDIO_LIST_REQUEST',
  'CATALOG/LIST/FETCH_STUDIO_LIST_SUCCESS',
  'CATALOG/LIST/FETCH_STUDIO_LIST_FAIL'
)<undefined, StudioListService, ServiceError>();

export const fetchStudioNextListAsync = createAsyncAction(
  'CATALOG/LIST/FETCH_STUDIO_NEXT_LIST_REQUEST',
  'CATALOG/LIST/FETCH_STUDIO_NEXT_LIST_SUCCESS',
  'CATALOG/LIST/FETCH_STUDIO_NEXT_LIST_FAIL'
)<StudioNextListParameters, StudioNextListService, ServiceError>();
