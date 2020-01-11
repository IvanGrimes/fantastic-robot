import { createAsyncAction } from 'typesafe-actions';

export const vkAsync = createAsyncAction(
  'auth/social/VK_REQUEST',
  'auth/social/VK_SUCCESS',
  'auth/social/VK_FAIL'
)<undefined, undefined, any>();
