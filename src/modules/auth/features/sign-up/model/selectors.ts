import * as services from '@modules/services';
import { getType } from 'typesafe-actions';
import { signUpAsync } from './actions';

export const getSignUpLoading = services.createRequestLoadingSelector([
  getType(signUpAsync.request),
]);

export const getSignUpError = services.createRequestErrorSelector(
  getType(signUpAsync.request)
);
