import {
  createRequestErrorSelector,
  createRequestLoadingSelector,
} from '@modules/services';
import { getType } from 'typesafe-actions';
import { signUpAsync } from './actions';

export const getSignUpLoading = createRequestLoadingSelector([
  getType(signUpAsync.request),
]);

export const getSignUpError = createRequestErrorSelector(
  getType(signUpAsync.request)
);
