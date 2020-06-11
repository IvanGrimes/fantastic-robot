import { createAsyncAction } from 'typesafe-actions';
import { ServiceError } from '@shared';
import { StudioListService } from './services';

export const fetchStudioListAsync = createAsyncAction(
  'CATALOG/LIST/FETCH_STUDIO_LIST_REQUEST',
  'CATALOG/LIST/FETCH_STUDIO_LIST_SUCCESS',
  'CATALOG/LIST/FETCH_STUDIO_LIST_FAIL'
)<undefined, StudioListService, ServiceError>();
