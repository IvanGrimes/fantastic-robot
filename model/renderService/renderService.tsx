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
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <Init service={service} {...props} />;
    }
  }
  if (service.isLoading(service)) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Loading service={service} {...props} />;
  }
  if (service.isFail(service)) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Fail service={service} {...props} />;
  }
  if (service.isSuccess(service)) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Success service={service} {...props} />;
  }

  return null;
};
