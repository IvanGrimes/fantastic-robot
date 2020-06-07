import React from 'react';
import { ServiceProps } from '../internal';
import {
  InitComponent,
  LoadingComponent,
  FailComponent,
  SuccessComponent,
} from './types';

export const renderService = <
  S extends ServiceProps<any, any, any>,
  P extends {}
>(
  service: S,
  props: P,
  {
    Init,
    Loading,
    Fail,
    Success,
  }: {
    Init?: InitComponent<S, P>;
    Loading: LoadingComponent<S, P>;
    Fail: FailComponent<S, P>;
    Success: SuccessComponent<S, P>;
  }
) => {
  if (service.isInit(service)) {
    if (Init) {
      return <Init service={service} {...props} />;
    }
  }
  if (service.isLoading(service)) {
    return <Loading service={service} {...props} />;
  }
  if (service.isFail(service)) {
    return <Fail service={service} {...props} />;
  }
  if (service.isSuccess(service)) {
    return <Success service={service} {...props} />;
  }

  return null;
};
