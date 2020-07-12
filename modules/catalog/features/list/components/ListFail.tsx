import React, { FunctionComponent } from 'react';
import { RequestError } from '@shared';

export const ListFail: FunctionComponent<{ error: RequestError }> = ({
  error,
}) => <>{error.message}</>;
