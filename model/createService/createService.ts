import { useMemo } from 'react';
import { createEffect } from 'effector';
import { createStore, useStore } from '../internal';
import {
  ServiceProps,
  State,
  isInit,
  isSuccess,
  isLoading,
  isFail,
  ServiceError,
} from './internal';

export const createService = <
  S extends () => any,
  D = Await<ReturnType<S>>,
  P = Parameters<S>
>(
  service: S
): {
  useService: () => ServiceProps<P, D, ServiceError>;
} => {
  const { name } = service;
  const store = createStore<{
    state: State;
    error: ServiceError | null;
    data: D | null;
  }>(`${name}_service`, {
    state: 'init',
    error: null,
    data: null,
  });
  const effect = createEffect<P, D>({ handler: service });

  store
    .on(effect, () => ({
      state: 'loading',
      data: null,
      error: null,
    }))
    .on(effect.doneData, (prevState, response) => ({
      ...prevState,
      state: 'success',
      data: response,
    }))
    .on(effect.fail, (prevState, { error: { message } }) => ({
      ...prevState,
      state: 'fail',
      error: new ServiceError(message),
    }))
    .on(effect.failData, (prevState, { message }) => ({
      ...prevState,
      state: 'fail',
      error: new ServiceError(message),
    }));

  return {
    // @ts-ignore
    useService: () => {
      const { state, data, error } = useStore(store);

      return useMemo(
        () => ({
          isInit,
          isLoading,
          isFail,
          isSuccess,
          state,
          data,
          error,
          effect,
        }),
        [data, error, state]
      );
    },
  };
};
