import { createAsyncAction } from 'typesafe-actions';
import { SignUpInput } from './services';

export const signUpAsync = createAsyncAction(
  'auth/SIGN_UP_REQUEST',
  'auth/SIGN_UP_SUCCESS',
  'auth/SIGN_UP_FAIL'
)<SignUpInput, undefined, any>();
