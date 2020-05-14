import React from 'react';
import { ServiceProps } from '../internal';
import {
  InitComponent,
  LoadingComponent,
  FailComponent,
  SuccessComponent,
} from './types';

export const renderService = <S extends ServiceProps<any, any, any>>(
  service: S,
  {
    Init,
    Loading,
    Fail,
    Success,
  }: {
    Init?: InitComponent<S>;
    Loading: LoadingComponent<S>;
    Fail: FailComponent<S>;
    Success: SuccessComponent<S>;
  }
) => {
  if (service.isInit(service)) {
    if (Init) {
      return <Init service={service} />;
    }
    return <Loading service={service} />;
  }
  if (service.isLoading(service)) {
    return <Loading service={service} />;
  }
  if (service.isFail(service)) {
    return <Fail service={service} />;
  }
  if (service.isSuccess(service)) {
    return <Success service={service} />;
  }

  return null;
};
